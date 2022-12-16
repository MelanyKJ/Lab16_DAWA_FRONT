import { get } from "../../services";
import { useState, useEffect } from "react";
import { Typography, Container, Grid } from "@mui/material";
import { CardEstudiantes} from "../../components";

const Estudiantes = () => {
  const [estudiantes, setEstudiante] = useState([]);

  const getEstudiante = async () => {
    const result = await get("/");
    setEstudiante(result.data);
  };
  console.log(estudiantes);
  useEffect(() => {
    getEstudiante();
  }, []);
  return (
    <div>
      <div className='navbar'>
        <center><span className='navbar__title'>Contáctos</span></center>
      </div>
      <Container maxWidth="xl" sx={{ padding: 4 }}>
        <Grid container spacing={3}>
          {estudiantes.length > 0 &&
            estudiantes.map((estudiante, index) => (
              <Grid xs={12} item sm={4} sx={{ padding: 2 }}>
                <CardEstudiantes estudiantes={estudiante} key={index} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Estudiantes;