import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen58683Navigator from '../features/BlankScreen58683/navigator';
import BlankScreen78682Navigator from '../features/BlankScreen78682/navigator';
import BlankScreen58681Navigator from '../features/BlankScreen58681/navigator';
import BlankScreen78679Navigator from '../features/BlankScreen78679/navigator';
import BlankScreen38678Navigator from '../features/BlankScreen38678/navigator';
import BlankScreen58677Navigator from '../features/BlankScreen58677/navigator';
import BlankScreen28672Navigator from '../features/BlankScreen28672/navigator';
import CalendarView77517Navigator from '../features/CalendarView77517/navigator';
import BlankScreen57515Navigator from '../features/BlankScreen57515/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen58683: { screen: BlankScreen58683Navigator },
BlankScreen78682: { screen: BlankScreen78682Navigator },
BlankScreen58681: { screen: BlankScreen58681Navigator },
BlankScreen78679: { screen: BlankScreen78679Navigator },
BlankScreen38678: { screen: BlankScreen38678Navigator },
BlankScreen58677: { screen: BlankScreen58677Navigator },
BlankScreen28672: { screen: BlankScreen28672Navigator },
CalendarView77517: { screen: CalendarView77517Navigator },
BlankScreen57515: { screen: BlankScreen57515Navigator },
Messenger: { screen: MessengerNavigator },
Calendar: { screen: CalendarNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
