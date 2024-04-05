import React from "react";
import { View, Text, StyleSheet, Image} from 'react-native';


export default function Sobre (){
    return(
        <><View style={styles.container}>
            <Text style={styles.Title}> Sobre </Text>
            <Image style={styles.image} source={require("../../../assets/image.jpg")} />
            <Text style={styles.text}>O aplicativo foi desenvolvido com o intuito de reportar denúncias de problemas rodoviários para os responsáveis, visando a validação da informação e a possível resolução para o problema.</Text>
        </View>
        <View style={styles.SubContainer}>
                <Text style={styles.Subtext}>Grupo e funções:</Text>
                <Text>Front: Eduardo Marinho, Guilherme e João.</Text>
                <Text>Back: Kawã e Eduardo Oliveira.</Text>
                <Text>QA: Alessandro, Paulo e Júlia.</Text>
            </View></>
       
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007BFF'
    },

    Title: {
        fontSize: 36,
        color: '#fff',
    },
    image: {
        borderRadius: 200,
        borderColor:'#B0E0E6',
        width: 200,
        height: 200,
        margin: 15,
    },
    text:{
        fontSize: 18,
     },
    Subtext:{
        fontSize: 18,
        textAlign: 'left',
    }
});