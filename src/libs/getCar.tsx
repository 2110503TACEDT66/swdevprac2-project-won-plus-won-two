export default async function getCar(id:string) {
    const response = await fetch(`http://projectreservationjack.us-east-1.elasticbeanstalk.com/api/v1/restaurants/${id}`)
    if(!response.ok){
        throw new Error("Failed to fetch car")
    }
    return await response.json()
}