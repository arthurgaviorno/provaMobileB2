import { Link } from "@react-navigation/native";
import { View, TextInput, StyleSheet, Text } from "react-native";

export default function Registro() {
    return (
        <View style={styles.container}>

            <Text style={styles.nome}>
                Registre-se
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
                label="Senha"
                variant="standard"
                placeholder="Senha"
            />

            <TextInput
                style={styles.input}
                label="Email"
                variant="standard"
                placeholder="Email"
            />

            <View>
                <Link to={{ screen: "Login" }} style={styles.botao}>Realizar Cadastro</Link>
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

    botao: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        width: 300,
        marginBottom: 30,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'black'
    },

    input: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 12
    },

    nome: {
        fontSize: 40,
        fontWeight: 'bold'

    }
})
