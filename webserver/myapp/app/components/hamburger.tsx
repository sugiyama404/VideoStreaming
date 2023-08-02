'use client';
//@ts-ignore
import Link from 'next/link';
// @ts-ignore
import { useSession } from "next-auth/react"
import { Providers } from "./providers"
//@ts-ignore
import { signIn, signOut } from "next-auth/react";

export default function Hamburger() {
    return (
        <Providers>
            <ClientHamburger />
        </Providers>
    )
}

export const ClientHamburger = () => {
    const { data: session } = useSession()
    if (session) {
        return (
            <li>
                <Link href="#">Logout</Link>
                <div className="uk-navbar-dropdown">
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                        <li className="uk-active" onClick={() => signOut()}>Sign Out</li>
                    </ul>
                </div>
            </li>
        );
    } else {
        return (
            <li>
                <Link href="#">Sign In/Sign Up</Link>
                <div className="uk-navbar-dropdown">
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                        <li className="uk-active" onClick={() => signIn()}>Sign In</li>
                        <li className="uk-active">Registory</li>
                    </ul>
                </div>
            </li>
        );
    }
};