import { FC } from 'react'
import { DesktopHeader } from '../DesktopHeader';
import { MobileHeader } from '../MobileHeader';

export const Header: FC = () => {

    const widthScreen: number = window.innerWidth;

    return (
        <header>
            { widthScreen >= 701 ? <DesktopHeader /> : <MobileHeader /> }
        </header>
    )
}