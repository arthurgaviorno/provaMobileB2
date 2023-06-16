import { Link } from "@react-navigation/native";
import { View, Text, StyleSheet} from "react-native";

export default function Registro(){
    return(
        <View style={styles.container}>
            <View>
                <Text></Text>
                <Text style={styles.informacao}>
                    Nome do Usuário
                </Text>
                <Text style={styles.informacao}>
                    Senha
                </Text>
                <Text style={styles.informacao}>
                    Email
                </Text>
                <View>
                    <Link to={{screen: "Login"}} style={styles.confirmar}>Realizar Cadastro</Link>
                </View>
            
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
        backgroundColor: '#ADD8E6'
    }, 
    informacao: {
        width: '120%',
        backgroundColor: 'white',
        padding: 10,
        color: 'black',
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 10,
        marginBottom: 10,
        textAlign: 'center'
    },
    confirmar: {
        width: '120%',
        backgroundColor: 'green',
        padding: 10,
        color: 'black',
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 10,
        marginBottom: 10,
        textAlign: 'center'
    },

        
})