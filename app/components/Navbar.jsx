import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex gap-2 items-center justify-center'>
    <Link className='bg-green-600 px-4 py-2 rounded-sm' href="/">Home</Link>
    <Link className='bg-green-600 px-4 py-2 rounded-sm' href="/categories/create">Create Category</Link>
    </div>
  )
}

export default Navbar