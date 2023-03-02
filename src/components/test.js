import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Test({firstname, lastname}) {
  //force le usestate à prendre le type qu'on lui indique, comme en java
  const [textinput, setTextInput] = useState("");
  const [text, setText] = useState(false);

    return (
      <View style={styles.container}>
        { text ? <Text>Hello</Text> : <Text>Bye</Text>}
        <Text style={styles.text}>{firstname} {lastname}</Text>
        <TextInput
        style={{
          width: 200,
          height: 50,
          marginTop: 30,
          marginBottom: 30,
          borderWidth: 1
        }}
          placeholder='Ton texte'
          value={textinput}
          onChangeText={setTextInput}
        />
        <Button 
          style={styles.button}
          onPress={() => {setText(!text)}}
          title="C'est un autre bouton"
          color="#841584"
        />
        <Text>{textinput}</Text>
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
  