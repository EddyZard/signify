import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function Login() {

  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [emailFocado, setEmailFocado] = useState(false);
  const [senhaFocada, setSenhaFocada] = useState(false);

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      padding: 20,
    }}>

      {/* Ícone do usuário */}
      <Image
        source={require('./assets/user.jpeg')}
        style={{
          width: 110,
          height: 110,
          borderRadius: 55,
          marginBottom: 40,
        }}
      />

      {/* Campo Email */}
      <TextInput
        style={{
          marginTop: 10,
          padding: 12,
          width: '70%',
          backgroundColor: '#fff',
          fontSize: 16,
          borderWidth: emailFocado ? 2 : 1,
          borderColor: emailFocado ? '#000' : '#000',
          borderRadius: 10,
        }}
        placeholder="Email"
        placeholderTextColor="#000"
        onFocus={() => setEmailFocado(true)}
        onBlur={() => setEmailFocado(false)}
      />

      {/* Campo Senha */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '70%',
        marginTop: 10,
        backgroundColor: '#fff',
        borderWidth: senhaFocada ? 2 : 1,
        borderColor: senhaFocada ? '#000' : '#000',
        borderRadius: 10,
        paddingHorizontal: 10,
      }}>
        <TextInput
          style={{
            flex: 1,
            fontSize: 16,
            paddingVertical: 12,
            outlineStyle: 'none',
          }}
          secureTextEntry={!senhaVisivel}
          placeholder="Senha"
          placeholderTextColor="#000"
          onFocus={() => setSenhaFocada(true)}
          onBlur={() => setSenhaFocada(false)}
        />

        <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)}>
          <Ionicons
            name={senhaVisivel ? 'eye' : 'eye-off'}
            size={24}
            color="#000"
          />
        </TouchableOpacity>
      </View>

      {/* Botão Entrar */}
      <TouchableOpacity
        style={{
          width: '55%',
          paddingVertical: 12,
          backgroundColor: '#f4a33a',
          marginTop: 25,
          borderRadius: 25,
          alignItems: 'center',
          borderWidth: 2,
          borderColor: '#f4a33a',
        }}
      >
        <Text style={{ fontSize: 16, color: '#000', fontWeight: '600' }}>
          Entrar
        </Text>
      </TouchableOpacity>

      {/* Botão Cadastrar */}
      <TouchableOpacity
        style={{
          width: '55%',
          paddingVertical: 12,
          marginTop: 12,
          borderRadius: 25,
          alignItems: 'center',
          borderWidth: 2,
          borderColor: '#f4a33a',
        }}
      >
        <Text style={{ fontSize: 16, color: '#000', fontWeight: '600' }}>
          Cadastrar-se
        </Text>
      </TouchableOpacity>

      {/* Link Esqueci a senha */}
      <TouchableOpacity style={{ marginTop: 12 }}>
        <Text style={{
          fontSize: 14,
          color: '#f4a33a',
          textDecorationLine: 'underline',
        }}>
          Esqueci minha senha...
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}