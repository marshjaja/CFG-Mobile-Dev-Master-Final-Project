import { Button, View } from "react-native";

export default function LoginButton({ navigation }) {
  return (
    <View>
      <Button
        title="👤"
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
      />
    </View>
  );
}
