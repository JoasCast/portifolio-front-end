import './skills.css'
import UI from '../../Assets/iconUI.svg'
import figma from '../../Assets/icons-figma.svg'
import html from '../../Assets/icons-html-5.svg'
import css from '../../Assets/icons-css.svg'
import js from '../../Assets/icons-js.svg'
import react from '../../Assets/icone-react.svg'
import vue from '../../Assets/icone-vuejs.svg'

function Skills() {
    

    return(
        <div className="skills">
            <div className="cabecalho">
                <h4>Skills</h4>
            </div>

            <h6 className='titulo' >Conhecimento</h6>
            <div className="linha">
                <div className="card">
                    <img src={UI} alt="icone UI/UX" className="icone" />
                    <h1 className="name">UI & UX design</h1>
                    <p className="texto">Experiência em UI/UX designer.
                     Criando interfaces atraentes e intuitivas para se destacar dos demais.</p>
                </div>

                <div className="card">
                    <img src={figma} alt="icone UI/UX" className="icone" />
                    <h1 className="name">Prototipação</h1>
                    <p className="texto">Conhecimento em protótipos de alta fidelidade, tirando a ideia do papel.</p>
                </div>

                <div className="card">
                <span class="material-symbols-outlined" alt="sinbolo de desenvolvimento">code</span>
                    <h1 className="name">Font-end</h1>
                    <p className="texto">Conhecimento de desenvolvimento front-end, criando a parte visual e
                     interativa de sites, construindo layouts atraentes e intuitivos para os usuários</p>
                </div>
            </div>

            <h6 className='titulo' >Tecnologias</h6>
            <div className="linha">
                <div className="card">
                    <img src={html} alt="icone html" className="icone" />
                    <h1 className="name">HTML</h1>
                    <p className="texto">Uso do Html5 para definição de informações e organização.</p>
                </div>

                <div className="card">
                    <img src={css} alt="icone css" className="icone" />
                    <h1 className="name">CSS</h1>
                    <p className="texto">Conhecimento aprofundado em CSS para melhor estilização.</p>
                </div>

                <div className="card">
                <img src={js} alt="icone java script" className="icone" />
                    <h1 className="name">Java Script</h1>
                    <p className="texto">Uso da linguagem Java Script para aprimorar a interação.</p>
                </div>
            </div>

            <h6 className='titulo' >Frameworks</h6>
            <div className="linha">
                <div className="card">
                    <img src={react} alt="icone UI/UX" className="icone" />
                    <h1 className="name">React</h1>
                    <p className="texto">Conhecimento aprofundado em React para melhor desempenho durante o desenvolvimento</p>
                </div>

                <div className="card">
                    <img src={vue} alt="icone UI/UX" className="icone" />
                    <h1 className="name">Vue</h1>
                    <p className="texto">Conhecimento básico em Vue</p>
                </div>
            </div>

        </div>
    )
}

export default Skills;