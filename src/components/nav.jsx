import './nav.css'
import linkedin from '../Assets/icons-linkedin.svg'
import gmail from '../Assets/icons-gmail.svg'

function Nav() {
  
    return(
      <div className='nav'>
        <span class="material-symbols-outlined">
          home 
        </span>

        <span class="material-symbols-outlined">
          account_box
        </span>

        <span class="material-symbols-outlined">
          code
        </span>

        <span class="material-symbols-outlined">
          build
        </span>

        <hr className='linhaNav'/>

        <img src={linkedin} alt='linkedin do desenvolvedor' className='icone'/>

        <img src={gmail} alt='e-mail do desenvolvedor' className='icone'/>

    </div>
    )
}

export default Nav