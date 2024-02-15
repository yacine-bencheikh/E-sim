import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { faPeopleCarryBox } from "@fortawesome/free-solid-svg-icons/faPeopleCarryBox";


import { Welcome } from './screens/Welcome'


export default function App() {
  return (
    // <SafeAreaView>
      <Welcome />
    // </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     fontWeight: 'bold',
//     fontSize: 30,
//     color: '#20315f'
//   },
//   loginOpacity: {
//     backgroundColor: '#ad40af',
//     width: '90%',
//     flexDirection: 'row',
//     borderRadius: 5,
//     justifyContent: 'space-between',
//     padding: 20,
//     marginBottom: 20,


//   }
// });
