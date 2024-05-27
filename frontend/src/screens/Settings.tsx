import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useAuthStore} from '../store/auth';
import {COLORS} from '../styles';
import {Button} from 'react-native-paper';

interface SettingsProps {}

const Settings = (props: SettingsProps) => {
  const {signOut} = useAuthStore();

  return (
    <View style={styles.container}>
      <Text>Settings</Text>

      <Button mode="contained" onPress={signOut} buttonColor={COLORS.ORANGE}>
        Sign Out
      </Button>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
