import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RegisterForm } from "../../../components/Auth";
import { styles } from "./RegisterScreen.styles";

export function RegisterScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.content}>
      <Text style={styles.title}>
        Crea tu cuenta y empieza a enviar mensajes
      </Text>

      <RegisterForm />

      <Text style={styles.register} onPress={navigation.goBack}>
        Iniciar sesión
      </Text>
    </View>
  );
}
