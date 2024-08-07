import React from 'react';
import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const { width } = Dimensions.get('window');
import { Text, View } from '@/src/components/Themed';
import { Ionicons } from '@expo/vector-icons';
interface ProfileOptionsProps {
  onPaymentHistoryPress: () => void;
  onLogoutPress: () => void;
  onSettingsPress: () => void;
  onAboutPress: () => void;
}

const ProfileOptions: React.FC<ProfileOptionsProps> = ({ onPaymentHistoryPress, onLogoutPress , onSettingsPress, onAboutPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"  />
      <TouchableOpacity style={styles.option} onPress={onSettingsPress}>
      <MaterialIcons name="admin-panel-settings" size={24} color="white" />
        <Text style={styles.optionText}>User Management Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={onPaymentHistoryPress}>
      <MaterialIcons name="payments" size={24} color="white" />
        <Text style={styles.optionText}>Transactions History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={onAboutPress}>
      <Ionicons name="information-circle-sharp" size={24} color="white" />
        <Text style={styles.optionText}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={onLogoutPress}>
      <MaterialIcons name="logout" size={24} color="#D22B2B" />
        <Text style={[styles.optionText,{color:'#D22B2B'}]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    padding: 10,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
  },
  option: {
    flexDirection: 'row',
    width: width*0.90,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignContent: 'center',

  },
  optionText: {
    //color: '#007bff',
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
  separator: {
    height: 1,
    width: '90%',
    marginBottom: 10,
  },
});

export default ProfileOptions;
