import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Biblioteca from './Biblioteca';
import Login from './Login';
import TelaInicial from './TelaInicial';

export default function App() {
  return (
    <View style={styles.container}>
      <TelaInicial />
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
