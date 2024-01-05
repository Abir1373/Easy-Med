import art from '../../assets/Art_1.svg'
export default function PagaTitle({ MainTitle }) {
    return (
        <div className="bg-[#07332F] flex justify-around py-28 items-center">
            <div>
                <p className='text-gray-300 font-normal'>Home/{MainTitle}</p>
                <h2 className=" font-bold text-3xl text-white">{MainTitle}</h2>
            </div>
            <img src={art} alt="" className='z-30 hidden md:block' />
        </div>
    )
}
