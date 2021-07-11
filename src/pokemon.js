class Pokemon {
    constructor(data) {
      this.id = data.id;
      this.name = data.name;
      this.sprite = data.sprites.front_default;
      this.types = data.types.map(ty=> 
          ty.type.name
      )
      let movs = data.moves.slice(0,4)
      this.moves = movs.map(mo =>
        mo.move.name  
      )
    }
  }
  
  export default Pokemon;