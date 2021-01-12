import React, {Component} from 'react';
import './Pokecard.css';
import helper from './helper';

class Pokecard extends Component {
    render() {
        const img = helper(this.props.id);
        console.log(this.props.id);
        console.log(helper(this.props.id));
        return (
            <div className="Pokecard">
                <div className="row">
                    <div className="Pokecard-column">
                        <div className="Pokecard-card">
                            <h2>{this.props.name}</h2>
                            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${img}.png`} alt={this.props.name}/>
                            <p>TYPE: {this.props.type}</p>
                            <p>EXP: {this.props.exp}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pokecard;