import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Alert } from 'react-native';

export default function Taist() {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
            <Image style={styles.image} source={require('../../assets/shrek-5.jpg')}/>
        </TouchableOpacity>
        <Text style={styles.text}>Count: {count}</Text>
        <Button 
          style={styles.button}
          onPress={() => Alert.alert("C'est l'heure de manger")}
          title="C'est un bouton"
          color="#841584"
        />
      </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
      alignItems: 'center'
    },
    text: {
      marginBottom: 5,
    },
    image: {
        marginTop: 100,
        marginBottom: 10,
        width: 200,
        height: 200,
        borderRadius: 10
    }
});