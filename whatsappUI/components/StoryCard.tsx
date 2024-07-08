import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, Dimensions } from 'react-native'
import React from 'react'

// const screenHeight = Dimensions.get('window').height;
// const screenWidth = Dimensions.get('window').width;

export default function StoryCard() {
    const images = [
        {
            uid: 1,
            userName: 'Add',
            imgUrl: 'https://static.thenounproject.com/png/3015874-200.png'
        },
        {
            uid: 2,
            userName: 'Henny',
            imgUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            uid: 3,
            userName: 'Olivia',
            imgUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            uid: 4,
            userName: 'Della',
            imgUrl: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            uid: 5,
            userName: 'Ocean',
            imgUrl: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            uid: 6,
            userName: 'Harper',
            imgUrl: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            uid: 7,
            userName: 'Henny',
            imgUrl: 'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            uid: 8,
            userName: 'James',
            imgUrl: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            uid: 9,
            userName: 'Milly',
            imgUrl: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            uid: 10,
            userName: 'Harington',
            imgUrl: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            uid: 11,
            userName: 'Chris',
            imgUrl: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
    ]
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.headingText}>Pined Message</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
                    {images.map(({ uid, imgUrl, userName }) => (
                        <View key={uid} style={[styles.card]}>
                            <Image
                                source={{
                                    uri: imgUrl
                                }}
                                style={styles.usersImage}
                            />
                            <View>
                                <Text style={styles.nameText}>{userName}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 16,
        fontWeight: '600',
        paddingHorizontal: 15,
        marginTop: 15,
        color: "#2076ff"
    },
    container: {
        padding: 10,
    },
    card: {
        width: 55,
        height: 55,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
        marginTop: 12,
    },
    usersImage: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        marginBottom: 5,
        borderWidth: 2,
        borderColor: '#2076ff'
    },
    // img: {
    //     height: screenHeight,
    //     width: screenWidth,
    //     backgroundColor: "#000"
    // },
    nameText: {
        fontSize: 12,
        marginBottom: 4
    },
})