import {Reducer} from "redux";
import {ChangeData, CHANGEDATA, ENROLLITEM, EnrollItem, SaveItemsData, SAVEITEMSDATA} from "./action";

export type RootState = {
    getItems: any,
    enrollItem: any,
    itemsData: any
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
    itemsData: []
}

type MyAction = EnrollItem | SaveItemsData | ChangeData

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
        default:
            return state
    }
}
