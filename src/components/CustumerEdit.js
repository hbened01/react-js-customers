import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from './../hoc/setPropsAsInitial';
import CustomersActions from './../components/CustomersActions';

const validate = (values) => {
    const error = {};
    
    if (!values.name) {
        error.name = "El campo Nombre es requerido";
    }

    return error;
};

const isRequired = value => (
    !value && "Este campo es requerido"
);

const isNumber = (value) => (
    isNaN(Number(value)) && "El campo debe ser numérico"
);

const myField = ({input, meta, type, label, name}) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={!type ? "text" : type}/>
        {
            meta.touched && meta.error && <span>{meta.error}</span>
        }
    </div>
);

const CustomerEdit = ({ name, dni, age, handleSubmit, submiting })=> {
    return (
        <div>
            <h2>Edición del Cliente</h2>
            <form onSubmit={handleSubmit}>
                <Field 
                    name="name" 
                    component={myField} 
                    label="Nombre"
                >
                </Field>
                <Field 
                    name="dni" 
                    component={myField} 
                    label="DNI"
                    validate={[isRequired, isNumber]}
                >
                </Field>
                <Field
                    name="age" 
                    component={myField} 
                    type="number"
                    label="Edad"
                    validate={isNumber}
                >
                </Field>
                <CustomersActions>
                    <button type="submit" disabled={submiting}>ACEPTAR</button>
                </CustomersActions>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
};

const CustomerEditForm = reduxForm({ form: 'CustomerEdit', validate })(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);