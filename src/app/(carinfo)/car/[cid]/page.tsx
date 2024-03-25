import Image from "next/image"
import getCar from "@/libs/getCar"
import Link from "next/link"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getUserProfile from "@/libs/getUserProfile"
import LocationDateReserve from "@/components/LocationDateReserve"

export default async function CarDetailPage( {params}:{params:{cid:string}}) {

    const carDetail = await getCar(params.cid)
    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)

    
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4 pt-20 bg-white ">
            <h1 className="text-5xl font-medium">{carDetail.data.name}</h1>
            <div className="space-x-10  w-fit px-10 py-5 flex flex-row justify-center bg-orange-100 rounded-full">
                <div className="text-md mx-5">Address :{ carDetail.data.address }</div>
                <div className="text-md mx-5">Tel :{ carDetail.data.tel}</div>
                <div className="text-md mx-5">{ carDetail.data.openningtime}</div>
            </div>
            <Link href={`/reservations?id=${params.cid}&name=${carDetail.data.name}&userid=${profile.data._id}&username=${profile.data.name}`}>
                    <button className="block rounded-md bg-red-800 hover:bg-red-400 px-3 py-2 text-white ">
                        Make Reservation
                    </button>
            </Link>
        </main>
    )
}
