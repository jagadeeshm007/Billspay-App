import * as React from 'react';
import { Text, View } from '@/src/components/Themed';
import { StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface TransactionElementProps {
    key: number;
  transactionKey: number;
    amount: number;
    dueDate: string;
}

const TransactionElement: React.FC<TransactionElementProps> = ({ transactionKey,amount,dueDate }) => {
  return (
    <View style={styles.container}>
        <View style={styles.Date}>
            <Text style={styles.textmore}>Transaction </Text>
            <Text style={styles.ago}>8 Aug 2024 10:30 AM</Text>
        </View>
        <View style={styles.main}>
            <View style={styles.shape}>
                <MaterialCommunityIcons name="arrow-bottom-right-thin-circle-outline" size={24} color="white" />
            </View>
            {/* <Text style={styles.textmore}>{amount}</Text> */}
            <View style={styles.status}><Text style={styles.state}>Pending</Text></View>
        </View>
    </View>
  );
}

export default TransactionElement;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        margin: 5,
        padding: 10,
        alignContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 80,
        borderRadius: 20,
    },
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        backgroundColor: 'transprent',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    Date: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: '90%',
        backgroundColor: 'transprent',
        alignContent: 'center',
        alignItems: 'center',
    },
    ago: {
        fontSize: 10,
        color: '#888',
    },
    textmore: {
        color: '#888',
        fontSize: 10,
    },
    shape: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#444',
    },
    status: {
        backgroundColor: 'yellow',
        width: 50,
        height: 20,
        borderRadius: 100,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    state: {
        fontSize: 10,
        color: '#000',
    },
  });
  