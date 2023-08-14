import './ListCard.css'
import TextField from "@mui/material/TextField";
import React, {useEffect, useState} from "react";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {Dayjs} from "dayjs";
import {ListTime} from "./ListTime/ListTime";
import {ButtonStandard} from "../../../../components/buttons/ButtonStandard/ButtonStandard";
import {formateDate} from "../../../../helpers/formattedDate";
import {saveDate} from "../../../../store/action";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store/store";

interface IListCard {
    masterDates: any
}

export const ListCard = ({masterDates}: IListCard) => {
    const [master, setMaster]: any = useState('')
    const [services, setServices]: any = useState([])
    const [date, setDate]: any = React.useState<Dayjs | null>(null)
    const [times, setTimes]: any = useState([])
    const [windows, setWindows]: any = useState([])
    const [countServices, setCountServices] = useState([1])
    const [countDate, setCountDate] = useState([1])
    const [formData, setFormData] = useState([])

    const dispatch = useDispatch()
    const storeDate = useSelector<RootState>(state => state.windowsDate)

    useEffect(() => {
        const newDate = formateDate(date)

        if (newDate === 'Invalid Date') return

        dispatch(saveDate({day: newDate, times: times}))
    }, [times])

    const addInput = (name: string) => {
        if (name === 'service') {
            setCountServices(prevState => [...prevState, 1])
        } else if (name === 'date') {
            setCountDate(prevState => [...prevState, 1])
        }
    }

    const addServices = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
        const ser = [...services]
        const isService = ser.findIndex(s => s.id === idx)

        if (!ser.length || isService === -1) {
            ser.push({id: idx, name: master, title: e.target.value})
        } else {
            ser[isService].title = e.target.value
        }

        setServices(ser)
    }

    useEffect(() => {
        console.log(services)
    }, [services])

    const clickButtonStandard = () => {
        const data = {
            master: ''
        }

        // setFormData()
    }

    return (
        <div className='list-card-container'>
            <div className='list-card-master'>
                <span>Мастер</span>
                <TextField
                    id="outlined-required"
                    label="Имя мастера"
                    type="text"
                    value={master}
                    onChange={e => setMaster(e.target.value)}
                />
            </div>

            <div className='list-card-services'>
                <div className='list-card-services-head'>
                    <div className='list-card-services-head-head'>
                        <span>Услуги</span>
                    </div>
                    <div className='services-flex'>
                        {
                            countServices.map((i, index) =>
                                <TextField
                                    key={index}
                                    style={{marginBottom: '6px'}}
                                    label="Услуги"
                                    value={services.find((s:any) => s.id === index)?.title || ''}
                                    onChange={(e: any) => addServices(e, index)}
                                    type="text"/>)
                        }
                    </div>
                </div>
                <ControlPointIcon
                    onClick={() => addInput('service')}
                    className='services-add'
                />
            </div>

            <div className='list-card-date'>
                <div>
                    <span>Даты</span>
                </div>

                {
                    countDate.map((i: number, idx: number) => {
                            return (
                                <div className='list-card-flex' key={idx}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DatePicker']}>
                                            <DatePicker value={date} onChange={(newValue) => setDate(newValue)}/>
                                        </DemoContainer>
                                    </LocalizationProvider>
                                    <ListTime timesSave={time => setTimes(time)}/>
                                </div>
                            )
                        }
                    )
                }

                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <ControlPointIcon
                        onClick={() => addInput('date')}
                        className='services-add'
                    />
                </div>
            </div>
            <ButtonStandard
                clickButtonStandard={() => clickButtonStandard}
                title='Отправить'/>
        </div>
    )
}
