import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from './../screens/auth/Login'
import Registration from './../screens/auth/Registration'

const stackNavigatorOptions = {
    defaultNavigationOptions: {
        headerShown: false
    }
}

const AuthNavigator = createStackNavigator(
    {
        Login,
        Registration
    },  
    stackNavigatorOptions
)

export default createAppContainer(AuthNavigator)