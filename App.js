
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./img/usb.png')}
          style={styles.usb}
        />
        <Text style={styles.headerText}>USB Bluetooth Music Receiver {"\n"}HJX-001- Biến loa thường thành loa {"\n"}bluetooth</Text>
      </View>
      <View style={styles.body}>
        <View>
          <Text style={styles.text1}>Cực kì hài lòng</Text>
        </View>
        <View style={styles.ratingbar}>
          <Image
            source={require('./img/star.png')}
            style={styles.star}
          />
          <Image
            source={require('./img/star.png')}
            style={styles.star}
          />
          <Image
            source={require('./img/star.png')}
            style={styles.star}
          />
          <Image
            source={require('./img/star.png')}
            style={styles.star}
          />
          <Image
            source={require('./img/star.png')}
            style={styles.star}
          />
        </View>
        <View style={styles.viewBody}>
          <Image
            source={require('./img/camera.png')}
            style={styles.camera}
          />
          <Text style={styles.text1}>Thêm hình ảnh</Text>
        </View>
        <View>
          <textarea
            style={styles.textArea}
            placeholder='Hãy chia sẽ những điều mà bạn thích về sản phẩm'
          ></textarea>
        </View>
      </View>
      <View style={styles.btn}>
        <Text style={styles.textBtn}>GỬI</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  header: {
    height: 150,

    flexDirection: 'row',
    paddingHorizontal: 13,
    paddingVertical: 13
  },
  usb: {
    width: 70,
    height: 70
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    color: 'black',
    fontSize: 18,
    fontWeight: 700,
  },
  star: {
    width:39,
    height:39
  },
  viewBody: {
    flexDirection: 'row',
    width: 330,
    height: 70,
    borderWidth:1,
    borderColor: "blue",
    justifyContent: 'center',
    alignItems: 'center'
  },
  camera: {
    width: 39,
    height: 37,
    marginRight: 20
  },
  textArea: {
    marginTop: 20,
    width: 330,
    height: 200,
    fontSize: 18,
    padding: 10
  },
  ratingbar: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between'
  },
  btn: {
    backgroundColor: "#0D5DB6",
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    marginTop: 20,
    borderRadius: 10
  },
  textBtn: {
    color: "#FFFFFF",
    fontSize:20,
    fontWeight: 'bold',
    
  }
});
