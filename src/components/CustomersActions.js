import React from 'react';
import PropTypes from 'prop-types';

const componentName = ({children}) => {
    return (
        <div>
            <div className="customer-actions">
                <div>{children}</div>
            </div>
        </div>
    );
};

componentName.propTypes = {
    children:PropTypes.node.isRequired,
};

export default componentName;