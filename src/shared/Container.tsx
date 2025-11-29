import { type ReactNode, type HTMLAttributes } from "react";
export interface NeoContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}


export default function NeoContainer({ children, className = "", ...props }: NeoContainerProps) {
    return (
        <div
            className={
                `bg-base-200 p-4 md:p-6 border-[3px] border-black shadow-[6px_6px_0px_#000] ${className}`
            }
            {...props}
        >
            {children}
        </div>
    );
}