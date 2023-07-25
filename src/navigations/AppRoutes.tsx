import React from 'react'
import { StyleSheet, View } from 'react-native';
import DashboardBottomTabs from './bottomTabs/DashboardBottomTabs';
import { SafeAreaView } from 'react-native-safe-area-context';
type IProps = {

}

const AppRoutes: React.FC<IProps> = () => {

    return (
        <SafeAreaView style={styles.container}>
            <DashboardBottomTabs />
        </SafeAreaView>
    );
}
export default AppRoutes;
const styles = StyleSheet.create({
 container:{
    flex:1
 }
});

