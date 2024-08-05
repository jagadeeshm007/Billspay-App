import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface ProfileOptionsProps {
  onPaymentHistoryPress: () => void;
  onLogoutPress: () => void;
}

const ProfileOptions: React.FC<ProfileOptionsProps> = ({ onPaymentHistoryPress, onLogoutPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option} onPress={onPaymentHistoryPress}>
        <Text style={styles.optionText}>Payments History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={onLogoutPress}>
        <Text style={[styles.optionText,{color:'red'}]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: width*0.95,
    padding: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },
  option: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 2.84,
    elevation: 2,
  },
  optionText: {
    color: '#007bff',
    fontSize: 18,
  },
});

export default ProfileOptions;
