import { useState, useEffect } from "react";
import { View, Keyboard, Platform } from "react-native";
import { Input, IconButton, Icon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFormik } from "formik";
import { GroupMessage } from "../../../api";
import { useAuth } from "../../../hooks";
import { SendMedia } from "./SendMedia";
import { initialValues, validationSchema } from "./GroupForm.form";
import { styles } from "./GroupForm.styles";

const groupMessageController = new GroupMessage();

export function GroupForm(props) {
  const { groupId } = props;
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const { accessToken } = useAuth();

  useEffect(() => {
    const showKeyboardSub = Keyboard.addListener("keyboardDidShow", (e) => {
      const { startCoordinates } = e;

      if (Platform.OS === "ios") {
        setKeyboardHeight(startCoordinates.height + 65);
      }
    });

    const hideKeyboardSub = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardHeight(0);
    });

    return () => {
      showKeyboardSub.remove();
      hideKeyboardSub.remove();
    };
  }, []);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        setKeyboardHeight(0);
        Keyboard.dismiss();

        await groupMessageController.sendText(
          accessToken,
          groupId,
          formValue.message
        );

        formik.handleReset();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <View style={[styles.content, { bottom: keyboardHeight }]}>
      <SendMedia groupId={groupId} />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Enviar un mensaje..."
          variant="unstyled"
          style={styles.input}
          value={formik.values.message}
          onChangeText={(text) => formik.setFieldValue("message", text)}
          onEndEditing={!formik.isSubmitting && formik.handleSubmit}
        />
        <IconButton
          icon={<Icon as={MaterialCommunityIcons} name="send" />}
          padding={0}
          style={styles.iconSend}
          onPress={!formik.isSubmitting && formik.handleSubmit}
        />
      </View>
    </View>
  );
}
