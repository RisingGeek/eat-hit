import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>home screen</Text>
      <Button
        title="go to checkout"
        onPress={() => navigation.navigate("checkout")}
      />
    </View>
  );
}