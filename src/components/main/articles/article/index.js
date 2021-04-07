import React from "react";
import {View, Text, ScrollView, ActivityIndicator} from "react-native";
import {Image} from 'react-native-elements'
import ContentShow from "../../../../utils/contentShow";

const Article = () => {
  return (
    <ScrollView>
      <View>
        <Image
          source={{uri: 'https://picsum.photos/200/300'}}
          style={{width: '100%', height: 200}}
          PlaceholderContent={<ActivityIndicator/>}
        />
        <ContentShow
          title={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, quod!'}
          description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequatur consequuntur cum doloremque itaque iure minus quaerat quisquam tempore tenetur.'}
        />
      </View>
    </ScrollView>
  );
};

export default Article;
