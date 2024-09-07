import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import {
  Alert,
  Box,
  Button,
  Container,
  Group,
  PasswordInput,
  Space,
  TextInput,
  Title,
} from '@mantine/core';

type LoginForm = {
  email: string;
  password: string;
};

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export default function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    if (data.email === 'you@example.com' && data.password === '123456') {
      navigate('/company', { replace: true });
      return;
    }

    return <Alert withCloseButton>Invalid credentials</Alert>;
  };

  return (
    <Container
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          style={{
            width: 350,
            padding: 20,
            borderRadius: 8,
            boxShadow: '0 2px 15px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Title order={2}>Login to your account</Title>
          <Space h="md" />

          <TextInput
            label="Email"
            placeholder="you@example.com"
            mb="md"
            {...register('email')}
            error={errors.email?.message}
            defaultValue="you@example.com"
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            mb="lg"
            {...register('password')}
            error={errors.password?.message}
            defaultValue="123456"
          />
          <Group>
            <Button fullWidth type="submit">
              Login
            </Button>
          </Group>
        </Box>
      </form>
    </Container>
  );
}
