import './sobre.css'
import github from'../../Assets/icons-github.svg'
import linkedin from '../../Assets/icons-linkedin.svg'
import gmail from '../../Assets/icons-gmail.svg'
import perfil from '../../Assets/perfil ruim.png'

function Sobre(){


    return(
        <div className="sobre">
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
                <span className='titulo'>Olá</span> <p>sou Joás Castelo e estou prestes a
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
                <div className="foto">
                    <img src={perfil} alt="jovem de oculos com parte do cabelo amarelo e blusa escura" />
                </div>
            </div>

        </div>
    )
}

export default Sobre;