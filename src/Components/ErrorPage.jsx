import notFound from '../assets/not-found.svg'
export default function ErrorPage() {
    return (
        <div className='w-2/3 mx-auto my-auto'>
            <img src={notFound} alt="" className='w-full h-full' />
        </div>
    )
}
