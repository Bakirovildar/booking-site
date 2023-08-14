import {Reducer} from "redux";
import {
    ChangeData,
    CHANGEDATA,
    ENROLLITEM,
    EnrollItem,
    SaveDate,
    SAVEDATE,
    SaveItemsData,
    SAVEITEMSDATA
} from "./action";

export type RootState = {
    getItems: any,
    enrollItem: any,
    itemsData: any,
    windowsDate: any
}

const initialState: RootState = {
    getItems: [
        {id: 1, title: 'Локоны прикольные, я не знаю короче', name: 'Азалия'},
        {id: 2, title: 'Афрокосички, я не знаю короче', name: 'Азалия'},
        {id: 3, title: 'Локоны прикольные, я не знаю короче', name: 'Зарина'},
        {id: 4, title: 'Локоны прикольные, я не знаю короче', name: 'Зарина'},
        {id: 5, title: 'Локоны прикольные, я не знаю короче', name: 'Ильдар'},
        {id: 6, title: 'Локоны прикольные, я не знаю короче', name: 'Ильдар'},
        {id: 7, title: 'Локоны прикольные, я не знаю короче', name: 'Азалия и Ильдар'},
    ],
    enrollItem: {},
    itemsData: [],
    windowsDate: []
}

type MyAction = EnrollItem | SaveItemsData | ChangeData | SaveDate

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
    switch (action.type) {
        case ENROLLITEM:
            return {
                ...state,
                enrollItem: action.enrollItem
            }
        case SAVEITEMSDATA:
            return {
                ...state,
                itemsData: action.itemsData
            }
        case CHANGEDATA:
            return {
                ...state,
                itemsData: action.data
            }
        case SAVEDATE:
            const existingDayIndex = state.windowsDate.findIndex((day: any) => day.day === action.date.day);

            if (existingDayIndex !== -1) {
                // If the day already exists, update its times and remove duplicates
                const existingTimes = state.windowsDate[existingDayIndex].times;
                const newTimes = action.date.times.filter((newTime: any) => {
                    return !existingTimes.some((existingTime: any) =>
                        existingTime.time === newTime.time
                    );
                });

                const updatedDay = {
                    ...state.windowsDate[existingDayIndex],
                    times: [...existingTimes, ...newTimes].sort((a, b) => {
                        // @ts-ignore
                        return new Date('1970/01/01 ' + a.time) - new Date('1970/01/01 ' + b.time);
                    })
                };

                const updatedWindowsDate = [...state.windowsDate];
                updatedWindowsDate[existingDayIndex] = updatedDay;

                return {
                    ...state,
                    windowsDate: updatedWindowsDate
                };
            } else {
                // If the day doesn't exist, add it to the array
                return {
                    ...state,
                    windowsDate: [...state.windowsDate, action.date]
                };
            }
        default:
            return state
    }
}
