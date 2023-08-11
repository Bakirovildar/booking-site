import './ListCard.css'
import TextField from "@mui/material/TextField";
import React, {useState} from "react";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {Dayjs} from "dayjs";
import {IListTime, ListTime} from "./ListTime/ListTime";
const { DateTime } = require('luxon');

interface IListCard {
    masterDates: any
}

export const ListCard = ({masterDates}: IListCard) => {
    const [date, setDate]: any = React.useState<Dayjs | null>(null);
    const [times, setTimes] = useState([])

    const timesSave = (times: any) => {
        const dateString = date?.format('dd LLLL');
        let newDdate = new Date(dateString);
        let options: object = { day: 'numeric', month: 'long' };
        let formattedDate = newDdate.toLocaleDateString('ru-RU', options);


        setTimes(times)
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
                    <span>Услуги</span>
                    <TextField
                        id="outlined-required"
                        label="Услуги"
                        type="text"
                    />
                </div>
                <ControlPointIcon className='services-add'/>
            </div>

            <div className='list-card-date'>
                <div>
                    <span>Даты</span>
                </div>
                <div className='list-card-flex'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker value={date} onChange={(newValue) => setDate(newValue)} />
                        </DemoContainer>
                    </LocalizationProvider>
                    <ListTime timesSave={(t) => timesSave(t)}/>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <ControlPointIcon className='services-add'/>
                </div>
            </div>
        </div>
    )
}
