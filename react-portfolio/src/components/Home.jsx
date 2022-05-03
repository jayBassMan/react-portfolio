import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-content h-full'>
                <p>Hello, My name is</p>
                <h1>Jonathan Johnson</h1>
                <h2>I'm a Full Stack Developer.</h2>
                <p>Im a full-stackslslkd lorem ipsum dolor sit amet, consectetur
                    lorem ipsum dolor sit amet
                </p>
                <div>
                    <button>View Work<HiArrowNarrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default Home