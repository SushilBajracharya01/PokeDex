import React, { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import PokeCard from "./PokeCard";
import PokeTitle from ".././pokemon.png";

//assets
import PokeballSvg from "../pokeball.svg";

const PokeDex = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemons, setPokemons] = useState({});
  const [pokemonResults, setPokemonResults] = useState([]);

  const fetchPokemon = useCallback(
    async (url) => {
      const res = await fetch(url);
      const pokemons = await res.json();
      console.log(pokemons);
      setPokemons(pokemons);
      setPokemonResults([...pokemonResults, ...pokemons.results]);
      setIsLoading(false);
    },
    [pokemonResults]
  );

  useEffect(() => {
    const fetchInitialPokemon = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon");
      const pokemons = await res.json();
      setPokemons(pokemons);
      setPokemonResults([...pokemons.results]);
      setIsLoading(false);
    };

    fetchInitialPokemon();
  }, []);

  return (
    <div className="PokeDex">
      <div className="PokeContainer">
        <div className="text-center text-light">
          <button
            className="bg-transparent border-0"
            href=""
            onClick={() => fetchPokemon("https://pokeapi.co/api/v2/pokemon")}
          >
            <img src={PokeTitle} alt="pokemon" className="pokeTitle" />
          </button>
          <div className="container">
            {isLoading ? (
              <div className="loadingDiv">
                <img
                  className="pokeballSpinner"
                  src={PokeballSvg}
                  alt="pokeball loading spiner"
                />
              </div>
            ) : (
              <InfiniteScroll
                dataLength={pokemonResults?.length} //This is important field to render the next data
                next={() => {
                  console.log("NEXT CALLED");
                  fetchPokemon(pokemons.next);
                }}
                hasMore={pokemons.next}
                loader={
                  <div className="loadingDiv">
                    <img
                      className="pokeballSpinner"
                      src={PokeballSvg}
                      alt="pokeball loading spiner"
                    />
                  </div>
                }
                className="dexContainer row d-flex justify-content-center"
                endMessage={
                  <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
              >
                {pokemonResults?.map((pokemon) => (
                  <PokeCard key={pokemon.url} url={pokemon.url} />
                ))}
              </InfiniteScroll>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeDex;
