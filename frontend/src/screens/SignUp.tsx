import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {useForm} from 'react-hook-form';
import {COLORS} from '../styles/colors';
import {FontFamily} from '../styles/typography';
import {Button} from 'react-native-paper';
import FormInput from '../components/FormInput';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';

const SignUp = ({navigation}: any) => {
  const formSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email('Please, enter a valid email address'),
    password: z.string().min(6, 'Password should be at least 6 characters'),
  });

  const {control, handleSubmit} = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(formSchema.required()),
  });

  const onSubmit = (data: any) => {
    console.log(data, 'DATA');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register</Text>
      <FormInput name="firstName" placeholder="First Name" control={control} />
      <FormInput name="lastName" placeholder="Last Name" control={control} />
      <FormInput name="email" placeholder="Email" control={control} />
      <FormInput
        name="password"
        placeholder="Password"
        control={control}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={handleSubmit(onSubmit)}
        buttonColor={COLORS.ORANGE}>
        Submit
      </Button>
      <View style={styles.registerContainer}>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={styles.registerRedirectLink}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.LIGHT_ORANGE,
    flex: 1,
    alignItems: 'center',
    paddingVertical: 130,
    paddingHorizontal: 25,
    gap: 15,
  },
  heading: {
    fontFamily: FontFamily.lato_bold,
    fontSize: 20,
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
