import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import User from './../screens/cabinet/User'


const navgationOption = {
    defaultNavigationOptions: {
        headerShown: false
    }
}

const AppNavigatior = createStackNavigator(
    {
        User
    },
    navgationOption
)



export const AppNavigation = createAppContainer(AppNavigatior)