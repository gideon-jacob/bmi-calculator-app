import { useState } from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.bgContainer}>
      <View style={styles.card}>
        <Text style={styles.title}>BMI Calculator</Text>
        
        <Text style={styles.lable}>Height (in cm)</Text>
        <TextInput
          style={styles.input}
        />
        
        <Text style={styles.lable}>Weight (in kg)</Text>
        <TextInput
          style={styles.input}
        />
      </View> 
    </View>
  );
}

const rem = (x: number) => x * 16;

const styles = StyleSheet.create({
  bgContainer: {
    marginTop: 30,
    padding: 30,
    backgroundColor: '#fafafa',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  card: {
    width: '100%',
    height: '100%',
    padding: rem(1),
    borderRadius: rem(0.5),
    backgroundColor: "#f2f2f2",
  },
  title: {
    fontSize: rem(1.75),
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#6e6e6e',
    marginBottom: rem(1)
  },
  lable: {
    marginTop: rem(1),
    fontSize: rem(1),
    color: '#9f9f9f',
  },
  input: {
    height: 50,
    marginTop: rem(0.5),
    padding: rem(1),
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: rem(0.25),
    borderColor: '#dadada',
  },
});
