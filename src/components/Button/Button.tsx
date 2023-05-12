import { MouseEventHandler } from "react"

type Props = {
    onClick?: MouseEventHandler;
    children: React.ReactNode;
    color?: 'primary' | 'secondary' | 'success' | 'danger';
    className?: string;
}

const colorMapping = {
    primary: 'bg-blue-500 hover:bg-blue-700',
    secondary: 'bg-gray-500 hover:bg-gray-700',
    success: 'bg-green-500 hover:bg-green-700',
    danger: 'bg-red-500 hover:bg-red-700'
}

export const Button = ({ onClick, children, color, className}: Props) => {
    return (
        <button onClick={onClick} className={className === undefined
            ? `${color === undefined
                ? colorMapping['primary']
                : colorMapping[color]} text-white font-bold py-2 px-4 rounded`
            : className}>
            {children}
        </button>
    );
}