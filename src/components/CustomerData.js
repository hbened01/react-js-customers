import React from 'react'
import PropTypes from 'prop-types'
import CustomersActions from './CustomersActions';

function CustomerData({ id, name, dni, age, onBack, isDeleteAllow, onDelete }) {
    return (
        <div>
            <div className="customer-data">
                <h2>Datos del cliente</h2>
                <div><strong>Nombre:</strong><i>{name}</i></div>
                <div><strong>DNI:</strong><i>{dni}</i></div>
                <div><strong>Edad:</strong><i>{age}</i></div>
            </div>
            <CustomersActions>
                <button type="submit" onClick={onBack}>VOLVER</button>
                {isDeleteAllow && <button type="submit" onClick={() => onDelete(id)}>ELIMINAR</button>}
            </CustomersActions>
        </div>
    )
}

CustomerData.propTypes = {
    id:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    dni:PropTypes.string.isRequired,
    age:PropTypes.number,
    onBack:PropTypes.func.isRequired,
    onDelete:PropTypes.func,
    isDeleteAllow:PropTypes.bool,
}

export default CustomerData;
