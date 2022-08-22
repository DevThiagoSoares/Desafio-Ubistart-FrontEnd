import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: '#1D5C63',
        padding: 15
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#E26A2C'
    },
    containerForm: {
        backgroundColor: '#105652',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        color: '#FFD460'
    }, 
    input: {
        color: '#E6D2AA',
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    button: {
        backgroundColor: '#001D6E',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonCadastro: {
        marginTop: 14,
        alignSelf: 'center',

    },
    buttonTextCadastro: {
        color: '#E6D2AA'
    }
})