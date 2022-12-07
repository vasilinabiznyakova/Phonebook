import { Link, Spacer, Button } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <Link as={ReachLink} to="/register" color="teal.500">
        <Button colorScheme="teal" type="button" variant="link">
          Register
        </Button>
      </Link>
      <Spacer />
      <Link as={ReachLink} to="/login" color="teal.500">
        <Button colorScheme="teal" type="button" variant="link">
          Log In
        </Button>
      </Link>
    </div>
  );
};
