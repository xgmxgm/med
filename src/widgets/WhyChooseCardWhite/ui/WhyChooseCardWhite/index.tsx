import { FC, type PropsWithChildren } from 'react'

import './WhyChooseWhite.scss'

export const WhyChooseCardWhite: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className='WhyChooseCardWhite'>
            {children}
        </div>
    )
}