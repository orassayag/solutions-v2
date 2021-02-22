import React from 'react';
import './RowPhoto.less';
import PropTypes from 'prop-types';

const propTypes = {
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

const RowPhoto = (props) => {

    const { photo } = props;

    return (
        <div className="Demo main">
            <div className="GridRows GridRows--gutters GridRows--1of3 GridRows--nested row">
                <div className="Demo content">
                    <div className="detail">
                        <img src={photo.thumbnailUrl} alt={photo.title} title={photo.title} />
                    </div>
                    <div className="Demo content column">
                        <div className="detail">
                            Id: {photo.id}
                        </div>
                        <div className="detail">
                            Title: {photo.title}
                        </div>
                    </div>
                </div>
                <div className="Demo content">
                    <div className="detail">
                        Url: <a href={photo.url} rel="noopener noreferrer" target="_blank">{photo.url}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

RowPhoto.propTypes = propTypes;
RowPhoto.defaultProps = defaultProps;

export default RowPhoto;