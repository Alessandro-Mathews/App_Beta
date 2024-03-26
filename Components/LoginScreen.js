import { View, Text, TextInput } from "react-native"

const LoginScreen = function (){
    return(
        <View> 
            <Text style={styles.FormTitlle} >Login no Sistema(v_Beta)</Text>
      <TextInput style={styles.FormInput}
            placeholder="Informe o e-mail" 
       />
      <TextInput style={styles.FormInput}
            placeholder="Informe a senha"
      />
        </View>
    )
}
const styles = StyleSheet.create({
FormTitlle: {
    fontSize: 36,
    color: '#B0E0E6',
    margin: 10,
  },
  FormInput: {
    borderColor: '#B0E0E6',
    borderWidth: 1,
    borderRadius: 10,
    fontSize:22,
    padding: 5,
    margin: 10,
  }
});

export default LoginScreen;