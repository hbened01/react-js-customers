import React, { Component, PropTypes } from 'react';
import AppFrame from './../components/AppFrame';
import { connect } from 'react-redux';
import { getCustomerByDni } from './../selectors/customers';
import { Route, withRouter} from 'react-router-dom';
import CustomerEdit from '../components/CustomerEdit';
import CustomerData from './../components/CustomerData';
import { fetchCustomers } from './../actions/fetchCustomers';
import { updateCustomer } from './../actions/updateCustomer';
import { deleteCustomer } from './../actions/deleteCustomer';
import SubmissionError from 'redux-form/lib/SubmissionError';


class CustomerContainer extends Component {

    componentDidMount() {
        if (!this.props.customer || this.props.customer.lenght === 0) {
            this.props.fetchCustomers();
        };
    };
    
    handleSubmit = (values) => {
        // console.log(JSON.stringify(values));
        const { id } = values;
        return this.props.updateCustomer(id, values).then(r => {
            if (r.error) {
                throw new SubmissionError(r.payload);
            };
        });
    };

    handleOnBack = () => {
        this.props.history.goBack();
    };

    handleSubmitSuccess = () => {
        this.props.history.goBack();
    };    

    handleOnDelete = (id) => {
        console.log(`on delete`);
        this.props.deleteCustomer(id).then(v => {
            this.props.history.goBack();
        });
    };

    renderCustomerControl = (isEdit, isDelete) => {
        if (this.props.customer) {
            const CustomerControl = isEdit ? CustomerEdit : CustomerData;
            return (<p> <CustomerControl {
                                            ...this.props.customer} 
                                            onSubmit = {this.handleSubmit} 
                                            onSubmitSuccess = {this.handleSubmitSuccess}
                                            onBack = {this.handleOnBack}
                                            isDeleteAllow = {!!isDelete}
                                            onDelete={this.handleOnDelete}
                        /> </p>); 
        }
        return null;
        // return (<p> <CustomerControl initialValues={this.props.customer} /> </p>); // OTRA FORMA
    };

    renderBody = () => (
        <Route path='/customers/:dni/edit' children={
            ( {match: isEdit} ) => (
                <Route path='/customers/:dni/del' children={
                    ( {match: isDelete} ) => ( this.renderCustomerControl(isEdit, isDelete))
                } />
            )
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
    // dni: PropTypes.string.isRequired,
    // customer: PropTypes.object,
    // fetchCustomers: PropTypes.func.isRequired,
    // updateCustomer:PropTypes.func.isRequired,
    // deleteCustomer:PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
    // customer: state.customers.find( c => c.dni === props.dni )
})

export default withRouter(connect(mapStateToProps, {
    fetchCustomers,
    updateCustomer,
    deleteCustomer,
})(CustomerContainer));