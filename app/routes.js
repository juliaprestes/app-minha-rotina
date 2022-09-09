import React from 'react';
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
import EscolhaPerfil from './src/pages/EscolhaPerfil';
import InicialResponsavel from './src/pages/InicialResponsavel';
import ConsultaDependente from './src/pages/ConsultaDependente';
import Rotinas from './src/pages/Rotinas';
import CadastroDependente from './src/pages/CadastroDependente';
import EditarInfoDependente from './src/pages/EditarInfoDependente';
import AndamentoRotina from './src/pages/AndamentoRotina';
import NovaRotina from './src/pages/NovaRotina';
import EscolherAtividades from './src/pages/EscolherAtividades';
import MeusDados from './src/pages/MeusDados';
import InformacaoAplicativo from './src/pages/InformacaoAplicativo';
import InicialDependente from './src/pages/InicialDependente';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Cadastro"
            component={Cadastro}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="EscolhaPerfil"
            component={EscolhaPerfil}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="InicialResponsavel"
            component={InicialResponsavel}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ConsultaDependente"
            component={ConsultaDependente}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Rotinas"
            component={Rotinas}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="CadastroDependente"
            component={CadastroDependente}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="EditarInfoDependente"
            component={EditarInfoDependente}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="AndamentoRotina"
            component={AndamentoRotina}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="NovaRotina"
            component={NovaRotina}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="EscolherAtividades"
            component={EscolherAtividades}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="MeusDados"
            component={MeusDados}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="InformacaoAplicativo"
            component={InformacaoAplicativo}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="InicialDependente"
            component={InicialDependente}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Routes;
