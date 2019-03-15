import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Share from "react-native-share";

import { msg, colors } from "../../app/constans/Constans";

export default class HomeScreen extends Component<any, any> {
  //TODO: func click_shareUrl

  shareUrl() {
    let msg = "https://skillshare.web44.net/profile";
    let shareOptions = {
      title: "Address",
      message: msg,
      url: "",
      subject: "uskill share" //  for email
    };
    Share.open(shareOptions).then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: colors.appColor }}>
          <Button title="Setting" onPress={() => this.shareUrl()} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
