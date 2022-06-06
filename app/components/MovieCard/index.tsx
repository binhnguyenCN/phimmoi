/* eslint-disable camelcase */
// libs
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Image } from "react-native-expo-image-cache";
// layouts
// import Text from "@/components/Text";
// others
import { imageResize } from "@/utils/images";
// styles
import styles from "./styles";

type MovieCardProps = {
  poster_path: string;
  onPress: () => void;
};

const MovieCard: React.FC<MovieCardProps> = ({ poster_path, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.card}>
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
