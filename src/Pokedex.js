import React, {Component} from 'react';
import Pokecard from './Pokecard'
import './Pokedex.css'

class Pokedex extends Component {
    render() {
        let text;
        if(this.props.isWinner) {
            text = <h1 className="Pokedex-winner">You Winner!!!</h1>
        } else {
            text = <h1 className="Pokedex-loser">You Lose</h1>
        }
        return (
            <div className="Pokedex">
                {text}
                <p>Total EXP: {this.props.exp}</p>
                {
                    this.props.pokemon.map(p => {
                        return <Pokecard type={p.type} name={p.name} id={p.id} exp={p.base_experience}/>
                    })
                }
            </div>
        )
    }
}

export default Pokedex;