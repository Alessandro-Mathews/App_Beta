import { Text, View, StyleSheet, TextInput, Pressable } from "react-native"

const LoginScreen = function (){
    return(
        <View style={styles.Formtela} >
        <Text style={styles.FormTitlle} >Login no Sistema(v_Beta)</Text>
      <TextInput style={styles.FormInput}
        placeholder="Informe o e-mail" 
       />
      <TextInput style={styles.FormInput}
      placeholder="Informe a senha"
      />
      <Pressable style={styles.FormButton} >
        <Text style={styles.textButton}>Logar</Text>
      </Pressable>
      </View>
    )
}


const styles = StyleSheet.create({
    FormTitlle: {
        flexDirection: "column",
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
      ,FormButton:{
        backgroundColor: '#B0E0E6',
        margin: 10,
        padding: 5,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
      },
      textButton: {
        color: 'white',
        fontSize: 20,
        fontWeight: 20,
      },
      Formtela:{
        alignItems: 'center',
        justifyContent: 'center',
      }
    });
    
export default LoginScreen;