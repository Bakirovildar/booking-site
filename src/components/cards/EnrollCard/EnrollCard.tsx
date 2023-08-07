import './EnrollCard.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {useDispatch} from "react-redux";
import {addEnrollItem} from "../../../store/action";
import {useNavigate} from "react-router";

interface IEnrollCard {
    title: string
    name: string
    windows: [any]
    id: number | string
}

export const EnrollCard = ({title, name, id, windows}: IEnrollCard) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const clickEnrollHandler = () => {
        dispatch(addEnrollItem({id, title, nameMaster: name, windows}))
        navigate('/form')
    }

    return (
        <div
            onClick={clickEnrollHandler}
            className='enroll-card-container'>
            <div className='enroll-card-left'>
                <div className='enroll-card-title'>{title}</div>
                <div className='enroll-card-name'>{name}</div>
            </div>

            <div className='enroll-card-right'>
                <ArrowForwardIosIcon style={{color: '#115E67'}}/>
            </div>
        </div>
    )
}
