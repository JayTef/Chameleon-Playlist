import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import ChameleonLogo from '../image/chameleon-logo.png';


const Nav = ({ libraryStatus, setLibraryStatus }) => {
    return (
        <nav>
            <img src={ChameleonLogo} alt="Chameleon Logo" style={{ width: '50px', height: '50px' }} />
            <h1 style={{
                color: 'white',
                background: 'linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                textShadow: '0 0 20px rgba(0,0,0, 0.2)'
            }}>Chameleon</h1>
            <button style={{ color: 'white' }} onClick={() => setLibraryStatus(!libraryStatus)}>
                Playlist{' '}
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    );
};

export default Nav;
