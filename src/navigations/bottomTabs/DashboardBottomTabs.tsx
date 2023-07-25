import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NodeJsQuestionLinks from 'screens/dashboard/NodeJsQuestionLinks';
import ReactNativeQuestionLinks from 'screens/dashboard/ReactNativeQuestionLinks';
import ReactQuestionLinks from 'screens/dashboard/ReactQuestionLinks';

const Tab = createBottomTabNavigator();

const DashboardBottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="React" component={ReactQuestionLinks} />
      <Tab.Screen name="React Native" component={ReactNativeQuestionLinks} />
      <Tab.Screen name="Node Js" component={NodeJsQuestionLinks} />
    </Tab.Navigator>
  );
}

export default DashboardBottomTabs