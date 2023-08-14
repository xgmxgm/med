import { FC } from 'react'
import { Link } from 'react-router-dom'

import './NotFoundPage.scss'

export const NotFound: FC = () => {
    return (
        <div className='NotFoundPage'>
            Not Found Page
            <Link to="/" >Home</Link>
        </div>
    )
}