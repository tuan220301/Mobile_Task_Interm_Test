import React, { useState , useEffect} from "react";
import { View, Text, StyleSheet, Image, Button, Pressable  } from 'react-native';


function JokeStory () {
    const jokeStory =[{
        id: 0,
        content: 'A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then  their babies became adults anda made babies, and so on." The Child then went to his mother, asked her the same question and she told him, "We were mon-keys then we evolved to become like we are now." The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family"'
    },{
        id: 1,
        content:'Teacher: "Kids,what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!"'
    },
    {
        id: 2,
        content:`The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, 'I am going to eat that pussy once Jimmy leaves for school today!'"`
    },{
        id: 3,
        content:`A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think it's either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"`
    }
]
    // let arr_out = jokeStory[index];
    const  notice = "That's all the jokes for today! Come back another day!";
    
    const [arr, setArr] = useState(jokeStory[0]);
    //set couter to change joke with couter value
    const [counter, setCounter] = useState(1);
    const handleClick = () => {
        setCounter(counter + 1);
        setArr(jokeStory[counter])
    }
    return(
        <View style={styles.text_content}>
           <Text style={styles.text_in_content}>
             {counter > 3 ? notice : arr.content}
           </Text>
        <View style={styles.button_group}>
        
          <Pressable style={styles.button_item_one} onPress={handleClick}>
            <Text style={styles.stye_text_button}>This is Funny!</Text>
          </Pressable>
          <Pressable style={styles.button_item_two} onPress={handleClick}>
            <Text style={styles.stye_text_button}>This is not funny.</Text>
          </Pressable>
        </View> 
      </View>
    )
}
const styles = StyleSheet.create({
    text_content:{
        paddingTop: "6%",
        height: "28%",
      },
      text_in_content:{
        padding: 5,
        textAlign: "center",
        height: "90%"
      },
      button_group:{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
      },
      button_item_one:{
        backgroundColor: "#2b7eda",
        marginTop: 6,
        marginRight: 10,
        padding: 15
      },
      button_item_two: {
        backgroundColor: "#2ab363",
        marginTop: 10,
        // marginLeft: 10,
        padding: 15
      },
      stye_text_button:{
        color: "#ffff"
      },
      hide:{
        display: "none",
      },
      show:{
        display: "block"
      }
})
export default JokeStory;