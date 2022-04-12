import React from 'react';
import "./Styl.css";

const Foot = () => {
    return (
        <div>
            <footer>
            <div className="footer-content">
            <ul className="socials">
                <li><a href="/#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="/#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="/#"><i className="fa fa-google-plus"></i></a></li>
                <li><a href="/#"><i className="fa fa-youtube"></i></a></li>
                <li><a href="/#"><i className="fa fa-linkedin-square"></i></a></li>
            </ul>
            </div>

            </footer>
        </div>
    );
};

export default Foot;