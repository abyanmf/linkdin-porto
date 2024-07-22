import React, { useEffect } from 'react';
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Header() {
    useEffect(() => {
    }, []); // Dependencies array here 
        return (
            <div className='container mx-auto max-w-[1200px] px-3 relative lg:absolute left-0 right-0 '>
                <div className='flex justify-between py-5 items-center'>
                    <div className='text-gradient font-third'
                    data-aos="fade-down"
                    data-aos-delay="0"
                    data-aos-duration="2000">
                        <a href="/">
                            <h1 className='text-[30px] text-yellow-600 leading-none font-bold'>
                                ABYAN
                            </h1>
                            <h4 className='font-normal leading-none'>
                                MUHAMMAD FARHAN
                            </h4>
                        </a>
                    </div>
                    <div className='flex items-center space-x-3'
                    data-aos="fade-down"
                    data-aos-delay="0"
                    data-aos-duration="2000">
                        <a href='/'>
                        <BsGithub />
                        </a>
                        <a href='/'>
                        <BsLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    
    