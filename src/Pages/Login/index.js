import { Link } from "@react-navigation/native";
import { View, TextInput, StyleSheet, Text } from "react-native";


export default function Login() {
    return (
        <View style={styles.container}>

            <Text style={styles.nome}>
                Faça seu Login
            </Text>


            <TextInput
                style={styles.input}
                label="Usuário"
                variant="standard"
                placeholder="Usuário"
            />


            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Senha"
            />

            <View>
                <Link to={{ screen: "Dashboard" }} style={styles.botao}>Faça seu Login</Link>
                <Link to={{ screen: "Registro" }} style={styles.botao}>Nao possui uma conta? Crie agora</Link>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        margin: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'papayawhip'
    },

    input: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 12
    },

    botao: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        width: 300,
        margin: 10,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'black'
    },

    nome: {
        fontSize: 30,
        fontWeight: 'bold'
    }

})
