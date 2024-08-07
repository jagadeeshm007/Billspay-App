import { Text, View } from "react-native";
import AnimatedIntro from "@/src/components/AnimatedIntro";
import BottomLoginSheet from "@/src/components/BottomLoginSheet";
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
enableScreens();

export default function Index() {
return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* <StatusBar style="light" /> */}
      <AnimatedIntro />
      <BottomLoginSheet />
    </View>
  );
}
