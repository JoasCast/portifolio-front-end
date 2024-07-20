import "./footer.css"
import github from '../../Assets/icons-github.svg'
import linkedin from '../../Assets/icons-linkedin.svg'
import gmail from '../../Assets/icons-gmail.svg'

function Footer() {
    

    return(
        <div className="footer">
            <div className="content">
                <h4>Joas Dev.</h4>
                <a className="botao" href="https://drive.google.com/file/d/1OMCWUlVeudcbCHNmmWN8vebe8qR_vZ37/view?usp=sharing" target="_blank" rel='noreferrer'>
                        <p>curriculum</p>
                        <span className="material-symbols-outlined">arrow_outward</span>
                </a>
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
            <hr className='linha' />
        </div>
    )
}

export default Footer;