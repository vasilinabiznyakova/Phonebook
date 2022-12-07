import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
// import { FilterLabel } from './Filter.styled';
import { Input, FormLabel } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();
  const onChange = event => {
    const query = event.target.value;
    dispatch(setFilter(query));
  };
  return (
    <FormLabel mb="10" mt="10">
      Find contacts by name:
      <Input type="text" onChange={onChange} />
    </FormLabel>
  );
};
