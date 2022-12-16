import {
    Container,
    Card,
    CardContent,
    Typography,
    CardMedia,
    Box,
  } from "@mui/material";
  const CardEstudiantes = ({ estudiantes }) => {
    return (
        <>
            
            <Box>
                <Card
                    sx={{
                    display: "flex",
                    height: 250,
                    marginBottom: '10px',
                    backgroundColor: "rgba(55, 195, 181, 0.747)",
                    }}>
                    <CardMedia
                    component="img"
                    image={estudiantes.img}
                    height={500}
                    sx={{
                        width: '35%',
                        height: '350px',
                    }}
                    />
                    <CardContent>
                    <Box>
                        <Typography className="titulo">{estudiantes.name}</Typography><br></br>
                        <Typography className="autor">{estudiantes.email}</Typography>
                        <Typography className="parrafo">{estudiantes.phone_number}</Typography>
                    </Box>
                    </CardContent>
                </Card>
            </Box>
        </>
      
    );
  };
  
  export default CardEstudiantes;