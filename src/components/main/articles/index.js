import React from "react";
import {Text, ScrollView, TouchableOpacity, StyleSheet} from "react-native";
import { Card } from 'react-native-elements';

const HomeScreen = ({ navigation }) => {

  const renderCard = () => (
    <TouchableOpacity
      onLongPress={() => navigation.navigate('Article', {id: 1})}
    >
      <Card>
        <Card.Title style={styles.cardTitle}>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, temporibus.</Text>
        </Card.Title>
        <Card.Divider/>
        <Text style={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloremque ex molestias nihil obcaecati, quasi quisquam rem sequi ut veniam!</Text>
      </Card>
    </TouchableOpacity>
  )

  return (
      <ScrollView>
        {renderCard()}
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 20,
    textAlign: 'left'
  },
  cardText: {
    marginBottom: 10,
    marginTop: 10,
  }
})

export default HomeScreen;
