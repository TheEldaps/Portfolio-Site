

export default function Hero() {
    return (
        <section className='h-[60vh] border md:h-screen flex flex-col items-center justify-center px-5'>

            <h1 className='text-4xl md:text-6xl lg:text-9xl text-center font-bold mb-5' >Hi, I'm James Oluwatobiloba. A Frontend Developer </h1>
            <p className='text-center mb-5'>I craft modern responsive web apps with clean UI </p>
            <div className=' flex gap-3'>
                <button className='bg-[purple] border rounded-md text-[white] px-2 py-1'>Hire me</button>
                <button className='bg-[purple] border rounded-md text-[white] px-2 py-1'>Download CV</button>
                <button className='bg-[purple] border rounded-md text-[white] px-2 py-1 cursor-pointer hover:bg-[]'>View my work
                </button>
            </div>
        </section>
    )
}