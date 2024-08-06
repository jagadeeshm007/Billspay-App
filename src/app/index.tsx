import { Text, View } from "react-native";
import AnimatedIntro from "@/src/components/AnimatedIntro";
import BottomLoginSheet from "@/src/components/BottomLoginSheet";

export default function Index() {
return (
    <View
      style={{
        flex: 1,
      }}
    >
      <AnimatedIntro />
      <BottomLoginSheet />
    </View>
  );
}
