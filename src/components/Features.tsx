import { Button, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Text, View } from '@/src/components/Themed';

export default function TabOneScreen() {

  return (
        <SafeAreaView style={styles.container}>
          
          <View style={styles.block}>
            <Text>Work flow</Text>
            </View>
          <View style={styles.block}><Text>Status</Text></View>
        </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginBottom: 0,
    width: '90%',
  },
    block: {
    backgroundColor: '#333',
    height: 80,
    flex: 1,
    margin: 3,
    padding: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    },
});
