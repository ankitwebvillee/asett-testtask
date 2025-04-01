import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
                <div className="container-fluid">
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarContent"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className={styles.navLink}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" className={styles.navLink}>About ASETT</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" className={styles.navLink}>Contact Us</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link 
                                    to="#" 
                                    className={`${styles.navLink} dropdown-toggle`}
                                    data-bs-toggle="dropdown"
                                >
                                    Support
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link to="" className="dropdown-item">Help Center</Link></li>
                                    <li><Link to="" className="dropdown-item">FAQ</Link></li>
                                </ul>
                            </li>
                        </ul>
                        
                        <div className={styles.authButtons}>
                            <Link to="" className={`btn ${styles.registerBtn}`}>
                                <i className="bi bi-person-plus me-2"></i>
                                Register
                            </Link>
                            <Link to="" className={`btn ${styles.loginBtn}`}>
                                <i className="bi bi-box-arrow-in-right me-2"></i>
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header; 