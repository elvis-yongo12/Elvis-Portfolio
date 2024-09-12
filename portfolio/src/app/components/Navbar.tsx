import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <div className='hidden lg:block'>
      <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-blackish'>
        <Link className='navbar__link relative' href="/">Home</Link>
        <Link className='navbar__link relative' href="#">About</Link>
        <Link className='navbar__link relative' href="#">Services</Link>
        <Link className='navbar__link relative' href="#">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar;