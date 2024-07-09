import './nav.css'
import linkedin from '../Assets/icons-linkedin.svg'
import gmail from '../Assets/icons-gmail.svg'
import { useEffect, useState } from 'react';

function Nav() {
  
  const [page, setPage] = useState(window.location.hash);

  useEffect(() => {
    const linksnavegacao = document.querySelectorAll('.link')

    linksnavegacao.forEach( link => {
      const href = link.getAttribute('href');
      if (href === page) {
        link.classList.add('active');
      }else {
        link.classList.remove('active')
      }
    });
  },[page])

  const handleLinkClick = (href) => {
    setPage(href);
  };

    return(
      <nav className='nav'>
        <a href="#home" onClick={() => handleLinkClick('#home')} className='link' >
          <span className="material-symbols-outlined">
            home 
          </span>
        </a>

        <a className='link' href="#sobre" onClick={() => handleLinkClick('#sobre')}>
          <span className="material-symbols-outlined">
            account_box
          </span>
        </a>

        <a  className='link' href="#skills" onClick={() => handleLinkClick('#skills')}>  
          <span className="material-symbols-outlined">
            code
          </span>
        </a>

        <a  className='link' href="#projetos" onClick={() => handleLinkClick('#projetos')}>
          <span className="material-symbols-outlined">
            build
          </span>
        </a>


        <hr className='linhaNav'/>

        <a className='link' href="https://www.linkedin.com/in/joas-castelo/">
          <img src={linkedin} alt='linkedin do desenvolvedor' className='icone'/>
        </a>

        <a className='link' href="mailto:joascastelo5@gmail.com?subject=Assunto&body=">
          <img src={gmail} alt='e-mail do desenvolvedor' className='icone'/>  
        </a>
        

      </nav>
    )
}

export default Nav