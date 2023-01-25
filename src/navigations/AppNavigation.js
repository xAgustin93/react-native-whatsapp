import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabNavigation } from "./ButtomTabNavigation";
import {
  UserProfileScreen,
  CameraScreen,
  ImageFullScreen,
} from "../screens/Global";
import { ChatScreen } from "../screens/Chats";
import {
  GroupScreen,
  GroupProfileScreen,
  AddUserGroupScreen,
  ChangeNameGroupScreen,
} from "../screens/Groups";
import { screens, initSockets } from "../utils";
import { styles } from "./Styles.styles";

initSockets();

const Stack = createNativeStackNavigator();

export function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.tab.root}
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={screens.global.chatScreen}
        component={ChatScreen}
        options={{ headerShown: false, ...styles.stackNavigationStyles }}
      />
      <Stack.Screen
        name={screens.global.groupScreen}
        component={GroupScreen}
        options={{ headerShown: false, ...styles.stackNavigationStyles }}
      />

      <Stack.Group
        screenOptions={{ presentation: "modal", ...styles.modalStyles }}
      >
        <Stack.Screen
          name={screens.global.userProfileScreen}
          component={UserProfileScreen}
          options={{ title: "Info. del usuario" }}
        />
        <Stack.Screen
          name={screens.global.groupProfileScreen}
          component={GroupProfileScreen}
          options={{ title: "Info. del grupo" }}
        />
        <Stack.Screen
          name={screens.global.addUserGroupScreen}
          component={AddUserGroupScreen}
          options={{ title: "Añadir participante" }}
        />
        <Stack.Screen
          name={screens.global.changeNameGroupScreen}
          component={ChangeNameGroupScreen}
          options={{ title: "Cambiar nombre del grupo" }}
        />
        <Stack.Screen
          name={screens.global.cameraScreen}
          component={CameraScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screens.global.imageFullScreen}
          component={ImageFullScreen}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
