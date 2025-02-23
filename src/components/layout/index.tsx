import React from 'react'
import Header from './Header'
import SettingBtn from '../ui/SettingBtn'
import Footer from './Footer'
import ScrollToTop from '../ui/ScrollToTop'

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div style={{ position: 'relative' }}>
            <Header />
            <SettingBtn />
            {children}
            <ScrollToTop />
            <Footer />
        </div>
    )
}

export default Layout