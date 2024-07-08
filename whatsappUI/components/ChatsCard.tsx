import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

export default function ChatsCard() {
    const details = [
        {
            uid: 1,
            userName: 'Connor Frazier',
            chats: 'What kind of music do you like!',
            time: '10:00',
            msg: '✔️',
            imgUrl: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            uid: 2,
            userName: 'Henny',
            chats: "Okay, I'll do it and send for you.",
            time: '10:00',
            msg: '✔️',
            imgUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            uid: 3,
            userName: 'Olivia',
            chats: "Next meeting is on 14 July!",
            time: '8:12',
            msg: '16+',
            imgUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            uid: 4,
            userName: 'Della',
            chats: "I'm not sure if I can make it to the meeting.",
            time: '8:12',
            msg: '✔️',
            imgUrl: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            uid: 5,
            userName: 'Ocean',
            chats: "Cool, Lets meet at 16:00 near shopping mall",
            time: '6:00',
            msg: '1',
            imgUrl: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            uid: 6,
            userName: 'Harper',
            chats: "I'm not sure if I can make it to the meeting.",
            time: '8:12',
            msg: '✔️',
            imgUrl: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            uid: 7,
            userName: 'Henny',
            chats: "Okay, I'll do it and send for you.",
            time: '6:12',
            msg: '6',
            imgUrl: 'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            uid: 8,
            userName: 'James Hopper',
            chats: "Next meeting is on 14 July!",
            time: '4:02',
            msg: '✔️',
            imgUrl: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            uid: 9,
            userName: 'Milly',
            chats: "I'm not sure if I can make it to the meeting.",
            time: '8:02',
            msg: '✔️',
            imgUrl: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            uid: 10,
            userName: 'Harington',
            chats: "Cool, Lets meet at 16:00 near shopping mall",
            time: '6:02',
            msg: '✔️',
            imgUrl: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            uid: 11,
            userName: 'Chris Hemsworth',
            chats: "I'm not sure if I can make it to the meeting.",
            time: '8:00',
            msg: '✔️',
            imgUrl: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
    ]
    return (
        <View>
            <Text style={styles.headingText}>Your Messages</Text>
            <ScrollView style={styles.container}>
                {details.map(({ uid, userName, chats, imgUrl, time, msg }) => (
                    <View key={uid} style={styles.card}>
                        <Image
                            source={{
                                uri: imgUrl
                            }}
                            style={styles.cardImage}
                        />
                        <View style={styles.userChats}>
                            <Text style={styles.nameText}>{userName}</Text>
                            <Text style={styles.chatsText}>{chats}</Text>
                        </View>
                        <View style={styles.timeMsg}>
                            <Text style={styles.timeText}>{time}</Text>
                            <Text style={styles.msgText}>{msg}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 16,
        fontWeight: '600',
        color: "#ffffff",
        paddingHorizontal: 15
    },
    container: {
        paddingHorizontal: 12,
        marginBottom: 4,
        marginVertical: 8
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        padding: 3,
        marginBottom: 12,
        paddingTop: 4
    },
    cardImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 10

    },
    nameText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        marginTop: 5
    },
    chatsText: {
        fontSize: 12,
        marginTop: 10
    },
    userChats: {
        width: 200,
        marginRight: 50
    },
    timeMsg: {
        marginLeft: 31
    },
    timeText: {
        fontSize: 14,
    },
    msgText: {
        fontSize: 14,
        backgroundColor: "#2076ff",
        borderRadius: 6,
        padding: 2,
        fontWeight: 'bold',
        color: '#ffffff',
        alignSelf: 'center'
    }
})