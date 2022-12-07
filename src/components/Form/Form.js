import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { ContactForm } from './Form.styled';
import { FormLabel, Input, Button } from '@chakra-ui/react';
import { toast } from 'react-toastify';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    if (
      contacts
        .map(contact => contact.name.toLowerCase())
        .includes(form.name.value.toLowerCase())
    ) {
      toast.error(`${form.name.value} is already in contacts`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } else {
      dispatch(
        addContact({
          name: form.elements.name.value,
          number: form.elements.number.value,
        })
      );
      toast.success(`${form.name.value} has been added to phone book!`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      form.reset();
    }
  };

  return (
    <ContactForm onSubmit={handleSubmit}>
      <FormLabel>
        {' '}
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>

      <FormLabel>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <Button colorScheme="teal" type="submit">
        Add contact
      </Button>
    </ContactForm>
  );
};
