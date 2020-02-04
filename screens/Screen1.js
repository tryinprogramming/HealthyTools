import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {MaterialCommunityIcons,AntDesign,
    Ionicons,FontAwesome,Feather} from '@expo/vector-icons'
import { SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { ImageBackground } from 'react-native';
import { Image, TouchableOpacity } from 'react-native';


export default class Screen1 extends Component {
    render() {
        return (
            <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
           <View style={styles.row}>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('Screen2')}>
           <Text style={styles.heading}>Heathly Tools</Text>
           </TouchableOpacity>
           <View>
           <MaterialCommunityIcons name="bell-outline" size={35} color="#b284be"/>
           <View style={styles.dot}>
           </View>
           </View>
           </View>
           <Text style={{
               color:'#cdcdcd',
               fontSize:15,
               marginTop:5
           }}>Right Medical Tools Can Make You Healthy</Text>
           <View style={[styles.searchBar,styles.shadow]}>
           <Ionicons name='ios-search' size={26} color="#cdcdcd"/>
           <Text
           style={{
               marginLeft:15,
               color:'#cdcdcd',
               fontSize:18
           }}
           >Find Your Healthy Tools</Text>
           </View>
            <View style={{
                marginTop:20,
                flexDirection:'row',
                flexWrap:'wrap',
                justifyContent:'space-around'
            }}>

            <View style={[styles.shadow,styles.tab]}>
            <FontAwesome name="building" size={25} color='orange'/>
            <Text style={{
                marginTop:10,
                color:'#cdcdcd',
                fontSize:14,
                fontWeight:'bold'
            }}>Room</Text>
            </View>

            <View style={[styles.shadow,styles.tab]}>
            <MaterialCommunityIcons name="baby-buggy" size={25} color='orange'/>
            <Text style={{
                marginTop:10,
                color:'#cdcdcd',
                fontSize:14,
                fontWeight:'bold'
            }}>Baby</Text>
            </View>

            <View style={[styles.shadow,styles.tab]}>
            <Ionicons name="ios-american-football" size={25} color='orange'/>
            <Text style={{
                marginTop:10,
                color:'#cdcdcd',
                fontSize:14,
                fontWeight:'bold'
            }}>Sport</Text>
            </View>

            <View style={[styles.shadow,styles.tab]}>
            <FontAwesome name="bath" size={25} color='orange'/>
            <Text style={{
                marginTop:10,
                color:'#cdcdcd',
                fontSize:14,
                fontWeight:'bold'
            }}>Bathroom</Text>
            </View>

            <View style={[styles.shadow,styles.tab]}>
            <MaterialCommunityIcons name="flower-tulip" size={25} color='orange'/>
            <Text style={{
                marginTop:10,
                color:'#cdcdcd',
                fontSize:14,
                fontWeight:'bold'
            }}>Perfume</Text>
            </View>

            <View style={[styles.shadow,styles.tab]}>
            <Ionicons name="ios-bed" size={25} color='orange'/>
            <Text style={{
                marginTop:10,
                color:'#cdcdcd',
                fontSize:14,
                fontWeight:'bold'
            }}>Bedroom</Text>
            </View>

            <View style={[styles.shadow,styles.tab]}>
            <MaterialCommunityIcons name="food" size={28} color='orange'/>
            <Text style={{
                marginTop:10,
                color:'#cdcdcd',
                fontSize:14,
                fontWeight:'bold'
            }}>Food</Text>
            </View>

            <View style={[styles.shadow,styles.tab]}>
            <Feather name="more-horizontal" size={25} color='orange'/>
            <Text style={{
                marginTop:10,
                color:'#cdcdcd',
                fontSize:14,
                fontWeight:'bold'
            }}>More</Text>
            </View>
            </View>
            </View>
             <View style={[styles.header,styles.row]}>
             <Text style={styles.sub_heading}>Promotions</Text>
             <View style={{flexDirection:'row',alignItems:'center'}}>
             <Text style={{
                 color:'#cdcdcd',
                 fontSize:16,
                 fontFamily:'sans-serif-light',
                 fontWeight:'bold',
                 marginRight:5
             }}>See All</Text>
             <AntDesign name='arrowright' size={16} color="#cdcdcd"/>
             </View>
             </View>   
             <View style={styles.body}>
             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
             <ImageBackground
             source={require('../assets/sale1.jpg')}
             style={{width:350,height:150,marginRight:20}}
             imageStyle={{borderRadius:10}}
             >
             <View style={styles.offer}>
             <Text
             style={{
                 color:'#fff',
                 fontSize:14,
                 fontWeight:'bold'
             }}
             >HOT</Text>
             </View>
             <View style={styles.detail}>
             <Text
             style={{
                 fontSize:22,
                 color:'#000',
                 fontFamily:'sans-serif-medium',

             }}
             >Baby Clothes</Text>
             <Text
             style={{
                fontSize:15,
                color:'#000',
                fontFamily:'sans-serif-thin',
                fontWeight:'bold'

            }}>Get 70% Percent Off On Memeber Ship Card</Text>
             </View>
             </ImageBackground>
             <ImageBackground
             source={require('../assets/sale2.jpg')}
             style={{width:350,height:150}}
             imageStyle={{borderRadius:10}}
             >
             <View style={styles.offer}>
             <Text
             style={{
                 color:'#fff',
                 fontSize:14,
                 fontWeight:'bold'
             }}
             >HOT</Text>
             </View>
             <View style={styles.detail}>
             <Text
             style={{
                 fontSize:22,
                 color:'#000',
                 fontFamily:'sans-serif-medium',

             }}
             >Baby Clothes</Text>
             <Text
             style={{
                fontSize:15,
                color:'#000',
                fontFamily:'sans-serif-thin',
                fontWeight:'bold'

            }}>Get 70% Percent Off On Memeber Ship Card</Text>
             </View>
             </ImageBackground>
             </ScrollView>
             </View>
             <View style={[styles.header,styles.row]}>
             <Text style={styles.sub_heading}>Best Products</Text>
             <View style={{flexDirection:'row',alignItems:'center'}}>
             <Text style={{
                 color:'#cdcdcd',
                 fontSize:16,
                 fontFamily:'sans-serif-light',
                 fontWeight:'bold',
                 marginRight:5
             }}>See All</Text>
             <AntDesign name='arrowright' size={16} color="#cdcdcd"/>
             </View>
             </View>   
             <View style={{marginTop:25,marginLeft:30,flexDirection:'row'}}>
            <Image
            source={require('../assets/product1.jpg')}
            style={{width:170,height:250,borderRadius:20,marginRight:15}}
            />
            <Image
            source={require('../assets/product2.jpg')}
            style={{width:170,height:250,borderRadius:20,marginRight:15}}
            />
            </View>
             </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
 header:{
     marginTop:45,
     marginHorizontal:30
 },
 body:{
    marginTop:20,
    marginLeft:30
 },
 row:{
     flexDirection:'row',
     justifyContent:'space-between'
 },
 heading:{
     fontSize:26,
     color:'#b284be',
     fontFamily:'sans-serif-medium'
 },
 sub_heading:{
    fontSize:20,
    color:'#b284be',
    fontFamily:'sans-serif-medium'
},
 dot:{
     height:10,
     width:10,
     borderRadius:5,
     backgroundColor:'orange',
     position:'absolute',
     right:7,
     top:7,
     borderWidth:1,
     borderColor:'#fff'

 },
 searchBar:{
     marginTop:40,
     flexDirection:'row',
     alignItems:'center',
     paddingHorizontal:20,
     paddingVertical:10,
   
 },
 shadow:{
    shadowColor:'#000',
    shadowRadius:30,
    shadowOpacity:0.26,
    shadowOffset:{width:2,height:2},
    //just for android emulators and handies
    elevation:3,
    borderRadius:30,
    backgroundColor:'#fff'
 },
 tab:{
     height:80,
     width:80,
     alignItems:'center',
     justifyContent:'center',
     marginTop:20,
     borderRadius:10
 },
 offer:{
     margin:10,
     alignSelf:'flex-end',
     height:25,
     width:60,
     borderRadius:30,
     backgroundColor:'orange',
     alignItems:'center',
     justifyContent:'center'

 },
 detail:{
     flex:1,
     justifyContent:'flex-end',
     margin:15
 }


});
