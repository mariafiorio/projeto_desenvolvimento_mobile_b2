import { TextInput, SafeAreaView, View, Image, TouchableOpacity, Text} from "react-native";
import styles from "./style"; 
import { Link } from "@react-navigation/native";


export default function ForgotPassword(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.viewImg}>
                <Image 
                    style={styles.logoImg}
                    source={require('../../assets/img/logoFilms.jpg')}
                />
            </View>
            <View style={styles.inputs}>
                <TextInput style={styles.inputSquare} placeholder='Email'/>
                <TextInput style={styles.inputSquare} placeholder='Nova Senha'/>
                <TextInput style={styles.inputSquare} placeholder='Digite a senha novamente'/>
                <TouchableOpacity style={styles.btnConfirmar}>
                    <Text style={styles.btnConfirmarTxt}>Confirmar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewLink}>
                <Link style={styles.link} to={{screen: "Login"}}>Volte ao login...</Link>
            </View>
        </SafeAreaView>
    )
}
