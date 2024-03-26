import ReviewCard from "./ReviewCard"

export default async function ReviewCatalog({carJson}:{carJson:object}) {
    const carJsonReady = await carJson
    return (
        <>
        {carJsonReady.count} reviews
        <div style={{margin:"20px", display:"flex", flexDirection:"row" , flexWrap:"wrap", justifyContent:"space-around",alignContent:"space-around"}}>
                {
                    carJsonReady.data.map((carItem:object)=>(
                        <div className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%] p-2 sm:p-4 md:p-4 lg:p-8">   
                            <ReviewCard name={carItem.user} comment={carItem.comment} rating={carItem.rating}/>          
                        </div>
                    ))
                }
                
            </div>
        </>
    )
}