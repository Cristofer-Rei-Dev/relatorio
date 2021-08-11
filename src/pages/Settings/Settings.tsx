import * as React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MainContainer } from '../../styled/container';

function SettingsScreen() {
  return (
    <MainContainer as={ScrollView}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Text>Bluuuuuu</Text>
      </View>
    </MainContainer>
  );
}

export default SettingsScreen;