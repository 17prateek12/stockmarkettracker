import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../feature/authSlice';
import { Button, Box, FormControl, TextField, Alert } from '@mui/material';
import revenue from "../asset/revenue-concept-illustration.png"

const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { error, loading } = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }));
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
                <img src={revenue} alt="..." style={{ width: '100%', height: '100%' }} />
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
                    marginRight:'1rem'
                }}>
                <h2>Login</h2>
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
                        {loading ? 'Loading...' : 'Login'}
                    </Button>
                </FormControl>
            </Box>
        </Box>
    );
};

export default Login;
