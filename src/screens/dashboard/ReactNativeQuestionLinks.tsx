import LinkCard from 'components/LinkCard';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import api from 'services';

import { Colors } from 'theme';

type PostsProps = {};

const ReactNativeQuestionLinks: React.FC<PostsProps> = ({ }) => {
  const [questionList, setQuestionList] = useState<Array<any>>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getQuestionsApi()
  }, [])

  const getQuestionsApi = async () => {
    const params = {
      order: 'desc',
      sort: 'hot',
      tagged: "react-native",
      site: 'stackoverflow',
      filter: 'withbody',

    }
    const { data, status } = await api.questions.getQuestions(params);
    setQuestionList(data.items)
    console.log(data.items[0], params, "cheeck data")
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

export default ReactNativeQuestionLinks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
});
