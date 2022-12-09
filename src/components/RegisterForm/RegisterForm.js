import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operations';
import { selectError } from '../../redux/auth/selectors';
import { FormLabel, Input, Button } from '@chakra-ui/react';
import { toast } from 'react-toastify';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

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
  };

  // const handleRegistrationError = () => {
  //   if (error) {
  //     toast.error('Registration failed, please enter valid credentials!', {
  //       position: 'top-right',
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: 'colored',
  //     });
  //   }
  // };

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
