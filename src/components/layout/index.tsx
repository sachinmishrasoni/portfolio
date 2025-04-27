import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from '../ui/ScrollToTop'
import { Outlet } from 'react-router-dom'

const Layout: React.FC<React.PropsWithChildren> = () => {
    return (
        <div style={{ position: 'relative' }}>
            <Header />
            {/* <SettingBtn /> */}
            {/* {children} */}
            <Outlet />
            <ScrollToTop />
            <Footer />
        </div>
    )
}

export default Layout