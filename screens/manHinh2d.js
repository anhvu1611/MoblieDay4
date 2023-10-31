
import { StyleSheet, Text, View, Image,CheckBox } from 'react-native';
import { TextInput } from 'react-native-web';
import React, {useState} from 'react';

export default function App() {

  return (
    <View style={styles.container}>
        <View style={{flex:1}}>
            <View style={{flex:2, flexDirection: 'row', }}>
                <View style={{marginRight:10}}>
                    <Image source={require('../img/book.png')} 
                        style={{width:100, height:140}}/>
                </View>
                <View>
                    <Text style={{fontSize:12, fontWeight:700, marginBottom:10}}>Nguyên hàm phân tích và ứng dụng</Text>
                    <Text style={{fontSize:12, fontWeight:700, marginBottom:10}}>Cung cấp bởi Tiki Trading</Text>
                    <Text style={{fontSize:20, fontWeight:700, marginBottom:40, color:'red'}}>141.800đ</Text>
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{backgroundColor:'#C4C4C4', width:20, height:20, justifyContent: 'center', alignItems: 'center', marginRight:5}}><Text>-</Text></View>
                            <View><Text>1</Text></View>
                            <View style={{backgroundColor:'#C4C4C4', width:20, height:20, justifyContent: 'center', alignItems: 'center', marginLeft:5}}><Text>+</Text></View>
                        </View>
                        <View><Text style={{color:'blue'}}>Mua sau</Text></View>
                    </View>
                </View>
            </View>
            <View style={{flex:1}}>
                <View style={{flexDirection:'row'}}>
                    <Text>Mã giảm giá đã lưu</Text>
                    <Text style={{color:'blue'}}>      Xem tại đây</Text>
                </View>
            </View>
            <View style={{flex:1, flexDirection:'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center', borderWidth:1, height:45, width:'65%',justifyContent: 'space-around'}}>
                    <View style={{backgroundColor:'yellow', width:32, height:16,}}/>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>Mã giảm giá</Text>
                </View>
                <View style={{backgroundColor:'#0A5EB7', width:'30%', height:45,justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>Áp dụng</Text>
                </View>
            </View>  
        </View>
        <View style={{flex:1}}>
            <View style={{flex:1, flexDirection:'row'}}>
                <Text>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
                <Text style={{color:'blue'}}>Nhập tại đây?</Text>
            </View>
            <View style={{flex:1,flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{fontSize:18, fontWeight:'bold', color:'black'}}>Tạm tính</Text>
                <Text style={{fontSize:18, fontWeight:'bold', color:'red'}}>141.800đ</Text>
            </View>
            <View style={{flex:1,flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{fontSize:18, fontWeight:'bold', color:'gray'}}>Thành tiền</Text>
                <Text style={{fontSize:18, fontWeight:'bold', color:'red'}}>141.800đ</Text>
            </View>
            <View style={{flex:1}}>
                <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor:'#E53935', height:45, width:'97%'}}>
                    <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>TIẾN HÀNH ĐẶTs HÀNG</Text>
                </View>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
});
