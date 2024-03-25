import Image from "next/image"
import getHospital from "@/libs/getHospital"

export default async function HospitalDetailPage( {params}:{params:{hid:string}}) {

    const carDetail = await getHospital(params.hid)
    
    //Mock Data
    // const mockCarRepo = new Map()
    // mockCarRepo.set("001",{name:"Chulalongkorn Hospital",image:"/img/chula.jpg"})
    // mockCarRepo.set("002",{name:"Rajavithi Hospital",image:"/img/rajavithi.jpg"})
    // mockCarRepo.set("003",{name:"Thammasat University Hospital",image:"/img/thammasat.jpg"})


    return (
        <main className="p-5">
            <div className="flex flex-row my-5 p-20">
                <Image src={carDetail.data.picture} alt='Hospital Image' width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%]"/>
                <div className="text-md mx-5">{ carDetail.data.name }
                <div className="text-md mx-5">{ carDetail.data.address }</div>
                <div className="text-md mx-5">{ carDetail.data.district }</div>
                <div className="text-md mx-5">{ carDetail.data.province }</div>
                <div className="text-md mx-5">{ carDetail.data.postalcode }</div>
                <div className="text-md mx-5">{ carDetail.data.tel }</div>
                
                </div>
            </div>
        </main>
       
    )
}

// export async function generateStaticParams() {
//     return [{hid:'001'},{hid:'002'},{hid:'003'}]
    
// }
