import './Input.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useEffect, useState} from "react";

export interface IInput {
    clickInputHandler: (login: string, password: string) => void
    isError: boolean
}

export const Input = ({clickInputHandler, isError}: IInput) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className='input-wrapper'>
            <TextField
                style={{marginBottom: '10px'}}
                id="standard-basic"
                label="Логин"
                value={login}
                onChange={event => setLogin(event.target.value)}
                variant="standard"/>
            <TextField
                style={{marginBottom: '10px'}}
                id="standard-basic"
                value={password}
                onChange={event => setPassword(event.target.value)}
                label="Пароль"
                variant="standard"/>

            {
                isError && <span className='error-span'>неверные данные</span>
            }

            <Button
                style={{marginTop: '10px'}}
                variant="contained"
                onClick={() => clickInputHandler(login, password)}
            >Войти</Button>
        </div>
    )
}
