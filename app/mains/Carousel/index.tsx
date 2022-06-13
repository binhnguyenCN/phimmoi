// libs
import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  // StatusBar,
  TouchableOpacity,
  FlatList,
  Animated
} from "react-native";
// others
// import { WINDOW_HEIGHT } from "@/utils/dimensions";
import { imageOriginal, imageResize } from "@/utils/images";
import colors from "@/constants/colors";

const Carousel = ({ movies }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle="light-content" hidden /> */}
      {movies && (
        <View testID="TestId__carousel">
          <Image
            source={{
              uri: imageOriginal(movies[0].backdrop_path)
            }}
            style={styles.banner}
          />

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.spaceForBanner} />
            <FlatList
              style={styles.carousel}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={movies}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.carouselItem} activeOpacity={1}>
                  <Image
                    source={{ uri: imageResize(item.poster_path) }}
                    style={styles.carouselItemImage}
                  />
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id.toString()}
              onScroll={(e) => {
                animatedValue.setValue(e.nativeEvent.contentOffset.x);
              }}
            />
            <View style={styles.scrollViewContent} />
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  banner: {
    width: "100%",
    height: 320,
    position: "absolute",
    resizeMode: "cover"
  },
  spaceForBanner: {
    paddingTop: 320
  },
  scrollViewContent: {
    // height: WINDOW_HEIGHT * 2,
    height: 100,
    backgroundColor: colors.black
  },
  carousel: {
    position: "absolute",
    top: 280,
    zIndex: 100
  },
  carouselItem: {
    width: 80,
    height: 80,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  carouselItemImage: {
    borderRadius: 60,
    width: 80,
    height: 80
  }
});
export default Carousel;
