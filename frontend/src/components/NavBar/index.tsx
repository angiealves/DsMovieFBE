import { ReactComponent as ImagemGithub } from 'assets/img/Vector.svg';
import './styles.css';

function NavBar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-conteudo-nav">
                    <h1>DsMovie</h1>
                    <a href="https://github.com/angiealves">
                        <div className="dsmovie-contato-container">
                            <ImagemGithub />
                            <p>/angiealves</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;