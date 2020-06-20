import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { ScreenKey } from '../global/globalConstants';
import TransactionScreen from '../components/Blockchain/Transaction/TransactionScreen';
import PendingTransactionScreen from '../components/Blockchain/Transaction/PendingTransactionScreen';
import AdminHome from '../components/Admin/Home/AdminHome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MainBottomTab = (props) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === ScreenKey.AdminHomeScreen) {
                        return <AntDesign name="home" size={24} color="blue" />
                    } else if (route.name === ScreenKey.TransactionScreen) {
                        return <MaterialIcons name="attach-money" size={24} color="blue" />
                    }
                    else if (route.name === ScreenKey.PendingTransactionScreen) {
                        return <MaterialIcons name="attach-money" size={24} color="blue" />
                    }

                    // You can return any component that you like here!
                    return <AntDesign name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name={ScreenKey.AdminHomeScreen} component={AdminHome} options={{
                title: 'Home'
            }} />
            <Tab.Screen name={ScreenKey.TransactionScreen} component={TransactionScreen} options={{
                title: 'Transaction'
            }} />
             <Tab.Screen name={ScreenKey.PendingTransactionScreen} component={PendingTransactionScreen} options={{
                title: 'Pending Trans'
            }} />
        </Tab.Navigator>
    );
}

export default MainBottomTab
