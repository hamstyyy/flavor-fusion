import React, {useCallback} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {useForm} from 'react-hook-form';
import {COLORS, FontFamily} from '../styles';
import {Button} from 'react-native-paper';
import {FormInput} from '../components';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {useAuthStore} from '../store/auth';

type LoginProps = {
  email: string;
  password: string;
};

const Login = ({navigation}: any) => {
  const {login} = useAuthStore();

  const formSchema = z.object({
    email: z.string().email('Please, enter a valid email address'),
    password: z.string().min(6, 'Password should be at least 6 characters'),
  });

  const {control, handleSubmit} = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = useCallback(
    async (data: LoginProps) => {
      await login(data.email, data.password);
    },
    [login],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Flavor!</Text>
      <Text>Sign in to continue!</Text>
      <FormInput name="email" placeholder="Email" control={control} />
      <FormInput
        name="password"
        placeholder="Password"
        control={control}
        secureTextEntry
      />
      <Text style={styles.resetPasswordLink}>Forgot password?</Text>
      <Button
        mode="contained"
        onPress={handleSubmit(onSubmit)}
        buttonColor={COLORS.ORANGE}>
        Login
      </Button>
      <View style={styles.registerContainer}>
        <Text>New to Flavor?</Text>
        <Pressable onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.registerRedirectLink}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.LIGHT_ORANGE,
    flex: 1,
    alignItems: 'center',
    paddingVertical: 130,
    paddingHorizontal: 25,
    gap: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.LIGHT_GREY,
    padding: 10,
    width: '100%',
  },
  error: {
    color: 'red',
    fontSize: 20,
    marginBottom: 12,
  },
  heading: {
    fontFamily: FontFamily.lato_bold,
    fontSize: 20,
  },
  resetPasswordLink: {
    width: '100%',
    textAlign: 'right',
    fontWeight: 'bold',
    color: COLORS.ORANGE,
  },
  registerContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    gap: 10,
  },
  registerRedirectLink: {
    fontFamily: FontFamily.lato_bold,
    color: COLORS.ORANGE,
  },
});
