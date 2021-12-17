import React from "react";

class PokemonIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li> 
                <p> 
                    <span> {this.props.pokemon.id} </span> 
                    <img src={this.props.pokemon.imageUrl}/>
                    <span> {this.props.pokemon.name} </span> 
                </p>
            </li>
        )
    }
}

export default PokemonIndexItem;