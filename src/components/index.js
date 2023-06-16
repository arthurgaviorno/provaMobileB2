import { Button, Image, Text, View } from "react-native";

import styles from './styles';

export default function Card(props){
    return (
        <View style={styles.container}>
            <View style={styles.viewData}>
                <Text style={styles.item}>Item: {props.card.titulo}</Text>
                <Text style={styles.stats}>Stats: {props.card.stats}</Text>
                <Text style={styles.troca}>Condição de troca: {props.card.troca}</Text>
                <View style={styles.viewImg}>
                <Image source={{
                    uri: props.card.imgUrl
                }} style={styles.img}/>
            </View>
                <Button style={styles.btn} title="Propor troca!"/>
            </View>
        </View>
    );
}
