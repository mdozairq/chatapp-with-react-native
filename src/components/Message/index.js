import { View, Text, StyleSheet } from 'react-native';
import dayjs from 'dayjs';

const Message = ({ message }) => {
    const myMessage = () => {
        return message.user.id === "u1";
    }

    return (
        <View style={[styles.container,
        {
            backgroundColor: myMessage() ? '#ADD8E6' : 'white',
            alignSelf: myMessage() ? 'flex-end' : 'flex-start',
        }
        ]}>
            <Text style={[styles.message, 
                // {color: myMessage()?'white':'gray'}
                ]}>{message.text}</Text>
            <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 10,
        borderRadius: 10,
        maxWidth: '80%',

    },
    message: {
        alignSelf: 'flex-end'
    },
    time:{
        color:'gray',
        alignSelf:'flex-end'
    }
})

export default Message;