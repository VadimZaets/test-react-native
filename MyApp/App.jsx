import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView,  FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import QuestionComponent from './components/Question/QuestionComponent';
import QuizResultsComponent from './components/Question/QuizResultsComponent';



import questions from './questions.json'
import WebView from 'react-native-webview';



export default function App() {
  const [webviewVisible, setWebviewVisible] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizResults, setQuizResults] = useState([]);
   

 

  useEffect(() => {
    const checkWebsiteExistence = async () => {
      try {
        const response = await fetch('https://reactnative.dev/123');
        if (response.ok) {
          setWebviewVisible(true);
        } else {
          setWebviewVisible(false);
        }
      } catch (error) {
        console.error(error);
        setWebviewVisible(false);
      }
    };

    checkWebsiteExistence();
  }, []);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
      saveQuizResult(score);
    }
  };

  const saveQuizResult = async (score) => {
    try {
      const existingResults = await AsyncStorage.getItem('quizResults');
      const resultsArray = existingResults ? JSON.parse(existingResults) : [];
      resultsArray.push(score);
      await AsyncStorage.setItem('quizResults', JSON.stringify(resultsArray));
      setQuizResults(resultsArray);
    } catch (error) {
      console.error(error);
    }
  };

  const loadQuizResults = async () => {
    try {
      const existingResults = await AsyncStorage.getItem('quizResults');
      const resultsArray = existingResults ? JSON.parse(existingResults) : [];
      setQuizResults(resultsArray);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadQuizResults();
  }, []);

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <>
      {webviewVisible ? (
        <SafeAreaView style={{ flex: 1 }}>
          <WebView source={{ uri: 'https://reactnative.dev/' }} />
        </SafeAreaView>
      ) : (
        < >
        <View style={styles.questionContainer}>
          {quizCompleted ? (
            <View>
              <Text style={styles.resultText}>Ваш результат: {score} з {questions.length}</Text>
              <Button title="Почати знову" onPress={restartQuiz} />
            </View>
          ) : (
            <QuestionComponent
              question={questions[currentQuestion].question}
              options={questions[currentQuestion].options}
              handleAnswer={handleAnswer}
            />
          )}
           </View>
           <QuizResultsComponent quizResults={quizResults} questions={questions} />
          </>
          
       
      )}
       
    </>
  );
}

const styles = StyleSheet.create({
  questionContainer: {
    marginTop: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
 

});
