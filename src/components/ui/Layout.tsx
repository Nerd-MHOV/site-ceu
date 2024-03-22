import {Footer, Navbar} from "./index";
import React from "react";

interface LayoutProps {
    initHidden?: boolean,
    children: React.ReactNode,
}
const Layout: React.ComponentType<LayoutProps>  = ({initHidden = false, children}) => {
    return <div
        className="relative z-0 bg-primary">

        <Navbar initHidden={initHidden} />
        {children}
        <Footer />
    </div>
}

export default Layout