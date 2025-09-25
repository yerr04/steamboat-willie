export default function OurGame() {
    return (
        <div className="grid grid-rows-5 bg-red-600">
            <div className="bg-red-400 text-white w-19/20 mx-auto rounded-lg shadow-lg mt-10 mb-10">
                <div className="p-4 grid grid-cols-2 gap-4 border-b-2 border-[#faf5ed]">
                    <div className="p-4 text-wrap">
                        <h1 className="text-3xl font-bold">Your Journey Begins Here</h1>
                        <p className="mt-4 pb-4">Explore a world of the past by sailing on a steamboat where you'll discover interesting areas, people, and challenges!</p>
                        <div className="grid grid-cols-3 gap-4">
                            <button className="bg-[#faeedc] text-black px-4 py-2 rounded-xl hover:bg-[#f0e1c6]">Buy Now</button>
                            <button className="bg-transparent border-2 border-[#faeedc] text-white px-2 py-2 rounded-xl hover:bg-[#faeedc] hover:text-black">Learn More</button>
                        </div>
                    </div>
                    <div className="p-4">
                        <img src="/assets/Steamboat-Willie.gif" alt="Steamboat Scene" className="rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
            <div className="bg-red-400 text-white w-19/20 mx-auto rounded-lg shadow-lg mb-10">
                <div className="p-4 grid grid-cols-2 gap-4 border-b-2 border-[#faf5ed]">
                    <div className="p-4">
                        <img src="/assets/Steamboat-Willie-2.gif" alt="Steamboat Scene" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="p-4 text-wrap">
                        <h1 className="text-3xl font-bold">Embark on an Unforgettable Adventure</h1>
                        <p className="mt-4 pb-4">Set sail on a thrilling journey through time, where every turn brings new challenges and unforgettable experiences. Navigate treacherous waters, uncover hidden secrets, and forge your path in a world filled with wonder and excitement.</p>
                        <div className="grid grid-cols-3 gap-4">
                            <button className="bg-[#faeedc] text-black px-4 py-2 rounded-xl hover:bg-[#f0e1c6]">Buy Now</button>
                            <button className="bg-transparent border-2 border-[#faeedc] text-white px-2 py-2 rounded-xl hover:bg-[#faeedc] hover:text-black">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
