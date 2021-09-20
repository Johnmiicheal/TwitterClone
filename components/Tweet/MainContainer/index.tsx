import * as React from "react";
import { View, Text, Image } from "react-native";
import { TweetType } from "../../../types";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";

import Footer from "./Footer";

export type MainContainerProps = {
  tweet: TweetType;
};

const MainContainer = ({ tweet }: MainContainerProps) => (
  <View style={styles.container}>
    <View style={styles.tweetHeaderContainer}>
      <View style={styles.tweetHeaderNames}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.username}>@{tweet.user.username}</Text>
        <Text style={styles.createdAt}>15s</Text>
      </View>
      <Entypo name={"chevron-down"} size={16} color={"grey"} />
    </View>

    <View>
      <Text style={styles.content}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries,
      </Text>
      {!!tweet.image && (
        <Image
          style={{
            marginVertical: 10,  
            width: "100%",
            height: 200,
            resizeMode: "cover",
            borderRadius: 15,
            overflow: "hidden",
          }}
          source={{ uri: tweet.image }}
        />
      )}
    </View>
    <Footer tweet={tweet} />
  </View>
);

export default MainContainer;
