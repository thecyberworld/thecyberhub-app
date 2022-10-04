import { View, Text } from 'react-native';
import Colors from '../styles/colors';
import * as Typography from '../styles/typography';
import * as Spacing from '../styles/spacing';

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.greyDarkest,
      }}
    >
      <Text
        onPress={() => alert('This is the "Home" screen.')}
        style={{
          ...Typography.largeTitle,
          color: Colors.primary,
          marginBottom: Spacing.l,
        }}
      >
        Home Screen
      </Text>
      <Text
        style={{
          padding: Spacing.s,
          color: Colors.primary,
          borderWidth: 1,
          borderColor: Colors.secondary,
          borderRadius: Spacing.s,
        }}
      >
        this way
      </Text>
    </View>
  );
}
