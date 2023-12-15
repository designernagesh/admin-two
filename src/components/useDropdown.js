import { useState } from "react";

function useDropdown() {
    const [ dropdownMenu, setDropdownMenu ] = useState(false);

    const toggleDropdownMenu = () => {
        setDropdownMenu(prev => !prev);
    }

  return {
    dropdownMenu,
    toggleDropdownMenu
  }
}

export default useDropdown
