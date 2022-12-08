import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import GetStarted from '../GetStarted';
import Home from '../Home';
import Login from '../Login';
import SignUp from '../SignUp';
import About from '../About';
import Contact from '../Contact';
import Services from '../Services';
import Review from '../Review';
import ReviewDetails from '../ReviewDetails';

const screens = {
    GetStarted: {
        screen: GetStarted,
        navigationOptions: {
            title: 'Getting Started',
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: `Login Page`
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: `Sign Up!`
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            title: `Welcome to Carl's Review App!`
        }
    },
    Review: {
        screen: Review,
        navigationOptions: {
            title: `Review Page`
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: `Details`
        }
    },
    About: {
        screen: About,
        navigationOptions: {
            title: `About Us`
        }
    },
    Contact: {
        screen: Contact,
        navigationOptions: {
            title: `Contacts`
        }
    },
    Services: {
        screen: Services,
        navigationOptions: {
            title: `Services`
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerStyle: {backgroundColor: 'springgreen'}
    }
})

export default createAppContainer(HomeStack);