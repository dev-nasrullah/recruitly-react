import { useNavigate } from 'react-router-dom';
import { Button, ButtonGroup, Container, Loader, Space, Table } from '@mantine/core';
import { useGetCompaniesQuery } from '@/services/api';

export function HomePage() {
  const navigate = useNavigate();
  const { data, isLoading } = useGetCompaniesQuery({});

  const rows = data?.data.map((row) => (
    <Table.Tr key={row.id}>
      <Table.Td>{row.name}</Table.Td>
      <Table.Td>{row.email}</Table.Td>
      <Table.Td>{row.phone}</Table.Td>
      <Table.Td>{row.createdOn}</Table.Td>
      <Table.Td>
        <ButtonGroup>
          <Button variant="outline" onClick={() => navigate(`/company/view/${row.id}`)}>
            View
          </Button>
          <Button variant="outline" onClick={() => navigate(`/company/edit/${row.id}`)}>
            Edit
          </Button>
        </ButtonGroup>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Container>
      <Space h="xl" />
      <Button variant="subtle" onClick={() => navigate('/', { replace: true })}>
        Logout
      </Button>
      <Space h="xl" />
      <Space h="xl" />
      <Button onClick={() => navigate('/company/create')}>Create Company</Button>
      <Space h="xl" />
      <Space h="xl" />

      {isLoading ? (
        <Loader />
      ) : (
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Company Name</Table.Th>
              <Table.Th>Email</Table.Th>
              <Table.Th>Phone</Table.Th>
              <Table.Th>Created At</Table.Th>
              <Table.Th>Action</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      )}
    </Container>
  );
}
