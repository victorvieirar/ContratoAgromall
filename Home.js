import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
  Keyboard,
  Button
} from "react-native";

function saveClient(client, navigate) {
  fetch("http://http://agromallserver.herokuapp.com/clients", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nome: client.nome,
      email: client.email,
      loja: client.loja,
      razao_social: client.razao_social,
      cnpj: client.cnpj,
      ie: client.ie,
      im: client.im,
      endereco: client.endereco,
      telefone: client.telefone,
      celular: client.celular,
      valor_final: client.valor_final,
      tempo: client.tempo,
      comissao: client.comissao
    })
  }).then(() => {
    navigate("Client");
  });
}

export default class Home extends Component {
  state = {
    nome: "",
    email: "",
    loja: "",
    razao_social: "",
    cnpj: "",
    ie: "",
    im: "",
    endereco: "",
    telefone: "",
    celular: "",
    valor_final: "",
    tempo: "12",
    comissao: "6"
  };

  static navigationOptions = {
    title: "Início"
  };

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    this.setState({ toScroll: true });
  };

  _keyboardDidHide = () => {
    this.setState({ toScroll: false });
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <SafeAreaView>
        <ScrollView scrollEnabled={true}>
          <View
            style={[
              styles.container,
              this.state.toScroll ? styles.keyboardPadding : null
            ]}
          >
            <Text style={styles.title}>Contrato Agromall</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome do cliente"
              onChangeText={nome => this.setState({ nome })}
              value={this.state.nome}
              blurOnSubmit={false}
              returnKeyType={"next"}
              onSubmitEditing={() => {
                this.email.focus();
              }}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={email => this.setState({ email })}
              blurOnSubmit={false}
              returnKeyType={"next"}
              onSubmitEditing={() => {
                this.loja.focus();
              }}
              ref={input => {
                this.email = input;
              }}
              value={this.state.email}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Loja"
              onChangeText={loja => this.setState({ loja })}
              blurOnSubmit={false}
              returnKeyType={"next"}
              onSubmitEditing={() => {
                this.razao.focus();
              }}
              ref={input => {
                this.loja = input;
              }}
              value={this.state.loja}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Razão Social"
              onChangeText={razao_social => this.setState({ razao_social })}
              blurOnSubmit={false}
              returnKeyType={"next"}
              onSubmitEditing={() => {
                this.cnpj.focus();
              }}
              ref={input => {
                this.razao = input;
              }}
              value={this.state.razao_social}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="CNPJ"
              keyboardType="numeric"
              onChangeText={cnpj => this.setState({ cnpj })}
              blurOnSubmit={false}
              returnKeyType={"next"}
              onSubmitEditing={() => {
                this.ie.focus();
              }}
              ref={input => {
                this.cnpj = input;
              }}
              value={this.state.cnpj}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="I.E. (inscrição estadual)"
              keyboardType="numeric"
              onChangeText={ie => this.setState({ ie })}
              blurOnSubmit={false}
              returnKeyType={"next"}
              onSubmitEditing={() => {
                this.im.focus();
              }}
              ref={input => {
                this.ie = input;
              }}
              value={this.state.ie}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="I.M. (inscrição municipal)"
              keyboardType="numeric"
              onChangeText={im => this.setState({ im })}
              blurOnSubmit={false}
              returnKeyType={"next"}
              onSubmitEditing={() => {
                this.endereco.focus();
              }}
              ref={input => {
                this.im = input;
              }}
              value={this.state.im}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Endereço"
              onChangeText={endereco => this.setState({ endereco })}
              blurOnSubmit={false}
              returnKeyType={"next"}
              onSubmitEditing={() => {
                this.telefone.focus();
              }}
              ref={input => {
                this.endereco = input;
              }}
              value={this.state.endereco}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Telefone"
              keyboardType="phone-pad"
              onChangeText={telefone => this.setState({ telefone })}
              blurOnSubmit={false}
              returnKeyType={"next"}
              onSubmitEditing={() => {
                this.celular.focus();
              }}
              ref={input => {
                this.telefone = input;
              }}
              value={this.state.telefone}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Celular"
              keyboardType="phone-pad"
              onChangeText={celular => this.setState({ celular })}
              blurOnSubmit={false}
              returnKeyType={"next"}
              onSubmitEditing={() => {
                this.valor.focus();
              }}
              ref={input => {
                this.celular = input;
              }}
              value={this.state.celular}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Valor Final"
              keyboardType="numeric"
              onChangeText={valor => this.setState({ valor })}
              blurOnSubmit={false}
              returnKeyType={"next"}
              onSubmitEditing={() => {
                this.tempo.focus();
              }}
              ref={input => {
                this.valor = input;
              }}
              value={this.state.valor}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Tempo (meses)"
              keyboardType="numeric"
              onChangeText={tempo => this.setState({ tempo })}
              blurOnSubmit={false}
              returnKeyType={"next"}
              onSubmitEditing={() => {
                this.comissao.focus();
              }}
              ref={input => {
                this.tempo = input;
              }}
              value={this.state.tempo}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Comissão (%)"
              keyboardType="numeric"
              onChangeText={comissao => this.setState({ comissao })}
              ref={input => {
                this.comissao = input;
              }}
              value={this.state.comissao}
            ></TextInput>
            <Button
              title="Cadastrar cliente"
              color="#68c442"
              onPress={() => saveClient(this.state, navigate)}
            ></Button>
            <Button
              title="Ver clientes"
              color="#999"
              onPress={() => navigate("Client")}
            ></Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20
  },

  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 30,
    marginTop: 20
  },

  input: {
    height: 40,
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: "#999999",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    marginBottom: 5
  },

  keyboardPadding: {
    paddingBottom: 340
  }
});
