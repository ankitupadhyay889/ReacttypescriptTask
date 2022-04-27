import { NavLink } from 'react-router-dom';
import Rute from './Rute';

const Linkinf = () => {

    return (
        <>
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">All Api Data</NavLink>
                    </li>
                    </ul>
                </div>
            </nav>
            <Rute />
        </div>
        </>
    );
};

export default Linkinf;