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

export const Header = () => {
    return (
        <header>
            <nav className="uk-navbar-container">
                <div className="uk-container">
                    <div className="uk-navbar-left">
                        <ul className="uk-navbar-nav">
                            <li className="uk-active">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="uk-active">
                                <Link href="/user/login">login</Link>
                            </li>
                            <li className="uk-active">
                                <Link href="/user/logout">logout</Link>
                            </li>
                            <li className="uk-active">
                                <Link href="/administrator">administrator</Link>
                            </li>
                            <li className="uk-active">
                                <Link href="/guest">guest</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};
