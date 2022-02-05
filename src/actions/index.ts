export enum ActionType {
    ALL = 'ALL',
    MANUAL = 'MANUAL',
    TWITTER = 'TWITTER',
    INSTA = 'INSTA'
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
export type Action = allData | manualData | twitterData | instaData;


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
