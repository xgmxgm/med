import { FC, ReactNode } from 'react'
import { useNavigate } from "react-router-dom"

import './ServiceCard.scss'

interface IProps {
    children: ReactNode,
    id: number
}

export const ServiceCard: FC<IProps> = ({children, id}) => {
    const router = useNavigate()

    return (
        <div className='serviceCard' onClick={() => router(`/services/${id}`)}>
            {children}
        </div>
    )
}