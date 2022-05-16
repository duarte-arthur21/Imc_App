import { Image, Text, View } from 'react-native';

import { estilo } from './Estilo';
import {CalculaIMC} from './Componentes';

export default function App() {

  return (
    <View style={estilo.container}>
    <Image style={estilo.backgroundImage} source={require('./imagens/logo.jpg')}/>

      <View style={estilo.container1}>      
      <CalculaIMC/>
      </View>
    </View>
  );
}