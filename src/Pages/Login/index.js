import { Link } from "@react-navigation/native";
import { View, TextInput, StyleSheet, Input} from "react-native";


export default function Login(){
    return(
        <View style={styles.container}>

            <View>
            <label style ={styles.caixa}> 
                Login: <input  style={styles.input} name = "login"></input>
            </label>

            <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Senha"
            />

                  <View>
                    <Link to={{screen: "Dashboard"}} style={styles.confirmar}>Dashboard</Link>
                    <Link to={{screen: "Registro"}} style={styles.consertar}>Quer se Registrar?</Link>
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

    input: {
        borderRadius: 5,
        borderWidth: '1px' ,
        borderColor: 'black'
    },

    caixa: {
        margin: 10,
    }
})