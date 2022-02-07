export type Reducer = {
    all: object[], instagram: object[], twitter: object[], manual: object[], value: string, [key: string]: any
}
export type Data = {
    image?: any,
    image_url?: any
}
export type Item = {
    item_data: Data,
    service_slug: any,
    item_id: number
}