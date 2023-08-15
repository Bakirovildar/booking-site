import './FormPage.css'
import FormControl from '@mui/material/FormControl'
import Select, {SelectChangeEvent} from '@mui/material/Select'
import React, {useEffect, useState} from "react"
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import {ButtonStandard} from "../../components/buttons/ButtonStandard/ButtonStandard"
import {useDispatch, useSelector} from "react-redux"
import {RootState} from "../../store/store"
import {asyncChangeData} from "../../store/action"

import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';


export const FormPage = () => {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [isError, setIsError] = useState(false)
    const [isSuccessfully, setIsSuccessfully] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const {title, nameMaster, windows}: any = useSelector<RootState>(state => state.enrollItem)
    const itemsData = useSelector<RootState>(state => state.itemsData)

    const dispatch = useDispatch()

    const handleChange = (event: SelectChangeEvent) => {
        setDate(event.target.value as string)
    }

    const handleChangeTime = (event: SelectChangeEvent) => {
        setTime(event.target.value as string)
    }

    const sendFormHandler = () => {
        if (!date || !time || !name || !number ) {
            setIsError(true)
            return
        }

        dispatch<any>(asyncChangeData(itemsData, {date: date, nameMaster, time: time}))
        setIsError(false)
        setIsLoading(true)

        setName('')
        setNumber('')
    }

    useEffect(() => {
        if (isLoading === true) {
            setTimeout(() => {
                setIsLoading(false)
                setIsSuccessfully(true)
            }, 2000)
        }

    }, [isLoading])

    return (
        <div className='form-page-container'>
            {
                isLoading &&
                <div className='form-page-load'>
                    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                        <CircularProgress color="secondary" />
                    </Stack>
                </div>

            }
            { isSuccessfully
                    ? <div className='form-page-center'><div style={{margin: '0 5px'}}>Вы записались на <b>{date} в {time} к мастеру {nameMaster}</b></div></div>
                    : <div className='form-page-wrapper'>
                        <h3>Запись на услугу: {title ? title : ''}</h3>
                        <h4>Мастер: {nameMaster ? nameMaster : ''}</h4>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div className='form-date-time'>
                                <Box sx={{minWidth: 240}} style={{background: 'white', margin: '10px 10px 0 0'}}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Дата *</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            error={isError && !date}
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
                                        <InputLabel id="demo-simple-select-label">Время *</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            error={isError && !time}
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
                                    error={isError && !name}
                                    label="Ваше имя *"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div className='form-name'>
                                <TextField
                                    style={{background: 'white'}}
                                    id="outlined-required"
                                    error={isError && !number}
                                    label="Номер телефона *"
                                    type="number"
                                    value={number}
                                    onChange={e => setNumber(e.target.value)}
                                />
                            </div>
                            { isError &&
                            <div className='error-form'>
                                Заполните обязательные поля *
                            </div>
                            }
                            <div style={{width: '100%', boxSizing: 'border-box'}}>
                                <ButtonStandard clickButtonStandard={() => sendFormHandler()} title={'Записаться'}/>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}
