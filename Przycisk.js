import React, { Component } from "react";
import { TouchableHighlight, StyleSheet, View, Text,Image} from "react-native";

export class Przycisk extends Component {
    constructor(props) {
        super(props);
        this.state = { klikniety: false };
        this.state = { dlugiKlik: false };
    }
    _Klikniecie = () => {
        this.setState({ klikniety: true });
    }
    _Odklikniecie = () => {
        this.setState({ klikniety: false });
        this.setState({ dlugiKlik: false });

    }

    _DlugiKlik = () => {
        this.setState({ klikniety: false });
        this.setState({ dlugiKlik: true });
    }



    render() {
        return (
            <View>
                <TouchableHighlight
                    onPress={this._Klikniecie}
                    onPressIn={this._Klikniecie}
                    onPressOut={this._Odklikniecie}
                    onLongPress={this._DlugiKlik}
                    underlayColor="#A62121"
                    activeOpacity={0.7}
                    style={{
                        backgroundColor: "#0000ff",
                        // backgroundColor: "#025373",
                        width: 210,
                    height: 210, alignItems: 'center' }}
            >
                <Image
                    source={require('./Tarcza.png')}
                    resizeMode="contain"
                    style={styles.tlo}
                />
                </TouchableHighlight>
                <Text>
                    {this.state.klikniety ? 'Kapitan Ameryka' : ''}
                    {this.state.dlugiKlik ? 'Kapitan Ameryka jest super' : ''}
                    </Text>
           </View>
        );
    }
}

const styles = StyleSheet.create({
    tlo: {
        width: 200,
        height: 200
      }
  });
