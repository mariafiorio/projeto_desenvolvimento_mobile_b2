import { Text, View, StyleSheet } from "react-native";

export default function MoviesDetails({ route }){

    const {filme} = route.params;

    return(
        <View style={styles.container}>
            <Text style={styles.detalhes}>Detalhes da página</Text>
            <Text style={styles.titulo}>{filme.titulo}</Text>
            <Text style={styles.sinopse}>{filme.sinopse}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    detalhes: {
        fontSize: 30,
        alignSelf: "center",
        padding: 5,
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 5,
    },
    sinopse: {
        padding: 5,
        fontSize: 16,
    },
})
