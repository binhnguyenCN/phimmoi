// libs
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  TouchableHighlight,
  View
} from "react-native";
// layouts
import Text from "@/components/Text";
// constants
import colors from "@/constants/colors";
// styles
import styles from "./styles";

type ListItemProps = {
  title?: string;
  subTitle?: string;
  image?: ImageSourcePropType;
  onPress?: () => void;
  IconComponent?: React.ReactNode;
};
const ListItem: React.FC<ListItemProps> = ({
  title,
  subTitle,
  image,
  IconComponent,
  onPress
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={colors.medium}>
    <View style={styles.container}>
      {IconComponent}
      {image && <Image style={styles.image} source={image} />}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
      </View>
      <MaterialCommunityIcons
        name="chevron-right"
        size={25}
        color={colors.medium}
      />
    </View>
  </TouchableHighlight>
);
export default ListItem;
