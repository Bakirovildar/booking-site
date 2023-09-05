import './EnrollPage.css'
import {EnrollCard} from "../../components/cards/EnrollCard/EnrollCard";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {useEffect, useState} from "react";
import {asyncItemsData} from "../../store/action";
import {CircularProgress} from "@mui/material";


export const EnrollPage = () => {
    const [isDownload, setIsDownload] = useState(false)
    const items: any = useSelector<RootState>(state => state.itemsData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch<any>(asyncItemsData())
    }, [])

    useEffect(() => {
        !items.length ? setIsDownload(true) : setIsDownload(false)
    }, [items])

    return (
        <div className='enroll-container'>
            <h3>Выберите услугу:</h3>
            {
                isDownload && <CircularProgress color="secondary" />
            }
            <div className='enroll-container-flex'>
                {
                    items.map((item: any, index: number) =>
                        <div key={index}>
                            {
                                item.services.map((i: any, idx: number) => <EnrollCard key={idx} title={i.title}
                                                                                       id={i.id}
                                                                                       name={i.name}
                                                                                       windows={item.windows}/>)
                            }
                        </div>)

                }
            </div>
        </div>
    )
}

