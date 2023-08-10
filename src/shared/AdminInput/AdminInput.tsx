import './AdminInput.css'
import {IInput, Input} from "./Input/Input";
import {useEffect, useState} from "react";
import {AdminPage} from "./AdminPage/AdminPage";

export const AdminInput = () => {
    const [isError, setIsError] = useState(false)
    const [isInput, setIsInput] = useState(false)

    useEffect(() => {
        const isInpt: any = localStorage.getItem('isInput')
        setIsInput(isInpt)
    }, [])

    const inputValue = {
        login: 'myUfa',
        password: 'ufa12345678'
    }

    const clickInputHandler = (login: string, password: string) => {
        if (login === inputValue.login && password === inputValue.password) {
            localStorage.setItem('isInput', 'true')
            setIsError(false)
            setIsInput(true)
        }
        else {
            setIsError(true)
            setIsInput(false)
        }
    }

    return (
        <div className='admin-wrapper'>
            {
                isInput
                    ? <AdminPage/>
                    : <Input clickInputHandler={(login: string, password: string) => clickInputHandler(login, password)} isError={isError}/>
            }
        </div>
    )
}
