import React, { Component } from 'react';
import './TableFlexBoxTopTitles.less';
import { Photo } from '../../components/Table';
import { getAllPhotos } from '../../api/routes/photos';

class TableFlexBoxTopTitles extends Component {
    state = {
        photos: []
    };

    constructor(props) {
        super(props);

        //this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {

        const that = this;
        getAllPhotos(10)
            .then((response) => {
                that.setState({ photos: response });
            });
    }

    /*     handleCheckboxChange = (e) => {
            this.setState({ rememberMe: e.target.checked });
        } */

    render() {

        const { photos } = this.state;
        let photosContent = null;
        if (photos.length > 0) {
            let index = 0;
            photosContent = photos.map((p, i) => {
                index = i % 5 === 0 ? 0 : ++index;
                return (
                    <Photo key={p.id} index={index} photo={p} />
                );
            });
        }

        return (
            <div className="table-top-titles">
                <div className="table-top-box">
                    <h3>Photos</h3>
                    <div className="table table--3cols">
                        <div className="order0 table-cell table-cell--head">
                            <h3>Id</h3>
                        </div>
                        <div className="order0 table-cell table-cell--head">
                            <h3>Title</h3>
                        </div>
                        <div className="order0 table-cell table-cell--head">
                            <h3>Album Id</h3>
                        </div>
                        <div className="order0 table-cell table-cell-large table-cell--head">
                            <h3>Url</h3>
                        </div>
                        <div className="order0 table-cell table-cell--head">
                            <h3>Thumb</h3>
                        </div>
                        {photosContent}
                    </div>
                </div>
            </div>
        );
    }
}

export default TableFlexBoxTopTitles;