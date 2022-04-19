import React from 'react';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './style';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function Cadastrar({navigation, route}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.CadLabel}>Nome</Text>
        <TextInput style={styles.input}/>

        <Text style={styles.CadLabel}>Email</Text>
        <TextInput style={styles.input}/> 

        <Text style={styles.CadLabel}>Senha</Text>
        <TextInput style={styles.input}/>

        <TouchableOpacity onPress={() => navigation.navigate("Login")} 
        style={styles.ButtonSalvar}>
            <Text style={styles.textButton}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
}
