import { useState } from "react"
import Button from "./Button"

const Header = () => {
    const [user, setUser] = useState(false)
    const path = "login"


    return (
        <header className="bg-black w-full h-20 flex items-center justify-between">
            <div>
                <p className="">User Form</p>
            </div>
            <div>
                {user ? <div></div>
                    : path === "login" ? <Button name="Login" path="register" />
                        : path === "register" ? <Button name="Register" path="" />
                            : null}
            </div>
        </header>
    )
}

export default Header