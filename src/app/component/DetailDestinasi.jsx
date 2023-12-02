import { CiLocationOn } from "react-icons/ci";
const DetailDestinasi = () => {
    return (
        <>
            <div className="flex flex-col container lg:flex lg:flex-row">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQibtz8R5cLyjJ8gUVc_dYvdaSyc5U-tRl9tg" className="lg:w-[550px] lg:h-[900px]" />
                <div className="mt-[60px] w-full ps-[40px] pe-[40px] lg:pe-[80px] ">
                    <p className="text-red-600 font-semibold">Destinasi / Jawa Timur</p>
                    <hr className="mt-4 mb-6" />
                    <div className="">
                        <h1 className="text-slate-800 font-bold text-[40px]">Gunung Bromo</h1>
                        <p className="text-slate-500 mt-2">Minimum Keberangkatan 10 Orang, Syarat & Ketentuan Berlaku</p>
                        <div className="relative mt-10">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <input type="date" className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 " placeholder="Select date" />
                        </div>
                        <div className="my-5 grid grid-cols-2">
                            <div className="flex gap-1 items-center">
                                <CiLocationOn className="flex text-red-600 text-[20px] lg:text-[30px] " />
                                <p className="font-semibold text-[13px] lg:text-[18px]">Titik Penjemputan</p>
                            </div>
                            <div className="w-full">
                                <select className="border rounded-md border-gray-300 text-slate-500 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1 lg:p-2.5 ">
                                    <option selected>Kavling Ninggar</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15840.210566889467!2d107.53869245!3d-7.003084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ef63806c5dcf%3A0x9e72c6167cefb2e0!2sKavling%20Ninggar!5e0!3m2!1sid!2sid!4v1701420786326!5m2!1sid!2sid"
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            />
                        </div>
                        <div className="mt-10">
                            <div className="grid grid-cols-2 mb-4">
                                <p className="font-semibold text-slate-700 text-[16px]">Harga berdasarkan jumlah orang</p>
                                <p className="text-end"><b className="text-red-500 text-[17px]">Rp 1.200.000</b> /Orang</p>
                            </div>
                            <div className="w-full h-4 mb-2 bg-gray-200 rounded-full ">
                                <div className="h-4 bg-red-500 rounded-full" style={{ width: "10%" }}></div>
                            </div>
                            <p className="text-slate-600">3 dari 10 kuota jumlah orang</p>
                            <div className="flex gap-3 mt-4">
                                <div className="border w-[125px] py-2 flex items-center justify-between">
                                    <div className="grid grid-cols-3 gap-5">
                                        <div className="w-6 h-6 border border-slate-400 rounded-full flex justify-center items-center p-2 ms-1">
                                            <p className="text-[25px] mb-[5px] text-slate-400">-</p>
                                        </div>
                                        <div className="w-6 h-6 flex justify-center items-center p-2">
                                            <p className="text-black font-bold">1</p>
                                        </div>
                                        <div className="w-6 h-6 border border-red-500 rounded-full flex justify-center items-center p-2">
                                            <p className="text-[20px] mb-[3px] text-red-500 font-bold">+</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <button className="text-white bg-red-600 py-[15px] px-[20px]">Pesan Sekarang</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container w-full mt-[100px] lg:mx-[90px]">
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start lg:gap-9 mb-2">
                    <p className="font-semibold text-[18px] text-red-500 lg:text-[22px]">Detail Perjalanan</p>
                    <p className="font-semibold text-[18px] text-slate-400 lg:text-[22px]">Syarat & Ketentuan</p>
                    <p className="font-semibold text-[18px] text-slate-400 lg:text-[22px]">Galeri</p>
                    <p className="font-semibold text-[18px] text-slate-400 lg:text-[22px]">Ulasan</p>
                </div>
                <hr />
                <div className="mt-[60px]">
                    <div className="mx-[20px] gap-5 lg:mx-[0px] flex lg:gap-20">
                        <div className="bg-red-500 h-[100px] flex flex-col justify-center w-[100px] lg:h-[105px] lg:w-[95px]">
                            <p className="text-white text-[22px] text-center">Hari</p>
                            <p className="text-white text-[22px] text-center">1</p>
                        </div>
                        <div className="space-y-2">
                            <p className="font-semibold text-slate-700">20.30</p>
                            <p className="font-semibold text-slate-700">21.00</p>
                        </div>
                        <div className="space-y-2">
                            <p className="font-semibold text-slate-700">Berkumpul di meeting point</p>
                            <p className="font-semibold text-slate-700">Perjalanan menuju ke Batu</p>
                        </div>
                    </div>
                </div>
                <div className="mt-[60px]">
                    <div className="mx-[20px] gap-5 lg:mx-[0px] flex lg:gap-20">
                        <div className="bg-red-500 h-[100px] flex flex-col justify-center w-[100px] lg:h-[105px] lg:w-[95px]">
                            <p className="text-white text-[22px] text-center">Hari</p>
                            <p className="text-white text-[22px] text-center">1</p>
                        </div>
                        <div className="space-y-2">
                            <p className="font-semibold text-slate-700">20.30</p>
                            <p className="font-semibold text-slate-700">21.00</p>
                        </div>
                        <div className="space-y-2">
                            <p className="font-semibold text-slate-700">Berkumpul di meeting point</p>
                            <p className="font-semibold text-slate-700">Perjalanan menuju ke Batu</p>
                        </div>
                    </div>
                </div>
                <div className="mt-[60px]">
                    <div className="mx-[20px] gap-5 lg:mx-[0px] flex lg:gap-20">
                        <div className="bg-red-500 h-[100px] flex flex-col justify-center w-[100px] lg:h-[105px] lg:w-[95px]">
                            <p className="text-white text-[22px] text-center">Hari</p>
                            <p className="text-white text-[22px] text-center">1</p>
                        </div>
                        <div className="space-y-2">
                            <p className="font-semibold text-slate-700">20.30</p>
                            <p className="font-semibold text-slate-700">21.00</p>
                        </div>
                        <div className="space-y-2">
                            <p className="font-semibold text-slate-700">Berkumpul di meeting point</p>
                            <p className="font-semibold text-slate-700">Perjalanan menuju ke Batu</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailDestinasi;
