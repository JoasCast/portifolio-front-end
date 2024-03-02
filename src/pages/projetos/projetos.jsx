import "./projetos.css"
import notebook from '../../Assets/tela inicial.png'
import vue from '../../Assets/icone-vuejs.svg'
import estagio from '../../Assets/e-stagio.png'

function Projetos() {
    

    return(

        <div className="projetos">

            <div className="cabecalho">
                <h4>Projetos</h4>
            </div>

            <div className="linha">
                <div className="card">
                    <img src={notebook} alt="" />
                    <div className="footer">
                        <div className="content">
                            <h1>Fortaleza em Música</h1>
                            <a href="https://fortaleza-em-musica.vercel.app/iniciar" className="botao">
                                <p>view project</p>
                                <span class="material-symbols-outlined">arrow_outward</span>
                            </a>
                        </div>
                        <p>Uma bolsa de extensão onde tive a responsabilidade de migrar um app mobile 
                                para desktop. tive o pael de fullstack e trabalhei com react, firebase e a api do google maps, além de
                                criar a interface. Esse projeto tem como objetivo marcar e trazer informações de músicas que citam
                                lugares de Fortaleza.
                            </p>
                    </div>
                </div>

                <div className="card">
                    <img src={vue} alt="" />
                    <div className="footer">
                        <div className="content">
                            <h1>E-comerce</h1>
                            <a className="botao">
                                <p>view project</p>
                                <span class="material-symbols-outlined">arrow_outward</span>
                            </a>
                        </div>
                        <p>Um projeto de e-comerce completo para aprimorar meus conhecimentos em Vue3.
                            </p>
                    </div>
                </div>

                <div className="card">
                    <img src={estagio} alt="" />
                    <div className="footer">
                        <div className="content">
                            <h1>E-stágio</h1>
                            <a href="https://www.figma.com/proto/Pk3KW8vhrw6n0o5q1VBWgY/UI---Gest%C3%A3o-de-est%C3%A1gio?page-id=982%3A22035&type=design&node-id=1158-58337&viewport=335%2C-370%2C0.06&t=gtCW0yR0R7Hj0Sg0-1&scaling=min-zoom&starting-point-node-id=1158%3A58337&show-proto-sidebar=1&mode=design" className="botao">
                                <p>view project</p>
                                <span class="material-symbols-outlined">arrow_outward</span>
                            </a>
                        </div>
                        <p>Desenvolvido durante meu estágio no (NPI), que consiste em um sistema para troca de documentos referente a estágio
                            entre alunos e professores, como pertencente da equipe de design, ficamos responsáveis por pensar a interface do sistema
                            com um protótipo de alta fidelidade e navegável.
                            </p>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Projetos;