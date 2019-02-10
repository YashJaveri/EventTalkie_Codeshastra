import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
  Platform,
  AsyncStorage,
  Alert,
  PermissionsAndroid
} from "react-native";
import * as Animatable from "react-native-animatable";
import Constants from "../Constants";

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Constants.SECONDARY
  },
  bottom: {
    fontSize: 24,
    fontFamily: "opensans",
    color: Constants.WHITE,
    margin: 2
  },
  welcome: {
    fontSize: 42,
    fontFamily: "lobster",
    color: Constants.WHITE
  }
});

export default class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };

    ///let {navigation} = this.props;
  }

  static navigationOptions = {
    header: null
  };

  background() {
    AsyncStorage.getItem("username", (err, result) => {
      console.log("background");
      if (err) {
        Alert.alert(err);
        this.props.navigation.navigate("Home");
      } else {
        Constants.username = result;

        this.props.navigation.navigate("Home");
      }
    });
  }

  componentDidMount() {
    console.log("mounted");

    Platform.OS === "android"
      ? StatusBar.setBackgroundColor(Constants.SECONDARY)
      : null;
    StatusBar.setBarStyle("light-content", true);
    PermissionsAndroid.request("android.permission.RECORD_AUDIO")
      .then(granted => {
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("permissions");
          this.background();
        } else {
          console.log("perimission else");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentWillUnmount() {}

  render() {
    return (
      <View style={styles.mainStyle}>
        <View style={{ flex: 1 }} />
        <Animatable.Text
          style={styles.welcome}
          animation="bounce"
          duration={5000}
        >
          WELCOME
        </Animatable.Text>
        <View style={{ flex: 1 }} />
        <Text style={[styles.bottom, { textAlign: "center" }]}>
          {"Made with 🖤"}
        </Text>
        <Text
          style={{
            fontSize: 26,
            fontWeight: "bold",
            marginBottom: 50,
            textAlign: "center",
            color: Constants.WHITE
          }}
        >
          {"Honeypot"}
        </Text>
      </View>
    );
  }
}
