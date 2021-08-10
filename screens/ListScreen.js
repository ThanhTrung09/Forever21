import React from 'react'
import { View, Text, SafeAreaView, FlatList, StyleSheet, StatusBar, Image, Dimensions } from 'react-native'
import IconIonicons from 'react-native-vector-icons/Ionicons'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    image: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw1de0403f/1_front_750/00443150-03.jpg?sw=500&sh=750'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwe768816a/1_front_750/00443147-03.jpg?sw=500&sh=750'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw015b9157/1_front_750/00444558-01.jpg?sw=500&sh=750'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    image: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwa6b582e8/1_front_750/00441254-02.jpg?sw=500&sh=750'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw269c3942/1_front_750/00442304-03.jpg?sw=500&sh=750'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw700590e5/1_front_750/00443320-01.jpg?sw=500&sh=750'
  },
];

export default function ListScreen() {

  const { height, width } = Dimensions.get('window');
  const itemWidth = (width - 15) / 2;

  const renderItem = ({ item }) => (
    <View style={{ width: itemWidth, flex: 1, margin: 5 }}>
      <View>
        <Image
          style={{ height: 350, width: '100%' }}
          source={{
            uri: item.image,
          }}
        />
        <View style={{
          position: 'absolute', top: 20, right: 20, alignItems: 'center',
          backgroundColor: 'white', height: 40, width: 40, borderRadius: 40 / 2, justifyContent: 'center'
        }}>
          <IconIonicons name="heart-outline" size={30} />
        </View>
      </View>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{
            alignItems: 'center', marginTop: 10, borderWidth: 3, borderColor: 'black',
            backgroundColor: 'orange', height: 50, width: 50, borderRadius: 50 / 2, justifyContent: 'center'
          }}>
            <View style={{ backgroundColor: 'orange', borderWidth: 3, borderColor: 'white', height: 46, width: 46, borderRadius: 46 / 2 }}></View>
          </View>

          <View style={{
            alignItems: 'center', marginTop: 10, marginLeft: 10,
            backgroundColor: 'grey', height: 46, width: 46, borderRadius: 50 / 2, justifyContent: 'center'
          }}>
          </View>
        </View>
        <Text style={{ fontSize: 20, marginTop: 10 }}>Tshirt blackwinter</Text>
        <Text style={{ fontSize: 20, marginTop: 10 }}>$20.05</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 1 }}>
            <Text>Sort By</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Relevance</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <IconIonicons name="filter" size={30} />
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Filter</Text>
          </View>
        </View>
        <FlatList
          style={{ marginTop: 20 }}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});