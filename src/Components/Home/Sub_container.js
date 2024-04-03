import { View, Pressable, StyleSheet, Text} from "react-native"
import { useNavigation } from "@react-navigation/native";

const SubContainer = function(){
  const navigation = useNavigation()
    return(

        <View style={styles.subContainer} >
      <Pressable onPress={() => navigation.navigate('Sobre') }  style={styles.subButton}> <Text style={styles.textSubButton} >Sobre</Text></Pressable>
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
        padding: 20,
        gap: 50,
      }
    ,subButton: {
      padding: 25,
    }
    ,textSubButton: {
      color: '#B0E0E6',
    }
});