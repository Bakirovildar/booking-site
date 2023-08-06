import {ActionCreator} from "redux";

export const TASKS = 'TASKS'

export type Tasks = {
    type: typeof TASKS,
    tasks: any
}

export const addTask: ActionCreator<Tasks> = (task) => ({
    type: TASKS,
    tasks: task
})

export const DELETETASK = 'DELETETASK'

export type DeleteTask = {
    type: typeof DELETETASK,
    id: any
}

export const deleteTaskAction: ActionCreator<DeleteTask> = (id) => ({
    type: DELETETASK,
    id
})

export const ADDPLUSCOUNTTIME = 'ADDPLUSCOUNTTIME'

export type AddCountTime = {
    type: typeof ADDPLUSCOUNTTIME
    id: any
}

export const addPlusCountTime: ActionCreator<AddCountTime> = (id) => ({
    type: ADDPLUSCOUNTTIME,
    id
})

export const ADDMINUSCOUNTTIME = 'ADDMINUSCOUNTTIME'

export type AddMinusCountTime = {
    type: typeof ADDMINUSCOUNTTIME
    id: any
}

export const addMinusCountTime: ActionCreator<AddMinusCountTime> = (id) => ({
    type: ADDMINUSCOUNTTIME,
    id
})

export const EDITVALUETASK = 'EDITVALUETASK'

export type EditValueAction = {
    type: typeof EDITVALUETASK
    value: string
    id: any
}

export const editValueTask: ActionCreator<EditValueAction> = (value, id) => ({
    type: EDITVALUETASK,
    value,
    id
})

export const COUNTWORK = 'COUNTWORK'

export type CountWorkAction = {
    type: typeof COUNTWORK
    time: any
    date: any
}

export const countWork: ActionCreator<CountWorkAction> = (time, date) => ({
    type: COUNTWORK,
    time,
    date
})

export const DROPDOWNNUMBER = 'DROPDOWNNUMBER'

export type DropdownNumberAction = {
    type: typeof DROPDOWNNUMBER
    number: number
}

export const dropdownNumber: ActionCreator<DropdownNumberAction> = (number) => ({
    type: DROPDOWNNUMBER,
    number
})

export const COUNTPOMODORO = 'COUNTPOMODORO'

export type CountPomodoroAction = {
    type: typeof COUNTPOMODORO
}

export const countPomodoro: ActionCreator<CountPomodoroAction> = () => ({
    type: COUNTPOMODORO
})

export const COUNTSTOP = 'COUNTSTOP'

export type CountStopAction = {
    type: typeof COUNTSTOP
}

export const countStop: ActionCreator<CountStopAction> = () => ({
    type: COUNTSTOP
})

export const COUNTPAUSE = 'COUNTPAUSE'

export type CountPauseAction = {
    type: typeof COUNTPAUSE
    countPause: number
}

export const countPause: ActionCreator<CountPauseAction> = (countPause) => ({
    type: COUNTPAUSE,
    countPause
})
