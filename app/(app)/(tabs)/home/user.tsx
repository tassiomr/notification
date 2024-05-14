import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { useSession } from "../../../../context/SessionContext";

export default function User() {
  const { signOut } = useSession();
  const router = useRouter();

  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 2 }}>
    <TouchableOpacity
      onPress={signOut}
      style={{
        borderRadius: 20,
        width: 100,
        padding: 4,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text style={{ textAlign: 'center', color: 'white' }}>
        Logout
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={router.back}
      style={{
        borderRadius: 20,
        width: 100,
        padding: 4,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text style={{ textAlign: 'center', color: 'white' }}>
        go back
      </Text>
    </TouchableOpacity>
  </View>
}