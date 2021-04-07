import React from "react";
import {View, Text, ScrollView} from "react-native";
import ContentShow from "../../../../utils/contentShow";
import YouTube from 'react-native-youtube';


const Video = () => {
  return (
    <ScrollView>
      <View>
        <YouTube
          apiKey="AIzaSyB8ioe2jn6fS3yKZ0oXcimIl-L2L096oOk"
          videoId="LYU-8IFcDPw"
          style={{alignSelf:'stretch', height: 300}}
        />
        <ContentShow
          title={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, porro!'}
          description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum fuga quibusdam repudiandae sed sit, voluptatibus. Iste laborum possimus quia veniam.'}
        />
      </View>
    </ScrollView>
  );
};

export default Video;
