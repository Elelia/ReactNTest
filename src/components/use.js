import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
//reda.berbiche17@gmail.com

export default function Use({navigation}) {
    const [count, setCount] = useState(0);
    const [status, setStatus] = useState("");

    function onPress1() {
        setCount(lastCount => lastCount + 1);
        setStatus("+1");
    }

    function onPress2() {
        setCount(lastCount => lastCount - 1);
        setStatus("-1");
    }

    return (
      <View style={styles.container}>
        <Button 
          style={styles.button}
          onPress={onPress1}
          title="+1"
          color="#841584"
        />
        <Text>Vous avez cliqué sur le bouton {count} fois</Text>
        <Button 
          style={styles.button}
          onPress={onPress2}
          title="-1"
          color="#841584"
        />
        { status !== '' ? <Text>Vous avez fait {status}</Text> : ''}
        {/* <Button
          title="Go to another page"
          onPress={() =>
            navigation.navigate('Home')
          }
        /> */}
      </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      marginTop: 50
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold'
    }
});