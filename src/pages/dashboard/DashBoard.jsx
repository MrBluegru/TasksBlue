import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button"
import Copiright from '../../components/pure/Copiright';

const DashBoard = () => {

    const navigate = useNavigate();

    const logout = ()=> {
        navigate("/login")
    }

    return (
        <div>
            <Button variant="contained" onClick={logout}>Logout</Button>
            <Copiright/>
        </div>
    );
}

export default DashBoard;
