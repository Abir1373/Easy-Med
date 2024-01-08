import teeth_1 from '../../assets/Services/Dantist/Teeth.svg'
export default function Servicecard() {
    return (
        <div className='flex flex-row gap-2 items-center'>
            < div className='bg-[#FF41551A] rounded-md p-2' >
                <img src={teeth_1} alt="" />
            </div >
            <div>
                <p className='font-bold text-xl'>Teeth Orthodontics</p>
            </div>

        </div >
    )
}
