'use client'
import { hostname } from "os"
import Card from "./Card"
import { useReducer } from "react"
import Link from "next/link"

export default function CardPanel() {
    const compareReducer = (compareList: Map<string, number>, action: { type: string, hospitalName: string, rating: number }) => {
        switch (action.type) {
            case 'add': {
                if (action.rating === 0) {
                    compareList.delete(action.hospitalName)
                    return new Map(compareList);
                } else {
                    return new Map(compareList.set(action.hospitalName, action.rating));
                }
            }
            case 'remove': {
                compareList.delete(action.hospitalName)
                return new Map(compareList);
            }
            default: return compareList;
        }
    }

    const [compareList, dispatchCompare] = useReducer(compareReducer, new Map<string, number>())
    const handleRemove = (hospital: string, rating: number) => {
        dispatchCompare({ type: 'remove', hospitalName: hospital, rating})
    };

     // Mock Data 
     const mockCarRepo = [
        {hid:"001",name:"Chulalongkorn Hospital",image:"/img/chula.jpg"},
        {hid:"002",name:"Rajavithi Hospital",image:"/img/rajavithi.jpg"},
        {hid:"003",name:"Thammasat University Hospital",image:"/img/thammasat.jpg"},
        
    ]

    return (
        <div>
            <div style={{margin:"20px", display:"flex", flexDirection:"row" , flexWrap:"wrap", justifyContent:"space-around",alignContent:"space-around"}}>
                {
                    mockCarRepo.map((hospitalItem)=>(
                        <Link href={`/hospital/${hospitalItem.hid}`} className="w-1/5">
                            <Card hospitalName={hospitalItem.name} imgsrc={hospitalItem.image} star={5} onCompare={(hospital:string, rating:number) => dispatchCompare({type: 'add', hospitalName: hospital, rating})} onRemove={handleRemove}/>
                        </Link>
                       
                    ))
                }
                
            </div>
            {Array.from(compareList).map(([hospital, rating]) => 
                <div key={hospital} data-testid={hospital} onClick={() => dispatchCompare({ type: 'remove', hospitalName: hospital, rating })}>{hospital} Rating: {rating}</div>
            )}
        </div>
    )
}
