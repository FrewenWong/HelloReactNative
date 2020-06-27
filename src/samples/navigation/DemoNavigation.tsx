import * as React from 'react';
// @ts-ignore
import {NavigationContainer} from '@react-navigation/native';
// @ts-ignore
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../../pages/HomePage';
import DiscoveryPage from '../../pages/DiscoveryPage';
import RecommendPage from '../../pages/RecommendPage';
import MyProfile from '../../pages/MyProfilePage';

const Tab = createBottomTabNavigator();
/**
 * 1、createStackNavigator 类似于普通的navigator，屏幕上方的导航栏
 * 2、createBottomTabNavigator  下方的导航栏
 * 3、createDrawerNavigator
 * @constructor
 */
export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarLabel: ({focused, color}) => {
                        switch (route.name) {
                            case 'Home':
                                return '首页';
                            case 'Recommend':
                                return '推荐';
                            case 'Discovery':
                                return '发现';
                            case 'MyProfile':
                                return '我的';
                        }
                        return '';
                    },
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        switch (route.name) {
                            case 'Home':
                                return '首页';
                        }

                        return null;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'purple',
                }}>
                <Tab.Screen name="Home" component={HomePage} />
                <Tab.Screen name="Recommend" component={RecommendPage} />
                <Tab.Screen name="Discovery" component={DiscoveryPage} />
                <Tab.Screen name="MyProfile" component={MyProfile} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
