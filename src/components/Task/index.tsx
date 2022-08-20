import { View, Text, TouchableOpacity, } from "react-native";
import { styles } from "./styles";

type Props = {
    taskTitle: string;
    onRemove: () => void;
}

export function TaskScroll({ taskTitle, onRemove }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {taskTitle}
            </Text>

            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}