import { useMemo } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box
} from '@mui/material';

interface User {
  name: string;
  age: number;
}

interface UserListProps {
  users: User[];
}

const UserList = ({ users }: UserListProps) => {
  const sortedUsers = useMemo(() => {
    return [...users].sort((a, b) => a.name.localeCompare(b.name));
  }, [users]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <Typography variant="h4" gutterBottom>
        Listado de usuarios
      </Typography>

      <TableContainer component={Paper} style={{ maxWidth: 600, width: '100%' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell><strong>Nombre</strong></TableCell>
              <TableCell><strong>Edad</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedUsers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={2} align="center">
                  No hay usuarios para mostrar.
                </TableCell>
              </TableRow>
            ) : (
              sortedUsers.map((user, index) => (
                <TableRow
                  key={index}
                  sx={{ backgroundColor: index % 2 === 0 ? 'white' : '#f9f9f9' }}
                >
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.age}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserList;
