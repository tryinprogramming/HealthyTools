import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, Image,  } from 'react-native'
import {AntDesign,Ionicons,Entypo} from '@expo/vector-icons'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

export default class Screen2 extends Component {
    render() {
        return (
           <SafeAreaView>
           <View style={styles.header}>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('Screen1')}>
           <AntDesign name="arrowleft" size={28} color="#b284b3"/>
           </TouchableOpacity>
           <Text style={styles.heading}>Healthy Tools</Text>
           <Ionicons name="ios-search" size={28} color="#b284b3"/>
           </View>

           <ScrollView style={styles.tabContainer} horizontal showsHorizontalScrollIndicator={false}>
          
           <View style={styles.tab}>
           <Text style={styles.tabText}>Baby</Text>
           <Entypo name='circle-with-cross' size={18} color='#fff'/>
           </View>

           <View style={styles.tab}>
           <Text style={styles.tabText}>Perfume</Text>
           <Entypo name='circle-with-cross' size={18} color='#fff'/>
           </View>

           <View style={styles.tab}>
           <Text style={styles.tabText}>Dental</Text>
           <Entypo name='circle-with-cross' size={18} color='#fff'/>
           </View>

           <View style={[styles.tab,{backgroundColor:'#fff'}]}>
           <Text style={[styles.tabText,{color:'#b284be'}]}>Bathroom</Text>
           </View>

           <View style={[styles.tab,{backgroundColor:'#fff'}]}>
           <Text style={[styles.tabText,{color:'#b284be'}]}>Bedroom</Text>
           </View>
           
           </ScrollView>

        <View style={{
            flexDirection:'row',
            flexWrap:'wrap',
            marginTop:30,
            marginHorizontal:30,
            justifyContent:'space-around'
        }}>
        
        <View style={styles.item}>
        <View style={styles.fav}>
        <AntDesign name='heart' size={20} color='#b284be' />
        </View>
        <Image
        source={require('../assets/baby_incubator.jpg')}
        style={{width:120,height:120,alignSelf:'center'}}
        />
        <View style={styles.detail}>
        <Text style={styles.detailName}>Baby Incubator</Text>
        <Text style={styles.detailPrice}>$40.99</Text>
        </View>
        </View>

        <View style={styles.item}>
        <View style={styles.fav}>
        <AntDesign name='heart' size={20} color='#b284be' />
        </View>
        <Image
        source={require('../assets/baby_incubator.jpg')}
        style={{width:120,height:120,alignSelf:'center'}}
        />
        <View style={styles.detail}>
        <Text style={styles.detailName}>Baby Incubator</Text>
        <Text style={styles.detailPrice}>$40.99</Text>
        </View>
        </View>

        <View style={styles.item}>
        <View style={styles.fav}>
        <AntDesign name='heart' size={20} color='#b284be' />
        </View>
        <Image
        source={require('../assets/baby_incubator.jpg')}
        style={{width:120,height:120,alignSelf:'center'}}
        />
        <View style={styles.detail}>
        <Text style={styles.detailName}>Baby Incubator</Text>
        <Text style={styles.detailPrice}>$40.99</Text>
        </View>
        </View>
        <View style={styles.item}>
        <View style={styles.fav}>
        <AntDesign name='heart' size={20} color='#b284be' />
        </View>
        <Image
        source={require('../assets/baby_incubator.jpg')}
        style={{width:120,height:120,alignSelf:'center'}}
        />
        <View style={styles.detail}>
        <Text style={styles.detailName}>Baby Incubator</Text>
        <Text style={styles.detailPrice}>$40.99</Text>
        </View>
        </View>
        
        </View>
           </SafeAreaView>
        )
    }
}

const styles= StyleSheet.create({
header:{
    marginTop:45,
    marginHorizontal:30,
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:'center'
},
heading:{
    fontSize:26,
    fontFamily:'sans-serif-medium',
    color:'#b384b3'
},
tabContainer:{
marginTop:25,
marginLeft:30
},
tab:{
flex:1,
paddingVertical:5,
paddingHorizontal:10,
margin:5,
borderRadius:50,
alignItems:'center',
justifyContent:'center',
backgroundColor:'#b284be',
flexDirection:'row',
elevation:2

},
tabText:{
    color:'#fff',
    fontFamily:'sans-serif-thin',
    fontWeight:'bold',
    fontSize:16,
    marginRight:5
},
item:{
    width:170,
    height:230,
    elevation:6,
    backgroundColor:'white',
    borderRadius:10,
    marginBottom:20
},
fav:{
    margin:10,
    alignSelf:'flex-end'
},
detail:{
    flex:1,
    justifyContent:'flex-end',
    margin:15
},
detailName:{
    fontSize:16,
    color:'#b284be',
    fontFamily:'sans-serif-light'
    
},
detailPrice:{
    fontSize:17,
    color:'#b284be',
    fontFamily:'sans-serif-medium'
}
});
