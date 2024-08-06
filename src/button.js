import { View, StyleSheet, Pressable, Text } from 'react-native';

export default function Button({ label}) {
    return(
        <View style={StyleSheet.buttonContainer}>
            <Pressable style={StyleSheet.button} onPress={() => alert('You pressed a button.')}>
                <Text styles={styles.buttonLabel}>{label}</Text>            
            </Pressable>
        </View>
    )
}
