import {  Button } from "@mui/material";


// componente que recibe como prop las variables(funciones) de ContainerView
export const Buttons = ({ changePage, handleNext, handlePrevious }) => {
  return (
    <>
   
   
      <Button
      sx={{border:"groove", mr: 40, ml:8, borderRadius:3}}
        variant="outlined"
        color="secondary"
        onClick={handlePrevious}
        // disabled={changePage === 1}
      
        
      >
        Anterior
      </Button>

      <Button
        sx={{border:"groove", borderRadius:3}}
        variant="outlined"
        color="secondary"
        onClick={handleNext}
        // disabled={changePage === 20}
        
      >
        Siguiente
      </Button>

  
    </>
  );
};
