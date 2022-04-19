import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './style';

const lista = [ 
  {
    name: 'Marcos Andrade',
    avatar_url: "https://pbs.twimg.com/media/EnM7TmrXcAI0LKx.jpg",
    SubTitle: '81 988553424'
  },
  {
    name: 'Patrícia Tavares',
    avatar_url: "https://pbs.twimg.com/media/EnM7TmrXcAI0LKx.jpg",
    SubTitle: '81 998765332'
  },
  {
    name: 'Rodrigo Antunes',
    avatar_url: "https://pbs.twimg.com/media/EnM7TmrXcAI0LKx.jpg",
    SubTitle: '81 987765525'
  },
]

export default function L_contato({navigation, route}){
  return (
    <View>
        <View>
          {
            lista.map((l, i) => (
              <ListItem key={i} bottomDivider >
                <Avatar rounded size='medium' source={{uri: l.avatar_url}}/>
                <ListItem.Content style={styles.list}>
                  <ListItem.Title style={styles.textList}>{l.name}</ListItem.Title>
                  <ListItem.Subtitle>{l.SubTitle}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            ))
          }
          
          <TouchableOpacity onPress={()=>navigation.navigate("Usuario")}
          style={styles.ButtonNovo}>
            <Text style={styles.textButton}>+ Novo Contato</Text>
          </TouchableOpacity>
        </View>      
    </View>
  );
}    