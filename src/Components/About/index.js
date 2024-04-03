import React from "react";
import { View, Text, StyleSheet} from 'react-native';

export default function Sobre (){
    return(
        <View>
        <Text style={styles.Title} >About:</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Title: {
    alignSelf: 'center',
    fontSize: 36,
    
}
});