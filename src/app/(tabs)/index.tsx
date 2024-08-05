import { StyleSheet } from 'react-native';
import { Text, View } from '@/src/components/Themed';
import Colors from '@/src/constants/Colors';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'black',}}></View>
      <View style={{backgroundColor:'blue',}}></View>
      <View style={{backgroundColor:'yellow',}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});