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
            <div className='enroll-card-img'>
                <img
                    src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80"
                    alt=""/>
                <div className='enroll-card-footer'>
                    <div className='enroll-card-left'>
                        <div className='enroll-card-title'>{title}</div>
                        <div className='enroll-card-name'>{name}</div>
                    </div>

                    {/*<div className='enroll-card-right'>*/}
                    {/*    <ArrowForwardIosIcon style={{color: '#115E67'}}/>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}
