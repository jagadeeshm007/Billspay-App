import * as React from 'react';
import { StatusBar, View } from 'react-native';
import { StyleSheet } from 'react-native';

interface historyProps {
}

const history: React.FunctionComponent<historyProps> = (props) => {
  return (
    <View style={Styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#222" />
    </View>
  );
};

export default history;

const Styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#222',
    },
});