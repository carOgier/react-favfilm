import React, {Component} from 'react';
import "./Gallery.css";

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "imageIndex": 0
        };
    }

    nextImage = () => {
        const {urls} = this.props;
        if (this.state.imageIndex === urls.length - 1){
            this.setState({
                "imageIndex": 0
            });
        } else {
            this.setState({
            "imageIndex": this.state.imageIndex + 1
        });
        }
    };

    previousImage = () => {
        const {urls} = this.props;
        if (this.state.imageIndex === 0){
            this.setState({
                "imageIndex": urls.length - 1
            });
        } else {
            this.setState({
            "imageIndex": this.state.imageIndex - 1
        });
        }
    };

    render() {
        const {urls, title} = this.props;
        const {imageIndex} = this.state;
        return (
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner ">
                    <div className="carousel-item-active gallery">
                    <img src={urls[imageIndex]} alt={"Photo de " + title} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" onClick={this.previousImage} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample"  onClick={this.nextImage}data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        );
    }
}

export default Gallery;
