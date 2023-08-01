'use client';
//@ts-ignore
import Link from 'next/link';
//@ts-ignore
import UIkit from 'uikit'
//@ts-ignore
import Icons from 'uikit/dist/js/uikit-icons'
import 'uikit/dist/css/uikit.css'
import 'uikit/dist/css/uikit.min.css'
UIkit.use(Icons)

import Hamburger from './hamburger';

export const Header = () => {
    return (
        <header>
            <nav className="uk-navbar-container">
                <div className="uk-container">
                    <div uk-navbar="mode: click">
                        <div className="uk-navbar-left">
                            <ul className="uk-navbar-nav">
                                <li className="uk-active">
                                    <Link href="/">Home</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="uk-navbar-right">
                            <ul className="uk-navbar-nav">
                                <Hamburger />
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};
