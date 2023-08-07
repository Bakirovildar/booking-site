import './Header.css'
import logo from '../../assests/svg/logo.svg'
import {useNavigate} from "react-router";

export const Header = () => {
    const navigate = useNavigate()

    const clickNavigate = (path: string) => {
        navigate(path)
    }

    return (
        <div className='header-container'>
            <div
                onClick={() => clickNavigate('/home')}
                className='header-logo'><img src={logo} alt=""/> <span>Baki</span></div>
            <div className='header-item'>
                <span
                    onClick={() => clickNavigate('/enroll')}
                    className='item'>Запись</span>
            </div>
        </div>
    )
}
