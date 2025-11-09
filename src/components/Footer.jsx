export default function Footer() {

    const contactWs = (() => {
        window.open("https://wa.me/573015461687?text=Me%20gustaría%20cotizar%20", '_blank');
    })

    return (
        <>
            <footer className="footer" id="footer">
                <div className="footer__content contenedor">
                    <h3 className="footer__heading">Let's Collaborate
                        <span className="footer__subheading">
                            On Your Next Project
                        </span>
                    </h3>
                    <button className="footer__action" onClick={contactWs}>Contact me</button>
                    <hr />
                    <div className="footer__contact">
                        <img src="assets/svg/logomijail.svg" alt="Logo footer" />

                        <div className="footer__social">
                            <p className="footer__title">Information:</p>
                            {/* <a className="footer__email" href="mailto:mijail0824@gmail.com">mijail0824@gmail.com</a> */}
                            <div className="footer__networks">
                                <a className="footer__link" href="https://co.linkedin.com/in/mijail-gonzalez-1684a477" target="_blank">
                                    <img src="assets/svg/linkedin.svg" alt="" />
                                </a>
                                <a className="footer__link" href="https://github.com/mgonzalez0889" target="_blank">
                                    <img src="assets/svg/github-outline.svg" alt="" />
                                </a>
                                <a className="footer__link" href="https://twitter.com/migonzalez08" target="_blank">
                                    <img src="assets/svg/x.svg" alt="" />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
                <p className="footer__copy">© 2024  Mijail González Varela</p>
            </footer>

        </>
    )
}
