import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Biblioteca from './Biblioteca';


import firebase from '@react-native-firebase/app';

export default function App() {

  console.log(firebase.app())

  return (
    <View style={styles.container}>
      <Biblioteca />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
