import { Box, Grid, List, ListItem, ListItemText, Typography} from "@mui/material"
import bannerImg from "../../assets/banner/Banner corporativo Jc Ana Transporte.png";
import carregamento from "../../assets/fotos/carregamento.jpg";
import servicos from "../../assets/fotos/servicos.png";

const Home = () => {

  return (
    <>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={bannerImg} alt="Banner JC Ana" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </Box>
        <Grid container rowSpacing={15} sx={{ marginY: '10vh' }}>
            <Grid container direction="row" rowSpacing={5} sx={{ marginX: '20vh'}} className="home_sobre" >
                <Grid container size={{ xs: 8}} sx={{ height: '80vh', paddingY: '20vh', display: 'flex', alignItems: 'center' }} className="home_sobre-historia">
                    <Typography variant="h3" sx={{ color: '#27499D' }}>
                        Conheça a J.C Ana
                    </Typography>
                    <Typography variant="body1">
                        Somos uma empresa dedicada ao transporte de cargas refrigeradas, comprometida em atender às necessidades de nossos clientes com responsabilidade, dedicação e atenção em cada etapa da operação.
                    </Typography >
                    <Typography variant="body1">
                        Nossa atuação é voltada à coleta e distribuição de produtos, contribuindo para que mercadorias cheguem aos estabelecimentos de destino com o cuidado que esse tipo de transporte exige.
                    </Typography>
                    <Typography variant="body1">
                        Valorizamos a confiança construída em cada parceria e trabalhamos diariamente para oferecer um atendimento próximo e soluções adequadas às necessidades de cada negócio.
                    </Typography>
                </Grid>
                <Grid size={{ xs: 4}} sx={{ height: '80vh', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'  }} className="home_sobre-frota">
                    <img src={carregamento} alt="Caminhão sendo carregado" style={{ width: 'auto', height: '100%', display: 'block' }}/>
                </Grid>
            </Grid>
            <Grid container direction="row" className="home_outros" spacing={2} sx={{ justifyContent: "center", width: '100%'}}>
                <Grid size={{ xs: 5}} sx={{ height: '50vh', margin: 'none' }} className="home_outros-legado">
                    <img src={servicos} alt="Caminhão sendo carregado" style={{ width: 'auto', height: '100%', display: 'block' }}/>
                </Grid>
                <Grid container size={{ xs: 7}} sx={{ height: '50vh', display: 'flex', alignItems: 'center'}} className="home_outros-missao">
                    <Typography variant="h3" sx={{ color: '#27499D' }}>
                        Nossos serviços
                    </Typography>
                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <ListItem>
                            <ListItemText primary="Transporte de cargas refrigeradas" secondary="Realizamos o transporte de produtos que necessitam de condições específicas de conservação." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Coleta de mercadorias" secondary="Atuamos na coleta de produtos diretamente nos pontos de origem." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Distribuição e entregas" secondary="Realizamos entregas em estabelecimentos comerciais." />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ bgcolor: '#27499D', padding: '5vh', alignItems: 'center', flexDirection: 'column', width: '100%'}} className="home_outros">
                <Typography variant="h5" sx={{ color: '#f0f4ff' }}>
                    Entre em contato
                </Typography>
                <Typography variant="h3" sx={{ color: '#f0f4ff' }}>
                    Vamos transportar juntos?
                </Typography>
                <Typography variant="body1" sx={{ color: '#d2d7e7' }}>
                    Está procurando uma empresa para realizar o transporte e a distribuição dos seus produtos refrigerados?
                </Typography>
                <Typography variant="body1" sx={{ color: '#d2d7e7'  }}>
                    Entre em contato com a J.C Ana! Estamos à disposição para conhecer suas necessidades e apresentar nossas soluções.
                </Typography>
                <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}  className="home_outros-legado">
                    <Typography variant="h5" sx={{ color: '#f0f4ff' }}>
                        Solicite um orçamento
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#d2d7e7'  }}>
                        Telefone: (11) 9999-9999
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#d2d7e7'  }}>
                        WhatsApp: (11) 9 8888-8888
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#d2d7e7'  }}>
                        E-mail: jc.ana-transportes@jcana.com.br
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
        
    </>
  )
}

export default Home