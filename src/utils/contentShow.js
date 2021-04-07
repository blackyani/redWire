import React from "react";
import {View, Text, ScrollView, ActivityIndicator, StyleSheet} from "react-native";

const ContentShow = ({title, description}) => {

  return (
    <View>
      <View style={{padding: 10}}>
        <Text style={styles.articleTitle}>
          {title}
        </Text>
        <Text style={styles.articleContent}>
          {description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  articleTitle:  {
    fontSize: 30,
    marginBottom: 30,
    fontWeight: '300',
    color: '#444444'
  },
  articleContent: {
    fontSize: 18,
    color: '#444444'
  }
})

export default ContentShow;
