import AsyncStorage from "@react-native-async-storage/async-storage";

export class UnreadMessages {
  async getTotalReadMessages(id) {
    const response = await AsyncStorage.getItem(`${id}_read`);
    return Number(response);
  }

  async setTotalReadMessages(id, total) {
    await AsyncStorage.setItem(`${id}_read`, JSON.stringify(total));
  }
}
