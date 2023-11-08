import { Button, Text } from '@/components';
import React from 'react';
import { Image, StatusBar, View } from 'react-native';

const imgMain = require('@/assets/img-main.png');

export const MainScreen = ({ navigation }) => {
  return (
    <View className="flex-1">
      <StatusBar
        animated
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <View className="bg-black">
        <View className="h-[638px] w-full">
          <Image className="h-full w-full" source={imgMain} />
        </View>
        <View className="-top-32 flex flex-col items-center justify-center gap-6">
          <View className="w-[234px]">
            <Text className="text-center font-bold text-white">
              Meet Our Expert Instructors
            </Text>
            <Text className="mt-4 text-center text-white opacity-70">
              Learn with fitness experts, at your own pace, and 100% updated
              content.
            </Text>
          </View>
          <View className="mt-6">
            <Button
              label="Let's Get Started "
              onPress={() => navigation.navigate('Home')}
            />
          </View>
          <View className="mb-8 flex-row">
            <Text textClassName="text-white">Already have account?</Text>
            <Text textClassName="text-pink-200 mx-2">Log Inn</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
