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
                    <p className="texto">Experiência no trabalho em equipe</p>
                    <h1 className="name">Time</h1>
                    <img src={time} alt="icone time" className="icone" />
                </div>

                <div className="card">
                    <p className="texto">Projetos web desenvolvidos</p>
                    <h1 className="name">Desenvolvimento</h1>
                    <img src={desenvolvimento} alt="icone time" className="icone" />
                </div>
            </div>

            <div className="linhaDois">
                <div className="card">
                    <p className="texto">Experiencia no mercado de trabalho com estagio no núcleo de práticas em informáticas </p>
                    <h1 className="name">Estágio</h1>
                    <img src={estagio} alt="icone foguete" className="icone" />
                </div>

                <div className="card">
                    <p className="texto">Costume em utilizar metodologias ágeis</p>
                    <h1 className="name">Scrum</h1>
                    <img src={scrum} alt="icone time" className="icone" />
                </div>

            </div>

        </div>
    )
}

export default Diferencias