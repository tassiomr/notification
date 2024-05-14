import { useNavigation, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Home() {

  const router = useRouter();

  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <TouchableOpacity
      onPress={() => router.push('home/user')}
      style={{
        borderRadius: 20,
        width: 100,
        padding: 4,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text style={{ textAlign: 'center', color: 'white' }}>
        Go To User
      </Text>
    </TouchableOpacity>
  </View>
}