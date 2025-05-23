import { useMemo } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

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
    <List>
      {sortedUsers.map((user, index) => (
        <ListItem key={index}>
          <ListItemText primary={user.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default UserList;
