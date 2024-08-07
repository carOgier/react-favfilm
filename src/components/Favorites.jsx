import React from 'react';
import './Favorite.css';

class Favorites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "isNotFavorite": true
        }
    }


    render() {
        const {isNotFavorite} = this.state;
        return (
            <div>
                <button
                    className={`btn ${isNotFavorite ? 'btn-outline-danger' : 'btn-danger'}`}
                    onClick={this.addFavorite}
                >
                    ♥
                </button>
            </div>
        );
    }


    addFavorite = () => {
        this.setState({
            "isNotFavorite": !this.state.isNotFavorite
        });
    };

}

export default Favorites;