import React from "react";

import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'

export default function ElevatedCards() {
    return (
        <SafeAreaView>
            <View>
                <Text style = {styles.headingText}>ElevatedCards</Text>
                <ScrollView horizontal = {true} style = {styles.container}>
                    <View style = {[styles.card, styles.cardElevated]}>
                        <Text>Tap</Text>
                    </View>
                    <View style = {[styles.card, styles.cardElevated]}>
                        <Text>me</Text>
                    </View>
                    <View style = {[styles.card, styles.cardElevated]}>
                        <Text>To</Text>
                    </View>
                    <View style = {[styles.card, styles.cardElevated]}>
                        <Text>Scroll.</Text>
                    </View>
                    <View style = {[styles.card, styles.cardElevated]}>
                        <Text>more....</Text>
                    </View>
                    <View style = {[styles.card, styles.cardElevated]}>
                        <Text>😊</Text>
                    </View>
                </ScrollView>
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
    container:{
        padding: 8,
    },
    card:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 8,
        margin: 8, 
    },
    cardElevated:{
        backgroundColor: '#d1ccc0',
        elevation: 8,
        shadowOffset:{
            width: 1,
            height: 1
        },
        shadowColor: '#333'
    },
})