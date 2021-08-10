import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'

export default function WishlistScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ margin: 20 }}>
          <Text style={styles.nameProduct}>Ribbed Notched Blazer</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '40%' }}>
              <Image
                style={{ height: 250, width: '100%' }}
                source={{
                  uri: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwe768816a/1_front_750/00443147-03.jpg?sw=500&sh=750',
                }}
              />
            </View>
            <View style={{ marginLeft: 20, width: '55%' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>$39.99</Text>
              <Text style={styles.textTitle}>SKU#: 2000443147031</Text>
              <TouchableOpacity style={{ backgroundColor: '#eeee', height: 45, justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                <Text style={styles.textTitle2}>Add to Cart</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ backgroundColor: '#eeee', height: 45, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.textTitle2}>Remove from Wishlist</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <Text style={{ borderBottomWidth: 1, borderBottomColor: '#e0e0e0', alignItems: 'stretch' }}></Text>
        </View>

        <View style={{ margin: 20 }}>
          <Text style={styles.nameProduct}>Def Leppard Graphic Tee</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '40%' }}>
              <Image
                style={{ height: 250, width: '100%' }}
                source={{
                  uri: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw8e2b76b3/1_front_750/00433392-12.jpg?sw=500&sh=750',
                }}
              />
            </View>
            <View style={{ marginLeft: 20, width: '55%' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>$19.99</Text>
              <Text style={styles.textTitle}>SKU#: 2000441254021</Text>
              <TouchableOpacity style={{ backgroundColor: '#eeee', height: 45, justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                <Text style={styles.textTitle2}>Add to Cart</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ backgroundColor: '#eeee', height: 45, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.textTitle2}>Remove from Wishlist</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <Text style={{ borderBottomWidth: 1, borderBottomColor: '#e0e0e0', alignItems: 'stretch' }}></Text>
        </View>

        <View style={{ margin: 20 }}>
          <Text style={styles.nameProduct}>Ribbed Notched Blazer</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '40%' }}>
              <Image
                style={{ height: 250, width: '100%' }}
                source={{
                  uri: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw07d7241a/1_front_750/00439189-03.jpg?sw=500&sh=750',
                }}
              />
            </View>
            <View style={{ marginLeft: 20, width: '55%' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>$39.99</Text>
              <Text style={styles.textTitle}>SKU#: 2000443147031</Text>
              <TouchableOpacity style={{ backgroundColor: '#eeee', height: 45, justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                <Text style={styles.textTitle2}>Add to Cart</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ backgroundColor: '#eeee', height: 45, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.textTitle2}>Remove from Wishlist</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <Text style={{ borderBottomWidth: 1, borderBottomColor: '#e0e0e0', alignItems: 'stretch' }}></Text>
        </View>

        <View style={{ margin: 20 }}>
          <Text style={styles.nameProduct}>Def Leppard Graphic Tee</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '40%' }}>
              <Image
                style={{ height: 250, width: '100%' }}
                source={{
                  uri: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw10d10015/1_front_750/00435047-01.jpg?sw=500&sh=750',
                }}
              />
            </View>
            <View style={{ marginLeft: 20, width: '55%' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>$19.99</Text>
              <Text style={styles.textTitle}>SKU#: 2000441254021</Text>
              <TouchableOpacity style={{ backgroundColor: '#eeee', height: 45, justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                <Text style={styles.textTitle2}>Add to Cart</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ backgroundColor: '#eeee', height: 45, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.textTitle2}>Remove from Wishlist</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>


      </ScrollView>
    </SafeAreaView>
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
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textTitle2: {
    fontWeight: 'bold',
  },
});