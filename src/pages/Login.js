import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Heading } from '@chakra-ui/react';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Heading fontSize="24px" mb="20" mt="20">
        Please enter your credentials to login
      </Heading>
      <LoginForm />
    </div>
  );
}
