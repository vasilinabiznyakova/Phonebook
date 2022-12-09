// import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
// import { Button } from '@chakra-ui/react';
// import { Link as ReachLink } from 'react-router-dom';
import { Link } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <nav>
        <Link to="/">
          Home
          {/* <Button colorScheme="teal" type="button" variant="ghost">
            Home
          </Button> */}
          {/* <button>Home</button> */}
        </Link>
        {isLoggedIn && (
          <Link to="/contacts">
            Contacts
            {/* <Button colorScheme="teal" type="button" variant="ghost">
              Contacts
            </Button> */}
          </Link>
        )}
      </nav>
    </nav>
  );
};
