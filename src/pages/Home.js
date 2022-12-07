import { Icon } from '@chakra-ui/react';
import { ImWink } from 'react-icons/im';
import { Heading, Container } from '@chakra-ui/react';

export default function Home() {
  return (
    <Container maxW="container.sm" centerContent>
      <Heading pt="8">
        {<Icon as={ImWink} boxSize={8} fill="cyan.800" />} Welcome to Contacts
        App!
      </Heading>
    </Container>
  );
}
