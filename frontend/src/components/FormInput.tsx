import React from 'react';
import {Control, Controller} from 'react-hook-form';
import {StyleSheet, Text, TextInput} from 'react-native';
import {COLORS} from '../styles/colors';

interface FormInputProps {
  name: string;
  placeholder: string;
  control: Control<any, any>;
  secureTextEntry?: boolean;
}

const FormInput = ({
  name,
  placeholder,
  control,
  ...otherProps
}: FormInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({field: {value, onChange}, fieldState: {error}}) => (
        <>
          <TextInput
            placeholder={placeholder}
            style={styles.input}
            value={value}
            onChangeText={onChange}
            autoCapitalize="none"
            {...otherProps}
          />
          {error && <Text style={styles.errMessage}>{error.message}</Text>}
        </>
      )}
    />
  );
};

export default FormInput;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.LIGHT_GREY,
    padding: 10,
    width: '100%',
  },
  errMessage: {
    color: 'red',
  },
});
