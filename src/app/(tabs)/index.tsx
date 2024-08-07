import { StyleSheet } from 'react-native';
import { Text, View } from '@/src/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={{flex:1,backgroundColor: 'pink',}}></View>
      <View style={{flex:1,backgroundColor: 'blue',}}></View>
      <View style={{flex:1,backgroundColor: 'green',}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
