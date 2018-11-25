import React, { Component, Fragment } from 'react';
import './TableFlexBoxTopTitles.less';
import { Photo } from '../../components/Table';
import { getAllPhotos } from '../../api/routes/photos';
import socketIOClient from 'socket.io-client';
import settings from '../../settings/settings';
import { Loader } from '../../components/UI';

class TableFlexBoxTopTitles extends Component {
    state = {
        pageNumber: 1,
        preventLoadMore: false,
        displayLargeLoader: true,
        displaySmallLoader: false,
        hasMore: true,
        error: '',
        photos: []
    };

    count = 10;
    socket = socketIOClient(settings.api_base_url);

    constructor(props) {
        super(props);

        this.handleOnScroll = this.handleOnScroll.bind(this);
        this.lastElement = React.createRef();
    }

    handleOnScroll = (e) => {
        e.preventDefault();

        const { loadPhotos,
            state: {
                error,
                preventLoadMore,
                pageNumber,
                displayLargeLoader,
                displaySmallLoader,
                hasMore
            }
        } = this;

        if (error || displayLargeLoader || displaySmallLoader || !hasMore || preventLoadMore) {
            return;
        }

        const bottom = e.target.scrollingElement.scrollHeight - e.target.scrollingElement.scrollTop === e.target.scrollingElement.clientHeight;
        if (bottom) {
            setTimeout(() => {
                loadPhotos({
                    isFirstTime: false,
                    pageNumber: pageNumber,
                    count: this.count
                });
            }, 200);
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleOnScroll, true);

        this.loadPhotos({
            isFirstTime: true,
            pageNumber: this.state.pageNumber,
            count: this.count
        });

        this.socket.on('newPhotos', (newPhotos) => {
            this.addedPhotos(newPhotos, true);
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleOnScroll);
    }

    addedPhotos = (newPhotos, preventLoadMore) => {
        this.setState({
            preventLoadMore: preventLoadMore,
            photos: [
                ...this.state.photos,
                ...newPhotos
            ]
        });
        this.scrollToLastElement(preventLoadMore);
    };

    loadPhotos = (data) => {
        this.setState({ displaySmallLoader: data.isFirstTime ? false : true }, () => {
            getAllPhotos(data)
                .then((response) => {
                    console.log(response);
                    this.setState(prevState => ({
                        pageNumber: prevState.pageNumber + 1,
                        displayLargeLoader: false,
                        displaySmallLoader: false,
                        hasMore: response.length > 0,
                        photos: [
                            ...this.state.photos,
                            ...response
                        ]
                    }));
                })
                .catch((err) => {
                    this.setState({
                        error: err,
                        displaySmallLoader: false
                    });
                });
        });
    }

    scrollToLastElement = (preventLoadMore) => {
        const intersectionObserver = new IntersectionObserver((entries) => {
            let [entry] = entries;
            if (entry.isIntersecting) {
                setTimeout(() => {
                    this.setState({ preventLoadMore: !preventLoadMore });
                }, 100);
            }
        });

        // start observing
        intersectionObserver.observe(this.lastElement.current);

        // Scroll into an element.
        this.lastElement.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
    }

    render() {

        const { photos, displayLargeLoader, displaySmallLoader, error, hasMore } = this.state;
        let photosContent = null;
        if (photos.length > 0) {
            let index = 0;
            photosContent = photos.map((p, i) => {
                index = i % 5 === 0 ? 0 : ++index;
                return (
                    <Photo key={i} index={index} photo={p} ref={this.lastElement} />
                );
            });
        }

        return (
            <Fragment>
                {photos.length > 0 &&
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
                }
                {displayLargeLoader && <div><Loader /></div>}
                {displaySmallLoader &&
                    <div className="table-content"><Loader isSmall /></div>
                }
                {error &&
                    <div className="error">
                        {error}
                    </div>
                }
                {!hasMore &&
                    <div>You did it! You reached the end!</div>
                }
            </Fragment>
        );
    }
}

export default TableFlexBoxTopTitles;