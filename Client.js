import React, { Component } from "react";
import { Text, View, StyleSheet, SafeAreaView, FlatList } from "react-native";

// import RNFetchBlob from "react-native-fetch-blob";

function Clients({ email }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{email}</Text>
    </View>
  );
}

export default class Client extends Component {
  static navigationOptions = {
    title: "Clientes"
  };

  state = {
    data: []
  };

  componentWillMount() {
    this.getClients();
  }

  getClients = async () => {
    const response = await fetch(
      "http://http://agromallserver.herokuapp.com/clients"
    );
    let json = await response.json();
    json = json.reverse();
    this.setState({ data: json });
  };

  // saveCSV = values => {
  //   // construct csvString
  //   const headerString = "event,timestamp\n";
  //   const rowString = values.map(d => `${d[0]},${d[1]}\n`).join("");
  //   const csvString = `${headerString}${rowString}`;

  //   // write the current list of answers to a local csv file
  //   const pathToWrite = `${RNFetchBlob.fs.dirs.DownloadDir}/data.csv`;
  //   console.log("pathToWrite", pathToWrite);

  //   // pathToWrite /storage/emulated/0/Download/data.csv
  //   RNFetchBlob.fs
  //     .writeFile(pathToWrite, csvString, "utf8")
  //     .then(() => {
  //       console.log(`wrote file ${pathToWrite}`);
  //       // wrote file /storage/emulated/0/Download/data.csv
  //     })
  //     .catch(error => console.error(error));
  // };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => <Clients email={item.nome}></Clients>}
          keyExtractor={item => item._id}
        ></FlatList>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    margin: 5,
    backgroundColor: "#68c442"
  },

  title: {
    fontSize: 14,
    color: "#fff"
  },

  container: {
    flex: 1,
    width: "100%",
    flexDirection: "column"
  }
});
