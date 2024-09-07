import { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { Button, Container, Group, Loader, Space, TextInput, Title } from '@mantine/core';
import { useCreateCompanyMutation, useGetCompanyQuery } from '@/services/api';

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
const EditCompanyPage = () => {
  const param = useParams<{ id: string }>();
  const { data, isLoading } = useGetCompanyQuery(String(param.id), { skip: !param.id });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CompanyForm>({
    resolver: yupResolver(schema),
  });
  const navigation = useNavigate();

  useEffect(() => {
    if (data) {
      reset({ email: data.email, name: data.name, phone: data.phone });
    }
  }, [data]);

  const [commitMutation, { isLoading: isUpdating }] = useCreateCompanyMutation();
  const onSubmit: SubmitHandler<CompanyForm> = async (data) => {
    try {
      await commitMutation({
        CompanyModel: { ...data, id: param.id },
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
      <Title order={2}>Update Company</Title>
      <Space h="xl" />
      <Space h="xl" />

      {isLoading ? (
        <Loader />
      ) : (
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
            <Button fullWidth type="submit" loading={isUpdating}>
              Save
            </Button>
          </Group>
        </form>
      )}
    </Container>
  );
};

export default EditCompanyPage;
