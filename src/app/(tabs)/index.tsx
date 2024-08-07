import { Button, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Text, View } from '@/src/components/Themed';
import Form from '@/src/components/Form';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
export default function TabOneScreen() {


      // dummy data for testing

      
      const pendingPayments = [
        { id: 1, amount: 100, dueDate: '2024-08-10' },
        { id: 2, amount: 200, dueDate: '2024-08-12' },
      ];
      
      const paymentHistory = [
        { id: 1, amount: 150, date: '2024-08-01' },
        { id: 2, amount: 250, date: '2024-07-28' },
        // Add more payment history here
      ];
      
      const renderPendingPayments = () => {
        return pendingPayments.slice(0, 2).map(payment => (
          <View key={payment.id} style={styles.paymentItem}>
            <Text>Amount: ${payment.amount}</Text>
            <Text>Due Date: {payment.dueDate}</Text>
          </View>
        ));
      };
    
      const renderPaymentHistory = () => {
        return paymentHistory.map(payment => (
          <View key={payment.id} style={styles.paymentItem}>
            <Text>Amount: ${payment.amount}</Text>
            <Text>Date: {payment.date}</Text>
          </View>
        ));
      };

  return (
    <GestureHandlerRootView style={{ flex: 1, }}>
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#222" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.Welcome}>Welcome</Text>
        <Form name="Don"/>

      <View style={styles.pendingSection}>
        <Text style={styles.sectionTitle}>Pending Payments</Text>
        {renderPendingPayments()}
        <Button title="More" onPress={() => {}} />
      </View>
      <View style={styles.historySection}>
        <Text style={styles.sectionTitle}>Payment History</Text>
        {renderPaymentHistory()}
      </View>
        
      </ScrollView>
    </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingTop: 20,
  },
  mainSection: {
    marginBottom: 24,
  },
  pendingSection: {
    marginBottom: 24,
  },
  historySection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 8,
  },
  paymentItem: {
    marginBottom: 8,
  },
  Welcome: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 10,
    marginLeft: 30,
    fontFamily: 'monospace',
  },
});
