import './ListCard.css'
import TextField from "@mui/material/TextField";
import React, {useEffect, useState} from "react";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {Dayjs} from "dayjs";
import {IListTime, ListTime} from "./ListTime/ListTime";
import {ButtonStandard} from "../../../../components/buttons/ButtonStandard/ButtonStandard";

const {DateTime} = require('luxon');

interface IListCard {
    masterDates: any
}

export const ListCard = ({masterDates}: IListCard) => {
    const [date, setDate]: any = React.useState<Dayjs | null>(null);
    const [windows, setWindows]: any = useState([])
    const [countServices, setCountServices] = useState([1])
    const [countDate, setCountDate] = useState([1])
    const [formData, setFormData] = useState([{
            master: "Zarina",
            services: [
                {
                    name: "Zarina", title: "Локоны прикольные, я не знаю короче"
                },
                {
                    name: "Zarina",
                    title: "Локоны прикольные, я не знаю короче"
                }],
            windows: [
                {
                    date: [
                        {
                            day: "18 августа",
                            times: [
                                {
                                    isBooking: true, "time": "13:00"
                                }
                            ]
                        }
                    ]
                }]
        }]
    )

    const addInput = (name: string) => {
        if (name === 'service') {
            setCountServices(prevState => [...prevState, 1])
        } else if (name === 'date') {
            setCountDate(prevState => [...prevState, 1])
        }
    }

    return (
        <div className='list-card-container'>
            <div className='list-card-master'>
                <span>Мастер</span>
                <TextField
                    id="outlined-required"
                    label="Имя мастера"
                    type="text"
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
                                    id="outlined-required"
                                    label="Услуги"
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
                            const timesSave = (times: any) => {
                                const dateString = date?.format('dd LLLL');
                                let newDate = new Date(dateString);
                                let options: object = {day: 'numeric', month: 'long'};
                                let formattedDate = newDate.toLocaleDateString('ru-RU', options);

                                const timesData = times.map((i: string) => ({isBooking: false, time: i}))

                                const data: any = [
                                    {
                                        day: formattedDate,
                                        times: timesData
                                    }
                                ]

                                setWindows(data)
                            }

                            return (
                                <div className='list-card-flex' key={idx}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DatePicker']}>
                                            <DatePicker value={date} onChange={(newValue) => setDate(newValue)}/>
                                        </DemoContainer>
                                    </LocalizationProvider>
                                    <ListTime timesSave={(t) => timesSave(t)}/>
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
                    <ButtonStandard clickButtonStandard={() => {
                    console.log(windows)
                }} title='Отправить'/>
                    </div>
                    )
                    }
