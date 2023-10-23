import React from 'react';
import {View, SafeAreaView, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';

import CustomButton from '../../components/CustomButton';
import firestore from '@react-native-firebase/firestore';
import Logo from '../../../assets/images/Logo.png';
import moment from 'moment';

const StressorScreen = ({ navigation }) => {
  const window = useWindowDimensions();
  const user = auth().currentUser;
    var db = firestore();

    const today = new Date();
    const myDate = moment(today).format('YYYY-MM-DD');
    const triggerDoc = db.collection('DailyLog').doc(user.uid).collection('dates').doc(myDate).set({
      triggers: value,
    })

  return (
    <SafeAreaView style={[styles.root]}>
      <View style={styles.header}>
        <View style={{width: 100}}><CustomButton text= "<" onPress={() => navigation.goBack()} type="blackBackButton"/></View>
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
         <View style={{ marginRight: 100 }}>
            <Image source={Logo} style={styles.logo} resizeMode="cover" />
            </View>
            </View>
      </View>

      <Text style = {styles.title}>
        Stressor of the day
      </Text>

      <View style={styles.row}>
        <CustomButton text= "Home" onPress={() => navigation.navigate('Reasons', {stressor: 'home'})} type="STRESSOR"/>
        <CustomButton text= "Work" onPress={() => navigation.navigate('Reasons', {stressor: 'work'})} type="STRESSOR"/>
      </View>
      <View style={styles.row}>
        <CustomButton text= "School" onPress={() => navigation.navigate('Reasons', {stressor: 'school'})} type="STRESSOR"/>
        <CustomButton text= "Social Setting" onPress={() => navigation.navigate('Reasons', {stressor: 'social'})} type="STRESSOR"/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF7F5',
  },
  header:{
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    maxWidth: 75,
    maxHeight: 75,
    marginVertical: 10,
  },
  volume:{
    width: 30,
    height: 30,
    margin: 20,
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 25,
    textAlign: 'center',
  },
  row:{
    width: '100%',
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: 'space-around',
  },
});

export default StressorScreen;
