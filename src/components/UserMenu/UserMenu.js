import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <Button
        colorScheme="teal"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </div>
  );
};
