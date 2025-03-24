import Navbar from "../components/common/Navbar/Navbar";

const SectionPage = () => {
    return (
        <>
            <Navbar />
            <div className="bg-[#F8F8FF] overflow-hidden">

                <div className="flex h-full pt-10 items-center bg-[#F8F8FF]">
                    <div className="w-1/2 h-full items-center flex justify-center flex-col">
                        <p className="w-96 text-black font-serif text-5xl font-normal leading-normal">Creative Designers</p>
                        <hr className="border-red-500 mb-16 w-80" style={{ borderTopWidth: '3px' }} />
                        <div className="items-center flex justify-center flex-col">
                            <img src="src/assets/images/sectionPage/png1.jpeg" className="w-2/3 h-1/2 border border-[#B4B4B8]"></img>
                            <div className="flex justify-start flex-col text-left ml-80 w-full">
                                <p className="font-semibold">Aarav Mehta</p>
                                <p className="text-red-500 font-semibold">United Kingdom</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/2 h-full items-center flex justify-center flex-col gap-7">
                        <div className="items-center w-full pl-10">
                            <img src="src/assets/images/sectionPage/png2.jpeg" className="w-3/4 h-2/3 border border-[#C7C8CC]"></img>
                            <div className="flex justify-start flex-col text-left ml-10">
                                <p className="font-semibold">Mia Thompson</p>
                                <p className="text-red-500 font-semibold">Australia</p>
                            </div>
                        </div>
                        <div>
                            <img src="src/assets/images/sectionPage/png3.jpeg" className="w-4/5 h-1/3 border border-[#B4B4B8]"></img>
                            <div className="flex justify-start flex-col text-left ml-10">
                                <p className="font-semibold">Liam Patel</p>
                                <p className="text-red-500 font-semibold">Canada</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="items-center w-custom-1307 flex justify-center m-5">
                    <hr className="border-red-500 w-5/6 " style={{ borderTopWidth: '3px' }} />
                </div>

                <div className="mt-10 h-full items-center bg-[#F8F8FF] flex justify-center">

                    <div className="w-1/2 h-full items-center flex justify-center flex-col gap-7">
                        <div>
                            <p className="w-96 text-black font-serif text-5xl font-normal leading-normal">Fashion Stylists</p>
                            <hr className="border-red-500 mb-16 w-96" style={{ borderTopWidth: '3px' }} />
                        </div>
                        <div className="items-center w-full pl-10 flex justify-start flex-col">
                            <img src="src/assets/images/sectionPage/png4.jpeg" className="w-3/4 h-2/3 border border-[#B4B4B8]"></img>
                            <div className="w-full flex justify-start flex-col text-left ml-60">
                                <p className="font-semibold">Sophia Williams</p>
                                <p className="text-red-500 font-semibold">France</p>
                            </div>
                        </div>
                        <div className="flex justify-start flex-col items-center w-full pl-5">
                            <img src="src/assets/images/sectionPage/png6.jpeg" className="w-4/5 h-1/3 border border-[#B4B4B8]"></img>
                            <div className="w-full flex justify-start flex-col text-left ml-60">
                                <p className="font-semibold">Ethan Rodriguez</p>
                                <p className="text-red-500 font-semibold">Italy</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/2 h-full items-center flex justify-center flex-col">
                        <div className="items-center flex justify-center flex-col">
                            <img src="src/assets/images/sectionPage/png5.jpeg" className="w-2/3 h-1/2 border border-[#B4B4B8]"></img>
                            <div className="flex justify-start flex-col text-left ml-80 w-full">
                                <p className="font-semibold">Olivia Garcia</p>
                                <p className="text-red-500 font-semibold">Japan</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="items-center w-custom-1307 flex justify-center m-5">
                    <hr className="border-red-500 w-5/6 " style={{ borderTopWidth: '3px' }} />
                </div>

                <div className="flex mt-10 h-full items-center bg-[#F8F8FF]">
                    <div className="w-1/2 h-full items-center flex justify-center flex-col">
                        <p className="w-96 text-black font-serif text-5xl font-normal leading-normal">Visual Artists</p>
                        <hr className="border-red-500 mb-16 w-80" style={{ borderTopWidth: '3px' }} />
                        <div className="items-center flex justify-center flex-col w-full">
                            <img src="src/assets/images/sectionPage/png7.1.jpeg" className="w-2/3 h-1/2 border border-[#B4B4B8]"></img>
                            <div className="flex justify-start flex-col text-left ml-80 w-full">
                                <p className="font-semibold">Noah Johnson</p>
                                <p className="text-red-500 font-semibold">Germany</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/2 h-full items-center flex justify-center flex-col gap-7">
                        <div className="items-center w-full pl-10">
                            <img src="src/assets/images/sectionPage/png8.jpeg" className="w-3/4 h-2/3 border border-[#C7C8CC]"></img>
                            <div className="flex justify-start flex-col text-left ml-10">
                                <p className="font-semibold">Emma Brown</p>
                                <p className="text-red-500 font-semibold">South Korea</p>
                            </div>
                        </div>
                        <div>
                            <img src="src/assets/images/sectionPage/png9.jpeg" className="w-4/5 h-1/3 border border-[#B4B4B8]"></img>
                            <div className="flex justify-start flex-col text-left ml-10">
                                <p className="font-semibold">Lucas Martinez</p>
                                <p className="text-red-500 font-semibold">Mexico</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="w-full mt-32 bg-gray-100">
                <div className="w-full h-full items-center flex justify-center flex-col gap-7">
                    <div>
                        <p className="w-96 text-black font-serif text-5xl font-normal leading-normal">Featured Galleries</p>
                        <hr className="border-red-500 mb-16 w-96" style={{ borderTopWidth: '3px' }} />
                    </div>
                    <div className="px-20">
                        <img src="src/assets/images/sectionPage/png10.jpeg" alt="Gallery Image" className="w-full h-auto object-cover shadow-lg" />
                    </div>
                </div>
                <button className='bg-black text-white w-1/12 m-auto py-2 mt-12 rounded-3xl' type="submit">Explore More</button>     
            </section>
        </>
    );
}

export default SectionPage;
