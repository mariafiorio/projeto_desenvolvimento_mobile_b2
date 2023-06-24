import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { AuthProvider } from '../AppRPG/src/contexts/AuthContext';
import AppRoutes from './src/routes/AppRoute';

const Stack = createStackNavigator();

export default function App() {
   return (
    <NavigationContainer>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}
