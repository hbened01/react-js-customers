import { DELETE_CUSTOMER } from './../constants';
import { createAction } from 'redux-actions';
import { apiDelete } from './../api/index';
import { urlCustomers } from './../api/urls'

export const deleteCustomer = createAction( DELETE_CUSTOMER, 
    (id) => apiDelete(urlCustomers, id)());