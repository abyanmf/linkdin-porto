import { TypeAnimation } from 'react-type-animation';
import React from "react";

export default function Banner() {
    return (
        <div id="home" 
        className="section container mx-auto max-w-[1200px] px-3 items-center">
            <div className="w-full" 
            data-aos="zoom-in"
            data-aos-duration="2000"
            data-aos-delay="0">
                <div className="block text-center text-yellow-600 font-primary font-bold text-[30px]">
                    Hello I Am
                
        <div>
        <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Student Of Purwadhika",
          3000, // wait 1s before replacing "Mice" with "Hamsters"
          "Front-End Developer",
          3000,
          "Back-End Developer",
          3000,
          "Jungler Idaman",
          3000
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        className="ml-3 text-gradient"
      />
        </div>
            </div>
                <div className=" text-green-900 font-primary font-bold max-w-[750px] text-center mx-auto mt-5">
                    Jadi Cerita Nya Saya Diberi Tugas Oleh Ka Ilham Untuk Membuat Portofolio Menggunakan React, Akhir Nya Saya Memutuskan Membuat Tampilan Web Nya Seperti Ini, Monmaap Kalo Terlalu Colorfull hehe.
                </div>
        </div>    
    </div>  
    );
}
