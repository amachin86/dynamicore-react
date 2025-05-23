import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

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
      // Here you can handle the user addition logic directly
      console.log(`User added: ${name}, ${email}`); // Example of handling user addition
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 2 }}>
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
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          Datos ingresados: {submittedData.name}, {submittedData.email}
        </Typography>
      )}
    </Box>
  );
};

export default UserForm;
