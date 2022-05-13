import React from 'react';
import PropTypes from 'prop-types';
import MagicBox from './components/Magicbox';

MagicBoxFeature.propTypes = {

};

function MagicBoxFeature(props) {
    return (
        <div>
            <h2>Magic Box</h2>
            <MagicBox />
        </div>
    );
}

export default MagicBoxFeature;