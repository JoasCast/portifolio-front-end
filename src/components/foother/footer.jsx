import "./footer.css"
import github from '../../Assets/icons-github.svg'
import linkedin from '../../Assets/icons-linkedin.svg'
import gmail from '../../Assets/icons-gmail.svg'

function Footer(params) {
    

    return(
        <div className="footer">
            <div className="content">
                <h4>Joas Dev.</h4>
                <div className="botao">
                        <p>curriculum</p>
                        <span class="material-symbols-outlined">arrow_outward</span>
                </div>
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
        </div>
    )
}

export default Footer;