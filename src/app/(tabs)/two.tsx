import { StyleSheet,Dimensions, Alert } from 'react-native';
import { View } from '@/src/components/Themed';
import { ScrollView } from 'react-native';
import ProfileDetails from '@/src/components/ProfileDetails';
import ProfileOptions from '@/src/components/ProfileOptions';
const { width, height } = Dimensions.get('window');

export default function TabTwoScreen() {

  const handlePaymentHistoryPress = () => {
    Alert.alert('Payments History', 'Navigating to Payments History...');
    // Navigation logic here
  };

  const handleLogoutPress = () => {
    Alert.alert('Logout', 'Logging out...');
    // Logout logic here
  };

  return (
      <ScrollView style={styles.container}>
          <ProfileDetails
            name="John Doe"
            email="123@gmail.com"
          />
          <ProfileOptions
          onPaymentHistoryPress={handlePaymentHistoryPress}
          onLogoutPress={handleLogoutPress}
        />
        </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', // row | column
    flexWrap: 'wrap', // wrap | nowrap | wrap-reverse
    backgroundColor: 'white',
    flex: 1,
    width: width,
    height: height,
  },
  detials: {
    width: width *0.95 ,
    height: height * 0.2,
    padding: 10,
    margin: 10,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    borderRadius: 15,
  },
  box: {
    width: width *0.95 ,
    height: height * 0.5,
    padding: 10,
    marginTop: 0,
    margin: 10,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
});
