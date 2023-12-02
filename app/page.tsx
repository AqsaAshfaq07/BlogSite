import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className=' flex flex-row flex-wrap justify-center'>
        <Link href='/dir1'><Image className='m-10 h-80' src="/img/image1.png" width={300} height={300} alt='' /></Link>
        <Link href='/dir2'><Image className='m-10 h-80' src="/img/image2.png" width={300} height={300} alt='' /></Link>
        <Link href='/dir3'><Image className='m-10 h-80' src="/img/image3.png" width={300} height={300} alt='' /></Link>
        <Link href='/dir4'><Image className='m-10 h-80' src="/img/image4.png" width={300} height={300} alt='' /></Link>
        <Link href='/dir5'><Image className='m-10 h-80' src="/img/image5.png" width={300} height={300} alt='' /></Link>
      </div>
    </main>
  )
}