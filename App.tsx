import React, { useEffect, useState } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from 'react-native';
import AppRoutes from 'navigations/AppRoutes';
import SplashScreen from 'screens/splashscreen/Splashscreen';


function App(): JSX.Element {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 2000); 
  }, []);


  return (
      <NavigationContainer>
      {isVisible ? <SplashScreen /> :   <AppRoutes />}
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
