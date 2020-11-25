import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";

var styles = StyleSheet.create({
    duzy: {
        textAlign: "center",
        fontSize: 30,
        color:'#025373'
    },
    sredni: {
        textAlign: "center",
        fontSize: 20,
        color:'#025373'
    },
    maly: {
        textAlign: "center",
        fontSize: 12,
        color:'#025373'
    },
});

export class DuzyTekst extends Component {
    render() {
        return (
            <Text style={styles.duzy}>
                {this.props.children}
            </Text>
        );
    }
}
export class SredniTekst extends Component {
    render() {
        return (
            <Text style={styles.sredni}>
                {this.props.children}
            </Text>
        );
    }
}
export class MalyTekst extends Component {
    render() {
        return (
            <Text style={styles.maly}>
                {this.props.children}
            </Text>
        );
    }
}