import Button from "@/components/Button";
import { userState } from "@/store/atom";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

const Header: React.FC = () => {
    const router = useRouter()
    const pathname = usePathname()

    const [userData, setUserData] = useRecoilState(userState)

    const handleLogout = async () => {
        setUserData(null)
        // router.push('/login')
    }

    return (
        <div className="bg-black h-16 fixed top-0 w-screen flex justify-between items-center px-12 border-b">
            <div><p className="text-white font-bold text-lg font-mono">User Registration Form</p></div>
            <div>
                {!userData?.username && pathname === "/login" ? <Button title="Register" url="/register" />
                    : !userData?.username && pathname === "/register" ? <Button title="Login" url="/login" />
                        : !userData?.username && pathname === "/" ? <div className="flex gap-4"><Button title="Register" url="/register" /><Button title="Login" url="/login" /></div>
                            : userData?.username ? <div className="flex flex-col justify-start items-center">
                                <p className="font-semibold">{userData.username}</p>
                                <button onClick={handleLogout} className="text-xs text-[#edf850] hover:text-white">Signout</button>
                            </div>
                                : null}
            </div>
        </div>
    );
}

export default Header;