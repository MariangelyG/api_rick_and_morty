import { useState } from "react";
import { CardInfo } from "./CardInfo";



// Componente con botones para cambiar de pagina

export const ContainerView = () => {
  const [changePage, setChangePage] = useState(1);

  // Función seteadora para ir a la pagina siguiente
  const handleNext = () => {
    setChangePage(changePage === 20 ? 20 : changePage + 1);
  };
   // Función seteadora para ir a la pagina anterior
  const handlePrevious = () => {
    setChangePage(changePage === 1 ? 1 : changePage - 1);
  };

  // Vista del componente 
  return (
  
    <CardInfo id={changePage}  
     handleNext={handleNext}
     handlePrevious={handlePrevious}
     changePage={changePage} 
    />

   
  )
}
