import React from "react";

export default function Profile() {
    return (
            <div id="profile" className="section">
                <div className="container mx-auto max-w-[1200px] p-3 overflow-hidden">
                    <div className="font-primary text-center font-bold mb-12"
                     data-aos="zoom-in-up"
                     data-aos-duration="2000"
                     data-aos-delay="0">
                        <h4 className="text-yellow-600 mb-3 text-[35px]">
                            My Profile
                        </h4>
                        <h2 className="text-gradient font-primary max-w-[700px] mx-auto text-[15px]">
                           Saya Kelahiran Tahun 2006, Dan Saya Bertinggal Di Kota Tangerang, Saya Mempunyai Hobi Mengoding Dan Memasak, Karna Itu Saya Memutuskan Untuk Mempelajari Lebih Dalam Tentang Pemrograman Web Di Purwadhika <br />
                           <br />
                        <div className="hidden lg:block font-primary font-bold text-green-900 text-[20px]">
                           ADAPUN BAHASA PEMROGRAMAN YANG SAYA KUASAI :
                        </div>
                        </h2>
                    </div>
                    <div className="flex flex-col lg:flex-row items-start justify-between">
                        <div
                         className="text-center w-full max-w-[400px] mx-auto mb-[50px]"
                         data-aos="fade-right"
                         data-aos-delay="0"
                         data-aos-easing="linear"
                         data-aos-duration="1500">
                            <div className="min-w-[250px] min-h-[250px] pt-[-50px] rounded-full bg-gradient overflow-hidden">
                                <img src="images/ganteng.jpg" alt="profile" />
                            </div>
                            <h2 className="text-white font-primary font-bold text-[30px] mt-[20px] bg-gradient rounded-[20px]">
                                Abyan Muhammad Farhan
                            </h2>
                        </div>
                        <div
                         className="w-full lg:pt-[50px] lg:ml-[50px]"
                         data-aos="fade-left"
                         data-aos-delay="0"
                         data-aos-easing="linear"
                         data-aos-duration="1500">
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                                <div className="w-full">
                                    <div className="bg-gray-100 h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                                        <img src="/images/4.png" alt="" />
                                        <div className="absolute p-5 backdrop-blur-xl bg-gradient w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                                            <div className="text-center w-full text-white">
                                                <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                                                    <h4 className="text-gradient">
                                                        HTML
                                                    </h4>
                                                </div>
                                                <p>
                                                Bahasa Standar Dokumen Yang Dirancang Untuk Ditampilkan Di Internet. {" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="bg-gray-100 h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                                        <img src="/images/3.png" alt="" />
                                        <div className="absolute p-5 backdrop-blur-xl bg-gradient w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                                            <div className="text-center w-full text-white">
                                                <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                                                    <h4 className="text-gradient">
                                                        CSS
                                                    </h4>
                                                </div>
                                                <p>
                                                    Bahasa Yang Digunakan Untuk Mempercantik Tampilan Situs Web. {" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="bg-gray-100 h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                                        <img src="/images/java.png" alt="" />
                                        <div className="absolute p-5 backdrop-blur-xl bg-gradient w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                                            <div className="text-center w-full text-white">
                                                <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                                                    <h4 className="text-gradient">
                                                        Java Script
                                                    </h4>
                                                </div>
                                                <p>
                                                    Bahasa Pemrograman Yang Digunakan Untuk Membuat Aplikasi Web. {" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="bg-gray-100 h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                                        <img src="/images/react.png" alt="" />
                                        <div className="absolute p-5 backdrop-blur-xl bg-gradient w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                                            <div className="text-center w-full text-white">
                                                <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                                                    <h4 className="text-gradient">
                                                        React JS
                                                    </h4>
                                                </div>
                                                <p>
                                                    library JavaScript Yang Digunakan Untuk Membuat Aplikasi Web. {" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="bg-gray-100 h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                                        <img src="/images/tail.png" alt="" />
                                        <div className="absolute p-5 backdrop-blur-xl bg-gradient w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                                            <div className="text-center w-full text-white">
                                                <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                                                    <h4 className="text-gradient">
                                                        Tail Wind CSS
                                                    </h4>
                                                </div>
                                                <p>
                                                    Framework CSS Untuk Membuat Tampilan Web Yang Menarik. {" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="bg-gray-100 h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                                        <img src="/images/boot.png" alt="" />
                                        <div className="absolute p-5 backdrop-blur-xl bg-gradient w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                                            <div className="text-center w-full text-white">
                                                <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                                                    <h4 className="text-gradient">
                                                        Bootstrap
                                                    </h4>
                                                </div>
                                                <p>
                                                untuk membuat website responsive dan mobile-first. {" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
