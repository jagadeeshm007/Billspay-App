import { Button, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Text, View } from '@/src/components/Themed';
import Form from '@/src/components/Form';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import Pendings from '@/src/components/Pendings';
import { Platform, Dimensions } from 'react-native';
import Features from '@/src/components/Features';

const { height } = Dimensions.get('window');
const bottomPadding = Platform.OS === 'android' ? height * 0.0001 : 200;

export default function TabOneScreen() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#222" />
      <ScrollView
        contentContainerStyle={[styles.scrollViewContent, { paddingBottom: bottomPadding }]}
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView style={styles.container}>
          <Text style={styles.Welcome}>Welcome</Text>
          <Form name="Phani" />
          <Features />
          <Pendings />
        </SafeAreaView>

      </ScrollView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  Welcome: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 10,
    marginLeft: 30,
    fontFamily: 'monospace',
    alignSelf: 'flex-start',
  },
});
