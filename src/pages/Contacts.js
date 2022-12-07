import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
import { Box } from '../components/Box';
import { Form } from '../components/Form/Form';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { Filter } from '../components/Filter/Filter';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Helmet } from 'react-helmet';
import { CirclesWithBar } from 'react-loader-spinner';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>

      <Form />

      {error && <p>{error}</p>}
      {contacts.length > 0 && (
        <Box mt="3">
          <Filter />
          {isLoading && !error && (
            <CirclesWithBar
              height=""
              width="100"
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              outerCircleColor=""
              innerCircleColor=""
              barColor=""
              ariaLabel="circles-with-bar-loading"
            />
          )}
          <ContactsList />
        </Box>
      )}
    </Box>
  );
}
