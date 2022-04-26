import React from "react";

import "./../../sass/footer/footer.scss";
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-links">
                <a
                    href="https://www.linkedin.com/in/igor-kuznecov-6b784316b/"
                    target="_blank"
                    a="true"
                >
                    LinkedIn
                </a>
                <a
                    href="https://www.facebook.com/igor.kuznecov.3"
                    target="_blank"
                    a="true"
                >
                    Facebook
                </a>
                <a
                    href="https://github.com/Igorberlin"
                    target="_blank"
                    a="true"
                >
                    Github
                </a>
                <a
                    href="https://www.xing.com/profile/Igor_Kuznecov4"
                    target="_blank"
                    a="true"
                >
                    Xing
                </a>
            </div>
            <div className="footer-copyright">
                <p>© 2022 Igor Kuznecov</p>
            </div>
        </div>
    );
};

export default Footer;
