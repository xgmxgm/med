import { FC } from 'react'

import './HomePage.scss'
import { WelcomeCard } from '@/widgets/WelcomeCard'
import { ServicesCard } from '@/widgets/ServicesCard'
import { WhyChoose } from '@/widgets/WhyChoose'

export const HomePage: FC = () => {
    return (
        <div className='HomePage'>
            <WelcomeCard />
            <ServicesCard />
            <WhyChoose />
        </div>
    )
}