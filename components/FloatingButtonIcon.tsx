import { Image, TouchableOpacity, View, StyleSheet } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { MaterialCommunityIconName, MaterialIconName } from "@/types/index-d";

const sizeVariants = {
  sm: {
    button: {
      width: 40,
      height: 40,
    },
    icon: 24,
    image: {
      width: 24,
      height: 24,
    }
  },
  lg: {
    button: {
      width: 56,
      height: 56,
    },
    icon: 32,
    image: {
      width: 36,
      height: 36,
    }
  }
} as const;

type SizeVariant = keyof typeof sizeVariants;

interface Props {
  iconName?: MaterialIconName | MaterialCommunityIconName;
  logo?: number;
  onPress: () => void;
  backgroundColor?: string;
  size?: SizeVariant;
  iconColor?: string
}

export const FloatingButton = ({
  iconName,
  onPress,
  logo,
  backgroundColor,
  size = 'lg',
  iconColor = Colors.black
}: Props) => {
  const sizeStyle = sizeVariants[size];

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {logo ? (
        <View style={[styles.metaButton, sizeStyle.button]}>
          <Image 
            source={logo} 
            style={[styles.metaImage, sizeStyle.image]} 
            resizeMode="contain" 
          />
        </View>
      ) : (
        <View style={[
          styles.messageButton, 
          sizeStyle.button,
          backgroundColor ? { backgroundColor } : null
        ]}>
          <MaterialCommunityIcons
            name={iconName as MaterialCommunityIconName}
            size={sizeStyle.icon}
            color={iconColor}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    elevation: 40,
    shadowColor: Colors.gray,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  metaButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#20272B',
    borderRadius: 10,
  },
  metaImage: {
    backgroundColor: '#20272B',
    borderRadius: 10,
  },
  messageButton: {
    borderRadius: 10,
    backgroundColor: '#21C063',
    justifyContent: "center",
    alignItems: "center",
  },
});