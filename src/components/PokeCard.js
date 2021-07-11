import React, { useEffect, useState } from "react";
import Pokemon from "../pokemon";
import PokeType from "./PokeType";
// import PokeDesc from './PokeDesc';
import Speech from "speak-tts";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import PokeballSvg from "../pokeball.svg";

const PokeCard = ({ url }) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const fetchPokemons = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      const pokemon = new Pokemon(data);
      setPokemon(pokemon);
    };
    fetchPokemons(url);
  }, [url]);

  const PokeSpeak = (data) => {
    const speech = new Speech();

    speech
      .init()
      .then((data) => {
        // The "data" object contains the list of available voices and the voice synthesis params
        console.log("Speech is ready, voices are available", data);
      })
      .catch((e) => {
        console.error("An error occured while initializing : ", e);
      });

    const text = `${data.name}. i.d${data.id}.. a ${
      data.types
    } Type Pokemon, its moves are ${data.moves.map((move) => move + ".")} `;
    speech.cancel();
    speech
      .speak({
        text: text,
      })
      .then(() => {
        console.log("Success !");
      })
      .catch((e) => {
        console.error("An error occurred :", e);
      });
  };

  return (
    <>
      <div
        className="col-lg-2 col-md-3  col-4 p-0 m-3 PokeCard"
        onClick={() => PokeSpeak(pokemon)}
      >
        <div className="spriteContainer mt-md-5 mb-md-5">
          <LazyLoadImage
            alt=""
            src={pokemon.sprite}
            effect="blur"
            className="pokeSprite"
          />
        </div>
        <div className="nameContainer">
          <h5 className="pokeName capitalize p-0 mt-2">{pokemon.name}</h5>

          {pokemon.types
            ? pokemon.types.map((type, id) => (
                <PokeType key={id++} type={type} />
              ))
            : null}
        </div>
      </div>
      {/* <div className="col-10">
                <PokeDesc 
                    id={pokemon.id}
                    name={pokemon.name}
                    sprite={pokemon.sprite}
                    types={pokemon.types}
                    moves={pokemon.moves}
                />                
            </div> */}
    </>
  );
};

export default PokeCard;
