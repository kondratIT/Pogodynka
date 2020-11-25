import React, {Component} from "react";
import  {StyleSheet, Text, View,Image, TextInput} from "react-native";
import Prognoza from "./Prognoza";
import MapaPogody from "./MapaPogody";
import { DuzyTekst,SredniTekst,MalyTekst} from "./StyleTekstu";
import {Przycisk} from "./Przycisk"

export default class Pogodynka extends Component {

    constructor(props){
        super(props);
        this.state = {
            kod: "",
            prognoza: null,
        };
    }

    _obslugaZmianyTekstu = event =>{
        this.setState({ kod: event.nativeEvent.text });
        let kod = event.nativeEvent.text;
        MapaPogody.pobierzPrognoze(kod).then(prognoza => {
            console.log(prognoza);
            this.setState({prognoza: prognoza})
        })

    };

    render() {
        let tresc = null;
        if (this.state.prognoza !== null) {
            tresc = (
                <Prognoza
                glowne={this.state.prognoza.glowne}
                opis={this.state.prognoza.opis}
                temp={this.state.prognoza.temp}
                />
            );
        }
        return (
            <View style={styles.kontener}>
                <Image
                    source={{
                        uri: 'https://esensja.pl/obrazki/ilustracje/143357_chris_evans_captain_america21.jpg',
                      }}
                style={{width: 200, height: 200}}/>
                <DuzyTekst>Duży tekst</DuzyTekst>
                <SredniTekst>Średni tekst</SredniTekst>
                <MalyTekst>Mały tekst</MalyTekst>
                <Przycisk></Przycisk>
                <Text style={styles.witaj}>
                    Wpisałeś kod: {this.state.kod}
                </Text>
                {tresc}
                <TextInput
                    defaultValue='80-118'
                    style={styles.wejscie}
                    onSubmitEditing={this._obslugaZmianyTekstu}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    kontener: {
        textAlign: "center",
        backgroundColor: '#c3b245',
        alignItems: "center"
        //padding:4,
    },
    witaj: {textAlign: "center",
        backgroundColor: "#148C26",
        color:'#025373'
    },
    wejscie: {
        textAlign: "center",
        backgroundColor: "#c3b245",
        color:'#148C26'
    }
});
