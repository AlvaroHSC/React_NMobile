import React, { useEffect, useState } from 'react';
import styles from './style';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function Usuario({navigation, route}){

  [getNome,setNome] = useState();
  [getCpf,setCpf] = useState();
  [getTelefone,setTelefone] = useState();
  [getId,setId] = useState();
  [getAlterar,setAlterar] = useState();

  useEffect (()=>{
    if(route.params){
      const { nome } = route.params
      const { telefone } = route.params
      const { cpf } = route.params
      const { id } = route.params
      const { alterar } = route.params

      setNome(nome)
      setTelefone(telefone)
      setCpf(cpf)
      setId(id)
      setAlterar(alterar)

    }
  },[])

  async function inserirDados(){
    await axios.post('http://professornilson.com/testeservico/clientes',{
      nome: getNome,
      cpf: getCpf,
      telefone: getTelefone,
    })
    .then(function (response) {
      setNome('')
      setTelefone('')
      setCpf('')
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    });
  }

  async function excluirDados(){
    axios.delete('http://professornilson.com/testeservico/clientes'+getId)
    .then(function (response) {
      setNome('')
      setTelefone('')
      setCpf('')
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    });
  }
    async function alterarDados(){
      await axios.put('http://professornilson.com/testeservico/clientes'+getId,{
        nome: getNome,
        cpf: getCpf,
        telefone: getTelefone,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function(error){
        console.log(error);
      });
    }
    
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