import './skills.css'
import { i18n } from '../../translate/i18n'
import UI from '../../Assets/iconUI.svg'
import figma from '../../Assets/icons-figma.svg'
import html from '../../Assets/icons-html-5.svg'
import css from '../../Assets/icons-css.svg'
import js from '../../Assets/icons-js.svg'
import react from '../../Assets/icone-react.svg'
import vue from '../../Assets/icone-vuejs.svg'

function Skills() {
    

    return(
        <div className="skills" id='skills'>
            <div className="cabecalho">
                <h4>Skills</h4>
            </div>

            <h6 className='titulo' >{i18n.t('skills.education')}</h6>
            <div className="linha">
                <div className="card">
                    <img src={UI} alt="icone UI/UX" className="icone" />
                    <h1 className="name">UI & UX design</h1>
                    <p className="texto">{i18n.t('skills.uxText')}</p>
                </div>

                <div className="card">
                    <img src={figma} alt="icone UI/UX" className="icone" />
                    <h1 className="name">{i18n.t('skills.prototype')}</h1>
                    <p className="texto">{i18n.t('skills.prototypeText')}</p>
                </div>

                <div className="card">
                <span class="material-symbols-outlined" alt="sinbolo de desenvolvimento">code</span>
                    <h1 className="name">Font-end</h1>
                    <p className="texto">{i18n.t('skills.frontText')}</p>
                </div>
            </div>

            <h6 className='titulo' >{i18n.t('skills.technologies')}</h6>
            <div className="linha">
                <div className="card">
                    <img src={html} alt="icone html" className="icone" />
                    <h1 className="name">HTML</h1>
                    <p className="texto">{i18n.t('skills.HTMLText')}</p>
                </div>

                <div className="card">
                    <img src={css} alt="icone css" className="icone" />
                    <h1 className="name">CSS</h1>
                    <p className="texto">{i18n.t('skills.CSSText')}</p>
                </div>

                <div className="card">
                <img src={js} alt="icone java script" className="icone" />
                    <h1 className="name">Java Script</h1>
                    <p className="texto">{i18n.t('skills.JavascriptText')}</p>
                </div>
            </div>

            <h6 className='titulo' >Frameworks</h6>
            <div className="linhaDois">
                <div className="card">
                    <img src={react} alt="icone UI/UX" className="icone" />
                    <h1 className="name">React</h1>
                    <p className="texto">{i18n.t('skills.reactText')}</p>
                </div>

                <div className="card">
                    <img src={vue} alt="icone UI/UX" className="icone" />
                    <h1 className="name">Vue</h1>
                    <p className="texto">{i18n.t('skills.vueText')}</p>
                </div>
            </div>

        </div>
    )
}

export default Skills;