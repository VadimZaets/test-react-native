import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const QuizResultsComponent = ({ quizResults, questions }) => {
  return (
    <View style={styles.resultsContainer}>
      <Text style={styles.resultsTitle}>Результати тестів:</Text>
      <FlatList
        data={quizResults}
        renderItem={({ item, index }) => (
          <Text style={styles.resultItem}>Тест {index + 1}: {item} з {questions.length}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  resultsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resultItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default QuizResultsComponent;