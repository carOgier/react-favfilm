import React from 'react';
import './Movie.css';
import Gallery from "./Gallery";
import Favorites from "./Favorites";

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "isShortnopsis": true
        }
    }

    render() {
        const {title, year, synopsis, director, posters} = this.props;
        const {isShortnopsis} = this.state;
        return (
            <div className="movie">
                <h2>{title}</h2>
                <Gallery urls={posters} title={title}/>
                <Favorites/>
                <p> Par {director} - {year}</p>

                <p className="synopsis">{
                    isShortnopsis ? synopsis.slice(0, 20) : synopsis
                }</p>
                 {
                    isShortnopsis
                        && <button onClick={this.moreInfo}>Plus d'info</button>
                }
            </div>
        );
    }

    
    moreInfo = () => {
        this.setState({
            "isShortnopsis": !this.state.isShortnopsis
        });
    };

    // componentDidMount() {
    //     console.log(`Montage terminé pour ${this.props.title}`);
    // }
}

export default Movie;

