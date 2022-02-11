import { StyleSheet, View, FlatList, Button, Text } from 'react-native';
import Item from './src/components/Item';
import data from './mocks/data.json';

export default function App() {
  const handlePress = () => {

  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Reminder</Text>
      </View>
      <Button title='Add' onPress={handlePress} />
      <FlatList
        data={data}
        renderItem={Item}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 60
  }
});
