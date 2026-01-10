import SectionHeader from "./SectionHeader"
import SectionDescription from "./SectionDescription"

export default function Contact() {
    return (
        <section className='px-5 min-h-screen md:px-10 lg:px-20'>
            <SectionHeader title='Get in Touch' />
            <SectionDescription description='Have a project in mind or just want to say hello? Drop me a message and lets create something amazing together' />

            <section>
                <form action="">

                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' />
                    </div>
                    <div>
                        <label htmlFor="name">Email</label>
                        <input type="text" id='email' />
                    </div>

                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea id='message' cols={3}></textarea>
                    </div>
                    <button>Send Message</button>
                </form>

                <section>
                    <h3>Let's Connect</h3>
                    <p>I'm always excited to work on new projects and collaborate with new people. Whether you have a specific project in mind or just want to explore possibilities, ill love to hear from you </p>
                    <div>

                    </div>
                </section>
            </section>
        </section>
    )
}
