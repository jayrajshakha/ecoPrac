import { SidebarContext } from "../context/SidebarContext";
import { useContext } from "react";

const useSidebar = () => useContext(SidebarContext);

export default useSidebar;
