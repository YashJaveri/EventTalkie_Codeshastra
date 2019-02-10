import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { R } from "../../res";

export default class ProfileIcon extends Component {
    constructor(props){
        super(props);
    }
  getColor = () => {
    if (this.props.text == undefined) {
      throw new ReferenceError("text is null");
    }
    let initialLetter = this.props.text.substring(0, 1);
    initialLetter = initialLetter.toUpperCase();
    if (initialLetter >= "A" && initialLetter < "D") {
      return "#2ecc71";
    } else if (initialLetter >= "D" && initialLetter < "G") {
      return "#3498db";
    } else if (initialLetter >= "G" && initialLetter < "K") {
      return "#e67e22";
    } else if (initialLetter >= "K" && initialLetter < "O") {
      return "#e74c3c";
    } else if (initialLetter >= "O" && initialLetter < "S") {
      return "#1abc9c";
    } else if (initialLetter >= "S" && initialLetter < "W") {
      return "#9b59b6";
    } else if (initialLetter >= "W" && initialLetter < "Z") {
      return "#f1c40f";
    } else {
      return "cyan";
    }
  };
  getInitials = () => {
    if (this.props.text == undefined) {
      throw new ReferenceError("text is null");
    }
    if (this.props.text.includes(" ")) {
      let splits = this.props.text.split(" ");
      let f = splits[0].substring(0, 1).toUpperCase();
      let l = splits[1].substring(0, 1).toUpperCase();
      return f + l;
    } else {
      return this.props.text.substring(0, 2).toUpperCase();
    }
  };

  render() {
    return (
      <View
        style={{
          height: this.props.size,
          width: this.props.size,
          borderRadius: this.props.size / 2,
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
          borderWidth: this.props.borderWidth,
          borderColor: this.getColor(),
          opacity:0.6
        }}
      >
        <View
          style={{
            position: "absolute",
            height: this.props.size,
            width: this.props.size,
            opacity: 0.2,
            backgroundColor: this.getColor()
          }}
        />
        <Text
          style={{
            fontSize: this.props.size / 3,
            margin: 5,
            position: "absolute",
            color: this.getColor(),
            opacity:0.6
          }}
          numberOfLines={1}
        >
          {this.getInitials()}
        </Text>
      </View>
    );
  }
}