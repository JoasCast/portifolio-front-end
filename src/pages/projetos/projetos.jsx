import "./projetos.css";
import { i18n } from "../../translate/i18n";
import notebook from "../../Assets/fortaleza em música.png";
import vue from "../../Assets/ecomerce.png";
import estagio from "../../Assets/e-stágio.png";
import deco from "../../Assets/decoLogo.png";

function Projetos() {
  function alerta() {
    return window.alert("Em manutenção");
  }

  return (
    <div className="projetos" id="projetos">
      <div className="cabecalho">
        <h4>Projetos</h4>
      </div>

      <div className="linha">
        <div className="card">
          <img src={notebook} alt="" />
          <div className="footer">
            <div className="content">
              <h1>Fortaleza em Música</h1>
              <a
                href="https://fortaleza-em-musica.vercel.app/iniciar"
                className="botao"
              >
                <p>view project</p>
                <span class="material-symbols-outlined">arrow_outward</span>
              </a>
            </div>
            <p>{i18n.t("projetos.fortaleza")}</p>
          </div>
        </div>

        <div className="card">
          <img src={vue} alt="" />
          <div className="footer">
            <div className="content">
              <h1>E-comerce</h1>
              <button className="botao" onClick={alerta}>
                <p>view project</p>
                <span class="material-symbols-outlined">arrow_outward</span>
              </button>
            </div>
            <p>{i18n.t("projetos.ecomerce")} </p>
          </div>
        </div>

        <div className="card">
          <img src={estagio} alt="" />
          <div className="footer">
            <div className="content">
              <h1>E-stágio</h1>
              <a
                href="https://www.figma.com/proto/Pk3KW8vhrw6n0o5q1VBWgY/UI---Gest%C3%A3o-de-est%C3%A1gio?page-id=982%3A22035&type=design&node-id=1158-58337&viewport=335%2C-370%2C0.06&t=gtCW0yR0R7Hj0Sg0-1&scaling=min-zoom&starting-point-node-id=1158%3A58337&show-proto-sidebar=1&mode=design"
                className="botao"
              >
                <p>view project</p>
                <span class="material-symbols-outlined">arrow_outward</span>
              </a>
            </div>
            <p>{i18n.t("projetos.estagio")} </p>
          </div>
        </div>

        <div className="card">
          <img src={deco} alt="" />
          <div className="footer">
            <div className="content">
              <h1>E-comerce Deco.cx</h1>
              <a
                href="https://deco-sites-decocxecomerce.deno.dev"
                className="botao"
              >
                <p>view project</p>
                <span class="material-symbols-outlined">arrow_outward</span>
              </a>
            </div>
            <p>{i18n.t("projetos.ecomerce")} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projetos;
