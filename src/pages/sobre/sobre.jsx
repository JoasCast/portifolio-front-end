import './sobre.css'
import github from'../../Assets/icons-github.svg'
import linkedin from '../../Assets/icons-linkedin.svg'
import gmail from '../../Assets/icons-gmail.svg'

function Sobre(){


    return(
        <div className="sobre">
            <div className="cabecalho">
                <h4>About Me</h4>
                <div>
                    <img src={github} alt="github do desenvolvedor" className='icone'/>
                    <img src={linkedin} alt="linkedin do desenvolvedor" className='icone'/>
                    <img src={gmail} alt="email do desenvolvedor" className='icone'/>
                </div>
            </div>

            <div className="texto">
                <span className='titulo'>Olá </span><p>ou Joás Castelo e estou prestes a
                    concluir minha graduação em Design Digital na Universidade Federal do Ceará (UFC),
                    com foco em Front-end. Possuo habilidades em HTML, CSS, JavaScript, React e Vue.js,
                    além de experiência em UX/UI. Estou acostumado a trabalhar em equipe e aplicar metodologias ágeis.
                </p>
            </div>
 
            <div className="textoDois">
                <p>
                    Durante minha jornada acadêmica participei do Núcleo de Praticas em Informática (NPI) como UI/UX e de uma
                    bolsa de extensão como fullstack.
                </p>
                <div className="foto"></div>
            </div>

        </div>
    )
}

export default Sobre;