import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import { Input, FormLabel, Heading } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();
  const onChange = event => {
    const query = event.target.value;
    dispatch(setFilter(query));
  };
  return (
    <div>
      <Heading fontSize="20px" mb="14" mt="20">
        Find contacts by name:
      </Heading>
      <FormLabel mb="10" mt="10">
        <Input type="text" onChange={onChange} />
      </FormLabel>
    </div>
  );
};
