import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Button, Container, Group, Space, TextInput, Title } from '@mantine/core';
import { useCreateCompanyMutation } from '@/services/api';

type CompanyForm = {
  email: string;
  name: string;
  phone: string;
};

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  name: Yup.string().required('Name is required'),
  phone: Yup.string().required('Phone is required'),
});

const CreateCompanyPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyForm>({
    resolver: yupResolver(schema),
  });
  const navigation = useNavigate();

  const [commitMutation, { isLoading }] = useCreateCompanyMutation();
  const onSubmit: SubmitHandler<CompanyForm> = async (data) => {
    try {
      await commitMutation({
        companyModel: { ...data },
      }).unwrap();

      navigation('/company', { replace: true });
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert('Something went wrong');
    }
  };

  return (
    <Container>
      <Space h="xl" />
      <Space h="xl" />
      <Title order={2}>Create Company</Title>
      <Space h="xl" />
      <Space h="xl" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label="Company Name"
          mb="md"
          {...register('name')}
          error={errors.name?.message}
        />

        <TextInput
          label="Company Email"
          mb="md"
          {...register('email')}
          error={errors.email?.message}
        />

        <TextInput
          label="Company Phone"
          mb="md"
          {...register('phone')}
          error={errors.phone?.message}
        />

        <Group>
          <Button fullWidth type="submit" loading={isLoading}>
            Save
          </Button>
        </Group>
      </form>
    </Container>
  );
};

export default CreateCompanyPage;
