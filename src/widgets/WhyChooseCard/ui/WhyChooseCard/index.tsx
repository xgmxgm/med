import { FC, type PropsWithChildren } from 'react'

import './WhyChooseCard.scss'

export const WhyChooseCard: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className='WhyChooseCard'>
            {children}
        </div>
    )
}