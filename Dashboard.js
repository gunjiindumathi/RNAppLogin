import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

const Dashboard = () => {
  return (
    <ScrollView>
      <View>
        <View style={styles.header}>
          {/* <Image source={require('../pages/assets/')}></Image> */}
          <Text style={styles.headerText}>Home</Text>
        </View>

        <View style={styles.dashboardContainer}>
          <Text style={styles.textOne}>Dashboard Screen</Text>
          <Image
            source={require('../pages/assets/profileIcon.png')}
            style={{width: 60, bottom: '65%', marginLeft: 10}}
            resizeMode="contain"></Image>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'normal',
              color: 'maroon',
              position: 'absolute',
              top: '20%',
              marginLeft: 10,
            }}>
            Hiii User,
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'lightblue',
    padding: 10,
    // borderWidth: 2,
    borderRadius: 5,
    borderColor: 'blue',
    // zIndex: -1
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  dashboardContainer: {
    height: '75%',
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'lightcyan',
    borderColor: 'lightblue',
    flexDirection: 'column',
  },
  textOne: {
    // alignSelf: 'flex-start',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'green',
    top: 10,
  },
});

export default Dashboard;
