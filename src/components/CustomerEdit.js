import React, {Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from './../hoc/setPropsAsInitial';
import { accessControl } from './../hoc/accessComtrol';
import CustomersActions from './../components/CustomersActions';
import { Prompt } from 'react-router-dom';
import {CUSTOMER_EDIT} from './../constants/permissions';

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

const toNumber = value => value && Number(value);

const toUpper = value => value && value.toUpperCase();

const toLower = value => value && value.toLowerCase();

// const onlyRange = (value, previusValue, values) => value && previusValue && ((value > 0 && value < 110) ? value : 10);



class CustomerEdit extends Component {

    componentDidMount() {

        if (this.cuadroFocus) {
            this.cuadroFocus.focus();
        }
        
    }

    renderField = ({input, meta, type, label, name, withFocus   }) => (
        <div>
            <label htmlFor={name}>{label}</label>
            <input 
                {...input} 
                type={!type ? "text" : type}
                ref={withFocus && (txt => this.cuadroFocus = txt)}
            />
            {
                meta.touched && meta.error && <span>{meta.error}</span>
            }
        </div>
    );

    render() {
        const { handleSubmit, submiting, onBack, pristine, submitSucceeded } = this.props;
        return (
            <div>
                <h2>Edición del Cliente</h2>
                {/* <input ref={txt => this.cuadroFocus = txt} type="text" /> */}
                <form onSubmit={handleSubmit}>
                    <Field 
                        withFocus
                        name="name" 
                        component={this.renderField} 
                        label="Nombre"
                        parse={toUpper}
                        format={toLower}
                    >
                    </Field>
                    <Field 
                        name="dni" 
                        component={this.renderField} 
                        label="DNI"
                        validate={[isRequired, isNumber]}
                    >
                    </Field>
                    <Field
                        name="age" 
                        component={this.renderField} 
                        type="number"
                        label="Edad"
                        validate={isNumber}
                        parse={toNumber}
                        // normalize={onlyRange}
                    >
                    </Field>
                    <CustomersActions>
                        <button type="submit" disabled={pristine || submiting}>ACEPTAR</button>
                        <button type="button" disabled={submiting} onClick={onBack}>CANCELAR</button>
                    </CustomersActions>
                    <Prompt
                        when={!pristine && !submitSucceeded}
                        message={'Se perderan los datos si continua'}
                    >
                    </Prompt>
                </form>
            </div>
        );
    }

};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
};

const CustomerEditForm = reduxForm({ form: 'CustomerEdit', validate })(CustomerEdit);

export default accessControl([CUSTOMER_EDIT])(setPropsAsInitial(CustomerEditForm));