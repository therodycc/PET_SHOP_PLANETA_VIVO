import { navOptions } from "@/settings/nav-options";
import React from 'react'
import { Link } from "react-scroll";

interface Props {
    activeSection: string
}

export const Nav = ({ activeSection }: Props) => {

    return (
        <ul className="header-options">
            {navOptions.map((opt) => {
                const { title, ...options } = opt
                return (
                    <Link
                        {...options}
                        key={opt.to}
                        className={`option-header-item ${activeSection === opt.to ? "active" : ""}`}
                    >
                        {title}
                    </Link>
                )
            })}
        </ul>
    )
}

