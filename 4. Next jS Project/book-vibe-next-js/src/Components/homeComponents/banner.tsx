import React from 'react';
import banner from "@/assets/hero_img.png"
import Image from 'next/image';

const Banner = () => {
    return (
        <div className="w-10/12 mx-auto my-10 overflow-hidden rounded-3xl bg-linear-to-br from-yellow-50 via-orange-50 to-amber-100 px-8 py-10 shadow-sm md:px-14 md:py-14">
            <div className="grid items-center gap-10 grid-cols-2">

                <div className="space-y-7">
                    <h2 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl">
                        Books to freshen up
                        your bookshelf
                    </h2>

                    <button className="btn rounded-xl border-0 bg-orange-500 px-7 text-white shadow-lg shadow-orange-200 transition-all hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl">
                        View The List
                    </button>
                </div>

                <div className="flex justify-center pl-10">
                    <Image
                        src={banner}
                        alt="Banner Image"
                        className="justify-center"
                    />
                </div>


            </div>
        </div>
    );
};

export default Banner;