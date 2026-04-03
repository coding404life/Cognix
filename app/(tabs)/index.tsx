import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
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
      <Link href="/subscriptions/1" className="text-xl font-bold text-primary">
        Go to subscription 1
      </Link>
    </SafeAreaView>
  );
}
