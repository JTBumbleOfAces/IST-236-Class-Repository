import { Text, View, Image, Linking } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require('@/assets/images/Jonathan.jpg')}
      />
      <Text>Jonathan Tonner</Text>
      <Text onPress={() => Linking.openURL("https://outlook.office.com/mail/sentitems/id/AAQkAGRlY2I1MTBjLTFlODQtNGQxMy1hZjcyLTVlZjM0NDY5ODZiZgAQAHmDQhcK0gVPp0a2lus%2BRGg%3D")}>jtonner@hgtc.edu</Text>
      <Text onPress={() => Linking.openURL("tel:+18436859226")}>(843)685-9226</Text>
      <Text onPress={() => Linking.openURL("https://github.com/JTBumbleOfAces/IST-236-Class-Repository")}>Github-Link</Text>
    </View>
  );
}
