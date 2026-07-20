'use client';
import Passkey from '@/app/_assets/Passkey.jpg';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const [menu, setMenu] = useState<Boolean>(false);
  const pathname = usePathname();

  const showMenu = () => {
    setMenu(!menu);
  }
  return (
    <>
      <nav className='fixed flex flex-row m-2 mx-auto min-w-[98%] max-w-[99%] py-1 px-2.5 border-[6px] rounded-2xl border-primary items-center justify-between bg-linear-to-r from-gray-300 via-white to-gray-100'>
        <div>
          <Image src={Passkey} alt='Passkey' width={40} height={40} />
        </div>
        <div className='hidden flex-row text-primary gap-4 xl:flex md:flex sm:hidden'>
          <Link className={`opacity-45 hover:opacity-100 ${pathname == '/' && 'opacity-90'}`} href={'/'}>Home</Link>
          <Link className={`opacity-45 hover:opacity-100 ${pathname == '/contact' && 'opacity-90'}`} href={'/contact'}>Contact</Link>
          <Link className={`opacity-45 hover:opacity-100 ${pathname == '/features' && 'opacity-90'}`} href={'/features'}>Features</Link>
        </div>
        <div className='flex flex-row gap-5 px-1'>
          <Link href={'/login'} className='text-primary/70 px-3 py-0.5 outline-4 justify-center outline-primary opacity-70 rounded-md border content-center border-secondary bg-secondary/80 hover:bg-primary/70 hover:text-secondary transition-all duration-500'>Login</Link>
          <Link href={'/signup'} className='text-secondary px-3 py-0.5 outline-4 justify-center outline-primary opacity-70 rounded-md border content-center border-secondary bg-primary/75 hover:bg-secondary/80 hover:text-primary/70 transition-all duration-500 xl:block md:block sm:hidden hidden'>Signup</Link>
          {menu ? (
            <X
              className='block xl:hidden md:hidden sm:block text-primary w-7.5 h-7.5 transition-all duration-700'
              onClick={showMenu}
            />
          ) : (
            <Menu
              className='block xl:hidden md:hidden sm:block text-primary w-7.5 h-7.5 transition-all duration-700'
              onClick={showMenu}
            />
          )}
        </div>
      </nav>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out
                    ${menu ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
                  `}
      >
        <ul className='flex flex-col justify-center items-center px-5 pt-1.5 pb-3 gap-2 text-primary'>
          <li className='block'>
            <Link className={`opacity-45 hover:opacity-100 ${pathname == '/' && 'opacity-90'}`} href={'/'}>Home</Link>
          </li>
          <li className='block'>
            <Link className={`opacity-45 hover:opacity-100 ${pathname == '/contact' && 'opacity-90'}`} href={'/contact'}>Contact</Link>
          </li>
          <li className='block'>
            <Link className={`opacity-45 hover:opacity-100 ${pathname == '/features' && 'opacity-90'}`} href={'features'}>Features</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar;