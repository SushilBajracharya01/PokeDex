(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n.p+"static/media/pokemon.49255cb2.png"},12:function(e,t,n){e.exports=n(22)},19:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),s=(n(18),n(1)),i=n(3),l=n(5),m=n(4),u=n(6),p=(n(19),n(2)),f=n.n(p),h=n(7),d=function e(t){Object(s.a)(this,e),this.id=t.id,this.name=t.name,this.sprite=t.sprites.front_default,this.types=t.types.map(function(e){return e.type.name});var n=t.moves.slice(0,4);this.moves=n.map(function(e){return e.move.name})},k=function(e){return r.a.createElement("div",{className:"pokeType d-inline-block capitalize mb-md-3 mb-1 ".concat(" "+e.type)},e.type)},v=n(10),b=(n(21),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={Pokemons:{}},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"fetchPokemons",value:function(){var e=Object(h.a)(f.a.mark(function e(t){var n,a,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,r=new d(a),window.scrollTo(-10,-10),e.abrupt("return",this.setState({Pokemons:r}));case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"componentWillMount",value:function(){this.fetchPokemons(this.props.url)}},{key:"componentWillReceiveProps",value:function(e){this.fetchPokemons(e.url)}},{key:"render",value:function(){var e=this.state.Pokemons;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-lg-2 col-md-3  col-4 p-0 m-3 PokeCard"},r.a.createElement("div",{className:"spriteContainer mt-md-5 mb-md-5"},r.a.createElement(v.LazyLoadImage,{alt:"",src:e.sprite,effect:"blur",className:"pokeSprite"})),r.a.createElement("div",{className:"nameContainer"},r.a.createElement("h5",{className:"pokeName capitalize p-0 mt-2"},e.name),e.types?e.types.map(function(e,t){return r.a.createElement(k,{key:t++,type:e})}):null)))}}]),t}(a.Component)),y=n(11),E=n.n(y),j=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={isLoading:!0,pokemons:{}},n.fetchPokemon.bind(),n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"fetchPokemon",value:function(){var e=Object(h.a)(f.a.mark(function e(t){var n,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",this.setState({pokemons:a,isLoading:!1}));case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(h.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.fetchPokemon("https://pokeapi.co/api/v2/pokemon");case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.pokemons,a=t.isLoading;return r.a.createElement("div",{className:"PokeDex"},r.a.createElement("div",{className:"PokeContainer"},r.a.createElement("div",{className:"text-center text-light"},r.a.createElement("button",{className:"bg-transparent border-0",href:"",onClick:function(){return e.fetchPokemon("https://pokeapi.co/api/v2/pokemon")}},r.a.createElement("img",{src:E.a,alt:"pokemon",className:"pokeTitle"})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row d-flex justify-content-center"},a?r.a.createElement("div",null,r.a.createElement("p",{className:"lead"},"Loading...")):n.results.map(function(e,t){return r.a.createElement(b,{key:t++,url:e.url})}))),r.a.createElement("div",{className:"BtnContainer"},r.a.createElement("button",{className:"btn btn-primary m-2 ".concat(n.previous?"active ":"disabled"),onClick:function(){e.fetchPokemon(n.previous)}},"Previous"),r.a.createElement("button",{className:"btn btn-primary m-2 ".concat(n.next?"active ":"disabled"),onClick:function(){e.fetchPokemon(n.next)}},"Next")))))}}]),t}(a.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.381e65c1.chunk.js.map