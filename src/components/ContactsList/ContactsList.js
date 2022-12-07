import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { Box } from '../Box';
import { ContactItem } from '../ContactItem/ContactItem';
// import { List } from './ContactList.styled';
import { UnorderedList } from '@chakra-ui/react';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getVisibleContacts = () => {
    if (filter.length > 0) {
      const normalizedFilter = filter[0].toLowerCase();

      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    } else {
      return contacts;
    }
  };

  return (
    <Box>
      <h2>Contacts:</h2>
      <UnorderedList p="4">
        {getVisibleContacts().map(contact => (
          <ContactItem contact={contact} key={contact.id} />
        ))}
      </UnorderedList>
    </Box>
  );
};
