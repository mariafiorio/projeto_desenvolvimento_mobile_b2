import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MoviesPage from "../pages/MoviesPage";
import MoviesDetails from "../pages/MoviesDetailsPage";

const Stack = createNativeStackNavigator();

export default function AppRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="MoviesPage" component={MoviesPage} options={{headerShown: false}}/>
            <Stack.Screen name="MoviesDetails" component={MoviesDetails} options={{headerShown: true}}/>
        </Stack.Navigator>
    )
}
