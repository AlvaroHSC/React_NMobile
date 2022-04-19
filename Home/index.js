import React from 'react';
import { Avatar } from 'react-native-elements';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './style';

export default function Login({navigation,route}) {
  return (
    <View style={styles.container}>
      <View >
        <View style={styles.HomLabel}>
        <Avatar 
        size={'xlarge'}
        containerStyle={{ marginLeft: 70, marginTop: 5, borderBottomWidth: 1}}
        rounded
        source={{ 
        uri: "https://pbs.twimg.com/media/EnM7TmrXcAI0LKx.jpg"
        }}/>
        </View>

        <Text style={styles.HomLabel}>Login</Text>
        <TextInput style={styles.input}/> 

        <Text style={styles.HomLabel}>Senha</Text>
        <TextInput style={styles.input}/>

        <TouchableOpacity onPress={()=>navigation.navigate("ListaContatos")}
        style={styles.ButtonLogin}>
            <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>navigation.navigate("Cadastro")}
        style={styles.ButtonCadastro}>
            <Text style={styles.textButton}>Cadastrar-se</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
}

