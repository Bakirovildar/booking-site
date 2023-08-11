import './ListCard.css'
import TextField from "@mui/material/TextField";
import React from "react";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {Dayjs} from "dayjs";
import {ListTime} from "./ListTime/ListTime";

interface IListCard {
    masterDates: any
}

export const ListCard = ({masterDates}: IListCard) => {
    const [value, setValue] = React.useState<Dayjs | null>(null);

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
                            <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
                        </DemoContainer>
                    </LocalizationProvider>
                    <ListTime/>
                </div>
            </div>
        </div>
    )
}
