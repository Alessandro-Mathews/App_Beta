import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable} from 'react-native';

export default function register(){
    return(
        <View style={styles.Container} >
    <Text style={styles.Formtitle}>Preencha as informação abaixo:</Text>
    <TextInput style={styles.FormInput}
    placeholder='Nome do usuário'
    />
    <TextInput style={styles.FormInput}
    placeholder ='Defina sua senha'
    />
    <TextInput style={styles.FormInput}
    placeholder='Confirme a senha'
    />
    <Pressable style={styles.Pressable} >
        <Text style={styles.Text}>Cadastre-se</Text>
    </Pressable>
    </View>
    )
}
const styles = StyleSheet.create({
    Container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007BFF'
       

    },
    Formtitle: {
        flexDirection: "column",
        fontSize: 18,
        margin: 10,
        textAlign: 'center',
        color:'#fff'
    },
    FormInput: {
        borderColor: '#708090',
        borderWidth: 1,
        borderRadius: 10,
        fontSize:22,
        padding: 5,
        margin: 10,
        color:'#fff'
    },
    Pressable:{
        borderColor: '#708090',
        borderWidth: 2,
        borderRadius: 15,
        margin: 10,
    },
    Text:{
        color: '#fff'
    }
});


