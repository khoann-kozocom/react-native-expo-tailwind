import { Button, Text } from '@/components';
import React from 'react';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const HomeScreen = ({ navigation }) => {
  return (
    <View className="flex h-full items-center  justify-center bg-white">
      <Image className="w-full flex-1" source={require('./cover.png')} />

      <View className="justify-end ">
        <Text className="my-3 text-center text-4xl font-bold">
          React Native Starter
        </Text>
        <Text className="mb-2 text-center text-lg text-gray-600">
          The right way to build your mobile app
        </Text>

        <Text className="my-1 pt-6 text-left text-lg">
          🚀 Production-ready{' '}
        </Text>
        <Text className="my-1 text-left text-lg">
          🥷 Developer experience + Productivity
        </Text>
        <Text className="my-1 text-left text-lg">
          🧩 Minimal code and dependencies
        </Text>
        <Text className="my-1 text-left text-lg">
          💪 well maintained third-party libraries
        </Text>
      </View>
      <SafeAreaView className="mt-6">
        <Button
          label="Let's Get Started "
          onPress={() => navigation.navigate('Main')}
        />
      </SafeAreaView>
    </View>
  );
};
