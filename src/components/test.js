import { StyleSheet, Text, View, Button } from 'react-native';

export default function Test({firstname, lastname}) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{firstname} {lastname}</Text>
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
  