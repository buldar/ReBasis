type ActionType = {
    type: string
}

export type StateType = {
    collapsed:boolean
}

export const reducer = (state: StateType, action: ActionType):StateType => {
    switch (action.type) {
        case 'COLLAPSE':
            return {...state, collapsed:!state.collapsed}
        default:
            throw new Error('Wrong action type')
    }
}