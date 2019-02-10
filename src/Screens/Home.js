import React from "react";

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Dimensions
} from "react-native";
import Constants from "../Constants";

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event_key: "",
      event_id: ""
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };

  componentDidMount() {
    StatusBar.setBackgroundColor("rgba(245,245,245,1)");
    StatusBar.setBarStyle("dark-content", true);
  }

  componentWillUnmount() {}

  render() {
    return (
      <View style={styles.mainStyle}>
        <View
          style={{
            width: Dimensions.get("window").width,
            opacity: 0.5,
            paddingBottom: 50,
            paddingHorizontal: 20,
            alignItems: "center"
          }}
        >
          <View style={{ height: Dimensions.get("screen").height / 2.5 }} />
          <Text
            style={{
              fontSize: 25,
              alignSelf: "flex-start",
              fontWeight: "600"
            }}
          >
            Welcome Back,
          </Text>
          <Text style={{ fontSize: 20, alignSelf: "flex-start" }}>
            Please enter
          </Text>
          <Text style={{ fontSize: 20, alignSelf: "flex-start" }}>
            credentials
          </Text>
        </View>
        <View
          style={{
            elevation: 1,
            borderRadius: 5,
            width: Dimensions.get("screen").width / 1.1
          }}
        >
          <TextInput
            keyboardType="email-address"
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20
            }}
            placeholder="Event Key"
          />
          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: Constants.LIGHTGREY
            }}
          />
          <TextInput
            secureTextEntry={true}
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20
            }}
            placeholder="Event ID"
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            width: Dimensions.get("screen").width / 1.05,
            borderRadius: 10,
            height: 50,
            backgroundColor: Constants.SECONDARY,
            marginVertical: 10,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: Constants.PRIMARY
            }}
          >
            Connect
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
