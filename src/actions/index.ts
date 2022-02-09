export enum ActionType {
    ALL = 'ALL',
    MANUAL = 'MANUAL',
    TWITTER = 'TWITTER',
    INSTA = 'INSTA',
    VALUE = 'VALUE',
    NUMBER = 'NUMBER'
}
interface allData {
    type: ActionType.ALL; payload: object;
}
interface manualData {
    type: ActionType.MANUAL; payload: object;
}
interface twitterData {
    type: ActionType.TWITTER; payload: object;
}
interface instaData {
    type: ActionType.INSTA; payload: object;
}
interface Value {
    type: ActionType.VALUE, payload: string
}
interface Number {
    type: ActionType.NUMBER, payload: number
}
export type Action = Number | allData | Value | manualData | twitterData | instaData;


export const allData = (items: object[]): Action => ({
    type: ActionType.ALL,
    payload: items
})
export const manualData = (items: object[]): Action => ({
    type: ActionType.MANUAL,
    payload: items
})
export const twitterData = (items: object[]): Action => ({
    type: ActionType.TWITTER,
    payload: items
})
export const instaData = (items: object[]): Action => ({
    type: ActionType.INSTA,
    payload: items
})
export const setType = (value: string): Action => ({
    type: ActionType.VALUE,
    payload: value
})
export const setNumber = (number: number): Action => ({
    type: ActionType.NUMBER,
    payload: number
})