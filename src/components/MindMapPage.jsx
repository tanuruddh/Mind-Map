import { useEffect } from 'react'
import MindMap from './MindMap.jsx';
import { useParams } from 'react-router-dom';

const MindMapPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])
    const { name } = useParams();
    return (
        <div className='mt-[10vh] h-[100%]  ' >
            <div className='lg:ml-[5vw] flex flex-col lg:flex-row mb-28 '>
                <div className='max-w-[100vw] mx-10'>

                    <h1 className='lg:text-[3vw] text-[8vw] font-bold text-blue-500 mt-[10rem]'>{name}</h1>
                    <h3 className='text-blue-300 text-3xl font-bold'>Mind Map</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum velit praesentium quidem, amet, accusantium totam officia quisquam voluptatem esse laboriosam quaerat odio. Maiores optio quasi nulla rerum. Recusandae beatae perferendis facilis, ullam aliquam laudantium esse quod veniam reiciendis temporibus tenetur modi enim rerum, at iusto quasi sunt et voluptates r.</p>
                </div>
                <img src="car manu.jpg" className="lg:max-w-[40vw] w-50vw lg:max-h-[60rem] mt-[10vh] mx-10 lg:ml-28" alt="" />
            </div>
            <MindMap />

        </div>
    )
}

export default MindMapPage
