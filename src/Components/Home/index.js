import { View,} from "react-native";
import LoginScreen from "./LoginScreen";
import SubContainer from "./Sub_container";
import { StyleSheet } from "react-native";


const Home = function(){
    return(
       <View style={styles.Screen} >
        <View>
        <LoginScreen/>
        <SubContainer/>
       </View>
       </View>
    
    )
}

export default Home;

const styles = StyleSheet.create({
    Screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
});


      