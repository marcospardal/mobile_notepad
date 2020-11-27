import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View } from 'react-native';

//screens
import Notes from '../../screens/Notes';
import Calendar from '../../screens/Calendar';

const bottomMenu = createMaterialBottomTabNavigator(
    {
        Notes : {
            screen: Notes,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon name={'note-outline'}
                        size={25}
                        style={{color: tintColor}}/>
                    </View>
                )
            }
        },
        Calendar : {
            screen: Calendar,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon name={'view-agenda-outline'}
                        size={25}
                        style={{color: tintColor}}/>
                    </View>
                )
            }
        }
    },
    {
        initialRouteName: 'Notes',
        activeColor: "#FFF",
        inactiveColor: '#cccc',
        barStyle: {
            backgroundColor: "#722f37"
        }
    }
);

export default createAppContainer(bottomMenu);