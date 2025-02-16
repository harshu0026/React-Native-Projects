import React from "react";

import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
} from 'react-native'


export default function FlatCards() {
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.headingText}>FlatCards</Text>
                <View style={styles.container}>
                    <View style={[styles.card, styles.cardOne]}>
                        <Text>Red</Text>
                    </View>
                    <View style={[styles.card, styles.cardTwo]}>
                        <Text>Green</Text>
                    </View>
                    <View style={[styles.card, styles.cardThree]}>
                        <Text>Blue</Text>
                    </View>
                    <View style={[styles.card, styles.cardFour]}>
                        <Text>Purple</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
    },
    cardOne: {
        backgroundColor: '#ff5252',
    },
    cardTwo: {
        backgroundColor: '#33d9b2',
    },
    cardThree: {
        backgroundColor: '#34ace0',
    },
    cardFour: {
        backgroundColor: '#40407a',
    }
})