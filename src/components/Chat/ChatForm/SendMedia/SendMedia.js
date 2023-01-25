import { useState } from "react";
import { IconButton, AddIcon, Actionsheet } from "native-base";
import { GalleryOption, CameraOption } from "./options";
import { useAuth } from "../../../../hooks";
import { styles } from "./SendMedia.styles";

export function SendMedia(props) {
  const { chatId } = props;
  const [show, setShow] = useState(false);
  const { accessToken } = useAuth();

  const onOpenClose = () => setShow((prevState) => !prevState);

  return (
    <>
      <IconButton icon={<AddIcon />} padding={0} onPress={onOpenClose} />

      <Actionsheet isOpen={show} onClose={onOpenClose}>
        <Actionsheet.Content style={styles.itemsContainer}>
          <CameraOption onClose={onOpenClose} chatId={chatId} />
          <GalleryOption
            onClose={onOpenClose}
            chatId={chatId}
            accessToken={accessToken}
          />

          <Actionsheet.Item
            style={[styles.option, styles.cancel]}
            _text={styles.cancelText}
            onPress={onOpenClose}
          >
            Cancelar
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}
