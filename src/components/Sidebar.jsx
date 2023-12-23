import React from 'react'
import useSidebar from '../hooks/UseSidebar'
import { IoMdArrowForward } from "react-icons/io";

const Sidebar = () => {

  const {isOpen, setIsOpen,  handleClose  } = useSidebar()


  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'}  fixed top-0 h-full w-full bg-white shadow-2xl md:w-[35vw] lg:max-w-[30vw] transition-all duration-300 px-4 lg:px-[35px] z-20`} >
      <div className='flex justify-between py-6 border-b items-center'>
        <div className='uppercase font-semibold text-sm'>Shoping Bag (0)</div>
        <div onClick={handleClose} className='cursor-pointer flex justify-center items-center h-8 w-8'>
          <IoMdArrowForward className='text-2xl' />
        </div>
      </div>

    </div>
  )
}

export default Sidebar