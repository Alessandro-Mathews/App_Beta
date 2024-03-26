import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View, } from 'react-native';
import Home from './Components/Home';

export default function App(){
  return(
    <View style={styles.container}>
      <Home></Home>
      <Pressable style={styles.FormButton} >
        <Text style={styles.textButton}>Logar</Text>
      </Pressable>
      <View style={styles.subContainer} >
      <Pressable style={styles.subButton} ><Text style={styles.textSubButton} >Esqueci a senha</Text></Pressable>
      <Pressable style={styles.subButton} ><Text style={styles.textSubButton} >Novo usuário</Text></Pressable>
      </View>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  FormButton:{
    backgroundColor: '#B0E0E6',
    margin: 10,
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
  }
  ,textButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 20,
  }
  ,subContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'center',
    padding: 10,
    gap: 50,
  }
,subButton: {
  padding: 10,
}
,textSubButton: {
  color: '#B0E0E6',
}

});
