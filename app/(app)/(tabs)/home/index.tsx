import { Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <TouchableOpacity style={{ width: 100, padding: 4, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ textAlign: 'center' }}>
        Go To User
      </Text>
    </TouchableOpacity>
  </View>
}