import React, { useState } from 'react';

import { TextField, Button, Typography, Box, Container, Paper } from '@mui/material';
import { green } from '@mui/material/colors';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submittedData, setSubmittedData] = useState<{ name: string; email: string } | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name.trim() && email.trim()) {
      setSubmittedData({ name, email });
      setName('');
      setEmail('');
      console.log(`User added: ${name}, ${email}`); 
    }
  };

  return (    
   
   <Container maxWidth="sm">
      <Paper elevation={3} sx={{ borderRadius: 2, padding: 3, mt: 8 }}>
        <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
               Datos de usuario
            </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Nombre *"
              variant="outlined"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Email *"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Enviar
            </Button>
          </form>
          {submittedData && (
            <Typography variant="h6" sx={{ marginTop: 2, color: green[400] }}>
              Datos ingresados: <br/>
                Nombre: {submittedData.name} <br/>
                Email: {submittedData.email}
            </Typography>
          )}
        </Box>
      </Paper>
    </Container>
   
  );
};

export default UserForm;
