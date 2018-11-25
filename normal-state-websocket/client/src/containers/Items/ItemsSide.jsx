import React, { Component } from 'react';
import './ItemsSide.less';
import { SidePhoto } from '../../components/Items';
import { getAllPhotos } from '../../api/routes/photos';

class ItemsSide extends Component {
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
            photosContent = photos.map((p, i) => {
                return (
                    <SidePhoto key={p.id} photo={p} />
                );
            });
        }

        return (
            <div className="wrapperSide">
                <div className="GridSide GridSide--gutters GridSide--cols-4 u-textCenter">
                    {photosContent}
                </div>
            </div>
        );
    }
}

export default ItemsSide;