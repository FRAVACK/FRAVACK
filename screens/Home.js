import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'
import { ScrollView } from 'react-native';

export default function HomeScreen({navigation}) {

const pressBtn = () => {
  navigation.navigate('OnePage');
}

  return (
    <View style={{flex: 1}}>
     <ScrollView>
      <View style={styles.container}>
      <Image source={require('../assets/googleImg.png')}  style={styles.imgStyle} /> 
      <View style={styles.containerInput}>
      <View style={styles.inputView}>
      <View style={styles.searchStyle}>
        <Icon style={styles.iconStyle} name="search" size={20} color="#000"/>
        <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
        />
    </View>
      </View>
     <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, padding: 5}}>
            <TouchableOpacity style={styles.Btn}>
            <Text style={styles.btnText}>Recherche google</Text>
            </TouchableOpacity>
        </View>
        <View style={{flex: 1, padding: 5}}>
            <TouchableOpacity style={styles.Btn}>
            <Text style={styles.btnText}>J'ai de la chance</Text>
            </TouchableOpacity>
        </View>

      </View>
     </View>
    </View>
    </ScrollView>
    <View style={{padding: 5}}>
    <View style={{padding: 5}}>
      <TouchableOpacity>
        <Text>France</Text>     
      </TouchableOpacity>
    </View>
    <View style={{flexDirection: 'row', padding: 5 }}>
        <View style={{flex: 1}}>
        <TouchableOpacity
        onPress={pressBtn}>
            <Text>A propos</Text></TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
        <TouchableOpacity><Text>Publicité</Text></TouchableOpacity> 
        </View>
        <View style={{flex: 1}}>
        <TouchableOpacity><Text>Entreprise</Text></TouchableOpacity>
        </View>    
    </View>
    <View style={{padding: 5}}>
    <TouchableOpacity>
        <Text>Comment fonctionne la recherche google?</Text>
    </TouchableOpacity>
    </View>
    </View>
    </View>
  )
}
 

const styles = StyleSheet.create({
    container: {
      alignItems: "center", 
      justifyContent: "center",
      paddingTop: 150,
      flex:1
    },
    imgStyle:{
    width: 120, 
    height: 40, 
    marginLeft:15, 
    marginTop: 10
    },
    input: {
    height: 40,
    margin: 10,
    width: "100%",
    borderWidth: 1,
    },
    inputView: {
    height: 45,
    marginBottom: 10, 
    },
      
    TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    },
    containerInput : {
    marginTop: 20,
    width: "80%",
    },
    Btn: {
    width: "100%",
    borderRadius: 15,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    backgroundColor: "#C0C0C0",
    },
    
    btnText:{
    color: "#ffff",
    },

    searchStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 20
    },
    iconStyle: {
        padding: 10,
    },
    input: {
        flex: 1,
        backgroundColor: "#fff",
        color: "#424242",
    },
  }); 


