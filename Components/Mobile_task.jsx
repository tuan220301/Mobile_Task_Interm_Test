import * as React from 'react';
import { View, Text, StyleSheet, Image, Button, Pressable  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from"../Images/Logo.png";
import Flower from"../Images/Flower.png";
import JokeStory from './Joke_story/Joke_story';
function MobileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Image  source={Logo}/>
        </View>
        <Image source={Flower}/>
      </View>
      <View style={styles.titile}>
        <Text style={styles.text_title}>A Joke a day keeps the doctor away</Text>
        <Text style={styles.text_under_title}>If you joke wrong way, your teeth have to pay. (Serious)</Text>
      </View>
     
      <JokeStory />
     
      <View style={styles.footer}>
        <Text style={styles.text_in_footer}>
        This appis created as part of HLsolutions program. The materials con-tained on this website are provided for general 
        information only and do not constitute any form of advice. 
        HLS assumes no esponsibility for the accuracy of any particular statement and accepts
        no liability for any loss or damege which may arise from reliance on the infor-mation contained on 
        this site.
        </Text>
        <Text style={styles.text_copyright}>
          Copyright 2021 HLS
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: "#fff",
    height: "100%"
  },
  header:{
    backgroundColor: "#fff",
    // flex: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  logo:{
    width: "50%",
  },
  titile:{
    backgroundColor: "#2ab363",
    height: "25%",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
    
  },
  text_title:{
    color: "#fff",
    fontSize: 20,
  },
  text_under_title:{
    color: "#fff",
    marginTop: "10%",
    fontSize: 13,
  },
 
  
  footer:{
    backgroundColor: "#fff",
    borderTopColor: "#969696",
    borderWidth: 1,
    borderLeftColor: "#fff",
    borderRightColor: "#fff",
    borderBottomColor: "#fff",
    // padding: 5,
    marginTop: "20%"
  },
  text_in_footer:{
    padding: 5,
    textAlign: 'center',
    color: '#969696',
    marginTop: "5%"
  },
  text_copyright:{
    textAlign: 'center',
    fontSize: 18,
    marginTop: 15
  }

})
export default MobileScreen;