import LinkCard from 'components/LinkCard';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { StatusBar, Text } from 'react-native';
import {
    Button,
    FlatList,
    RefreshControl,
    StyleSheet,
    View,
} from 'react-native';
import api from 'services';

import { Colors } from 'theme';

type PostsProps = {};

const ReactQuestionLinks: React.FC<PostsProps> = ({ }) => {
    const [questionList, setQuestionList] = useState<Array<any>>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getQuestionsApi()
    }, [])

    const getQuestionsApi = async () => {
        setIsLoading(true)
        const params = {
            order: 'desc',
            sort: 'hot',
            tagged: "react-native",
            site: 'stackoverflow',
            filter: 'withbody',
        }
        const { data, status } = await api.questions.getQuestions(params);
        setQuestionList(data.items)
        setIsLoading(false)
    }

    const renderItem = ({ item, index }: { item: any, index: number }) => {

        return (
            <LinkCard item={item} index={index} />
        )

    }

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={Colors.primaryColor}
                barStyle="dark-content" />
            <FlatList
                refreshing={isLoading}
                onRefresh={getQuestionsApi}
                data={questionList}
                renderItem={renderItem}
                keyExtractor={(index) => index.toString()}
            />
        </View>
    );
};

export default ReactQuestionLinks;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primaryColor,
        padding: 10
    },
});
