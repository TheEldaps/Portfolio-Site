

export default function Hero() {
    return (
        <section className='h-[60vh] border-b md:h-screen flex flex-col items-center justify-center px-5'>

            <h1 className='text-[#f8fafc] text-4xl md:text-6xl lg:text-9xl text-center font-bold mb-5' >Hi, I'm James Oluwatobiloba.  </h1>
            <h2 className='text-[#22D3EE] font-bold mb-4'>A Frontend Developer & UI Enthusiast</h2>
            <p className='text-center mb-5 text-[#94a3b8]'>I craft modern responsive web apps with clean UI </p>
            <div className=' flex gap-3'>
                <button className='bg-[#4f46e5]  rounded-md text-sm px-4 py-1 cursor-pointer hover:bg-[indigo]'>View My Work</button>
                {/* <button className='bg-[purple] border rounded-md text-[white] px-2 py-1'>Download CV</button> */}
                <button className='bg-[#6366f1]  rounded-md text-[white] px-2 py-1 cursor-pointer hover:bg-[indigo]'>Contact Me
                </button>
            </div>
        </section>
    )
}