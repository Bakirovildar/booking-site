import './Header.css'
import logo from '../../assests/svg/logo.svg'
import {useNavigate} from "react-router";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

export const Header = () => {
    const navigate = useNavigate()

    const clickNavigate = (path: string) => {
        navigate(path)
    }

    return (
        <div className='header-container'>
            <div
                onClick={() => clickNavigate('/')}
                className='header-logo'><img src={logo} alt=""/> <span></span></div>
            <div className='header-item'>
                <span
                    onClick={() => clickNavigate('/enroll')}
                    className='item'>Запись</span>
                <div
                    onClick={() => clickNavigate('/admin')}
                    className='item'><AdminPanelSettingsIcon/></div>
            </div>
        </div>
    )
}
