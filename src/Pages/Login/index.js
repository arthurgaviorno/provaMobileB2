import { Link } from "@react-navigation/native";
import { View, TextInput, StyleSheet, Input} from "react-native";


export default function Login(){
    return(
        <SafeAreaView style={styles.container}>

            <TextInput
            style={styles.input}
            placeholder="Login"
            />

            <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Senha"
            />

            <View>
                <Link to={{screen: "Dashboard"}} style={styles.confirmar}>Dashboard</Link>
                <Link to={{screen: "Registro"}} style={styles.consertar}>Quer se Registrar?</Link>
            </View>
            
           
        </SafeAreaView>
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
        borderWidth: 1 ,
        borderColor: 'black',
        padding: '10',
        margin: 12
    },

})
