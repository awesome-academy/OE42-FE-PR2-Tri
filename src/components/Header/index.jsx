import Container from '@material-ui/core/Container';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import LanguageIcon from '@material-ui/icons/Language';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { language, ADMIN_URL, LOGIN_URL, REGISTER_URL } from './../../constants/config';
import './Header.scss';
import Navigate from './Navigate';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AvatarDefault from './../../assets/images/avatarDefault.png';
import { actLogoutUser } from './../../actions';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function Header(props) {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const isLogin = useSelector(state => state.login.isLogin);
    const firstName = useSelector(state => state.login.firstName);
    const lastName = useSelector(state => state.login.lastName);
    const avatar = useSelector(state => state.login.avatar);
    const roleName = useSelector(state => state.login.roleName);
    const email = useSelector(state => state.login.email);

    const handleLanguage = (event, lang) => {
        event.stopPropagation();
        i18n.changeLanguage(lang);
        setOpen((open) => !open);
    }

    const handleDropdown = () => {
        setOpen((open) => !open);
    }

    const handleLogout = () => {
        dispatch(actLogoutUser());
    }

    return (
        <header className="header">
            <div className="header__wrapper-top">
                <Container>
                    <div className="header__top">
                        <p className="header__top-left">
                            <AccessTimeIcon className="icon" />
                            {t("open time")}: 8:00 - 20:00
                            <span>{t("monday")} - {t("sunday")}</span>
                        </p>
                        <div className="header__top-right">
                            {
                                isLogin ?
                                    <div className="user">
                                        <img className="avatar" src={avatar ? avatar : AvatarDefault} alt="link error" />
                                        <span className="user__name">{lastName} {firstName}</span>
                                        <ul className="user__sub-menu">
                                            <li>
                                                <ArrowRightAltIcon />
                                                <Link to={`/${email}/profile`}>{t('profile')}</Link>
                                            </li>
                                            <li>
                                                <ArrowRightAltIcon />
                                                <Link to={`/${email}/purchase-history`}>{t('purchase history')}</Link>
                                            </li>
                                            {
                                                roleName === 'admin' ?
                                                    <li>
                                                        <ArrowRightAltIcon />
                                                        <Link to={ADMIN_URL}>{t('admin page')}</Link>
                                                    </li> :
                                                    null
                                            }
                                            <li>
                                                <ArrowRightAltIcon />
                                                <span onClick={handleLogout}>{t('logout')}</span>
                                            </li>
                                        </ul>
                                    </div> :
                                    <>
                                        <Link to={LOGIN_URL}>
                                            <PersonIcon className="icon" />
                                            <span>{t("login")}</span>
                                        </Link>
                                        <Link to={REGISTER_URL}>
                                            <PersonAddIcon className="icon" />
                                            <span>{t("register")}</span>
                                        </Link>
                                    </>
                            }
                            <div className="header__top-right-language">
                                <div onClick={handleDropdown} className="language-top">
                                    <LanguageIcon className="icon" />
                                    {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                                </div>
                                <ul className="language-change"
                                    style={open ? { display: "block" } : { display: "none" }}
                                >
                                    {language.map((lang, index) => {
                                        return (
                                            <li key={index} onClick={(event) => handleLanguage(event, lang.value)}>
                                                <img src={lang.icon} alt="language icon" />
                                                <span>
                                                    {t(`language.${lang.label}`)}
                                                </span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Navigate />
        </header>
    );
}

export default Header;