import { View, Text, TouchableOpacity } from "react-native";
import { Avatar, AddIcon, DeleteIcon, IconButton } from "native-base";
import { size, map } from "lodash";
import { useNavigation } from "@react-navigation/native";
import { Group } from "../../../../api";
import { useAuth } from "../../../../hooks";
import { ENV, screens } from "../../../../utils";
import { styles } from "./Participants.styles";

const groupController = new Group();

export function Participants(props) {
  const {
    group: { _id, participants },
    onReload,
  } = props;
  const { accessToken, user } = useAuth();
  const navigation = useNavigation();

  const banFromGroup = async (participant) => {
    try {
      await groupController.ban(accessToken, _id, participant._id);
      onReload();
    } catch (error) {
      console.error(error);
    }
  };

  const openAddParticipants = () => {
    navigation.navigate(screens.global.addUserGroupScreen, {
      groupId: _id,
    });
  };

  return (
    <View style={styles.content}>
      <Text style={styles.title}>{size(participants)} participantes</Text>
      <View style={styles.list}>
        <TouchableOpacity
          style={styles.participant}
          onPress={openAddParticipants}
        >
          <Avatar bg="muted.600" marginRight={3}>
            <AddIcon style={styles.addIcon} />
          </Avatar>
          <Text style={styles.addParticipant}>Añadir participante</Text>
        </TouchableOpacity>

        {map(participants, (participant, index) => (
          <View key={index} style={styles.participant}>
            <Avatar
              bg="cyan.500"
              marginRight={3}
              source={{
                uri:
                  participant.avatar &&
                  `${ENV.BASE_PATH}/${participant.avatar}`,
              }}
            >
              {participant.email.substring(0, 2).toUpperCase()}
            </Avatar>
            <View style={styles.info}>
              <Text style={styles.identity}>
                {participant.firstname || participant.lastname
                  ? `${participant.firstname || ""} ${
                      participant.lastname || ""
                    }`
                  : "..."}
              </Text>
              <Text style={styles.email}>{participant.email}</Text>

              {participant._id !== user._id && (
                <IconButton
                  icon={<DeleteIcon />}
                  onPress={() => banFromGroup(participant)}
                  style={styles.banIcon}
                  padding={0}
                />
              )}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
