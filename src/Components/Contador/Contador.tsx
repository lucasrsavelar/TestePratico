import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Contador: React.FC = () => {
  //let count = 0
  const [count, setCount] = useState(0);

  const incrementar = () => {
    //count = count + 1
    setCount(count + 1);
  };

  return (
    <View>
      <Text>Contador: {count}</Text>
      <Button title="Incrementar" testID="botaoIncrementar" onPress={incrementar} />
    </View>
  );
};

export default Contador;