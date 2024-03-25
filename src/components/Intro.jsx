
const Intro = () => {
    return (
        <div className="container mt-20 h-[92vh] flex flex-col lg:flex-row w-full max-w-[100vw] bg-[rgba(244,244,244,255)]" >
            <div className="txt lg:max-w-[35rem] lg:w-1/2 h-[93vh] lg:h-auto lg:leading-loose mx-auto lg:ml-[20vw]  mt-[10vh] lg:mt-[30vh] text-[2vw] lg:text-[20px] lg:text-base" >
                <span className="text-blue-500 lg:text-[2.6rem] text-[5vw]">Welcome to MindMap Master:</span> <br /> Your Ultimate Web App for Visualizing Ideas!
                <br />
                Unleash Your Creativity with Intuitive Mind Mapping Tools,
                <br />
                Organize Your Thoughts Effortlessly,
                <br />
                Start Mapping Your Way to Success Today!
            </div>
            <div className="img lg:w-[50%]" >
                <img className="max-w-[full] h-[40rem] lg:max-w-[70%] mx-auto lg:ml-[5vw] lg:mt-[8vh] mt-10vh" src="https://img.freepik.com/premium-vector/modern-mindmap-with-technological-icons_23-2147670861.jpg" alt="mind map diagram" data-aos="fade-left" />
            </div>
        </div>
    )
}

export default Intro
