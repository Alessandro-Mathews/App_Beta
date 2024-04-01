import { View, Pressable, StyleSheet, Text } from "react-native"


const SubContainer = function () {
    return(
        <View style={styles.subContainer} >
      <Pressable  style={styles.subButton}> <Text style={styles.textSubButton} >Esqueci a senha</Text></Pressable>
      <Pressable style={styles.subButton} ><Text style={styles.textSubButton}>Novo usuário</Text>  </Pressable>
      </View>
    )
}

export default SubContainer;

const styles = StyleSheet.create({
    subContainer: {
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