import React, {useState, useEffect, Component} from 'react';
import {
  AppRegistry,
  TouchableOpacity,
  Image,
  Animated,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import {Icon} from 'react-native-material-design';
import SelectList from 'react-native-dropdown-select-list';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 48,
  },
  input: {
    alignSelf: 'stretch',
    margin: 8,
    padding: 4,
  },
});
