import "./projetos.css"
import notebook from '../../Assets/tela inicial.png'

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
                            <div className="botao">
                            <p>view project</p>
                            <span class="material-symbols-outlined">arrow_outward</span>
                            </div>
                        </div>
                        <p>Uma bolsa de extensão onde tive a responsabilidade de migrar um app mobile 
                                para desktop. tive o pael de fullstack e trabalhei com react, firebase e a api do google maps, além de
                                criar a interface. Esse projeto tem como objetivo marcar e trazer informações de músicas que citam
                                lugares de Fortaleza.
                            </p>
                    </div>
                </div>

                <div className="card">
                    <img src={notebook} alt="" />
                    <div className="footer">
                        <div className="content">
                            <h1>Fortaleza em Música</h1>
                            <div className="botao">
                            <p>view project</p>
                            <span class="material-symbols-outlined">arrow_outward</span>
                            </div>
                        </div>
                        <p>Uma boolsa de extensão onde tive a responsabilidade de migrar um app mobile 
                                para desktop. tive o pael de fullstack e trabalhei com react e firebase, além de
                                criar a interface.
                            </p>
                    </div>
                </div>

                <div className="card">
                    <img src={notebook} alt="" />
                    <div className="footer">
                        <div className="content">
                            <h1>Fortaleza em Música</h1>
                            <div className="botao">
                            <p>view project</p>
                            <span class="material-symbols-outlined">arrow_outward</span>
                            </div>
                        </div>
                        <p>Uma boolsa de extensão onde tive a responsabilidade de migrar um app mobile 
                                para desktop. tive o pael de fullstack e trabalhei com react e firebase, além de
                                criar a interface.
                            </p>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Projetos;