import {call, put, takeLatest, takeEvery, delay} from 'redux-saga/effects';
import * as types from './../constants/index';
import {fetchUserData, registerUser} from './../apis/users';
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


function* usersSaga(){
    yield takeEvery(types.REGISTER, register);
}

export default usersSaga;