import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { selectError } from '../../redux/auth/selectors';
import { FormLabel, Input, Button, Container } from '@chakra-ui/react';
import { toast } from 'react-toastify';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };
  if (error) {
    toast.error('Login failed, please enter valid credentials!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  }

  return (
    <Container>
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormLabel>
          Email
          <Input type="email" name="email" mb="8" />
        </FormLabel>
        <FormLabel>
          Password
          <Input type="password" name="password" mb="8" />
        </FormLabel>
        <Button colorScheme="teal" type="submit">
          Log In
        </Button>
      </form>
    </Container>
  );
};
