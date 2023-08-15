import React, {useEffect} from 'react';
import './App.css';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./store/store";
import {Main} from "./shared/Main/Main";
import {Header} from "./shared/Header/Header";
import {Route, Routes} from 'react-router-dom'
import {useNavigate} from "react-router";
import {EnrollPage} from "./shared/EnrollPage/EnrollPage";
import {FormPage} from "./shared/FormPage/FormPage";
import {AdminInput} from "./shared/AdminInput/AdminInput";

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
))

function App() {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/home')
    }, [])

    return (
        <Provider store={store}>
            <div className="App">
                <div className='app-bg'/>
            </div>
            <div className='content-container'>
                <Header/>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/enroll' element={<EnrollPage/>}/>
                    <Route path='/form' element={<FormPage/>}/>
                    <Route path='/admin' element={<AdminInput/>}/>
                </Routes>
            </div>
        </Provider>
    );
}

export default App;
