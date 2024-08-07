import {ScrollView, Button,SafeAreaView, StyleSheet,Dimensions, Alert, Platform, StatusBar } from 'react-native';
import { Text, View } from '@/src/components/Themed';
import { FIREBASE_AUTH } from '@/FirebaseConfig';
import ProfileDetails from '@/src/components/ProfileDetails';
import ProfileOptions from '@/src/components/ProfileOptions';
import CustomAlert from '@/src/components/CustomAlert';
import React, { useState } from 'react';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const { width, height } = Dimensions.get('window');

export default function TabTwoScreen() {

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertData, setAlertData] = useState({ title: '', message: '' });

  const showAlert = (title: string, message: string) => {
    setAlertData({ title, message });
    setAlertVisible(true);
  };

  const handleSettingsPress= () => {
    // showAlert('Settings', 'Add Settings here...');
    Alert.alert('Settings', 'Add Settings here...');
    // Navigation logic here
  };

  const handlePaymentHistoryPress = () => {
    Alert.alert('Payments History', 'Navigating to Payments History...');
    // Navigation logic here
  };

  const handleLogoutPress = () => {
    //showAlert('Logout', 'Are you sure you want to logout?');
     Alert.alert('Logout', 'Logging out...');
     FIREBASE_AUTH.signOut();
  };
  const handleAboutPress = () => {
    //showAlert('Logout', 'Are you sure you want to logout?');
     Alert.alert('About', 'About us...');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ProfileDetails
            name="John Doe"
            email="johndoe@gmail.com"
          />

      <ProfileOptions
            onPaymentHistoryPress={handlePaymentHistoryPress}
            onLogoutPress={handleLogoutPress}
            onSettingsPress={handleSettingsPress}
            onAboutPress={handleAboutPress}
          />
      
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}

       {/* -------------------------------------------------------------------------> signOut and delete account buttons */}
      {/* <Button title="Sign Out" onPress={() => FIREBASE_AUTH.signOut()} /> */}
      {/* Account deletion required in IOS store */}
      {/* <Button title="Delete Account" onPress={() => FIREBASE_AUTH.currentUser?.delete()} /> */}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight, // Add padding for Android status bar
    backgroundColor: '#222',
    //justifyContent: 'center',
  },
});
