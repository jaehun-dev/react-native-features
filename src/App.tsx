import {Text, View} from 'react-native';
import Config from 'react-native-config';

export default function App() {
  console.log(Config.ENV);

  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
}
