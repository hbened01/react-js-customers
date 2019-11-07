import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from './../components/AppFrame';
import CustomersList from './../components/CustomersList';
import CustomersActions from './../components/CustomersActions';
import { withRouter } from 'react-router-dom';

const customers = [
    {
        'dni': '2399009748',
        'name': 'Pepe Perez',
        'age': 34,
    },
    {
        'dni': '2390078000',
        'name': 'Marco Perez',
        'age': 33,
    },
    {
        'dni': '2399976908',
        'name': 'Jesus Colmenares',
        'age': 31,
    },
    {
        'dni': '2399008598',
        'name': 'Santos',
        'age': 26,
    },
];


class CustomersContainer extends Component {

    handleAddNew = () => {
        console.log('test click 2')
        this.props.history.push('/customers/new');
    }

    renderBody = (customers) => (
        <div>
            <CustomersList 
                customers={customers} 
                urlPath={'customer/'}>
            </CustomersList>
            <CustomersActions>
                <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustomersActions>
        </div>
    )

    render() {
        return (
            <div>
                <AppFrame
                    header={'Listado de clientes'}
                    body={this.renderBody(customers)}
                ></AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {

};

export default withRouter(CustomersContainer);