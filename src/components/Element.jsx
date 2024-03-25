import React from 'react'
import { Link } from 'react-router-dom'

const Element = ({ img, heading, para }) => {
    const str = heading;
    return (
        <Link to={`/mind-map/${str.split(' ')[0] + str.split(' ')[1]}`}>
            <div className="ele lg:max-h-[70vh] lg:w-[20vw] cursor-pointer w-[100%] " data-aos="fade-left" >
                <div>
                    <img src={img} alt="" className="min-h-[40vh] align-middle w-[100%] rounded-xl" />
                </div>
                <h2 className=" text-2xl font-bold mt-4 ">
                    {heading}
                </h2>
                <p className="mt-3">{para}</p>
            </div>
        </Link>
    )
}

export default Element
