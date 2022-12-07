// import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Link, Button } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <nav>
        <Link as={ReachLink} to="/" color="teal.500">
          <Button colorScheme="teal" type="button" variant="ghost">
            Home
          </Button>
        </Link>
        {isLoggedIn && (
          <Link as={ReachLink} to="/contacts" color="teal.500">
            <Button colorScheme="teal" type="button" variant="ghost">
              Contacts
            </Button>
          </Link>
        )}
      </nav>
    </nav>
  );
};
