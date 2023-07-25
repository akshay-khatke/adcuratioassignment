
import moment from 'moment';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Modal,
    KeyboardAvoidingView,
    Linking
} from 'react-native';
import { Colors } from 'theme';



type CardProps = {
    item: any,
    index: number,
};

const LinkCard = ({
    item,
    index,


}: CardProps) => {
    const date = moment.unix(item?.creation_date).format("DD MMM YYYY");
    const onLinkPress = () => {
        Linking.openURL(item?.link);
    }
    return (
        <View style={styles.cardContainer}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{date}</Text>
            </View>
            <Text>{item?.title}</Text>
            <Text onPress={onLinkPress} style={{ color: Colors.link, textDecorationLine: 'underline' }}>{item?.link}</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        margin: 10,
        padding: 10,
        elevation: 3, borderRadius: 10, backgroundColor: Colors.primaryColor
    },
    header: {
        paddingVertical: 10,
    },
    headerText: {
        fontWeight: "bold",
        color: Colors.secondaryColor
    }

});

export default LinkCard;
