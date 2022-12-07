import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { FormLabel, Input, Button } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <FormLabel>
        Username
        <Input type="text" name="name" />
      </FormLabel>
      <FormLabel>
        Email
        <Input type="email" name="email" />
      </FormLabel>
      <FormLabel>
        Password
        <Input type="password" name="password" />
      </FormLabel>
      <Button type="submit" colorScheme="teal">
        Register
      </Button>
    </form>
  );
};
