import { TextInput, SafeAreaView, View, Image, TouchableOpacity, Text} from "react-native";
import styles from "./style"; 
import { Link } from "@react-navigation/native";

export default function Register(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.viewImg}>
                <Image 
                    style={styles.logoImg}
                    source={require('../../assets/img/logoFilms.jpg')}
                />
            </View>
            <View style={styles.inputs}>
                <TextInput style={styles.inputSquare} placeholder='Nome'/>
                <TextInput style={styles.inputSquare} placeholder='Sobrenome'/>
                <TextInput style={styles.inputSquare} placeholder='Email'/>
                <TextInput style={styles.inputSquare} placeholder='Senha'/>
                <TextInput style={styles.inputSquare} placeholder='Confirmar Senha'/>
                <TouchableOpacity style={styles.btnConfirmar}>
                    <Text style={styles.btnConfirmarTxt}>Registrar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewLink}>
                <Link style={styles.link} to={{screen: "Login"}}>Volte ao login...</Link>
            </View>
        </SafeAreaView>
    )
}
