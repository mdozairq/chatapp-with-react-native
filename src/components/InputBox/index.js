import { TextInput, View, StyleSheet, Text } from "react-native";
import { AntDesign, MaterialIcons } from '@expo/vector-icons'

const InputBox = () => {
    return (
        <View style={styles.container}>
            <AntDesign name='plus' size={24} color="royalblue" style = {styles.add}/>
            <TextInput placeholder="type your message..." style={styles.input} />
            <MaterialIcons name="send" size={24} color="white" style={styles.send}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        padding: 5,
    },
    add:{
        padding: 5,
        marginLeft:5,
        marginTop: 5,
    },
    input: {
        flex: 1,
        backgroundColor: 'white',
        padding: 5,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        borderRadius: 50,
        borderColor: 'lightgray',
        borderWidth: StyleSheet.hairlineWidth
    },
    send: {
        backgroundColor: 'royalblue',
        padding: 10,
        borderRadius: 25
    }
})

export default InputBox;