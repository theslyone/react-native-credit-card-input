import React, { Component } from "react";
import {
  StyleSheet,
  View, Text,
} from "react-native";

import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

const s = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    marginTop: 60,
  },
  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "black",
  },
});

const USE_LITE_CREDIT_CARD_INPUT = false;

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {}
    };
  }
  _onFocus = field => {
    /* eslint no-console: 0 */
    console.log(field);
  };

  render() {
    return (
      <View style={s.container}>
        { USE_LITE_CREDIT_CARD_INPUT ?
          (<LiteCreditCardInput
            autoFocus
            inputStyle={s.input}

            validColor={"black"}
            invalidColor={"red"}
            placeholderColor={"darkgray"}

            onFocus={this._onFocus}
            onChange={ (formData) => this.setState({ formData })} />) :
          (<CreditCardInput
            autoFocus

            requiresName
            requiresCVC

            labelStyle={s.label}
            inputStyle={s.input}
            validColor={"black"}
            invalidColor={"red"}
            placeholderColor={"darkgray"}

            onFocus={this._onFocus}
            onChange={ (formData) => this.setState({ formData })} />)
        }
        <Text>{JSON.stringify(this.state.formData, null, 4)}</Text>
      </View>
    );
  }
}
