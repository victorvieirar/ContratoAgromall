import Home from "./Home";
import Client from "./Client";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  Client: { screen: Client }
});

const App = createAppContainer(MainNavigator);

export default App;
