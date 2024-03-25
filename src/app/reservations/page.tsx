"use client"
import LocationDateReserve from "@/components/LocationDateReserve";
import dayjs, { Dayjs } from "dayjs";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { ReservationItem } from "../../../interfaces";
import { addReservation } from "@/redux/features/cartSlice";
import { Link } from "@mui/material";


export default function Reservations () {

    const urlParams = useSearchParams()

    const rid = urlParams.get('id')
    const model = urlParams.get('name')
    const userid = urlParams.get('userid')
    const username = urlParams.get('username')

    const dispatch = useDispatch<AppDispatch>()
    const [pickupDate,setPickupDate] = useState<Dayjs|null>(null)

    


    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-3xl font-medium p-5">Restaurant: {model}</div>
            <div className="text-xl p-7">Booker: {username}</div>

            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">Pick-Up Date</div>
                <LocationDateReserve onDateChange={(value:Dayjs)=>{setPickupDate(value)}} />
            </div>
            <Link href={`/reservations/confirm?rid=${rid}&rname=${model}&userid=${userid}&username=${username}&pickupDate=${pickupDate}`}>
                    <button className="block rounded-md bg-red-800 hover:bg-red-400 px-3 py-2 text-white ">
                    NEXT
                    </button>
            </Link>
        </main>
    );
}