import { Box, Container, List, ListItem, Typography } from "@mui/material";
import { useFetch } from "../hooks/useFetch";
import { Buttons } from "./Buttons";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import CircleIcon from "@mui/icons-material/Circle";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

// Componente que recibe la info de presonajes
// Recibe como prop el id que se va a mostrar y las funciones de los botones
export const CardInfo = ({ id, handleNext, handlePrevious, changePage }) => {
  const { character } = useFetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  return (
    <>
      {/* Contenedor principal de la vista */}
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          
        }}
      >

        {/* Contenedor de la informacion del personaje */}
        <Box
          sx={{
            width: "600px",
            height: "600px",
            border: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 3,
            borderRadius: 5,
            boxShadow: 10,
            backgroundColor: "#D9CCDC",
            position: "relative",
            border: "outset",
            boxShadow: "10px 10px 10px"
          }}
        >
          {/*Lista de elementos con la informacion de los personajes   */}
          <List>
            <img
              src={character?.image}
              alt="imagen"
            />
            <ListItem sx={{ fontFamily: "sans-serif", fontSize: 20 }}>
              <b>Nombre:</b>
              {character?.name}
            </ListItem>
            <ListItem sx={{ fontFamily: "sans-serif", fontSize: 20 }}>
              <b>Género: </b>
              {character?.gender}
              {character?.gender === "Male" && <MaleIcon color="primary" />}
              {character?.gender === "Female" && <FemaleIcon color="secondary" />}
              {character?.gender === "unknown" && <QuestionMarkIcon fontSize="5" />}
            </ListItem>
            <ListItem sx={{ fontFamily: "sans-serif", fontSize: 20 }}>
              <b>Especies:</b> {character?.species}
            </ListItem>
            <ListItem sx={{ fontFamily: "sans-serif", fontSize: 20 }}>
              <b>Estado:</b> {character?.status}
              {character?.status === "Alive" && <CircleIcon sx={{ color: "green", fontSize: 15, ml: 0.5 }} />}
              {character?.status === "Dead" && <CircleIcon sx={{ color: "red", fontSize: 15, ml: 0.5 }} />}
              {character?.status === "unknown" && <QuestionMarkIcon fontSize="5" />}
            </ListItem>
            <ListItem sx={{ fontFamily: "sans-serif", fontSize: 20 }}>
              <b>Ubicación:</b>
              {character?.location?.name}
            </ListItem>
          </List>

          {/* Muestra el id del personaje */}
          <Box
            sx={{
              border: "outset",
              borderRadius: 3,
              width: "120px",
              padding: 1,
              backgroundColor: "#BE93C8",
              height: 30,
            }}
          >
            <Typography variant="h6">Personaje:{id}</Typography>
          </Box>

          <Box sx={{ position: "absolute", bottom: 0, left: 0, mb: 2 }}>
            <Buttons
              changePage={changePage}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};
