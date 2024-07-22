import React from "react";

export default function Portofolio() {
    return (
            <div id="portofolio" className="section">
                 <div className="container mx-auto max-w-[1200px] px-3 pt-30 pb-200">
                    <div
                     className="flex flex-col lg:align-center lg:flex-row justify-between mb-[50px]"
                     data-aos="fade-down"
                     data-aos-delay="0"
                     data-aos-easing="linear"
                     data-aos-duration="1400">
                        <div className="order-2 lg:order-1 mt-5">
                            <h4 className="text-yellow-600 font-secondary font-bold text-[24px]">
                                Study Case
                            </h4>
                            <div className="text-gradient font-primary max-w-[700px] mx-auto text-[24px]">
                                Beberapa Module Yang Telah Saya Pelajari Di Purwadhika class. 
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 text-center">
                            <h2 className="text-gradient font-primary max-w-[700px] mx-auto text-[50px]">
                                08
                            </h2>
                            <div>Completed Project</div>
                        </div>
                    </div>
                    <div
                     className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center"
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-easing="linear"
                    data-aos-duration="1200">
                        <div className="w-full">
                            <div className="bg-gradient h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
                                <img src="/images/introHTML.png" alt="" />
                                <div className="absolute p-5 bg-green-700 w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition">
                                    <div className="text-center w-full text-white mt-[-60px] group-hover:mt-[0] transition-all">
                                        <div className="bg-white rounded-full px-5 inline-block mb-2">
                                            <h4 className="text-gradient">
                                                Web Fundamental
                                            </h4>
                                        </div>
                                        <p>
                                            Belajar Pengetahuan Dasar Web : HTML, CSS, JAVA
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="bg-gradient h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
                                <img src="/images/algoritma.png" alt="" />
                                <div className="absolute p-5 bg-green-700 w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition">
                                    <div className="text-center w-full text-white mt-[-60px] group-hover:mt-[0] transition-all">
                                        <div className="bg-white rounded-full px-5 inline-block mb-2">
                                            <h4 className="text-gradient">
                                                Algoritma
                                            </h4>
                                        </div>
                                        <p>
                                            Belajar Algoritma Pemrograman Sebuah Web
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="bg-gradient h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
                                <img src="/images/loop.png" alt="" />
                                <div className="absolute p-5 bg-green-700 w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition">
                                    <div className="text-center w-full text-white mt-[-60px] group-hover:mt-[0] transition-all">
                                        <div className="bg-white rounded-full px-5 inline-block mb-2">
                                            <h4 className="text-gradient">
                                                Statement Looping Dan Kondisi
                                            </h4>
                                        </div>
                                        <p>
                                            Belajar Cara Kerja, Serta Fungsi Statement Looping Dan Kondisi
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="bg-gradient h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
                                <img src="/images/array.png" alt="" />
                                <div className="absolute p-5 bg-green-700 w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition">
                                    <div className="text-center w-full text-white mt-[-60px] group-hover:mt-[0] transition-all">
                                        <div className="bg-white rounded-full px-5 inline-block mb-2">
                                            <h4 className="text-gradient">
                                                Fungsi Array
                                            </h4>
                                        </div>
                                        <p>
                                            Belajar Fungsi Array, Dan Mengenal Macam-Macam Jenis Array
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="bg-gradient h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
                                <img src="/images/structur.png" alt="" />
                                <div className="absolute p-5 bg-green-700 w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition">
                                    <div className="text-center w-full text-white mt-[-60px] group-hover:mt-[0] transition-all">
                                        <div className="bg-white rounded-full px-5 inline-block mb-2">
                                            <h4 className="text-gradient">
                                                Struktur Data
                                            </h4>
                                        </div>
                                        <p>
                                            Belajar Struktur Data Yang Ada Pada Suatu Pemrograman
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="bg-gradient h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
                                <img src="/images/introGIT.png" alt="" />
                                <div className="absolute p-5 bg-green-700 w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition">
                                    <div className="text-center w-full text-white mt-[-60px] group-hover:mt-[0] transition-all">
                                        <div className="bg-white rounded-full px-5 inline-block mb-2">
                                            <h4 className="text-gradient">
                                                GIT HUB
                                            </h4>
                                        </div>
                                        <p>
                                            Belajar Bagaimana Menggunakan GIT, Dan Apa kelebihan Dari Github 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="bg-gradient h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
                                <img src="/images/advanceCSS.png" alt="" />
                                <div className="absolute p-5 bg-green-700 w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition">
                                    <div className="text-center w-full text-white mt-[-60px] group-hover:mt-[0] transition-all">
                                        <div className="bg-white rounded-full px-5 inline-block mb-2">
                                            <h4 className="text-gradient">
                                                CSS Lanjutan
                                            </h4>
                                        </div>
                                        <p>
                                            Mempelajari Cara Penggunaan CSS Yang Lebih Efisien
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="bg-gradient h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
                                <img src="/images/CSSF.png" alt="" />
                                <div className="absolute p-5 bg-green-700 w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition">
                                    <div className="text-center w-full text-white mt-[-60px] group-hover:mt-[0] transition-all">
                                        <div className="bg-white rounded-full px-5 inline-block mb-2">
                                            <h4 className="text-gradient">
                                                CSS Frame Work
                                            </h4>
                                        </div>
                                        <p>
                                            Mempelajari CSS Frame Work
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
    );
}
