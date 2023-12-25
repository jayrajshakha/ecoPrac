
import { Link } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import { MdRemove } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import useCart from '../hooks/UseCart';


const CartItems = ({item}) => {

  const { amount, id,title, price, image} = item
  const {removeCarts, increaseItem, deacreaseItem } = useCart()

  return (
    <div className='flex  gap-x-4 py-2 lg:px-6   border-b border-gray-200 w-full text-gray-500 font-light'>
       <div className='flex items-center w-full min-h-[150px] gap-x-4'>
          {/* image */}
            <Link to={`/products/${id}`}>
            <img className='max-w-[50px]' src={image} alt="" />
            </Link>
            <div className='flex flex-col w-full'>
              {/* title and remove Icons */}
               <div className='flex justify-between mb-2'>
                <Link className='uppercase text-xs font-semibold text-primary hover:underline max-w-[240px]' to={`/products/${id}`}>{title}
                </Link>
                {/* remove icons*/}
                <div onClick={() => removeCarts(id)} className='text-xl cursor-pointer'>
                    <IoMdClose className='text-gray-500 hover:bg-red-500 transition'/>
                </div>
               </div>
               {/* Qty */}
                <div className=' h-[36px] text-sm flex gap-x-2 '>
                <div className='flex flex-1 items-center text-primary font-medium h-full max-w-[100px] border'>
                  <div onClick={() => deacreaseItem(id)} className=' h-full flex-1 flex justify-center items-center cursor-pointer '>
                  <MdRemove />
                  </div>
                  <div className='h-full flex justify-center items-center px-2'>
                    {amount}
                  </div>
                  <div onClick={() => increaseItem(id)} className='flex-1 flex justify-center items-center cursor-pointer'>
                   <IoMdAdd />
                  </div>
                </div>
               <div className='flex-1 flex justify-around items-center font-medium text-primary '> {`$ ${price}`}</div>
               <div className='flex-1 flex  justify-end items-center font-medium text-primary '>{` $ ${parseFloat(price * amount).toFixed(2)}`}</div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default CartItems