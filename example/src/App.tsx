import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { multiply, add, substract, devide } from 'react-native-klc';

export default function App() {
  const [result1, setResult1] = React.useState<number | undefined>();
  const [result2, setResult2] = React.useState<number | undefined>();
  const [result3, setResult3] = React.useState<number | undefined>();
  const [result4, setResult4] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(10, 3).then(setResult1);
    devide(10, 3).then(setResult2);
    add(10, 3).then(setResult3);
    substract(10, 3).then(setResult4);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result1}</Text>
      <Text>Result: {result2}</Text>
      <Text>Result: {result3}</Text>
      <Text>Result: {result4}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
