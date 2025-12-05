import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

export default function TelaInicial() {
/*
  const [fontsLoaded] = useFonts({
    Abril: require('./assets/AbrilFatface-Regular.ttf'),
  });
*/
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>

      {/* Conteúdo */}
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
      }}>

        <Image
          source={require('./assets/logo.jpeg')}
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            marginBottom: 40
          }}
        />

        {/* Título com stroke */}
        <View style={{ height: 90, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{
            fontSize: 34,
            fontFamily: 'Abril',
            color: '#57c475',
            fontWeight: '700',
            position: 'absolute',
            transform: [{ translateX: 1.5 }, { translateY: 1.5 }]
          }}>
            Signify
          </Text>

          <Text style={{
            fontSize: 34,
            fontFamily: 'Abril',
            color: '#91F5AD',
            fontWeight: '700',
            position: 'absolute'
          }}>
            Signify
          </Text>
        </View>

        {/* Subtítulo simples, sem stroke */}
        <View style={{ marginBottom: 40 }}>
          <Text style={{
            fontSize: 20,
            fontFamily: 'Abril',
            color: '#57c475',
            textAlign: 'center',
            fontWeight: '400'
            }}>
              Seu tradutor de Libras!
          </Text>
        </View>

        {/* Botão Login */}
        <TouchableOpacity style={{
          backgroundColor: '#91F5AD',
          width: '55%',
          paddingVertical: 12,
          borderRadius: 25,
          alignItems: 'center',
          marginBottom: 12,
          borderWidth: 2,
          borderColor: '#91F5AD'
        }}>
          <Text style={{ color: '#000', fontSize: 16, fontWeight: '600' }}>
            Fazer Login
          </Text>
        </TouchableOpacity>

        {/* Botão Cadastrar */}
        <TouchableOpacity style={{
          width: '55%',
          paddingVertical: 12,
          borderRadius: 25,
          alignItems: 'center',
          borderWidth: 2,
          borderColor: '#91F5AD'
        }}>
          <Text style={{ color: '#000', fontSize: 15, fontWeight: '600' }}>
            Cadastrar-se
          </Text>
        </TouchableOpacity>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}