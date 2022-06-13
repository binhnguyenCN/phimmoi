/* eslint-disable camelcase */
// libs
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Image } from "react-native-expo-image-cache";
// others
import { imageResize } from "@/utils/images";
// styles
import styles from "./styles";

type MovieCardProps = {
  poster_path: string;
  onPress: () => void;
  styleProp?: object;
  testID: number;
};

const MovieCard: React.FC<MovieCardProps> = ({
  poster_path,
  onPress,
  styleProp,
  testID
}) => (
  <TouchableOpacity onPress={onPress} testID={testID.toString()}>
    <View style={{ ...styles.card, ...styleProp }}>
      <Image
        style={styles.image}
        uri={imageResize(poster_path, "w500")}
        preview={{ uri: imageResize(poster_path) }}
        tint="light"
      />
    </View>
  </TouchableOpacity>
);
export default MovieCard;
