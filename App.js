import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { HandlerNavigation } from "./src/navigations";
import { AuthProvider } from "./src/contexts";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <AuthProvider>
          <HandlerNavigation />
        </AuthProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
