import axios from '../../axios-contacts';

export const CONTACT_REQUEST = 'CONTACT_REQUEST';
export const CONTACT_SUCCESS = 'CONTACT_SUCCESS';
export const CONTACT_ERROR = 'CONTACT_ERROR';

export const requestContact = () => ({type: CONTACT_REQUEST});
export const successContact = (contacts) => ({type: CONTACT_SUCCESS, contacts});
export const errorContact = () => ({type: CONTACT_ERROR});

export const getContacts = () => {
    return dispatch => {
        dispatch(requestContact());
        axios.get('contacts.json').then(response => {
            dispatch(successContact(response.data))
        }, error => dispatch(errorContact()))
    }
};