import React from "react";

const Homepage = () => {
    return (
        <div className="px-2 pr-4 bg-slate-100 border-t-black-500 border">
            <div className="pt-20 pb-6">
                <div className=" shadow-lg rounded-full border-white bg-white text-bold w-3/4">
                    <div className="flex flex-row p-2 justify-between">
                        <div className="self-center pl-2">
                            <div className="bg-indigo-500 p-2 rounded-full"></div>
                        </div>
                        <div className="font-bold text-gray-600	">Best solution we offer you</div>
                        <div className="self-center pr-2">
                            <div className="bg-indigo-500 p-2 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4">
                <div className="text-4xl font-bold tracking-wide">
                    Make a good plan & grow your business
                </div>
            </div>
            <div className="py-2">
                <div className="">
                    We have almost 12+ years of experience for helping consulting services and business solutions.
                </div>
            </div>
            <div className="py-14">
                <div className="flex flex-row justify-between">
                    <div>
                        <button data-collapse-toggle="navbar-default" type="button"
                        className="bg-indigo-500 text-sm text-white text-gray-600 px-10 font-bold py-4 rounded-lg tracking-wide"
                        aria-controls="navbar-default" aria-expanded="false">
                    CASE STUDIES
                </button>
                    </div>
                    <div>
                        <button data-collapse-toggle="navbar-default" type="button"
                        className="rounded-full bg-yellow-300 p-4"
                        aria-controls="navbar-default" aria-expanded="false">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"
                             className="w-6 h-6">
                            <path fill-rule="evenodd"
                                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                  clip-rule="evenodd"/>
                        </svg>

                    </button>
                    </div>
                    <div className="self-center pr-2">
                        <div className="font-bold">SEE INSIDE</div>
                    </div>
                </div>
            </div>

            <div>
                <div className="py-10">
                    <img src="/img/slider/hero-1.png" alt="Flowbite Logo"/>
                </div>
            </div>
            <div className="py-2">
                <div className="font-bold text-2xl py-10">
                    24 Year of Experience
                </div>
                <div className="text-gray-600 italic">
                    “Lorem Ipsum is simply dummy text of printing and typesetting industry Ipsum is dummy text of the printing industry”.
                </div>
            </div>
        </div>
    )
}
export default Homepage