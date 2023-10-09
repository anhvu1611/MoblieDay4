import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


export default function App() {
  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.txtLogin}>LOGIN</Text>
      </View>
      <View style={styles.accView}>
        <Icon name="user" color="black" size={32} style={styles.iconImg} />
        <TextInput style={styles.txtInput}
          placeholder='Name'
        ></TextInput>
      </View>
      <View style={styles.accView}  >
        <Icon name="lock" color="black" size={32} style={styles.iconImg} />
        <TextInput style={styles.txtInput}
          placeholder='Password' 
        ></TextInput>
        <Icon name="eye" color="black" size={32} style={{marginStart:30}} />
      </View>
      <View style={styles.viewBTN}>
        <Button 
          title='LOGIN' color="black" 
        ></Button>
      </View>
      <View style={{justifyContent:'center', alignItems:'center', marginTop: 50}}>
        <Text style={{fontSize:20, }}>Forgot your password?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(180deg, #FBCB00 0%, #BF9A00 100%)',
  },
  txtLogin: {
    fontSize: 30,
    fontWeight: 700,
    marginTop: 75,
    marginLeft: 3
  },
  accView: {
    height: 54,
    width: 330,
    borderWidth: 0.5,
    borderColor: "black",
    marginStart: 30,
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  txtInput: {
    color: "black",
    fontSize: 18,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400
  },
  iconImg: {
    marginStart: 10,
    marginEnd: 10
  },
  viewBTN: {
    marginTop: 50,
    marginLeft: 30,
    marginRight: 30
  }
});