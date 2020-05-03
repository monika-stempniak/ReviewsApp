import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({navigation, title}) => {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <ImageBackground
      source={require('../assets/bokeh-bg.jpg')}
      style={styles.header}>
      <Icon name="menu" size={28} color="white" onPress={openMenu} />
      <View style={styles.headerTitleContainer}>
        <Icon name="theaters" size={28} color="#fff" />
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1,
    color: '#fff',
    marginLeft: 5,
  },
});

export default Header;
