import React from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconAntDesign from 'react-native-vector-icons/AntDesign'

export default function BagScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ margin: 20 }}>
          <Text style={styles.nameProduct}>Rose Embroidered Graphic Tee</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '40%' }}>
              <Image
                style={{ height: 200, width: '80%', marginLeft: 15 }}
                source={{
                  uri: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwee2dc176/1_front_750/00438870-01.jpg?sw=500&sh=750',
                }}
              />
              <TouchableOpacity style={{ backgroundColor: '#eeee', height: 35, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <Text style={styles.textTitle2}>Move to Wishlist</Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginLeft: 20, width: '55%' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>$39.99</Text>
              <Text style={styles.textTitle}>SKU#: 2000443147031</Text>
              <Text style={styles.textTitle}>Color: WHITE/MULTI</Text>
              <Text style={styles.textTitle}>Size: M</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <TouchableOpacity style={{ height: 40, width: 40, borderWidth: 1, borderRadius: 40 / 2, justifyContent: 'center', alignItems: 'center' }}>
                  <IconIonicons name="trash-bin-outline" size={20} />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 5 }}>Qty: 2</Text>
                <TouchableOpacity style={{ height: 40, width: 40, borderWidth: 1, borderRadius: 40 / 2, justifyContent: 'center', alignItems: 'center' }}>
                  <IconIonicons name="add" size={30} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text style={{ borderBottomWidth: 1, borderBottomColor: '#e0e0e0', alignItems: 'stretch' }}></Text>
        </View>

        <View style={{ margin: 20 }}>
          <Text>*Have A Promo?</Text>
          <View style={{ flexDirection: 'row', borderWidth: 1 }}>
            <TextInput
              styles={styles.textInput}
              textContentType="aPromo"
            />
            <TouchableOpacity style={{ height: 30, width: 60, backgroundColor: '#e0e0e0', justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 0, margin: 8 }}>
              <Text style={{ fontWeight: 'bold' }}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ margin: 20, borderWidth: 1, borderColor: 'grey' }}>
          <View style={{ margin: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
              <Text style={styles.price}>Subtotal</Text>
              <Text style={styles.price}>$39.98</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
              <Text style={styles.price}>Shipping</Text>
              <Text style={styles.price}>$5.95</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.price}>Sales Tax</Text>
              <Text style={styles.price}>$0.00</Text>
            </View>
          </View>
          <View style={{ borderBottomWidth: 1, width: '90%', marginLeft: 17, borderColor: 'grey' }}>
            <Text></Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
            <Text style={styles.totalPrice}>Estimated Total</Text>
            <Text style={styles.totalPrice}>$45.94</Text>
          </View>
        </View>
      </ScrollView>
      <View style={{ margin: 20 }}>
        <TouchableOpacity style={{
          height: 60, borderWidth: 1,
          backgroundColor: 'white',
          width: '100%',
          position: 'absolute', bottom: 15, left: 0,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row'
        }}>
          <IconAntDesign name="apple1" size={20} />
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Pay</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          height: 60, backgroundColor: '#ffea00',
          width: '100%',
          position: 'absolute', bottom: 85, left: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nameProduct: {
    fontSize: 20,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  textTitle: {
    fontSize: 17,
    marginBottom: 10,
  },
  textTitle2: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  price: {
    fontSize: 18,
  },
});
