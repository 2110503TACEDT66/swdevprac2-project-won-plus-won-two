import Link from 'next/link';

export default function ReviewCard( {name,comment,rating} : 
    {name : string, comment: string, rating: number} ) { 
    
    return (
        <main>
            <div className='w-[330px] h-[300px] rounded-lg bg-slate-50 shadow-lg'>
                    <div>
                        <div className='w-full h-[9%] pt-5 font-bold '>{name}</div>
                        <div className='w-full h-[9%] p-[5px] font-bold px-2'>{comment}</div>
                        <div className='w-full h-[6%] p-[3px] px-5'>Date :{rating}</div>
                    </div>
            </div>
        </main>
       
    );
}

