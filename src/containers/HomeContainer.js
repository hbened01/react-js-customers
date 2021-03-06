import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AppFrame from './../components/AppFrame';
import CustomersActions from './../components/CustomersActions';

class HomeContainer extends Component {
    
    handleOnClick = () => {
        console.log('test click 1')
        this.props.history.push('/customers');
    }

    render() {
        return (
            <div>
                <AppFrame
                    header={'Home'}
                    body={
                        <div>
                            Esta es la pantalla inicial:
                            <CustomersActions>
                                {/* <Link to="/customers">Listado de Clientes</Link> */}
                                <button onClick={this.handleOnClick}>Listado de Clientes</button>
                            </CustomersActions>
                        </div>
                    }
                ></AppFrame>
            </div>
        );
    }
}

HomeContainer.propTypes = {

};

export default withRouter(HomeContainer);