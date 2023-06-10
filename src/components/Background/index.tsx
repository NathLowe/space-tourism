import Image from 'next/image'
import './index.css'

// Types
interface BackgroundProps {
    mobile: string,
    tablet: string,
    desktop: string,
}


export default function Background({ mobile, tablet, desktop }: BackgroundProps) {
  return (
    <div className="fixed z-0 h-screen w-screen top-0 left-0">
        <picture>
            <source media="(min-width:1024px)" srcSet={desktop}/>
            <source media="(min-width:768px)" srcSet={tablet} />
            <Image src={mobile} className='object-cover' alt="Background Image" fill />
        </picture>
    </div>
  )
}
