import { Grid,  SvgIcon,  Typography } from "@mui/material"
import LogoSemNome from '../../../assets/logo-sem-nome.svg?react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <Grid container direction="row" spacing={4} sx={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
            <Grid container sx={{ alignItems: 'center'}} size={{ xs: 6}} className="navbar_toolbar-logo">
                <SvgIcon component={LogoSemNome} inheritViewBox color="warning" sx={{ fontSize: 100 }}></SvgIcon>
                <Typography variant="h4">
                    J.C Ana Transportes
                </Typography>
            </Grid>
            
            <Link to='/home'>
                <Grid sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h6" className="toolbar-item">
                        Home
                    </Typography>
                </Grid>
            </Link>
            
            <Link to='/servicos'>
                <Grid sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h6" className="toolbar-item">
                        Serviços
                    </Typography>
                </Grid>
            </Link>
            
            <Link to='/orcamento'>
                <Grid sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h6" className="toolbar-item">
                        Orçamento
                    </Typography>
                </Grid>
            </Link>

            <Link to='/contato'>
                <Grid sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h6" className="toolbar-item">
                        Contato
                    </Typography>
                </Grid>
            </Link>
        </Grid>
    )
}

export default Navbar