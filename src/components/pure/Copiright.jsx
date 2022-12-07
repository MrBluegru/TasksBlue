import React from 'react';
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const Copiright = () => {
    return (
        <div>
            <Typography variant="body2" color="GrayText" align='center'>
                {'Copyright (C) '}
                <Link color="inherit" href='https://imaginaformacion.com'>
                    Imagina Formación
                </Link>
                {' '}
                {new Date().getFullYear()}
            </Typography>
        </div>
    );
}

export default Copiright;
