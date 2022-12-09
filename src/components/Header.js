import React from 'react';

const Header = () => {
    return (
        <div>
            <nav class="navbar is-transparent">
                        <div class="navbar-brand">
                            <a class="navbar-item" href="http://localhost:3000/">
                            <img src="/Aliyaan.png" alt="Ali portfolio: logo" width="112" height="28"/>
                            </a>
                        </div>

                        <div id="navbarExampleTransparentExample" class="navbar-menu">
                            <div class="navbar-start">
                            </div>
                            <div class="navbar-end">
                            <div class="navbar-item">
                                <div class="field is-grouped">
                                <p class="control">
                                    <a class="button is-info" href="#projects">
                                    <span>Projects</span>
                                    </a>
                                </p>
                                <p class="control">
                                    <a class="button is-primary" href="#contact">
                                    <span>Contact</span>
                                    </a>
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                </nav>
        </div>
    )
}
export default Header;
            