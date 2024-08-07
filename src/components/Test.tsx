import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

const Test: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const handleRedirect = () => {
    navigation.navigate('(tabs)');
  };

  return (
    <View>
      <Button title="Go to Home" onPress={handleRedirect} />
    </View>
  );
};

export default Test;
