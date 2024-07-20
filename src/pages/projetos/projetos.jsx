import "./projetos.css";
import { i18n } from "../../translate/i18n";
import notebook from "../../Assets/fortaleza em música.png";
import estagio from "../../Assets/e-stágio.png";
import deco from "../../Assets/decoLogo.png";
import moteis from "../../Assets/guiaMoteis.png"
import NLJ from "../../Assets/planner.png"

function Projetos() {

  return (
    <div className="projetos" id="projetos">
      <div className="cabecalho">
        <h4>Projetos Front-end</h4>
      </div>

      <div className="linha">

        <div className="card">
          <img src={notebook} alt="" />
          <div className="footer">
            <h1 className="titulo">Fortaleza em Música</h1>
            <p>{i18n.t("projetos.fortaleza")}</p>
          </div>
              <a className="botao" href="https://fortaleza-em-musica.vercel.app/iniciar" target="_blank" rel='noreferrer'>
                <p>view project</p>
                <span className="material-symbols-outlined">arrow_outward</span>
              </a>
        </div>

        <div className="card">
        <img src={NLJ} alt="" />
          <div className="footer">
            <h1 className="titulo">Plann.er</h1>
            <p>{i18n.t("projetos.planner")}</p>
          </div>
              <a className="botao" href="https://fortaleza-em-musica.vercel.app/iniciar" target="_blank" rel='noreferrer'>
                <p>view project</p>
                <span className="material-symbols-outlined">arrow_outward</span>
              </a>
        </div>

        <div className="card">
          <img src={deco} alt="" />
          <div className="footer">
            <h1 className="titulo">E-comerce Deco.cx</h1>
            <p>{i18n.t("projetos.deco")} </p>
          </div>
          <a
                href="https://deco-sites-decocxecomerce.deno.dev" target="_blank" rel='noreferrer'  
                className="botao"
              >
                <p>view project</p>
                <span className="material-symbols-outlined">arrow_outward</span>
              </a>
        </div>

      </div>

        <div className="cabecalho">
        <h4>Projetos UI/UX</h4>
        </div>
      
        <div className="linha">

        <div className="card">
            <img src={estagio} alt=" letra 'é' formada pelas cores azul e laranja"/>
            <div className="footer">
              <h1 className="titulo" >E-stágio</h1>
              <p>{i18n.t("projetos.estagio")} </p>
            </div>
            <a href="https://www.figma.com/proto/Pk3KW8vhrw6n0o5q1VBWgY/UI---Gest%C3%A3o-de-est%C3%A1gio?page-id=982%3A22035&type=design&node-id=1158-58337&viewport=335%2C-370%2C0.06&t=gtCW0yR0R7Hj0Sg0-1&scaling=min-zoom&starting-point-node-id=1158%3A58337&show-proto-sidebar=1&mode=design"
                  target="_blank" rel='noreferrer'
                  className="botao"
                >
                  <p>view project</p>
                  <span className="material-symbols-outlined">arrow_outward</span>
                </a>
          </div>

          <div className="card">
            <img src={moteis} alt="logo com o nome guia de moteis go" />
            <div className="footer">
              <h1 className="titulo" >Guia de Motéis go</h1>
              <p>{i18n.t("projetos.moteis")} </p>
            </div>
            <a href="https://www.figma.com/proto/0VoYHiQQKMiJRi6IHa3QJL/Guia-de-Moteis?page-id=116%3A184&node-id=128-544&t=YkWQZ0ga1dWoMN8U-0&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=128%3A866&show-proto-sidebar=1"
                  target="_blank" rel='noreferrer'
                  className="botao"
                >
                  <p>view project</p>
                  <span className="material-symbols-outlined">arrow_outward</span>
                </a>
          </div>

          <div className="card last-card"/>

      </div>
    </div>
  );
}

export default Projetos;
