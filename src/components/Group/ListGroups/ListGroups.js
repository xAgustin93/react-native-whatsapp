import { View, ScrollView, Text } from "react-native";
import { map, size } from "lodash";
import { Item } from "./Item";
import { styles } from "./ListGroups.styles";

export function ListGroups(props) {
  const { groups, upGroupChat } = props;

  return (
    <ScrollView alwaysBounceVertical={false}>
      <View style={styles.content}>
        {size(groups) === 0 ? (
          <Text style={styles.noGroups}>
            No tienes ningun grupo, dale al (+) para crear el primero
          </Text>
        ) : (
          map(groups, (group) => (
            <Item key={group._id} group={group} upGroupChat={upGroupChat} />
          ))
        )}
      </View>
    </ScrollView>
  );
}
