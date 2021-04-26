import {createSlice} from "@reduxjs/toolkit"

export type menuItemT = {
    name: string,
    path: string,
}

export interface appStateI {
    isNavActive: boolean,
    menuItems: menuItemT[],
}

const appSlice = createSlice({
    name: 'App',
    initialState: {
        isNavActive: false,
        menuItems: [
            { name: "Главная", path: "/" },
            { name: "Редактор кода", path: "/editor" },
            { name: "Мои курсы", path: "/path" },
            { name: "Настройки", path: "/settings" },
            { name: "Профиль", path: "/profile" },
          ]
    } as appStateI,
    reducers: {
        toggleNav: (state, {payload}) => {state.isNavActive = payload}
    },
})

export const {toggleNav} = appSlice.actions;

export default appSlice.reducer