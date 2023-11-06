import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';



const QuestionComponent = ({ question, options, handleAnswer }) => {
  return (
    <View>
      <Text style={styles.questionText}>{question}</Text>
      {options.map((option, index) => (
        <Button key={index} title={option} onPress={() => handleAnswer(option)} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  questionText: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default QuestionComponent;