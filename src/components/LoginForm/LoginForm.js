import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormLabel, Input, Button, Container } from '@chakra-ui/react';
import { toast } from 'react-toastify';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const notify = () =>
    toast.success('You logged in succesfully', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

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
