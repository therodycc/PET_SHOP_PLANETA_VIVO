import React, { JSXElementConstructor, MouseEventHandler, ReactElement } from 'react'

interface Props {
    children: ReactElement<any, string | JSXElementConstructor<any>> | string
    onClick?: MouseEventHandler
}
export const Button = ({ children, onClick }: Props) => {
    return (
        <button onClick={onClick} className="button-general">
            {children}
        </button>
    )
}
