import React from "react";

import FloatingActionWrapper from "./FloatingActionWrapper";
import { FloatingButton } from "./FloatingButtonIcon";

interface Props {
  onMetaPress: () => void;
  onChatPress: () => void;
}

const ChatScreenFloatingAction = ({ onMetaPress, onChatPress }: Props) => {
  return (
    <FloatingActionWrapper>
      <FloatingButton
        size="sm"
        logo={require("@/assets/images/meta-bg.png")}
        onPress={onMetaPress}
      />
      <FloatingButton iconName="message-plus" onPress={onChatPress} />
    </FloatingActionWrapper>
  );
};

export default ChatScreenFloatingAction;
