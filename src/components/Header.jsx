import { BsBag } from "react-icons/bs";
import useSidebar from '../hooks/UseSidebar'

const Header = () => {

  const {isOpen, setIsOpen} = useSidebar()

  return (
    <header className="bg-pink-200">
      <div>header</div>
      <div className='cursor-pointer flex relative' onClick={() =>setIsOpen(!isOpen)} >
         <BsBag className="text-2xl" />
      </div>
    </header>
  )
}

export default Header