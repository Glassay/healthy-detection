
import { TabNavigator } from 'react-navigation';

import MineScreen from './pages/MinePage';
import HomeScreen from './pages/HomePage';
import PreTestScreen from './pages/PreTest';
import QuestionScreen from './pages/Question';
import HealthScreen from './pages/HealthyInfo';
import UnHealthyScreen from './pages/UnHealthyInfo';
import ArchivesScreen from './pages/Archives';
import FontsSize from './res/fonts/size';
import Colors from './res/Colors/index';
import Styles from './res/Styles';
import HealthyInfo from './pages/HealthyInfo';

const BasicApp = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Mine: {
    screen: MineScreen,
  },
}, {
  initialRouteName: 'Home',
  tabBarPosition: 'bottom',
  animationEnabled: true,
  lazy: true,
  tabBarOptions: {
    showIcon: true,
    activeTintColor: Colors.white,
    inactiveTintColor: Colors.gray3,
    pressOpacity: 4,
    labelStyle: {
      fontSize: FontsSize.tiny,
    },
    style: {
      backgroundColor: Colors.primary,
      height: Styles.Height(100),
    },
    indicatorStyle: {
      height: 0,
    },
  },
});

const Navigations = {
  Main: { screen: BasicApp },
  PreTest: {
    screen: PreTestScreen,
  },
  Question: {
    screen: QuestionScreen,
  },
  Healthy: {
    screen: HealthyInfo,
  },
  UnHealthy: {
    screen: UnHealthyScreen,
  },
  Archives: {
    screen: ArchivesScreen,
  }
};

export default Navigations;
