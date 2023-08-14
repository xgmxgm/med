import { FC, type PropsWithChildren } from 'react'

import './Layout.scss'
import { Scroll } from '@/widgets/Scroll'
import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'

export const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <>
            <Scroll />
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}