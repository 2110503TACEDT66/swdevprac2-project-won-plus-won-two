export interface ReservationItem {
    carID: string,
    carModel: string,
    numOfDate: number,
    pickupDate: string,
    pickupLocation: string,
    returnDate: string,
    retrunLocation: string
}
export interface ReservationJson{
    success: boolean,
    count: number,
    pagination: Object,
    data: ReservationItem[]
}
export interface RestaurantItem{
    name: string,
    tel: string,
    openningtime: string,
    website: string,
    _id: string,
    id: string,
}
export interface RestaurantJson{
    success: boolean,
    count: number,
    pagination: Object,
    data: RestaurantItem[]
}