import "./diferenciais.css"
import { i18n } from "../../translate/i18n"
import time from '../../Assets/account-group.svg'
import desenvolvimento from '../../Assets/icon-desenvolve.svg'
import scrum from '../../Assets/icon-foguete.svg'
import estagio from '../../Assets/icon-estagio.svg'

function Diferencias() {
    

    return(
        <div className="diferenciais">
            <div className="cabecalho">
                <h4>{i18n.t('diferenciais.differential')}</h4>
            </div>
            <div className="linha">
                <div className="card">
                    <img src={time} alt="icone time" className="icone" />
                    <h1 className="name">{i18n.t('diferenciais.team')}</h1>
                    <p className="texto">{i18n.t('diferenciais.teamText')}</p>
                </div>

                <div className="card">
                    <img src={desenvolvimento} alt="icone time" className="icone" />
                    <h1 className="name">{i18n.t('diferenciais.dev')}</h1>
                    <p className="texto">{i18n.t('diferenciais.devText')}</p>
                </div>

            </div>

            <div className="linha">

                <div className="card">
                    <img src={estagio} alt="icone foguete" className="icone" />
                    <h1 className="name">{i18n.t('diferenciais.internship')}</h1>
                    <p className="texto">{i18n.t('diferenciais.internshipText')}</p>
                </div>

                <div className="card">
                    <img src={scrum} alt="icone time" className="icone" />
                    <h1 className="name">Scrum</h1>
                    <p className="texto">{i18n.t('diferenciais.scrumText')}</p>
                </div>
            </div>


        </div>
    )
}

export default Diferencias