import {createSlice} from "@reduxjs/toolkit";

interface IUserData {
    login: string,
    password: string,

}

interface IUserInitialState {
    loggedIn: boolean,
    userData: IUserData,
    emailComfirmed: boolean,
}

const userSlice = createSlice({
    name: 'user',
    initialState: {} as IUserInitialState,
    reducers: {},
})

