import React from "react";
import FloatingActionWrapper from "./FloatingActionWrapper";
import { FloatingButton } from "./FloatingButtonIcon";
import Colors from "@/constants/Colors";

interface Props {
  onCameraPress: () => void;
  onWritePress: () => void;
}

const UpdatesScreenFloatingAction = ({
  onCameraPress,
  onWritePress,
}: Props) => {
  return (
    <FloatingActionWrapper>
      <FloatingButton iconName="pencil" iconColor="#fff" backgroundColor={Colors.whats_gray} size="sm" onPress={onWritePress} />
      <FloatingButton iconName="camera" onPress={onCameraPress} />
    </FloatingActionWrapper>
  );
};

export default UpdatesScreenFloatingAction;
