import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const shuffleArray=(array)=> {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const Quiz = ({navigation}) => {
    const [questions, setQuestions] = useState();
    const [ques, setQues]= useState(0);
    const [options, setOptions] = useState([]);
    const [score, setScore]=useState(0);
    const [isLoading, setIsLoading]= useState(false);

    
    const getQuiz=async()=>{
        setIsLoading(true)
        const url='https://opentdb.com/api.php?amount=10&category=18&type=multiple&encode=url3986';
        const res= await fetch(url);
        const data = await res.json();
       // console.log(data.results[0]);
       setQuestions(data.results);
      setOptions(generateOptionsAndShuffle(data.results[0]))
      setIsLoading(false)
    }
    useEffect(()=>{
        getQuiz()
    },[])

    const handleNextPress=()=>{
        setQues(ques+1)
        setOptions(generateOptionsAndShuffle(questions[ques+1]))
    }


    const generateOptionsAndShuffle=(_question)=>{
        const options=[..._question.incorrect_answers]
        options.push(_question.correct_answer)
       // console.log(options)
        shuffleArray(options)
       // console.log(options)

       return options
    }  
    
    const handleSelectedOption=(_option)=>{
        if(_option===questions[ques].correct_answer){
            setScore(score+10)
        }
        if(ques!==9)
        {
        setQues(ques+1)
        setOptions(generateOptionsAndShuffle(questions[ques+1]))
        }
        
        if(ques===9){
            handleShowResult()
        }

    }

    const handleShowResult=()=>{
        navigation.navigate('Result',{
          score:score  
        })
    }

  return (
    <View style={styles.container}>
        {isLoading?<View style={{display:'flex',justifyContent:'center', alignItems:'center',height:'100%'}}>
            <Text style={{fontSize:32, fontWeight:'700',color:'#4f7892'}}>LOADING...</Text>
        </View>: questions && (
        <View style={styles.parent}>
        <View style={styles.top}>
            <Text style={styles.question}>{decodeURIComponent(questions[ques].question)}</Text>
        </View>
        <View style={styles.options}> 
        <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[0])}>
                <Text style={styles.option}>{decodeURIComponent(options[0])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}  onPress={()=>handleSelectedOption(options[1])}>
                <Text style={styles.option}>{decodeURIComponent(options[1])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}  onPress={()=>handleSelectedOption(options[2])}>
                <Text style={styles.option}>{decodeURIComponent(options[2])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}  onPress={()=>handleSelectedOption(options[3])}>
                <Text style={styles.option}>{decodeURIComponent(options[3])}</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
            {/* <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>PREV</Text >
            </TouchableOpacity> */}
         {ques !==9 &&   <TouchableOpacity style={styles.button} onPress={handleNextPress}>
                <Text style={styles.buttonText}>SKIP</Text>
            </TouchableOpacity> }

            {ques ==9 &&   <TouchableOpacity style={styles.button} onPress={handleShowResult}>
                <Text style={styles.buttonText}>SHOW RESULTS</Text>
            </TouchableOpacity> }
            {/* <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>END</Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity onPress={()=>navigation.navigate('Result')}>
                <Text>END</Text>
            </TouchableOpacity> */}
        </View>
        
        </View>
        )}
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({

    container:{
        paddingTop:40,
        paddingHorizontal:20,
        height:'100%'
    },
    top:{
        marginVertical:16,

    },
    options:{
        marginVertical:16,
        flex:1,
    //     width:'100%' ,
    //     backgroundColor:'#477d85',
    //     padding:20,
    //     borderRadius:16,
    //     marginTop:20,
    //     alignItems:'center',
    //     marginBottom:40
     },
    bottom:{
        marginBottom:12,
        paddingVertical:16,
        justifyContent:'space-between',
        flexDirection:'row'
    },
    button:{
        // width:'100%' ,
        backgroundColor:'#477d85',
        padding:16,
        borderRadius:16,
        marginTop:20,
        alignItems:'center',
        marginBottom:40,
        paddingHorizontal:22 
    },
    buttonText:{
        fontSize:16,
        fontWeight:'900',
        color:'white',  
    },
    question:{
        fontSize:24,
        fontWeight:'500',
        color:'#4f7892'
    },
    option:{
        fontSize:16,
        fontWeight:'900',
        color:'white', 
        marginHorizontal:6 
    },
    optionButton:{
        paddingVertical:16,
        backgroundColor:'#477d85',
        marginVertical:6,
        borderRadius:6

    },
    parent:{
        height:'100%'
    }
})