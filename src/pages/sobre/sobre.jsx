import './sobre.css'
import github from'../../Assets/icons-github.svg'
import linkedin from '../../Assets/icons-linkedin.svg'
import gmail from '../../Assets/icons-gmail.svg'
import perfil from '../../Assets/foto perfil 2.png'
import { i18n } from '../../translate/i18n'

function Sobre(){


    return(
        <div className="sobre" id='sobre'>
            <div className="cabecalho">
                <h4>About Me</h4>
                <div className='icones'>
                    <a href="https://github.com/JoasCast" >
                        <img src={github} alt="github do desenvolvedor" className='icone'/>
                    </a>

                    <a href="https://www.linkedin.com/in/joas-castelo/" >
                        <img src={linkedin} alt="linkedin do desenvolvedor" className='icone'/>
                    </a>

                    <a href="mailto:joascastelo5@gmail.com?subject=Assunto&body=" >
                        <img src={gmail} alt="email do desenvolvedor" className='icone'/>
                    </a>
                </div>
            </div>

            <div className="texto">
                <span className='titulo'>{i18n.t('sobre.hello')}</span> <p>{i18n.t('sobre.textOne')}</p>
            </div>
 
            <div className="textoDois">
                <p>{i18n.t('sobre.textTwo')}</p>
                <div className="foto">
                    <img src={perfil} alt={i18n.t('sobre.alt')} />
                </div>
            </div>

        </div>
    )
}

export default Sobre;