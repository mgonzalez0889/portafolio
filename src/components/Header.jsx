import Lottie from "./Lottie";
import Pdf from '/assets/media/Mijail_Ronal_Resume6.pdf';

export default function Header() {


    const openCv = (() =>{ 
        window.open(Pdf, '_blank')
    })

    return (
        <header className="header" id="home">
            <div className="header__contenedor">
                <div className="header__barra">
                    <Lottie />
               

                    <nav className="navigation">
                        <a className="navigation__link" href="#home">Home</a>
                        <a className="navigation__link" href="#about">About me</a>
                        <a className="navigation__link" href="#projects">Projects</a>
                    </nav>

                    <button className="header__action" onClick={openCv}>
                        See me cv
                    </button>
                </div>
            </div>        
        </header>

    )

}