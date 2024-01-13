import { useRouter } from "next/router";

interface ButtonProps {
    title: string,
    url: string
}

const Button = (props: ButtonProps) => {
    const { title, url } = props
    const router = useRouter()

    return (
        <div>
            <button onClick={() => router.push(url)}>{title}</button>
        </div>
    );
}

export default Button;