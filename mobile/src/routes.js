import { createStackNavigator, createAppContainer } from 'react-navigation'; 

import Login from './pages/Login';
import Timeline from './pages/Timeline';
import New from './pages/New';

const Routes = createStackNavigator({
    Login: { screen: Login },
    Timeline: { screen: Timeline },
    New: { screen: New },
});


const App = createAppContainer(Routes); 
export default App; 