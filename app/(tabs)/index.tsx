import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="text-xl font-bold text-primary">
        Go to onboarding
      </Link>

      <Link href="/(auth)/sign-in" className="text-xl font-bold text-primary">
        Go to sign in
      </Link>
      <Link href="/(auth)/sign-up" className="text-xl font-bold text-primary">
        Go to sign up
      </Link>
      <Link href="/(tabs)/subscriptions/1" className="text-xl font-bold text-primary">
        Go to subscription 1
      </Link>
    </View>
  );
}
