import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const SignUp = () => {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text>SignUp</Text>
      <Link href="/(auth)/sign-in" className="text-xl font-bold text-primary">
        Already have an account? Sign in
      </Link>
    </View>
  )
}

export default SignUp
