import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const onboarding = () => {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Onboarding!
      </Text>
      <Link href="/" className="text-xl font-bold text-primary">
        Go to home
      </Link>
    </View>
  )
}

export default onboarding
