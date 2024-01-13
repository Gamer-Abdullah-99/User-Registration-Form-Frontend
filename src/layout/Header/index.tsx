import Button from "@/components/Button";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";

const Header: React.FC = () => {
    const router = useRouter()
    const pathname = usePathname()

    const [user, setUser] = useState(false)

    const handleLogout = () => {
        setUser(false)
        router.push('/login')
    }

    return (
        <div className="bg-black h-16 fixed top-0 w-screen flex justify-between items-center px-12 border-b">
            <div><p className="text-white font-bold text-lg font-mono">User Registration Form</p></div>
            <div>
                {!user && pathname === "/login" ? <Button title="Register" url="/register" />
                    : !user && pathname === "/register" ? <Button title="Login" url="/login" />
                        : !user && pathname === "/" ? <div className="flex gap-4"><Button title="Register" url="/register" /><Button title="Login" url="/login" /></div>
                            : user ? <div className="flex flex-col justify-start items-center">
                                <p className="font-semibold">Syed Abdullah</p>
                                <button onClick={handleLogout} className="text-xs text-[#edf850] hover:text-white">Signout</button>
                            </div>
                                : null}
            </div>
        </div>
    );
}

export default Header;