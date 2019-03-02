import {CONTACT_SUCCESS} from "../actions/actionTypes";

const initialState = {
    contacts: {}
};

const reducer = (state = initialState , action) => {
    switch (action.type) {
        case CONTACT_SUCCESS:
            return {
                ...state,
                contacts: action.contacts
            };
        default:
            return state;
    }
};

export default reducer;