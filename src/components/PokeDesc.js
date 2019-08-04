import React from 'react';
import PokeType from './PokeType';


const PokeDesc = (props) => {
    const {sprite,id,name,types,moves} = props;
    return (
        <div className="container position-absolute pokeDesc p-5">
            <div className="row">
                <div className="col-6">
                    <img src={sprite} className="pokeDescSprite" alt="" /><span className="position-absolute" style={{bottom:0, left:0}}>#{id}</span>
                </div>
                <div className="col-6">
                    <h1>
                        {name}
                    </h1>
                    Type:  &nbsp;
                    {(types?
                        types.map((type,id=0) => (
                            <PokeType key={id++} type = {type} />))
                            :
                            null
                    )}    
                </div>
            </div>
            <div className="row">
                Moves
                <div className="row col-8 border rounded m-5">
                    {(moves?
                        moves.map((move,id=0) => (
                            <p key={id++} className="col-6">{move}</p>))
                            :
                            null
                    )}
                </div>
            </div>    
            
                    
            

        </div>

    )
}

export default PokeDesc;