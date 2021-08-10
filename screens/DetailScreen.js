import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function DetailScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View>
            <Swiper height={550} style={styles.wrapper} loop={false}>
              <View testID="Picture1">
                <Image
                  style={{ height: 550, width: '100%' }}
                  source={{
                    uri: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw1de0403f/1_front_750/00443150-03.jpg?sw=500&sh=750',
                  }}
                />
              </View>
              <View testID="Picture2">
                <Image
                  style={{ height: 550, width: '100%' }}
                  source={{
                    uri: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwa6b582e8/1_front_750/00441254-02.jpg?sw=500&sh=750',
                  }}
                />
              </View>
              <View testID="Picture3">
                <Image
                  style={{ height: 550, width: '100%' }}
                  source={{
                    uri: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw700590e5/1_front_750/00443320-01.jpg?sw=500&sh=750',
                  }}
                />
              </View>
            </Swiper>
            <View style={styles.info}>
              <Text style={styles.textInfo}>Textured Cotton Skort</Text>
              <Text style={styles.textInfo}>$19.99</Text>
            </View>
            <Text style={{ borderBottomWidth: 1, marginBottom: 20, borderBottomColor: '#e0e0e0' }}></Text>
            <View>
              <View style={styles.changeColor}>
                <Text style={{ fontSize: 18 }}>Color:</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold', paddingLeft: 10 }}>CAMEL</Text>
              </View>
              <View style={{ flexDirection: 'row', marginLeft: 15, marginVertical: 10 }}>
                <View style={styles.ballColor1}>
                  <View style={styles.ChangeBallColor1}></View>
                </View>
                <View style={styles.ballColor2}></View>
              </View>
              <View style={{ margin: 15, flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: '70%' }}>
                  <Text style={{ fontSize: 18 }}>Size:</Text>
                  <Text style={{ fontSize: 18, fontWeight: 'bold', paddingLeft: 10 }}>XS</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', width: '30%', height: 25, backgroundColor: '#eeee', justifyContent: 'center', alignItems: 'center' }}>
                  <IconFontAwesome5 name="ruler-horizontal" size={18} />
                  <Text style={{ fontSize: 14, marginLeft: 5 }}>Size Chart</Text>
                </View>
              </View>
            </View>
            <View>
              <View style={styles.chooseSize}>
                <TouchableOpacity style={styles.buttonSizeItem}>
                  <Text style={styles.chooseItemTitle}>XS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonSizeItem}>
                  <Text style={styles.chooseItemTitle}>S</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonSizeItem}>
                  <Text style={styles.chooseItemTitle}>M</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonSizeItem}>
                  <Text style={styles.chooseItemTitle}>L</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonSizeItem}>
                  <Text style={styles.chooseItemTitle}>XL</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={{
        height: 50, backgroundColor: '#ffea00',
        width: '100%',
        position: 'absolute', bottom: 10, left: 0,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Add to cart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  info: {
    marginVertical: 30,
    margin: 15,
    marginBottom: 5,
  },
  textInfo: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  changeColor: {
    flexDirection: 'row',
    marginLeft: 15,
  },
  ballColor1: {
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor: '#ffab91',
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    justifyContent: 'center',
  },
  ballColor2: {
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: '#b0bec5',
    height: 46,
    width: 46,
    borderRadius: 50 / 2,
    justifyContent: 'center',
  },
  ChangeBallColor1: {
    backgroundColor: '#ffab91',
    borderWidth: 3,
    borderColor: 'white',
    height: 46,
    width: 46,
    borderRadius: 46 / 2,
  },
  chooseSize: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonSizeItem: {
    width: '20%',
    height: 50,
    borderWidth: 1,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chooseItemTitle: {

  },
});
