type InputType = "text" | "number" | "password" | "email";

interface InputBorderlessFocusProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: InputType;
    className?: string;
}

export const InputBorderlessFocus = ({ type, className,...rest }: InputBorderlessFocusProps) => {
    return (
        <input
            type={type}
            {...rest}
            className={`input input-bordered 
                input-primary focus:outline-none 
                focus:outline-offset-0 
                focus:border-base-300 
                focus:input-accent font-bold 
                placeholder:font-semibold ${className}`}
        />
    );
};



