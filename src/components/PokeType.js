import React from 'react';

const PokeType = (props) => {

    return (
        <div className={`pokeType d-inline-block capitalize mb-md-3 mb-1 ${" "+ props.type}`}>
            {props.type}
        </div>
    )
}

export default PokeType;