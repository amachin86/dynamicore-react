import React from 'react';
import './UserForm.css'; // Asegúrate de que el archivo CSS esté importado
import { TextField, Button, Typography, Box } from '@mui/material';

const UserForm = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [submittedData, setSubmittedData] = React.useState<{ name: string; email: string } | null>(null);

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
    <div className="form-container">  
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: 400, 
            margin: 'auto', 
            padding: 2, 
            textAlign: 'center', 
            backgroundColor: '#f0f0f0', // Light gray background
            borderRadius: '8px' // Rounded borders
        }}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Nombre"
              variant="outlined"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Email"
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
            <Typography variant="h6" sx={{ marginTop: 2, color: '#90ee90' }}>
              Datos ingresados: <br/>
                Nombre: {submittedData.name} <br/>
                Email: {submittedData.email}
            </Typography>
          )}
        </Box>
    </div>
  );
};

export default UserForm;
