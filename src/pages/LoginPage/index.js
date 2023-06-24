import { TextInput, SafeAreaView, View, Image, TouchableOpacity, Text} from "react-native";
import styles from "./style"; 
import { Link } from "@react-navigation/native";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

export default function Login(){

    const { signIn } = useContext(AuthContext)

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
                <TextInput style={styles.inputSquare} placeholder='Senha'/>
                <TouchableOpacity style={styles.btnConfirmar} onPress={() => signIn()}>
                    <Text style={styles.btnConfirmarTxt}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewLink}>
                <Link style={styles.link} to={{screen: "Register"}}>Registre-se...</Link>
                <Link style={styles.link} to={{screen: "ForgotPassword"}}>Esqueci a senha...</Link>
            </View>
        </SafeAreaView>
    )
}
