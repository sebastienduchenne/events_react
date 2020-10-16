function reducer1 (state, action) {
    let nextState                           // nouveau state
    switch(action.type) {
        case 'ACTION_1':
            // ...
            nextState = {
                ...state,
                value: action.value
            }
            return nextState
        default: 
            return state
    }
}