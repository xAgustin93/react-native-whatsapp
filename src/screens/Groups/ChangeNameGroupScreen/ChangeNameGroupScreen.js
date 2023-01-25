import { View } from "react-native";
import { Button, Input } from "native-base";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import { Group } from "../../../api";
import { useAuth } from "../../../hooks";
import { initialValues, validationSchema } from "./ChangeNameGroupScreen.form";
import { styles } from "./ChangeNameGroupScreen.styles";

const groupController = new Group();

export function ChangeNameGroupScreen() {
  const navigation = useNavigation();
  const { params } = useRoute();
  const { accessToken } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(params.groupName),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await groupController.update(accessToken, params.groupId, {
          name: formValue.name,
        });
        navigation.goBack();
        navigation.goBack();
        navigation.goBack();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <View style={styles.content}>
      <Input
        placeholder="Nombre del grupo"
        variant="unstyled"
        value={formik.values.name}
        onChangeText={(text) => formik.setFieldValue("name", text)}
        style={[styles.input, formik.errors.name && styles.inputError]}
      />
      <Button
        onPress={formik.handleSubmit}
        style={styles.btn}
        isLoading={formik.isSubmitting}
      >
        Cambiar
      </Button>
    </View>
  );
}
