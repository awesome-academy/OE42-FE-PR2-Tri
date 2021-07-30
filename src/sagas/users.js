import {call, put, takeLatest, takeEvery, delay} from 'redux-saga/effects';
import * as types from './../constants/index';
import {fetchUserData, registerUser, updateUser} from './../apis/users';
import {fetchRolesData} from './../apis/roles';
import * as actions from './../actions';
import * as toastMsg from './../utils/toastMsg';

function* register({payload}){
    const {user, t} = payload;
    yield put(actions.actShowLoading());
    try{
        const usersData = yield call(fetchUserData);
        const {data, status} = usersData;
        if(status === types.STATUS_SUCCESS){
            const checkUser = data.some(u => u.email === user.email);
            if(checkUser){
                toastMsg.fail(`${t('the email was registered')} 😅😅😅`);
            }else{
                const res = yield call(registerUser, user);
                if(res){
                    toastMsg.success(`${t('successful account registration')} 😍😍😍`);
                }else{
                    toastMsg.fail(`${t('failed account registration')} 😭😭😭`);
                }
            }
        }
    }
    catch(error){
        toastMsg.fail(`${error.message} 😈😈😈`);
    }
    yield delay(1000);
    yield put(actions.actHideLoading());
}

function* login({payload}){
    const {user, t} = payload;
    yield put(actions.actShowLoading());
    try{
        const usersData = yield call(fetchUserData);
        const rolesData = yield call(fetchRolesData);
        const {data, status} = usersData;
        if(status === types.STATUS_SUCCESS){
            const checkUser = data.find(u => u.email === user.email && u.password === user.password);
            if(checkUser){
                const role = rolesData.data.find(role => role.id === checkUser.roleId);
                let roleName = '';
                if(role){
                    roleName = role.roleName;
                }else{
                    roleName = t('customer');
                }
                yield put(actions.actLoginUserSuccess({...checkUser, roleName, isLogin: true}));
                toastMsg.success(`${t('logged in successfully')} 😍😍😍`);
            }else{
                toastMsg.fail(`${t('wrong email or password')} 😅😅😅`);
            }
        }
    }
    catch(error){
        toastMsg.fail(`${error.message} 😈😈😈`);
    }
    yield delay(1000);
    yield put(actions.actHideLoading());
}

function* ChangeAvatarByEmail({payload}){
    const {email, image, t} = payload;
    try{
        const usersData = yield call(fetchUserData);
        const {data, status} = usersData;
        if(status === types.STATUS_SUCCESS){
            const user = data.find(u => u.email === email);
            user.avatar = image;
            const res = yield call(updateUser, user.id, user);
            if(res){
                toastMsg.success(`${t('profile photo has been updated')} 😍😍😍`);
                yield put(actions.actChangeAvatarByEmailSuccess(image));
            }else{
                toastMsg.fail(`${t('there was an error while updating the profile picture')} 😅😅😅`);
            }
        }
    } 
    catch(error){
        toastMsg.fail(`${error.message} 😈😈😈`);
    }
}

function* ChangeInfoByEmail({payload}){
    const {email, info, t} = payload;
    try{
        const usersData = yield call(fetchUserData);
        const {data, status} = usersData;
        if(status === types.STATUS_SUCCESS){
            const user = data.find(u => u.email === email);
            user.firstName = info.firstName;
            user.lastName = info.lastName;
            user.address = info.address;
            user.phoneNumber = info.phoneNumber;
            user.gender = parseInt(info.genderId) === 1 ? 'Nam' : 'Nữ';
            const res = yield call(updateUser, user.id, user);
            if(res){
                toastMsg.success(`${t('your information has been update')} 😍😍😍`);
                yield put(actions.actChangeInfoByEmailSuccess(user));
            }else{
                toastMsg.fail(`${t('an error occurred while updating information')} 😅😅😅`);
            }
        }
    } 
    catch(error){
        toastMsg.fail(`${error.message} 😈😈😈`);
    }
}

function* ChangePasswordByEmail({payload}){
    const {email, password, t} = payload;
    try{
        const usersData = yield call(fetchUserData);
        const {data, status} = usersData;
        if(status === types.STATUS_SUCCESS){
            const user = data.find(u => u.email === email);
            user.password = password;
            const res = yield call(updateUser, user.id, user);
            if(res){
                toastMsg.success(`${t('your password has been changed')} 😍😍😍`);
                yield put(actions.actChangePasswordByEmailSuccess(password));
            }else{
                toastMsg.fail(`${t('has a error when change the password')} 😅😅😅`);
            }
        }
    } 
    catch(error){
        toastMsg.fail(`${error.message} 😈😈😈`);
    }
}

function* usersSaga(){
    yield takeEvery(types.REGISTER, register);
    yield takeLatest(types.LOGIN, login);
    yield takeLatest(types.CHANGE_AVATAR_BY_EMAIL, ChangeAvatarByEmail);
    yield takeLatest(types.CHANGE_INFO_BY_EMAIL, ChangeInfoByEmail);
    yield takeLatest(types.CHANGE_PASSWORD_BY_EMAIL, ChangePasswordByEmail);
}

export default usersSaga;