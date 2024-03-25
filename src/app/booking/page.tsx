import DateReserve from "@/components/DateReserve";
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getUserProfile from "@/libs/getUserProfile"

export default async function Reservations () {
    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4 pt-20 bg-white">
            <div className="w-fit space-y-2">
                <div className="text-xl text-left text-black">Booking</div>
                <div className="text-2x1">{profile.data.name}</div>
                <table className="table-auto border-separate border-spacing-2">
                <tbody>
                    <tr><td>Email</td><td>{profile.data.email}</td></tr>
                    <tr><td>Tel.</td><td>{profile.data.tel}</td></tr>
                    <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
                </tbody>

                </table>
                <DateReserve/>

            </div>
            
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white ">
            Book Vaccine
            </button>
        </main>
    );
}

/*
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getUserProfile from "@/libs/getUserProfile"

export default async function DashboardPage() {

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)

    return (
        <main className="bg-slate-100 m-5 p-5">
            <div className="text-2x1">{profile.data.name}</div>
            <table className="table-auto border-separate border-spacing-2">
                <tbody>
                    <tr><td>Email</td><td>{profile.data.email}</td></tr>
                    <tr><td>Tel.</td><td>{profile.data.tel}</td></tr>
                    <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
                </tbody>

            </table>
        </main>
    )
}
*/