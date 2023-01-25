import { useState } from "react";
import { Text } from "react-native";
import { AlertDialog, Button } from "native-base";
import { styles } from "./AlertConfirm.styles";

export function AlertConfirm(props) {
  const { show, onClose, title, message, textConfirm, onConfirm, isDanger } =
    props;
  const [loading, setLoading] = useState(false);

  const onConfirmWrapper = () => {
    setLoading(true);
    onConfirm();
  };

  return (
    <AlertDialog isOpen={show} onClose={onClose}>
      <AlertDialog.Content>
        <AlertDialog.CloseButton />

        <AlertDialog.Header style={styles.header}>
          <Text style={styles.titleText}>{title}</Text>
        </AlertDialog.Header>

        <AlertDialog.Body style={styles.body}>
          <Text style={styles.messageText}>{message}</Text>
        </AlertDialog.Body>

        <AlertDialog.Footer style={styles.footer}>
          <Button.Group space={2}>
            <Button variant="unstyled" onPress={onClose} _text={styles.cancel}>
              Cancelar
            </Button>
            <Button
              colorScheme={isDanger ? "danger" : "cyan"}
              onPress={onConfirmWrapper}
              isLoading={loading}
            >
              {textConfirm}
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
}
