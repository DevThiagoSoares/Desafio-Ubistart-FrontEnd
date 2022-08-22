import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { style } from "./styles";

export default function Register(props) {
    // console.log(props)
    return (
        <View style={style.container}>
                <Text style={style.titulo}>Nome</Text>
                <TextInput
                    placeholder="Nome"
                    style={style.input}
                />
                <Text style={style.titulo}>Email</Text>
                <TextInput
                    keyboardType="email-address"
                    placeholder="Email"
                    style={style.input}
                />
                <Text style={style.titulo}>Senha</Text>
                <TextInput
                    secureTextEntry={true}
                    placeholder="Senha"
                    style={style.input}
                />
                <Text style={style.titulo}>Confirmar Senha</Text>
                <TextInput
                    secureTextEntry={true}
                    placeholder="Confirmar Senha"
                    style={style.input}
                />

            <TouchableOpacity style={style.button} onPress={() => props.navigation.navigate('Task')} >
                    <Text style={style.buttonText}> Cadastrar-se </Text>
                </TouchableOpacity>

        </View>
    );
}