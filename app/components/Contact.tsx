import SectionHeader from "./SectionHeader"
import SectionDescription from "./SectionDescription"
import ContactCard from "./ContactCard"

export default function Contact() {
    return (
        <section className='px-5 min-h-screen md:px-10 lg:px-20 lg:pt-20 font-[spectral] bg-[linear-gradient(135deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.06)_18%,rgba(255,255,255,0)_38%)]'>
            <SectionHeader title='Get in Touch' />
            <SectionDescription description='Have a project in mind or just want to say hello? Drop me a message and lets create something amazing together' />

            <section className='md:flex gap-10 max-w-[80%] py-10 mx-auto border'>
                <form action="" className='border py-5 px-5 mb-5 rounded-3xl min-w-[50%]'>

                    <div className="mb-3">
                        <label htmlFor="name" className='font-[DMSerif]'>Name:</label>
                        <input type="text" id='name' className='block border rounded-sm w-full px-2 font-[spectral]' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="name" className='font-[DMSerif]'>Email:</label>
                        <input type="text" id='email' className='block border rounded-sm w-full font-[spectral] px-2' />
                    </div>

                    <div>
                        <label htmlFor="message" className='font-[DMSerif]'>Message:</label>
                        <textarea id='message' cols={40} rows={5} className='border block font-[spectral] px-2 w-full'></textarea>
                    </div>
                    <button className='bg-[purple] px-4 py-2 rounded-md block m-auto mt-5 cursor-pointer hover:bg-[blue]'>Send Message</button>
                </form>

                <section className=''>

                    <h3 className='font-[DMSerif] text-lg mb-2'>Let's Connect</h3>
                    <p>I'm always excited to work on new projects and collaborate with new people. Whether you have a specific project in mind or just want to explore possibilities, i'll love to hear from you </p>
                    <div>
                        <ContactCard title='Email' data='Adejames97@gmail.com' image={ } />
                        <ContactCard title='Phone' data='+2348080392216' image={ } />
                        <ContactCard title='Whatsapp' data='+2348080392216' image={ } />

                    </div>
                </section>
            </section>
        </section >
    )
}
