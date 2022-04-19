import * as React from 'react';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Home/index'
import CadastroScreen from './Cadastro/index'
import UserScreen from './Usuario/index'
import ListScreen from './L_Contato/index'

const Stack = createNativeStackNavigator();

function App() {
return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Login" component={LoginScreen} />
<Stack.Screen name="Cadastro" component={CadastroScreen}/>
<Stack.Screen name="Usuario" component={UserScreen}/>
<Stack.Screen name="ListaContatos" component={ListScreen}/>
</Stack.Navigator>
</NavigationContainer>
);
}

export default App; 