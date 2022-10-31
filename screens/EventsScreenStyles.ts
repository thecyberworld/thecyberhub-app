import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#0D1117',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 15,
    },
    title: {
      fontSize: 32,
    },
  });
  export default styles;