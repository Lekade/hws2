const initState = {
    themeId: 1,
}
type stateType = typeof initState
type changeThemeIdAT = ReturnType<typeof changeThemeId>

export const themeReducer = (state: stateType = initState, action: actionType): stateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }) as const // fix any

type actionType = changeThemeIdAT
