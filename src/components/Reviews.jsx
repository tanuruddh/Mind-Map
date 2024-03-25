
const Reviews = () => {
    return (
        <>
            <div className='mt-[5rem] mb-[5rem]' >
                <div className="h-[20vh] flex justify-center items-center flex-col">
                    <h2 className='text-[2rem] mb-[2vh] font-bold'>What our customer says </h2>
                    <p className="mb-[4vh]">Reviews of our services around the world</p>
                </div>
                <div className="flex lg:justify-around flex-col lg:flex-row gap-[5vh] mx-[10vw]">

                    <div className="bg-pink-100 flex flex-row pl-8 pt-8 lg:max-w-[35vw] lg:min-h-[25vh] pb-[4vh]" data-aos="fade-left">
                        <img src="/men.avif" className="h-[6vh] w-[6vh] rounded-full" alt="" />
                        <div className='ml-[2.5rem]'>

                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, quidem adipisci! Quaerat dignissimos quidem ut. Ducimus, minima libero? Maxime, dolore! Exercitationem explicabo illo quisquam rerum!</p>
                            <h2 className='text-3xl font-semibold  mt-[1.5rem]'>Trp Singh</h2>
                            <div className='mt-[1rem]'>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star-half"></i>                            </div>
                        </div>

                    </div>
                    <div className="bg-pink-100 flex flex-row pl-8 pt-8 lg:max-w-[35vw] lg:min-h-[25vh] pb-[4vh]" data-aos="fade-left">
                        <img src="/women.webp" className="h-[6vh] w-[6vh] rounded-full" alt="" />
                        <div className='ml-[2.5rem]'>

                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, quidem adipisci! Quaerat dignissimos quidem ut. Ducimus, minima libero? Maxime, dolore! Exercitationem explicabo illo quisquam rerum!</p>
                            <h2 className='text-3xl font-semibold  mt-[1.5rem]'>Trp Singh</h2>
                            <div className='mt-[1rem]'>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star-half"></i>                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Reviews
