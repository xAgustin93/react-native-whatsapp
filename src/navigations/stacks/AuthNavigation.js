import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AuthStartScreen,
  LoginScreen,
  RegisterScreen,
} from "../../screens/Auth";
import { IconBack } from "../../components/Navigation";
import { screens } from "../../utils";
import { styles } from "../Styles.styles";

const Stack = createNativeStackNavigator();

export function AuthNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        ...styles.stackNavigationStyles,
        headerLeft: IconBack,
      }}
    >
      <Stack.Screen
        name={screens.auth.authStartScreen}
        component={AuthStartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screens.auth.loginScreen}
        component={LoginScreen}
        options={{ title: "Iniciar sesión" }}
      />
      <Stack.Screen
        name={screens.auth.registerScreen}
        component={RegisterScreen}
        options={{ title: "Registro" }}
      />
    </Stack.Navigator>
  );
}
