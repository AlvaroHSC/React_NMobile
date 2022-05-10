import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import styles from './style';

export default function L_contato({navigation, route}){

  const [getData, setData] = useState([]);

  useEffect (()=>{
    async function resgateDados(){
      const result = await axios(
        'http://professornilson.com/testeservico/clientes',
      );
      setData(result.data);
    }
    resgateDados();
  })

  return (
    <View>
        <View>
          {
            getData.map((l, i) => (
              <ListItem key={i} bottomDivider >
                <Avatar rounded size='medium' source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }}/>
                <ListItem.Content style={styles.list}>
                  <ListItem.Title style={styles.textList}>{l.nome}</ListItem.Title>
                  <ListItem.Subtitle>{l.cpf}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            ))
          }
          
          <TouchableOpacity onPress={()=>navigation.navigate("Usuario",
          {
            nome: l.nome,
            telefone: l.telefone,
            cpf: l.cpf,
            id: l.id,
            alterar:true
          })}
          style={styles.ButtonNovo}>
            <Text style={styles.textButton}>+ Novo Contato</Text>
          </TouchableOpacity>
        </View>      
    </View>
  );

}   