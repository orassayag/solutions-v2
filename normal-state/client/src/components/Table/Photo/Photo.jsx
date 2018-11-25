import React from 'react';
import './Photo.less';
import PropTypes from 'prop-types';
import { Auxiliary } from '../../../hoc';

const propTypes = {
    index: PropTypes.number.isRequired,
    photo: PropTypes.shape({
        albumId: PropTypes.number,
        id: PropTypes.number,
        title: PropTypes.string,
        url: PropTypes.string,
        thumbnailUrl: PropTypes.string
    })
};

const defaultProps = {
    photo: null
};

const Photo = (props) => {
    return (
        <Auxiliary>
            <div className={`order${props.index} table-cell`}>{props.photo.id}</div>
            <div className={`order${props.index} table-cell`}>{props.photo.title}</div>
            <div className={`order${props.index} table-cell`}>{props.photo.albumId}</div>
            <div className={`order${props.index} table-cell table-cell-large`}><img src={props.photo.url} alt={props.photo.title} title={props.photo.title} /></div>
            <div className={`order${props.index} table-cell`}><img src={props.photo.thumbnailUrl} alt={props.photo.title} title={props.photo.title} /></div>
        </Auxiliary>
    );
};

Photo.propTypes = propTypes;
Photo.defaultProps = defaultProps;

export default Photo;