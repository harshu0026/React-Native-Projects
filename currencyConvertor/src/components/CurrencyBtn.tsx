import React from 'react'
import type { PropsWithChildren } from 'react'

import { View, Text, StyleSheet } from 'react-native'

type CurrencyBtnProps = PropsWithChildren<{
    name: string,
    flag: string,
}>

const CurrencyBtn = (props: CurrencyBtnProps): JSX.Element => {
    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.name}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center'
    },
    flag: {
        fontSize: 28,
        color: '#ffffff',
        marginBottom: -2
    },
    name: {
        fontSize: 14,
        color: '#2d3436'
    }
})

export default CurrencyBtn