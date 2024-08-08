import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, Text } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Octicons from '@expo/vector-icons/Octicons';
import {Colors} from '@/src/constants/Colors';
import { useColorScheme } from '@/src/components/useColorScheme';
import { useClientOnlyValue } from '@/src/components/useClientOnlyValue';
import { getAuth } from 'firebase/auth';
import { router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = 'light'; // useColorScheme();
  const [isLoading, setIsLoading] = React.useState(true);

  getAuth().onAuthStateChanged((user) => {
    setIsLoading(false);
    if (!user) {
      router.replace("/");
    }
  });

  if (isLoading) return <Text style={{ paddingTop: 30 }}>Loading...</Text>;

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#222', // Set the background color of the tabs to black
          borderTopWidth: 0, // Remove the top border
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
          paddingTop: 10,
        },
        tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'dark'].tabIconDefault,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Octicons name="home" size={24} color={color} />,
          headerStyle: {
            backgroundColor: '#222', // Set the background color of the profile header to black
          },
          headerTintColor: '#fff', // Set the text color of the header to white
        
          // headerShown: false,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Ionicons 
                      name="notifications" 
                      size={30} 
                      color={Colors['dark'].text} 
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />

      <Tabs.Screen
              name="history"
              options={{
                title: '',
                // headerShown: false,
              
                tabBarIcon: ({ color }) => <MaterialCommunityIcons name="swap-horizontal-circle-outline" size={25} color={color} />,
                headerStyle: {
                  backgroundColor: '#222',
                },
                headerTintColor: '#fff',
              
              }}
            />

      <Tabs.Screen
        name="two"
        options={{
          title: '',
          // headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome6 name="circle-user" size={25} color={color} />,
          headerStyle: {
            backgroundColor: '#222', // Set the background color of the profile header to black
          },
          headerTintColor: '#fff', // Set the text color of the header to white
        
        }}
      />
    </Tabs>
  );
}
