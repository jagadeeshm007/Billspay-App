import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

interface ProfileDetailsProps {
  name: string;
  email: string;
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ name, email }) => {
  return (
    <View style={styles.profileContainer}>
      <Image
        source={require('@/assets/images/Logo.png')}
        style={styles.image}
      />
      <View style={styles.userdata}>
        <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
          {name}
        </Text>
        <Text style={styles.email} numberOfLines={1} ellipsizeMode="tail">
          {email}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    width: width * 0.9,
    height: width * 0.45,
    backgroundColor: '#333',
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    //shadowColor: '#555',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  userdata: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  email: {
    fontSize: 18,
    color: '#999',
  },
});

export default ProfileDetails;
