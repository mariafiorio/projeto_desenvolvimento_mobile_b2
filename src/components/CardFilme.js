import { TouchableOpacity, Image, StyleSheet, Text, View, Dimensions} from "react-native";

const baseURL = "https://api.otaviolube.com";
const MAX_WIDTH = Dimensions.get('window').width*0.9;
const MAX_HEIGHT = Dimensions.get('window').height*0.9;

export default function CardFilme({filme}){
    return (
        <View style={styles.container}>
            <Text style={styles.Titulo}>{filme.titulo}</Text>
            <Image style={styles.imgFilme} source={{uri: imgUrl}}/>
            <Text style={styles.Sinopse}>Sinopse: {filme.sinopse.length > 200 ? filme.sinopse.substring(0,200) + 
            "..." : filme.sinopse}</Text>
            <Link style={styles.link} to={{screen: "MoviesDetails", params:{filme: filme}}}>Saiba mais...</Link>
            <TouchableOpacity style={styles.button}> 
                <Text style={styles.txtBtnComprar}> Comprar </Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'pink',
        margin: 15,
        padding: 10,
        alignItems: 'center',
        justifyContent: "center",
        height: MAX_HEIGHT,
        width: MAX_WIDTH
    },
    image: {
        height: '200px',
        width: '150px',
        resizeMode: 'cover',
        marginBottom: 10
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10

    },
    sinopse : {
        marginBottom: 10,
        textAlign: "justify"

    },
    button: {
        height: 50,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'purple',
        marginTop:20

    },
    btnText: {
        fontSize: 20,
        fontWeight: "bold"
    

    }
})
