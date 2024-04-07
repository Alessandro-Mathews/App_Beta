import { Text, View, StyleSheet, TextInput, Pressable } from "react-native"
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LoginScreen = function (){
    return(
        <View style={styles.Formtela} >
        <Text style={styles.FormTitlle} >ViaSegura</Text>
        <Text style={styles.FormTitlle} >Login</Text>
      <TextInput style={styles.FormInput}
        placeholder="Nome do usuário" 
       />
       <FaUser style={styles.icon} />
      <TextInput style={styles.FormInput}
      placeholder="Senha"
      />
      <FaLock style={styles.icon2}/>
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
        color: '#fff',
        margin: 10,
      },
      FormInput: {
        borderColor: '#708090',
        borderWidth: 1,
        borderRadius: 40,
        fontSize:22,
        padding: 5,
        margin: 10,
        color:'#fff'
        
      }
      ,FormButton:{
        margin: 10,
        padding: 5,
        borderWidth: 1,
        borderRadius: 40,
        borderColor: '#708090',
        alignItems: 'center',
      },
      textButton: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 20,
      },
      Formtela:{
        alignItems: 'center',
        justifyContent: 'center',
      },

      icon: {
        position: 'absolute',
        right: 20,
        width: 50,
        top: '50%',
        fontSize: 16,
        color: '#708090'
      },
      icon2:{
        position: 'absolute',
        right: 20,
        width: 50,
        top: '70%',
        fontSize: 16,
        color: '#708090'
      }

    });
    
export default LoginScreen;