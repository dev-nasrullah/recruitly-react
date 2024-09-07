import { useParams } from 'react-router-dom';
import { Container, List, ListItem, Loader, Space, Title } from '@mantine/core';
import { useGetCompanyQuery } from '@/services/api';

const ViewCompanyPage = () => {
  const param = useParams<{ id: string }>();
  const { data, isLoading } = useGetCompanyQuery(String(param.id), { skip: !param.id });

  return (
    <Container>
      <Space h="xl" />
      <Space h="xl" />
      <Title order={2}>{data?.name}</Title>
      <Space h="xl" />
      <Space h="xl" />

      {isLoading ? (
        <Loader />
      ) : (
        <List>
          {Object.keys(data || {}).map((key) => (
            <ListItem key={key}>
              {key}: {JSON.stringify(data?.[key as keyof typeof data], null, 2)}
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default ViewCompanyPage;
