import { StaticImageData } from "next/image"
import Image from "next/image"

export default function ContactCard({ title, image, data }: { title: string, image: StaticImageData, data: string }) {
    return (
        <div className='flex'>
            <Image src={image} width={200} height={200} alt='contact data image' />
            <div>
                <h4>{title}</h4>
                <p>{data}</p>
            </div>
        </div>
    )
}
