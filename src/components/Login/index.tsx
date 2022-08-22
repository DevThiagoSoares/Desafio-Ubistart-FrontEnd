import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles";

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    return (
        <View style={styles.container}>
            <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem vindo(a)</Text>
            </Animatable.View>

            <Animatable.View style={styles.containerForm}>
                <Text style={styles.titulo}>Email</Text>
                <TextInput
                    keyboardType="email-address"
                    placeholder="Email"
                    style={styles.input}
                />
                <Text style={styles.titulo}>Senha</Text>
                <TextInput
                    secureTextEntry={true}
                    placeholder="Senha"
                    style={styles.input}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}> Entrar </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonCadastro}>
                    <Text style={styles.buttonTextCadastro}> Cadastre-se ! </Text>
                </TouchableOpacity>

            </Animatable.View>

        </View>
    );
}