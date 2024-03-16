import './home.css'
import { i18n } from '../../translate/i18n';
import { useState } from 'react';

const i18N_STORAGE_KEY = 'i18nextLng'

function Home (){
    
    const handleSelectChange = () => {
        const newToggle = toggle === 'pt-BR' ? 'en-US' : 'pt-BR';
        localStorage.setItem(i18N_STORAGE_KEY, newToggle);
        setToggle(newToggle);
        window.location.reload();
    }

    const [ toggle, setToggle] = useState(localStorage.getItem(i18N_STORAGE_KEY) || 'pt-BR');

    const mudarToggle = () =>{
        if (toggle === 'pt-BR') {
            setToggle('en-US');
        }else{
            setToggle('pt-BR')
        }
    }

    return(
        <div className="home" id='home'>
            <div className="name">
                <span className='rosa'>.</span>
                <h3>JoasCast Dev</h3>
                <h6>pt-BR</h6>
                <div onClick={ ()=> {mudarToggle(); handleSelectChange()} }>
                    <span className='material-symbols-outlined'> {toggle === "pt-BR" ? 'toggle_on' : 'toggle_off'} </span>
                </div>
                <h6>en-US</h6>
            </div>
            <div className="titulo">
                <h1>"{i18n.t('citacao.fist')}
                    <span className="verde"> {i18n.t('citacao.spanOne')}</span> {i18n.t('citacao.second')} 
                    <span className="verde"> {i18n.t('citacao.spanTwo')}</span>
                </h1>
            </div>
            <div className="citacao">
                <div className="autor">
                    <h3>Leonardo da Vinci</h3>
                </div>
            </div>
            <a href="mailto:joascastelo5@gmail.com?subject=Assunto&body=">
                <div className='acenar'>
                    <p className='diga'>{i18n.t('home.hi')}</p>
                    <span class="material-symbols-outlined">
                        waving_hand
                    </span>
                </div>
            </a>
            

        </div>
    )
}

export default Home;