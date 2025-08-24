import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from '../../components/ui/ScrollToTop'
import { Outlet } from 'react-router-dom'

const CommonLayout: React.FC<React.PropsWithChildren> = () => {
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

export default CommonLayout;