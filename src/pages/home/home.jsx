import './home.css'

function Home (){
    

    return(
        <div className="home" id='home'>
            <h3 className="name">JoasCast Dev 
            <span className='rosa'>.</span>
            </h3>
            <div className="titulo">
                <h1>"A 
                    <span className="verde"> simplicidade</span> é o mais alto grau da  
                    <span className="verde"> sofisticação</span>"
                </h1>
            </div>
            <div className="citacao">
                <div className="autor">
                    <h3>Leonardo da Vinci</h3>
                </div>
            </div>
            <a href="mailto:joascastelo5@gmail.com?subject=Assunto&body=">
                <div className='acenar'>
                    <p className='diga'>Diga oi </p>
                    <span class="material-symbols-outlined">
                        waving_hand
                    </span>
                </div>
            </a>
            

        </div>
    )
}

export default Home;