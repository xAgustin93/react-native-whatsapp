import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GroupsScreen, CreateGroupScreen } from "../../screens/Groups";
import { screens } from "../../utils";
import { styles } from "../Styles.styles";

const Stack = createNativeStackNavigator();

export function GroupsNavigation() {
  return (
    <Stack.Navigator screenOptions={{ ...styles.stackNavigationStyles }}>
      <Stack.Screen
        name={screens.tab.groups.groupsScreen}
        component={GroupsScreen}
        options={{ title: "Grupos" }}
      />
      <Stack.Screen
        name={screens.tab.groups.createGroupScreen}
        component={CreateGroupScreen}
        options={{
          title: "Nuevo grupo",
          presentation: "modal",
          ...styles.modelStyles,
        }}
      />
    </Stack.Navigator>
  );
}
