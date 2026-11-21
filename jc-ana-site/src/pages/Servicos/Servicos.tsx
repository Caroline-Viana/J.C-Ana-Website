import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"

const Servicos = () => {
    return (
        <>
            <Box sx={{ bgcolor: '#1287e7', height: '30vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h3">Serviços</Typography>
            </Box>
            <Box>
                <Grid container spacing={4} sx={{ justifyContent: 'center', margin: '10vh'}}>
                    <Card sx={{ maxWidth: 500 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image=""
                                alt="green iguana"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    amet
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolorem nostrum accusamus maiores sapiente distinctio veniam. Doloribus, maiores quaerat! Optio, repudiandae. Beatae debitis tempora quisquam id, amet at quo excepturi.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 500 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image=""
                                alt="green iguana"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                     amet
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolorem nostrum accusamus maiores sapiente distinctio veniam. Doloribus, maiores quaerat! Optio, repudiandae. Beatae debitis tempora quisquam id, amet at quo excepturi.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 500 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image=""
                                alt="green iguana"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                     amet
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolorem nostrum accusamus maiores sapiente distinctio veniam. Doloribus, maiores quaerat! Optio, repudiandae. Beatae debitis tempora quisquam id, amet at quo excepturi.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 500 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image=""
                                alt="green iguana"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                     amet
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolorem nostrum accusamus maiores sapiente distinctio veniam. Doloribus, maiores quaerat! Optio, repudiandae. Beatae debitis tempora quisquam id, amet at quo excepturi.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Box>
        </>
    )
}

export default Servicos