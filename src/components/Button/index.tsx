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
            <button className="bg-white text-black font-medium transition-colors rounded-lg border border-white px-4 py-1 hover:bg-black hover:text-white" onClick={() => router.push(url)}>{title}</button>
        </div>
    );
}

export default Button;