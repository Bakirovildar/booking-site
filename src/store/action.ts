import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import {RootState} from "./store";
import {child, get, getDatabase, ref, set} from "firebase/database";
import {useSelector} from "react-redux";
import {db} from "../database/database";
import axios from "axios";

const TOKEN = '6190161538:AAHE3sZmbskqFYivx3hfarUbAevXf9TlxvE'
const CHAT_ID = '-1001946149852'
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

export const ENROLLITEM = 'ENROLLITEM'

export type EnrollItem = {
    type: typeof ENROLLITEM,
    enrollItem: any
}

export const addEnrollItem: ActionCreator<EnrollItem> = (enroll) => ({
    type: ENROLLITEM,
    enrollItem: enroll
})

export const SAVEITEMSDATA = 'SAVEITEMSDATA'

export type SaveItemsData = {
    type: typeof SAVEITEMSDATA,
    itemsData: any
}

export const saveItemsData: ActionCreator<SaveItemsData> = (data) => ({
    type: SAVEITEMSDATA,
    itemsData: data
})

export const asyncItemsData = (): ThunkAction<void, RootState, unknown, Action> => (dispatch) => {
    async function getItems() {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `services/`)).then((snapshot) => {
            if (snapshot.exists()) {
                dispatch(saveItemsData(snapshot.val()))
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    getItems()
}

export const CHANGEDATA = 'CHANGEDATA'

export type ChangeData = {
    type: typeof CHANGEDATA,
    data: any
}

export const changeData: ActionCreator<ChangeData> = (itemsData) => {
    return {
        type: CHANGEDATA,
        data: itemsData
    }
}

export const asyncChangeData = (itemsData: any, entryData: any, name: any, number: any): ThunkAction<void, RootState, unknown, Action> => (dispatch) => {
    const data = itemsData

    const updateBookingStatus = (data: any, masterName: string, day: string, time: string, isBooking: boolean) => {
        data.forEach((obj: any) => {
            if (obj.master === masterName) {
                obj.windows.forEach((window: any) => {
                    window.date.forEach((date: any) => {
                        if (date.day === day) {
                            date.times.forEach((t: any) => {
                                if (t.time === time) {
                                    t.isBooking = isBooking;
                                }
                            });
                        }
                    });
                });
            }
        });
    };

    updateBookingStatus(data, entryData.nameMaster, entryData.date, entryData.time, true)


    dispatch(changeData(itemsData, entryData))

    async function editData() {
        try {
            await set(ref(db, `services`), data
            ).then(() => {
            })
            await axios.post(URI_API, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: `К мастеру ${entryData.nameMaster} записалась(-ся): ${name}, на ${entryData.date} в ${entryData.time}. Тел:${number} `
            }).then(() => {
                alert('Вы записались успешно')
            })
        }catch (err) {
            console.log('error changeData', err)
        }
    }

    editData()
}

export const SAVEDATE = 'SAVEDATE'

export type SaveDate = {
    type: typeof SAVEDATE,
    date: any
}

export const saveDate: ActionCreator<SaveDate> = (date) => {
    return {
        type: SAVEDATE,
        date: date
    }
}
export const CLEARDATE = 'CLEARDATE'

export type ClearDate = {
    type: typeof CLEARDATE,
}

export const clearDate: ActionCreator<ClearDate> = () => {
    return {
        type: CLEARDATE,
    }
}
