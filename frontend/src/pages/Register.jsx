import React, { useState } from 'react';
import { useDispatch,useSelector  } from 'react-redux';
import { registerUser } from '../feature/authSlice';
import { Button, Box, FormControl, TextField, Alert } from '@mui/material';
import stock from "../asset/stock-market-concept-design.png"


const Register = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { error, loading } = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser({ username, email, password }));
    };

    return (
        <Box
        sx={{
            maxWidth: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '8rem'
        }}
    >
        <Box sx={{
            width: "20rem",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <img src={stock} alt="..." style={{ width: '100%', height: '100%' }} />
        </Box>
        <Box
            sx={{
                maxWidth: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding:'2rem',
                marginLeft:'1rem',
                marginRight:'1rem',
            }}>
            <h2>Register</h2>
            {error && <Alert severity="error">{error}</Alert>}
            <FormControl
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    width: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                }}
            >
                <TextField
                    required
                    id="outlined-required"
                    label="Username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'SignUp'}
                </Button>
            </FormControl>
        </Box>
    </Box>
    );
};

export default Register;