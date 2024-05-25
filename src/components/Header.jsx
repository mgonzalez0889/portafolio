import Lottie from "./Lottie";

export default function Header() {

    return (
        <header className="header">
            <div className="header__contenedor">
                <div className="header__barra">
                    <Lottie />
               

                    <nav className="navigation">
                        <a className="navigation__link" href="">Home</a>
                        <a className="navigation__link" href="">About me</a>
                        <a className="navigation__link" href="">Projects</a>
                    </nav>

                    <button className="header__action">
                        See me cv
                    </button>
                </div>
            </div>        
        </header>

    )

}