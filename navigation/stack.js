import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import OnePage from '../screens/OnePage';

const screens = {

  Home: {
      screen: Home,
      navigationOptions:{ 
        header: null,
      },
  },

  OnePage: {
    screen: OnePage,
  },
}
 
const Stack = createStackNavigator(screens);

export default createAppContainer(Stack);

