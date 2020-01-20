import React, { Component, PropTypes } from 'react';
import AppFrame from './../components/AppFrame';
import { connect } from 'react-redux';
import { getCustomerByDni } from './../selectors/customers';
import { Route } from 'react-router-dom';
import CustomerEdit from './../components/CustumerEdit';
import CustomerData from './../components/CustomerData';


class CustomerContainer extends Component {

    handleSubmit = (values) => {
        console.log(JSON.stringify(values));
    }

    renderBody = () => (
        <Route path='/customers/:dni/edit' children={
            ( {match} ) => { 
                const CustomerControl = match ? CustomerEdit : CustomerData;
                return (<p> <CustomerControl {...this.props.customer} onSubmit = {this.handleSubmit} /> </p>); 
                // return (<p> <CustomerControl initialValues={this.props.customer} /> </p>); // OTRA FORMA
            }
        } />
    );

    // <p>Datos del Cliente: "{this.props.customer.name}"</p>

    render() {
        return (
            <div>
                <AppFrame 
                    header={`Cliente ${this.props.dni}`}
                    body={this.renderBody()} >
                </AppFrame>
            </div>    
        );
    }
}

CustomerContainer.propTypes = {
    //dni: PropTypes.string.isRequired,
    // customer: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
    // customer: state.customers.find( c => c.dni === props.dni )
})

export default connect(mapStateToProps, null)(CustomerContainer);