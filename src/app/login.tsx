import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ActivityIndicator, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { defaultStyles } from '@/src/constants/Styles';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const Page = () => {
  const { type } = useLocalSearchParams<{type: string}>();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = FIREBASE_AUTH;

  // password visibility
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const signIn = async () => {
    setLoading(true);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        router.replace('/(tabs)');
      }
    } catch (error: any) {
      console.log(error);
      alert('Sign in failed: ' + error.message);
      setPassword('');
    }
    setLoading(false);
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user) router.replace('/(tabs)');
    } catch (error: any) {
      console.log(error);
      alert('Sign up failed: ' + error.message);
    }
    setLoading(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={1}
    >
      {loading && (
        <View style={defaultStyles.loadingOverlay}>
          <ActivityIndicator size='large' color='#fff'/>
        </View>
      )}
      <Image style={styles.logo} source={require('../../assets/images/Logo.png')} />

      <Text style={styles.title}>
        {type === 'login' ? 'Log in' : 'Create your account'}
      </Text>

      <View style={{marginBottom: 20 }}>
        <TextInput
          autoCapitalize='none'
          placeholder='Email'
          style={styles.inputField}
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#888888"
        />
        <View style={styles.inputContainer}>
          <TextInput
            autoCapitalize='none'
            placeholder='Password'
            style={[styles.inputField, { flex: 1, borderTopRightRadius: 0, borderBottomRightRadius: 0 }]}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible}
            placeholderTextColor="#888888"
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
            <Ionicons name={isPasswordVisible ? 'eye-off' : 'eye'} size={24} color="#e0e0e0" />
          </TouchableOpacity>
        </View>
      </View>

      {type === 'login' ? (
        <TouchableOpacity onPress={signIn} style={[defaultStyles.btn, styles.btnPrimary]}>
          <Text style={styles.btnPrimaryText}>Login</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={signUp} style={[defaultStyles.btn, styles.btnPrimary]}>
          <Text style={styles.btnPrimaryText}>Create account</Text>
        </TouchableOpacity>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#1d72b8',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 12,
    padding: 10,
    backgroundColor: '#1e1e1e',
    color: '#e0e0e0',
  },
  btnPrimary: {
    backgroundColor: "#1d72b8",
    marginVertical: 4,
  },
  btnPrimaryText: {
    color: '#ffffff',
    fontSize: 16,
  },
  eyeIcon: {
    padding: 10,
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Page;
