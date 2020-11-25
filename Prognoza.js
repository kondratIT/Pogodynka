import React, { Component } from "react";
import  { StyleSheet,Text, View  } from "react-native";

export default class Prognoza extends Component {
    render() {
        return (
            <View style={styles.kontener}>
                <Text style={styles.duzyTekst}>
                    {this.props.glowne}
                </Text>
                <Text style={styles.glownyTekst}>
                    Bierzące warunki:{"\n"} {this.props.opis}
                </Text>
                <Text style={styles.duzyTekst}>
                    {this.props.temp}°C
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    kontener: {
        backgroundColor: '#BF4417',
        color: '#025373'
    },
    duzyTekst: {
        fontSize: 20,
        textAlign: "center",
        color: '#025373'
    },
    glownyTekst: {
        fontSize: 16,
        textAlign: "center",
        color: '#025373'
    }
});