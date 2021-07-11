import React, { Component } from 'react';
import PokeCard from './PokeCard';
import PokeTitle from '.././pokemon.png';


class PokeDex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            pokemons: {}
        }
        this.fetchPokemon.bind();
    }

    async fetchPokemon (url) {
        const res = await fetch(url);
        const pokemons = await res.json();
        return (
            this.setState({
                pokemons:pokemons,
                isLoading: false
            })
        )
    }

    async componentDidMount() {
        this.fetchPokemon("https://pokeapi.co/api/v2/pokemon");
    }

    render() {
        const { pokemons, isLoading } = this.state;
        return (
            <div className="PokeDex">
                <div className="PokeContainer">
                    <div className="text-center text-light">
                        <button className="bg-transparent border-0" href="" onClick={()=>this.fetchPokemon("https://pokeapi.co/api/v2/pokemon")}>
                            <img src={PokeTitle} alt="pokemon" className="pokeTitle" />
                        </button>
                        <div className="container">
                            <div className="row d-flex justify-content-center">

                                {(isLoading) ?
                                    <div>
                                        <p className="lead">Loading...</p>
                                    </div>
                                    :
                                    // <PokeCard url={pokemons.results[0].url} />
                                    
                                    pokemons.results.map((pokemon, i) => (
                                        <PokeCard key={i++} url={pokemon.url} />
                                    ))
                                }

                            </div>
                        </div>
                        <div className="BtnContainer">
                            <button className={`btn btn-primary m-2 ${pokemons.previous?'active ':'disabled'}`} onClick={()=>{
                                this.fetchPokemon(pokemons.previous)
                            }}>
                                Previous
                            </button>
                            <button className={`btn btn-primary m-2 ${pokemons.next?'active ':'disabled'}`} onClick={()=>{
                                this.fetchPokemon(pokemons.next)
                            }}>
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PokeDex;