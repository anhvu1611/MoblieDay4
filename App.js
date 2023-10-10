
import { StyleSheet, Text, View, Image,CheckBox } from 'react-native';
import { TextInput } from 'react-native-web';
import React, {useState} from 'react';

export default function App() {

  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={{color: 'white', fontSize:25}}>PASSWORD {"\n"}GENERATOR</Text>
        </View>
        <View>
          <TextInput style={{backgroundColor: '#151537', height:55, marginTop: 33}}></TextInput>
        </View>
        <View style={styles.list}>
          <View style={{flexDirection: 'row', justifyContent: 'Space-between'}}>
            <Text style={{fontSize:20, color: 'white'}}>Password Lenght</Text>
            <TextInput style={{backgroundColor: 'white', height:32}}></TextInput>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'Space-between', marginTop: 20}}>
            <Text style={{fontSize:20, color: 'white'}}>Include lower case letter</Text>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={{alignSelf: 'center'}}
            ></CheckBox>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'Space-between', marginTop: 20}}>
            <Text style={{fontSize:20, color: 'white'}}>Include up case letter</Text>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={{alignSelf: 'center'}}
            ></CheckBox>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'Space-between', marginTop: 20}}>
            <Text style={{fontSize:20, color: 'white'}}>Include number</Text>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={{alignSelf: 'center'}}
            ></CheckBox>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'Space-between', marginTop: 20}}>
            <Text style={{fontSize:20, color: 'white'}}>Include specical symbol</Text>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={{alignSelf: 'center'}}
            ></CheckBox>
          </View>
        </View>
        <View style={{backgroundColor: '#3B3B98', height: 50, justifyContent: 'center', alignItems: 'center', marginTop:50}}>
          <Text style={{fontSize:18, color: 'white'}}>GENERATE PASSWORD</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3B3B98",
    flex: 1,
    padding: 20
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#23235B",
    borderRadius: 10,
    padding: 10
  },
  header: {
    marginTop: 40,
    textAlign: 'center',
    alignItems: 'center'
  },
  list: {
    flexDirection: 'column',
    paddingTop: 30
  }
});
