import React from 'react';
import PropTypes from 'prop-types';
//import './style.scss';
import albumModule from './album.module.scss';

Album.propTypes = {
    album: PropTypes.object.isRequired,
};

function Album({ album }) {
    return (
        <div className={albumModule.album}>
            <div className={albumModule.album__thumbnail}>
                <img src={album.thumbnailURL} alt={album.name} />
            </div>

            <p className={albumModule.album__name}>{album.name}</p>
        </div>
    );
}

export default Album;  