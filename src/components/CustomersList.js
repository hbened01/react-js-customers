import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';
import { CUSTOMER_LIST } from '../constants/permissions';
import { accessControl } from './../hoc/accessComtrol';

const CustomersList = ({customers, urlPath}) => {
    return (
        <div className="customers-list">
            {
                customers.map( v =>
                    <CustomerListItem
                        key={v.dni}
                        dni={v.dni}
                        name={v.name}
                        editAction={`Editar`}
                        delAction={`Eliminar`}
                        urlPath={urlPath}
                    >
                    </CustomerListItem>)
            }
        </div>
    )
}

CustomersList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default accessControl([CUSTOMER_LIST])(CustomersList);