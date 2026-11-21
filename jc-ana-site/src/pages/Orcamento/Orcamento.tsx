import { Box, Button, Grid, TextField, Typography } from "@mui/material"

const Orcamento = () => {

  return (
    <>
        <Box sx={{ bgcolor: '#1287e7', height: '30vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h3">Orçamento</Typography>
        </Box>
        <Box component="form" sx={{display: 'flex', alignItems:"center", flexDirection: 'column', justifyContent: "center", gap: '10vh', marginX: '5vh', marginY: "10vh" }}>
            <Typography variant="h3">Informações para cotação</Typography>
            <Box component="form" sx={{display: 'flex', flexDirection: 'column', justifyContent: "center", gap: '3vh'}}>
                <Grid container sx={{justifyContent: "space-between", alignItems: 'center'}} className="orcamento_dados-1">
                    <TextField
                        id="nome" 
                        label="Nome completo" 
                        variant="outlined" 
                        sx={{width: '48%'}}
                        required/>
                    <TextField
                        id="email" 
                        label="E-mail" 
                        variant="outlined" 
                        sx={{width: '48%'}} 
                        required/>
                </Grid>
                <Grid container sx={{justifyContent: "space-between", alignItems: 'center'}} className="orcamento_dados-2">
                    <TextField
                        id="telefone" 
                        label="Telefone WhatsApp" 
                        variant="outlined" 
                        sx={{width: '48%'}}
                        required/>
                    <TextField
                        id="cpfCnpjDest" 
                        label="CPF/CNPJ Destinatário" 
                        variant="outlined" 
                        sx={{width: '48%'}}
                        required/>
                </Grid>
                <Grid container sx={{justifyContent: "space-between", alignItems: 'center'}} className="orcamento_dados-remetente">
                    <TextField
                        id="nomeRemetente" 
                        label="Nome Remetente" 
                        variant="outlined" 
                        sx={{width: '48%'}}
                        required/>
                    <TextField
                        id="cpfCnpjRemet" 
                        label="CPF/CNPJ Remetente" 
                        variant="outlined" 
                        sx={{width: '48%'}}
                        required/>
                </Grid>
                <Grid container sx={{justifyContent: "space-between", alignItems: 'center'}} className="orcamento_cep">
                    <TextField
                        id="cepOrigem" 
                        label="CEP Origem" 
                        variant="outlined" 
                        sx={{width: '48%'}}
                        required/>
                    <TextField
                        id="cepDestino" 
                        label="CEP Destino" 
                        variant="outlined" 
                        sx={{width: '48%'}} 
                        required/>
                </Grid>
                <Grid container sx={{justifyContent: "space-between", alignItems: 'center'}} className="orcamento_caracteristicas-pedido">
                    <TextField
                        id="urgencia" 
                        label="Urgente" 
                        variant="outlined" 
                        sx={{width: '20%'}} />
                    <TextField
                        id="tipoMercadoria" 
                        label="Tipo de Mercadoria" 
                        variant="outlined" 
                        sx={{width: '50%'}}
                        required/>
                    <TextField
                        id="vlrCarga" 
                        label="Valor da Carga" 
                        variant="outlined" 
                        sx={{width: '20%'}} 
                        required/>
                </Grid>
                <Grid container direction='row' sx={{justifyContent: "space-between", alignItems: 'center'}} className="orcamento_caracteristicas-carga" >
                    <TextField
                        id="volume" 
                        label="Volume" 
                        variant="outlined" 
                        sx={{width: '15%'}} 
                        required/>
                    <TextField
                        id="peso" 
                        label="Peso Real" 
                        variant="outlined" 
                        sx={{width: '15%'}}
                        required/>
                    <TextField
                        id="comprimento" 
                        label="Comprimento" 
                        variant="outlined" 
                        sx={{width: '15%'}} />
                    <TextField
                        id="largura" 
                        label="Largura" 
                        variant="outlined" 
                        sx={{width: '15%'}}
                        />
                    <TextField
                        id="altura" 
                        label="Altura" 
                        variant="outlined" 
                        sx={{width: '15%'}} />
                </Grid>
                <Grid container className="orcamento_observacoes">
                    <TextField
                        id="outlined-textarea"
                        label="Observações"
                        placeholder="Observações"
                        multiline
                        rows={4}
                        fullWidth 
                    />
                </Grid>
            </Box>
            <Box component="form" sx={{display: 'flex', flexDirection: 'column', justifyContent: "center", width: "30vh"}}>
                <Button size="medium" variant="contained">Enviar</Button>
            </Box>
        </Box>
    </>
  )
}

export default Orcamento