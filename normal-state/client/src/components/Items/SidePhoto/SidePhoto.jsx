import React from 'react';
import './SidePhoto.less';
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

const SidePhoto = (props) => {

    const { photo } = props;

    return (
        <div className="Demo main">
            <div className="GridSide GridSide--gutters GridSide--1of3 GridSide--nested row">
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

SidePhoto.propTypes = propTypes;
SidePhoto.defaultProps = defaultProps;

export default SidePhoto;