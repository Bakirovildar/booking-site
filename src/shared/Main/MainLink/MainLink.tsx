import './MainLink.css'
import {ButtonStandard} from "../../../components/buttons/ButtonStandard/ButtonStandard";
import {useNavigate} from "react-router";

export const MainLink = () => {
    const navigate = useNavigate()

    const buttonHandler = () => {
        navigate('/enroll')
    }

    return (
        <div className='main-link-container'>
            <div className='main-link-header'>
                Запись на <br/> услуги
            </div>
            <div className='main-link-title'>Нажмите на кнопу и выберите дату</div>
            <ButtonStandard title='Записаться' clickButtonStandard={() => buttonHandler()}/>
        </div>
    )
}
