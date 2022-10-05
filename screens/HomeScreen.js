import { View, Text, TouchableOpacity } from 'react-native';
import Colors from '../styles/colors';
import * as Typography from '../styles/typography';
import * as Spacing from '../styles/spacing';
import { Video } from 'expo-av';

const poster = require('../assets/icon.png');
export default function HomeScreen({ navigation }) {
  return (
    <>
      <Video
        style={{ flex: 1, position: 'relative' }}
        source={{ uri: 'https://imgur.com/Q8km3ih.mp4' }}
        shouldPlay={true}
        isLooping={true}
        isMuted={true}
        resizeMode="stretch"
        usePoster={true}
        posterSource={poster}
      />
      <View
        style={{
          flex: 0,
          top: '30%',
          padding: Spacing.m,
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            ...Typography.largeTitleEmphasized,
            color: Colors.greyLightest,
            marginBottom: Spacing.m,
            textAlign: 'center',
          }}
        >
          Cyber Security Made Easy.
        </Text>
        <Text
          style={{
            ...Typography.bodyEmphasized,
            color: Colors.primaryLightest,
            textAlign: 'center',
            padding: Spacing.m,
            marginBottom: Spacing.m,
          }}
        >
          Cyber Security is a field that is growing at an exponential rate.
        </Text>
        <TouchableOpacity onPress={() => alert('This is the "Home" screen.')}>
          <Text
            style={{
              ...Typography.body,
              padding: Spacing.m,
              color: Colors.primary,
              borderWidth: 0.3,
              borderColor: Colors.secondaryLight,
              borderRadius: Spacing.s,
            }}
          >
            {`Get Started  >`}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
