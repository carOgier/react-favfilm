import React from 'react';
import './App.css';
import movieList from './data/movieData';
import Header from "./components/Header";
import Movie from "./components/Movie";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <main>
                    {
                        movieList.map(
                            (m, i) => <Movie
                                key={i}
                                title={m.title}
                                year={m.year}
                                posters={m.posterUrl}
                                director={m.director}
                                synopsis={m.synopsis}
                            />
                        )
                    }
                </main>
            </div>
        );
    }
}

export default App;


/*
{
    movieList.map(
        (m, i) => <Movie
            key={i}
            {...m}
        />
    )
}*/


/*
*
* 1) Est-ce que la donnée doit être accessible en dehors du scope de sa méthode ? Si non -> Variable local
* 2) Est-ce que la donnée doit être accessible en dehors du composant ? Si oui -> Props
* 3) Est-ce que la donnée a un impact direct ou indirect sur le rendu ? Si oui -> State
* 4) Sinon -> propriété classique
*
* */