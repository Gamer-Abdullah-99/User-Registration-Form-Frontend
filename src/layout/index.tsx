import Header from "./Header"


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="">
            <Header />
            {children}
        </div>
    )
}

export default Layout