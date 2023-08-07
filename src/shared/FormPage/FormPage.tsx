import './FormPage.css'
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import React, {useEffect} from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import {ButtonStandard} from "../../components/buttons/ButtonStandard/ButtonStandard";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {asyncChangeData} from "../../store/action";


export const FormPage = () => {
    const [date, setDate] = React.useState('');
    const [time, setTime] = React.useState('');
    const [name, setName] = React.useState('');
    const [number, setNumber] = React.useState('');

    const {title, nameMaster, windows}: any = useSelector<RootState>(state => state.enrollItem)
    const itemsData = useSelector<RootState>(state => state.itemsData)

    const dispatch = useDispatch()

    const handleChange = (event: SelectChangeEvent) => {
        setDate(event.target.value as string);
    };

    const handleChangeTime = (event: SelectChangeEvent) => {
        setTime(event.target.value as string);
    };

    const sendFormHandler = () => {
        dispatch<any>(asyncChangeData(itemsData, {date: date, nameMaster, time: time}))
        setDate('')
        setTime('')
        setName('')
        setNumber('')
    }

    return (
        <div className='form-page-container'>
            <div className='form-page-wrapper'>
                <h3>Запись на услугу: {title ? title : ''}</h3>
                <h4>Мастер: {nameMaster ? nameMaster : ''}</h4>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div className='form-date-time'>
                        <Box sx={{minWidth: 240}} style={{background: 'white', margin: '10px 10px 0 0'}}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Дата</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={date}
                                    label="ДАта"
                                    onChange={handleChange}
                                >
                                    {
                                        windows && windows[0].date.map((i: any, idx: number) => <MenuItem key={idx}
                                                                                                          value={i.day}>{i.day}</MenuItem>)
                                    }
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{minWidth: 120}} style={{background: 'white', margin: '10px 0 0 0'}}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Время</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={time}
                                    label="Время"
                                    onChange={handleChangeTime}
                                >
                                    {
                                        windows &&
                                        windows[0].date.map((item: any) => [item.day].includes(date) === true ? item.times.map((item: any, index: number) => <MenuItem disabled={item.isBooking} key={index} value={item.time}>{item.time}</MenuItem>) : '')
                                        }
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div className='form-name'>
                        <TextField
                            style={{background: 'white'}}
                            id="outlined-required"
                            label="Ваше имя"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className='form-name'>
                        <TextField
                            style={{background: 'white'}}
                            id="outlined-required"
                            label="Номер телефона"
                            type="number"
                            value={number}
                            onChange={e => setNumber(e.target.value)}
                        />
                    </div>
                    <div style={{width: '100%', boxSizing: 'border-box'}}>
                        <ButtonStandard clickButtonStandard={() => sendFormHandler()} title={'Записаться'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
