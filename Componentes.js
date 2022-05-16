import React, { useState } from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import {estilo} from './Estilo'

export function CalculaIMC(){
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [imc, setIMC] = useState(0)
  const [msg, setMsg] = useState('')

  function calcular(){
    const resultado = peso /(altura * altura)
    setIMC(resultado)

    if (altura == ''){
      setMsg(": Informe sua Altura")}
    else if (peso == ''){
      setMsg(": Informe seu Peso")}
    else{
        if (imc<=18){
          setMsg(": Baixo peso")}
        else if (imc >18 && imc <25 ){
          setMsg(": Peso normal")}
        else if (imc >=25 && imc <35){
          setMsg(": Sobrepeso")}
        else if (imc >=35 && imc <40){
          setMsg(": Obesidade")}
        else if (imc >=40 && imc<=49){
          setMsg(": Obesidade grave")}
        else if (imc >50){
          setMsg(": Obesidade gravíssima")}}
  }

  function limpar(){
    setAltura()
    setPeso()
    setIMC(0)
    setMsg('')
  }

  return(
    <View >
      <Text style={estilo.titulo}>Informe seu Peso:</Text>
            <TextInput
            style={estilo.textInput}
            defaultValue={peso}
            placeholder="Seu peso (Kg)"
            onChangeText={peso => setPeso(parseFloat(peso))}
            />

      <Text style={estilo.titulo}>Informe sua Altura:</Text>
            <TextInput
            style={estilo.textInput}
            defaultValue={altura}
            placeholder="Sua altura (M)"
            onChangeText={altura => setAltura(parseFloat(altura))}
            />

            <TouchableOpacity onPress={()=> calcular()}>
                <Text style={estilo.calcular}>Calcular</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> limpar()}>
                <Text style={estilo.bottom}>Limpar</Text>
            </TouchableOpacity>

            <Text style={estilo.resultado}>{imc}{msg}</Text>
    </View>
);
}
