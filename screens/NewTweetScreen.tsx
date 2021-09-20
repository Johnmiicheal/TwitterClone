import * as React from "react";
import { StyleSheet, SafeAreaView, View, Text, TextInput } from "react-native";

import Feed from "../components/Feed";
import NewTweetButton from "../components/NewTweetButton";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProfilePicture from "../components/ProfilePicture";

export default function NewTweetScreen() {
  const onPostTweet = () => {
    console.warn("Post Tweet");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <AntDesign name="close" size={30} color={Colors.light.tint} />
        <TouchableOpacity
          style={styles.button}
          onPress={onPostTweet}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Tweet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newTweetContainer}>
        <ProfilePicture
          image={
            "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
          }
        />
        <View style={styles.inputContainer}>
          <TextInput
            numberOfLines={3}
            multiline={true}
            style={styles.tweetContainer}
            placeholder={"What's Happening?"}
          />
          <TextInput style={styles.imageInput} placeholder={"Image URL"} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 20,
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  newTweetContainer: {
    flexDirection: "row",
    padding: 15,
  },
  inputContainer: {
    marginLeft: 10,
  },
  tweetContainer: {
    height: 100,
    maxHeight: 300,
    fontSize: 18,
  },
  imageInput: {},
});
