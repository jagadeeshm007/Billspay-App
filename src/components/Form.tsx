import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, Button, TouchableOpacity } from 'react-native';
import { MonoText } from '@/src/components/StyledText';
import { defaultStyles } from '@/src/constants/Styles';


const { width } = Dimensions.get('window');

const Form = ({name}: {name: string}) => {
    const [date, setDate] = React.useState(new Date().toLocaleDateString());

    React.useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date().toLocaleDateString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

  return (
    <View style={styles.Container}>
        <View style={styles.DateBar}>
        <MonoText style={styles.name} numberOfLines={1} ellipsizeMode="tail">{name}</MonoText>
            <MonoText style={styles.date}>{date}</MonoText>
        </View>
        <View style={{marginTop:55}}>
        <TouchableOpacity onPress={() => {}} style={[defaultStyles.btn, styles.btnPrimary]}>
          <Text style={styles.btnPrimaryText}>Payment Request</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: width * 0.9,
    height: width * 0.45,
    backgroundColor: '#333',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  date: {
    fontSize: 16,
    color: '#fff',
    justifyContent: 'flex-end',
    padding: 2,
    margin: 2,
  },
    DateBar: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        //backgroundColor: '#444',
        padding: 5,
        borderRadius: 10,
        
    },
    name:{
        fontSize: 16,
        color: '#fff',
        justifyContent: 'flex-start',
        paddingEnd:30,
    },
  btnPrimary: {
    backgroundColor: "#1d72b8",
    marginVertical: 4,
    borderRadius: 20,
  },
  btnPrimaryText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default Form;
