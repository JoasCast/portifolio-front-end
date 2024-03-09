import "./diferenciais.css"
import time from '../../Assets/account-group.svg'
import desenvolvimento from '../../Assets/icon-desenvolve.svg'
import scrum from '../../Assets/icon-foguete.svg'
import estagio from '../../Assets/icon-estagio.svg'

function Diferencias() {
    

    return(
        <div className="diferenciais">
            <div className="cabecalho">
                <h4>Diferencias</h4>
            </div>
            <div className="linha">
                <div className="card">
                    <img src={time} alt="icone time" className="icone" />
                    <h1 className="name">Time</h1>
                    <p className="texto">Experiência no trabalho em equipe</p>
                </div>

                <div className="card">
                    <img src={desenvolvimento} alt="icone time" className="icone" />
                    <h1 className="name">Desenvolvimento</h1>
                    <p className="texto">Projetos web desenvolvidos</p>
                </div>
            </div>

            <div className="linha">
                <div className="card">
                    <img src={estagio} alt="icone foguete" className="icone" />
                    <h1 className="name">Estágio</h1>
                    <p className="texto">Experiencia no mercado de trabalho com estagio no núcleo de práticas em informática</p>
                </div>

                <div className="card">
                    <img src={scrum} alt="icone time" className="icone" />
                    <h1 className="name">Scrum</h1>
                    <p className="texto">Costume em utilizar metodologias ágeis</p>
                </div>

            </div>

        </div>
    )
}

export default Diferencias