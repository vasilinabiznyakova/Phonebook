import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { toast } from 'react-toastify';
import { ListItem, Button } from '@chakra-ui/react';

export const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    toast.warn(`Contact has been removed from your contact list!`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  return (
    <ListItem mb="6">
      <p>
        {name}: {number}
      </p>
      <Button colorScheme="teal" type="button" onClick={handleDelete}>
        Remove
      </Button>
    </ListItem>
  );
};

// ContactItem.propTypes = {
//   contact: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     phone: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//   }),
// };
