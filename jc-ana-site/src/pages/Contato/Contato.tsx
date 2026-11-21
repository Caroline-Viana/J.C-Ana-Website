import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material"

const Contato = () => {
    return (
        <>
            <Box sx={{ bgcolor: '#1287e7', height: '30vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h3">Contato</Typography>
            </Box>
            <Grid container spacing={2} sx={{ marginX: '10vw', marginY: '5vh' }}>
                <Grid size={6} sx={{ display: 'flex', alignItems:"center", flexDirection: 'column', gap: '10vh'}} className="formas-contato">
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'initial', width: '15vw'}}>
                        <Typography variant="h6">Coleta</Typography>
                        <Link href="#">(11) 9 7643-9090</Link>
                        <Link href="#">coleta@jcana.com.br</Link>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'initial', width: '15vw' }}>
                        <Typography variant="h6">Comercial / Cotação</Typography>
                        <Link href="#">(11) 9 7643-9090</Link>
                        <Link href="#">comercial@jcana.com.br</Link>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'initial', width: '15vw'}}>
                        <Typography variant="h6">SAC</Typography>
                        <Link href="#">(11) 9 7643-9090</Link>
                        <Link href="#">sac@jcana.com.br</Link>
                    </Box>
                </Grid>
                <Grid size={6}></Grid>
            </Grid>
            
            <Grid container spacing={2} sx={{ flexDirection: 'row', marginX: '10vw', marginY: '5vh' }} className="email-direto">
                <Grid size={6} sx={{ display: 'flex', direction: 'row', alignItems: 'center' }}>
                    <Typography sx={{paddingX: '2vw'}} variant="h6">Lorem ipsum dolor sit amet consectetur adipisicing elit. At non, quibusdam magni.</Typography>
                    <Typography sx={{paddingX: '2vw'}} variant="body1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </Typography>
                </Grid>
                <Grid size={6} sx={{ display: 'flex', flexDirection: 'column', gap: '3vh'}}>
                    <Grid container sx={{justifyContent: "space-between"}}>
                        <TextField
                            id="nome" 
                            label="Nome completo" 
                            variant="outlined" 
                            sx={{width: '18vw'}}
                            size="small"/>
                        <TextField
                            id="telefone" 
                            label="Telefone" 
                            variant="outlined" 
                            sx={{width: '18vw'}} 
                            size="small"/>
                    </Grid>
                    <Grid container sx={{justifyContent: "space-between"}} >
                        <TextField
                            id="email" 
                            label="E-mail" 
                            variant="outlined" 
                            sx={{width: '18vw'}}
                            size="small"
                            required/>
                        <TextField
                            id="assunto" 
                            label="Assunto" 
                            variant="outlined" 
                            sx={{width: '18vw'}}
                            size="small"
                            required/>
                    </Grid>
                    <Grid>
                        <TextField
                            id="outlined-textarea"
                            label="Mensagem"
                            placeholder="mensagem"
                            multiline
                            rows={4}
                            required
                            fullWidth/>
                    </Grid>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: "center", width: "10vw"}}>
                        <Button size="small" variant="contained">Enviar</Button>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{flexDirection: 'row', marginX: '10vw', marginY: '5vh'}} className="localizacao">
                <Grid size={8} sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", height: '50vh'}}>
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.4778565022884!2d-46.63691762502169!3d-23.55127526122089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59abb2b2eef1%3A0xfdb32e67a44103f5!2sCatedral%20Metropolitana%20Nossa%20Senhora%20da%20Assun%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1794158903205!5m2!1spt-BR!2sbr"
                    allowFullScreen
                    loading="lazy"
                    style={{ height: '100%', border: 0 }}
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Mapa do Google">
                </iframe>
                </Grid>
                <Grid size={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", paddingX: '10vh'}}>
                    <Typography variant="h6">Localização</Typography>
                    <Typography variant="subtitle1"> Endereço: Rua Grandes Rios</Typography>
                    <Typography variant="subtitle1"> Número: 42</Typography>
                    <Typography variant="subtitle1"> Bairro: Perus</Typography>
                    <Typography variant="subtitle1"> São Paulo, SP</Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Contato