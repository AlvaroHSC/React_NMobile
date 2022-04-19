import React from 'react';
import styles from './style';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function Usuario({navigation, route}){
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.UseLabel}>Nome</Text>
        <TextInput style={styles.input}/>

        <Text style={styles.UseLabel}>Cpf</Text>
        <TextInput style={styles.input}/> 

        <Text style={styles.UseLabel}>Email</Text>
        <TextInput style={styles.input}/> 

        <Text style={styles.UseLabel}>Senha</Text>
        <TextInput style={styles.input}/>

        
        <TouchableOpacity onPress={()=>navigation.navigate("Login")}
        style={styles.ButtonSalvar}>
            <Text style={styles.textButton}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
}