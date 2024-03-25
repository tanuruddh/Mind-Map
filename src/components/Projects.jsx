
import Element from './Element'

const Projects = () => {
    return (
        <div className="mt-20">
            <div className="h-[20vh] flex justify-center items-center flex-col">
                <h2 className='text-5xl mb-[2vh] font-bold'>Our Mind-Map</h2>
                <p className="mb-[4vh]">these are the our current mind-map</p>
            </div>
            <div className="flex lg:justify-around lg:px-[10rem] px-10 lg:flex-row flex-col gap-[5vh] lg:min-w-[80vw]">
                <Element img={"car manu.jpg"} heading={"Car Manufacturing mind-map"} para={"loremdfk vsdfvsv vaj erkefvoier  vaerj efvaejr veorv ervjre ve"} />
                <Element img={"bike.jpeg"} heading={"Bike Manufacting mind-map"} para={"loremdfk vsdfvsv vaj erkefvoier  vaerj efvaejr veorv ervjre ve"} />
                <Element img={"full-stack.jpeg"} heading={"Full-Stack developer mind-map"} para={"loremdfk vsdfvsv vaj erkefvoier  vaerj efvaejr veorv ervjre ve"} />
            </div>
            <div>
            </div>

        </div>
    )
}

export default Projects
