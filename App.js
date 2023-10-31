import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import manHinh2a from "./screens/manHinh2a"
import manHinh2b from "./screens/namHinh2b"
import manHinh2c from "./screens/namHinh2c"
import manHinh2d from "./screens/manHinh2d"

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='manHinh2d' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="manHinh2a" component={manHinh2a} />
        <Stack.Screen name="manHinh2b" component={manHinh2b} />
        <Stack.Screen name="manHinh2c" component={manHinh2c} />
        <Stack.Screen name="manHinh2d" component={manHinh2d} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}