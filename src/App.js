import React, {Component} from 'react'
import fruta from './assets/images/acerola.jpg'

class Perfil extends Component{

  state = {
    nome: "Lucas",
    idade: 31,
    comidaFavorita: "Bife com fritas",
    musicas: ["Levels","I wish","Duvet"]
  }
  render(){
    return(
      <div>
        <h1>Meu nome é {this.state.nome}</h1>
        <h2>Tenho {this.state.idade} anos</h2>
        <h3>Minha comida favorita é {this.state.comidaFavorita}</h3>
        <p>Minhas músicas favoritas são:
          <ul>
            <li>{this.state.musicas[0]}</li>
            <li>{this.state.musicas[1]}</li>
            <li>{this.state.musicas[2]}</li>
          </ul>
        </p>
        <p>Minha fruta favorita é...</p>
        <img src={fruta} alt = "Acerola"/>
      </div>
    )
  }
}

export default Perfil