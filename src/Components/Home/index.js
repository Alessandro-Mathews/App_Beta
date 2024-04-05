import { ImageBackground, View,} from "react-native";
import LoginScreen from "./LoginScreen";
import SubContainer from "./Sub_container";
import { StyleSheet } from "react-native";


const Home = function(){
    return(
         <View style={styles.Screen}>
            <ImageBackground style={styles.imagem}
                    source={require("../../../assets/Welcome-bg.png")}
            />
            <View >
            <LoginScreen />
            <SubContainer />
            </View>
        </View>
       
    
    )
}

export default Home;

const styles = StyleSheet.create({
    Screen:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagem:{
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
    }
});


      