import { Container } from "@material-ui/core";
import { AddAPhoto } from '@material-ui/icons';
import MD5 from "crypto-js/md5";
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from 'react-router-dom';
import ContentHeader from "../../components/ContentHeader";
import ScrollTop from "../../components/ScrollTop";
import * as actions from './../../actions';
import AvatarDefault from './../../assets/images/avatarDefault.png';
import { profileURL } from './../../constants/config';
import { storage } from "./../../firebase";
import * as toastMsg from './../../utils/toastMsg';
import FormInfo from "./FormInfo";
import FormPassword from './FormPassword';
import './Profile.scss';

function Profile() {
    const { t } = useTranslation();
    const { email } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const isLogin = useSelector(state => state.login.isLogin);
    const emailLogin = useSelector(state => state.login.email);
    const password = useSelector(state => state.login.password);
    const firstName = useSelector(state => state.login.firstName);
    const lastName = useSelector(state => state.login.lastName);
    const address = useSelector(state => state.login.address);
    const phoneNumber = useSelector(state => state.login.phoneNumber);
    const roleName = useSelector(state => state.login.roleName);
    const avatar = useSelector(state => state.login.avatar);
    const gender = useSelector(state => state.login.gender);
    const genderId = gender.toLowerCase() === 'nam' ? 1 : 2;

    const [openFormInfo, setOpenFormInfo] = useState(false);
    const [openFormPassword, setOpenFormPassword] = useState(false);

    useEffect(() => {
        document.title = t('profile');

        if (isLogin) {
            if (email !== emailLogin) {
                toastMsg.fail(`${t("you can't see other people's info")} 🤔🤔🤔`);
                history.goBack();
            }
        } else {
            toastMsg.fail(`${t('you must login first')} 🤔🤔🤔`);
            history.goBack();
        }
    }, []);

    const handleChangeAvatar = (event) => {
        const image = event.target.files[0];
        if (image) {
            image.id = Math.random();
            const uploadTask = storage.ref(`avatars/${image.id + image.name}`).put(image);
            uploadTask.on(
                "state_changed",
                snapshot => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                },
                error => {
                    console.log(error);
                },
                () => {
                    storage
                        .ref("avatars")
                        .child(`${image.id + image.name}`)
                        .getDownloadURL()
                        .then(url => {
                            dispatch(actions.actChangeAvatarByEmail(email, url, t));
                            if (avatar !== '') {
                                let avatarRef = storage.refFromURL(avatar);
                                avatarRef.delete().catch((error) => {
                                    console.log(error.message);
                                });
                            }
                        });
                }
            );
        }
    }

    const initialFormInfoValues = {
        firstName: firstName,
        lastName: lastName,
        genderId: genderId,
        address: address,
        phoneNumber: phoneNumber
    };

    const handleOpenFormInfo = () => {
        setOpenFormInfo(true);
    }

    const handleCloseFormInfo = () => {
        setOpenFormInfo(false);
    }

    const handleSubmitFormInfo = (values) => {
        if (values !== initialFormInfoValues) {
            dispatch(actions.actChangeInfoByEmail(email, values, t));
        }
        handleCloseFormInfo();
    }

    const initialFormPasswordValues = {
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    };

    const handleOpenFormPassword = () => {
        setOpenFormPassword(true);
    }

    const handleCloseFormPassword = () => {
        setOpenFormPassword(false);
    }

    const handleSubmitFormPassword = (values) => {
        const oldPassword = MD5(values.oldPassword.trim()).toString();
        const newPassword = MD5(values.newPassword.trim()).toString();
        if (oldPassword !== password) {
            toastMsg.fail(`${t('incorrect password')} 🤔🤔🤔`);
        } else {
            if (newPassword === password) {
                toastMsg.warning(`${t('the new password cannot be the same as the old password')} 🤗🤗🤗`);
            } else {
                dispatch(actions.actChangePasswordByEmail(email, newPassword, t));
                handleCloseFormPassword();
            }
        }
    }

    return (
        <main className="main">
            <Container>
                <ContentHeader label="profile" path={profileURL(email)} />
                <div className="profile">
                    <div className="profile__avatar">
                        <img src={avatar || AvatarDefault} />
                        <input type="file" id="avatar" onChange={handleChangeAvatar} />
                        <label htmlFor="avatar" title={t('change avatar')}><AddAPhoto /></label>
                    </div>
                    <div className="profile__info">
                        <div className="change">
                            <button type="button" onClick={handleOpenFormInfo} disabled={openFormInfo}>{t('update information')}</button>
                            <button type="button" onClick={handleOpenFormPassword} disabled={openFormPassword}>{t('change password')}</button>
                        </div>
                        {openFormInfo ?
                            <FormInfo
                                initialValues={initialFormInfoValues}
                                handleCloseFormInfo={handleCloseFormInfo}
                                handleSubmitFormInfo={handleSubmitFormInfo}
                            /> :
                            <ul>
                                <li>
                                    <span>{t('first name')}:</span>
                                    {firstName}
                                </li>
                                <li>
                                    <span>{t('last name')}:</span>
                                    {lastName}
                                </li>
                                <li>
                                    <span>{t('gender')}:</span>
                                    {gender}
                                </li>
                                <li>
                                    <span> {t('address')}:</span>
                                    {address}
                                </li>
                                <li>
                                    <span>{t('phone number')}:</span>
                                    {phoneNumber}
                                </li>
                                <li>
                                    <span> {t('role')}:</span>
                                    {t(`${roleName}`)}
                                </li>
                            </ul>
                        }
                        {openFormPassword && <FormPassword
                            initialValues={initialFormPasswordValues}
                            handleCloseFormPassword={handleCloseFormPassword}
                            handleSubmitFormPassword={handleSubmitFormPassword}
                        />
                        }
                    </div>
                </div>
            </Container>
            <ScrollTop />
        </main>
    );
}

export default Profile;