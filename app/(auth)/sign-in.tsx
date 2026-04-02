import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const SignIn = () => {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text>SignIn</Text>
      <Link href="/(auth)/sign-up" className="text-xl font-bold text-primary">
        Create an account
      </Link>
    </View>
  )
}

export default SignIn
