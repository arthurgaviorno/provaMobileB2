import { Link } from "@react-navigation/native";
import { View, Text, StyleSheet} from "react-native";

export default function Registro(){
    return(
        <SafeAreaView style={styles.container}>
            
                
                <TextInput 
                style={styles.input}
                label="Usuário"
                variant="standard"
                />
        
                <TextInput
                style={styles.input}
                secureTextEntry={true}
                label="Senha"
                variant="standard"
                />
                    
                <TextInput
                style={styles.input}
                label="Email"
                variant="standard"
                />
                <View>
                    <Link to={{screen: "Login"}} style={styles.botao}>Realizar Cadastro</Link>
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
   
    botao: {
        width: 300,
        backgroundColor: 'green',
        padding: 10,
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 10,
        marginBottom: 10,
        textAlign: 'center'
    },

    input: {
        borderRadius: 5,
        borderWidth: 1 ,
        borderColor: 'black',
        backgroundColor: 'papayawhip',
        padding: '10',
        margin: 12
    },
})
