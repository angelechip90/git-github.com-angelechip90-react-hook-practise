import React from 'react';
import PropTypes from 'prop-types';
import notfound from '../../img/notfound.jpg';

NotFound.propTypes = {

};

function NotFound(props) {
    return (
        <div>
            <img src={notfound} width="100%" />
        </div>
    );
}

export default NotFound;