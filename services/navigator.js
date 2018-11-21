import { createStackNavigator, StackNavigator } from 'react-navigation';
import { DetailsPage } from '../components/details';
import { WelcomePage } from '../App';

export default StackNavigator({
    welcome: { screen: WelcomePage },
    detail: { screen: DetailsPage },
});