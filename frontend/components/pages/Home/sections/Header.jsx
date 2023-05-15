import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <div className='bg-primary h-[60px] text-white'>
        <div className='container flex justify-between items-center'>
            <Link href={'/'}>
            <h3 className='font-bold text-2xl'>Movie Media</h3>
            </Link>
            <div className='flex items-center space-x-2'>
                <p>John Doe</p>
                <div className='w-[40px] h-[40px] overflow-hidden rounded-full'>
                    <Image src={"https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg"} alt={"Profile"} width={40} height={40} />
                </div>
            </div>

        </div>

    </div>
  )
}

export default Header