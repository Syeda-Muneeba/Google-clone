
import { TbGridDots } from 'react-icons/tb';
import { IoPersonCircleOutline } from 'react-icons/io5'
import Link from 'next/link';

const Header: React.FC = () => {

    return (
        <div className='flex justify-end pr-4 pt-3 space-x-4 items-center'>
            <Link href="https://mail.google.com" className='text-sm hover:underline cursor-pointer'>Gmail</Link>
            <Link href="https://images.google.com" className='text-sm hover:underline cursor-pointer'>Images</Link>
            <TbGridDots className='text-4xl hover:bg-gray-200 p-2 rounded-full' />
            <IoPersonCircleOutline className='rounded-full text-2xl object-cover'/>
        </div>
    )
}

export default Header;