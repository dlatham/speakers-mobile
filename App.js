import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';


import Header from './src/components/header'
import BottomButton from './src/components/bottom_button'

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? '#000000' : '#FFFFFF',
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? '#000000' : '#FFFFFF',
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000000' : '#FFFFFF',
    flex: 1
  };

  const [scanner, setScanner] = React.useState(false)
  const showScanner = () => setScanner(true)
  const hideScanner = () => setScanner(false)

  return (
    <View style={backgroundStyle}>
      {/*<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />*/}
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={'light-content'}
        showHideTransition={'fade'}
        hidden={false} />
      <ScrollView
        contentInsetAdjustmentBehavior="never"
        style={backgroundStyle}>
        <Header text={'Get Started'} image={require('./src/assets/header.png')} />
        <View
          style={{
            backgroundColor: isDarkMode ? '#000000' : '#FFFFFF',
          }}>
          <Section title="Step One">
            Ensure your speakers are plugged in and powered on. You should see a <Text style={styles.highlight}>blinking blue light</Text> indicating the speakers are ready to connect.
          </Section>
          <Section title="Step Two">
            Click the button below to connect to your speakers and begin the configuration process.
          </Section>
          <Section title="Need Help?">
            Here is some text about how to troubleshoot a connection or get additional help outside of the app maybe.
          </Section>
        </View>
      </ScrollView>
      <Button style={styles.bottomButton} title="CONNECT" onClick={showScanner} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  bottomButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 45,
    backgroundColor: 'black'
  }
});

export default App;
