const initState = {
    isLoading: false,
}


export const loadingReducer = (state:InitialStateType = initState, action: ActionType): InitialStateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING':
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}


export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})

type InitialStateType = typeof initState

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}
type ActionType = LoadingActionType