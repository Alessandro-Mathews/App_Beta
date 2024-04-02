import { View,} from "react-native";
import LoginScreen from "./LoginScreen";
import SubContainer from "./Sub_container";
import { StyleSheet } from "react-native";


const Home = function(){
    return(

       <View style={styles.Screen} >
        <LoginScreen/>
        <SubContainer/>
       </View>
    
    )
}

export default Home;

const styles = StyleSheet.create({
    Screen: {
    alignItems: 'center',
    justifyContent: 'center',
    },
   
});
      