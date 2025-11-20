import type React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children : React.ReactNode
    className? :string 
}

export const PrimaryButton = ({children, className,...rest} : ButtonProps) => {

    return( <button
        {...rest}
        className={`btn btn-primary font-bold ${className}`}
    >
        {children}
    </button>
    )

}
export const SecondaryButton = ({children, className,...rest} : ButtonProps) => {

    return( <button
        {...rest}
        className={`btn btn-secondary font-bold ${className}`}
    >
        {children}
    </button>
    )

}


