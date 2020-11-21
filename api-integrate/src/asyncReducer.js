export function asyncReducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null
            };
        case 'ERROR':
            return {
                loading: false,
                data: action.data,
                error: null
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}
