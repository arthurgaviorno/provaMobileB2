import { Link } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";

export default function Dashboard() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.nome}>Dashboard</Text>
                <Text style={styles.texto}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum purus augue, ac blandit augue pellentesque eget. Sed sem velit, rutrum ut scelerisque et, vulputate a massa. Duis sit amet lacus massa. Sed vitae dapibus nisi. Etiam hendrerit tincidunt turpis a varius. Proin nec faucibus arcu. Aenean suscipit cursus orci quis dapibus. Donec quis semper mauris. Cras sed tortor ac arcu malesuada eleifend. Vestibulum vel magna varius, tempor diam nec, molestie mauris. Etiam ligula orci, aliquam quis risus id, sollicitudin ornare eros. Vivamus vitae mi venenatis, gravida felis sit amet, accumsan enim. Vivamus urna nisl, dignissim et pharetra nec, lobortis nec sapien. Cras quis viverra nulla, et egestas ipsum.

                    Fusce blandit nulla ipsum, eget lacinia diam dapibus vel. Praesent id dolor elementum, dictum ex eu, cursus ante. Curabitur luctus, velit ut fringilla molestie, ipsum ipsum gravida ante, sit amet tincidunt dui lacus non quam. Fusce pulvinar augue sit amet enim faucibus lacinia. Fusce erat dolor, elementum non lacinia id, semper id tellus. Nunc vel purus leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </Text>
                <View>
                    <Link to={{ screen: "Login" }} style={styles.botao}>Voltar</Link>
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

    consertar: {
        textAlign: 'center',
        color: 'black',
        marginBottom: 10,
        width: '120%'
    },

    texto: {
        maxWidth: 300,
        textAlign: 'justify'
    },

    botao: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        width: 300,
        margin: 15,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'black'
    },

    nome: {
        fontSize: 40,
        fontWeight: 'bold'
    }




})
