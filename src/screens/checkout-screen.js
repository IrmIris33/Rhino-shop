import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';

const CheckoutScreen = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Checkout</Text>
      </SafeAreaView>
    </>
  );
};

export default CheckoutScreen;