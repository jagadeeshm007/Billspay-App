import * as React from 'react';
import { Button,StyleSheet } from 'react-native';
import {TouchableOpacity} from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import { Text, View } from '@/src/components/Themed';
import TransactionElement from './TransactionElement';

interface IPendingsProps {
    
}

const Pendings: React.FunctionComponent<IPendingsProps> = (props) => {

      // dummy data for testing
      const pendingPayments = [
        { id: 1, amount: 100, dueDate: '2024-08-10' },
        { id: 2, amount: 200, dueDate: '2024-08-12' },
        { id: 3, amount: 400, dueDate: '2024-08-12' },
        { id: 4, amount: 20, dueDate: '2024-08-12' },
        { id: 5, amount: 2, dueDate: '2024-08-12' },
        { id: 6, amount: 2000000, dueDate: '2024-08-12' },
        { id: 7, amount: 200, dueDate: '2024-08-12' },
        { id: 8, amount: 200, dueDate: '2024-08-12' },
      ];

    const renderPendingPayments = () => {
        return pendingPayments.slice(0, 8).map(payment => (
          <TransactionElement 
              key={payment.id} 
              transactionKey={payment.id} 
              amount={payment.amount} 
              dueDate={payment.dueDate} 
          />
        ));
      };

  return (
    <View style={styles.pendingSection}>
        <View style={styles.mainSection}>
            <Text style={styles.head}>Recents </Text>

            <TouchableOpacity onPress={() => {}} style={{}}>
                <View style={styles.more}>
                    <Text style={styles.textmore}>More </Text>
                    <Fontisto name="caret-right" size={8} color="white" />
                </View>
            </TouchableOpacity>

        </View>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"  />

        <View style={[styles.paymentItem,{}]}>
            {renderPendingPayments()}
        </View>
  </View>
);};

export default Pendings;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#222',
    },
    mainSection: {
        backgroundColor: 'transparent',
        flex: 1,
        flexDirection: 'row',
        alignContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: 'space-between',
        width: '100%',
        borderRadius: 20,
    },
    pendingSection: {
        backgroundColor: '#121212',
        marginTop: 10,
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 24,
        justifyContent: 'flex-start',
        padding: 10,
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    historySection: {
      marginBottom: 24,
    },
    sectionTitle: {
      fontSize: 18,
      marginBottom: 8,
      color: '#fff',
    },
    paymentItem: {
      flex: 1,
      flexDirection: 'column',
      width: '100%',
      marginTop: 10,
      marginBottom: 8,
      backgroundColor: 'transparent',
      padding: 2,
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Welcome: {
      fontSize: 20,
      color: '#fff',
      marginBottom: 10,
      marginLeft: 30,
      fontFamily: 'monospace',
    },
    head: {
        flex: 1,
        fontSize: 18,
        color: '#fff',
        marginLeft: 10,
    },
    more: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        backgroundColor: '#1b325e',
        marginRight: 10,
        paddingLeft: 10,
        paddingRight: 5,
        borderRadius: 20,
    },
    textmore: {
        fontSize: 12,
        color: '#fff',
    }, 
    separator: {
        height: 1,
        width: '95%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      },
  
  });
  