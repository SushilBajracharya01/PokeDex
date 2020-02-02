import React, { Component } from 'react';
import Pokemon from '../pokemon';
import PokeType from './PokeType'
// import PokeDesc from './PokeDesc';
import Speech from "speak-tts";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

class PokeCard extends Component {


    constructor(props) {
        super(props);
        this.state = {
            Pokemons: {},
        }
    }

    async fetchPokemons(url) {
        const res = await fetch(url);
        const data = await res.json();
        const pokemon = new Pokemon(data);
        window.scrollTo(-10, -10);
        return (
            this.setState({
                Pokemons: pokemon,
            })
        )
    }


    componentWillMount() {
        this.fetchPokemons(this.props.url);
    }

    componentWillReceiveProps(newProps) {
        this.fetchPokemons(newProps.url);
    }

    PokeSpeak = (data) => {
        const speech = new Speech();

        speech.init().then((data) => {
            // The "data" object contains the list of available voices and the voice synthesis params
            console.log("Speech is ready, voices are available", data)
        }).catch(e => {
            console.error("An error occured while initializing : ", e)
        })

        const text = `${data.name}. i.d${data.id}.. a ${data.types} Type Pokemon, its moves are ${data.moves.map(move => move + '.')} `;
        speech.cancel();
        speech.speak({
            text: text,
        }).then(() => {
            console.log("Success !")
        }).catch(e => {
            console.error("An error occurred :", e)
        })
    }

    render() {
        const { Pokemons } = this.state;
        return (
            <>
                <div className="col-lg-2 col-md-3  col-4 p-0 m-3 PokeCard" onClick={() => this.PokeSpeak(Pokemons)}>

                    <div className="spriteContainer mt-md-5 mb-md-5">
                        <LazyLoadImage
                            alt=""
                            src={Pokemons.sprite}
                            effect="blur"
                            className="pokeSprite" />
                    </div>
                    <div className="nameContainer">
                        <h5 className="pokeName capitalize p-0 mt-2">{Pokemons.name}</h5>

                        {(Pokemons.types ?
                            Pokemons.types.map((type, id) => (
                                <PokeType key={id++} type={type} />))
                            :
                            null)}
                    </div>

                </div>
                {/* <div className="col-10">
                <PokeDesc 
                    id={Pokemons.id}
                    name={Pokemons.name}
                    sprite={Pokemons.sprite}
                    types={Pokemons.types}
                    moves={Pokemons.moves}
                />                
            </div> */}
            </>

        );
    }
}


export default PokeCard;