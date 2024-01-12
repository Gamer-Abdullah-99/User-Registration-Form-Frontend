import { Link } from "react-router-dom"

interface ButtonProps {
    name: string,
    path: string
}

const Button = ({ name, path }: ButtonProps) => {
    return (
        <button>{name}</button>
    )
}

export default Button