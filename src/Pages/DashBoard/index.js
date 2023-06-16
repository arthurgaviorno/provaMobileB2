import { Link } from "@react-navigation/native";
import { View, Text, StyleSheet} from "react-native";

export default function Dashboard(){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.informacao}>
                    Dashboard
                </Text>
            <View>
                <Link to={{screen: "Login"}} style={styles.consertar}>Voltar?</Link>
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
        backgroundColor: 'papayawhip'
    }, 
    informacao: {
        width: '120%',
        backgroundColor: 'purple',
        padding: 10,
        color: 'black',
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 10,
        marginBottom: 10,
        textAlign: 'center'
    },
    consertar: {
        textAlign: 'center',
        color: 'black',
        marginBottom: 10,
        width: '120%'
    }
})
