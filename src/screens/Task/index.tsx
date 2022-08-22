import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import { styles } from './styles';

import { TaskScroll } from '../../components/Task';



export function Task(props: any) {
    const [task, setTask] = useState<string[]>([]);
    const [taskTitle, setTaskTitle] = useState("");

    function handleTaskAdd() {
        if (task.includes(taskTitle)) {
            return Alert.alert("Tarefa ja cadastrado", "Já existe um tarefa com esse titulo na lista.");
        }
        setTask(prevState => [...prevState, taskTitle]);
        setTaskTitle('');
    }

    function handleTaskRemove(title: string) {
        // lógica de exluir participante
        // return console.log(participants.filter(participant => participant !== title));

        // Tratamento de Alerta de confirmação. ( titulo, mensagem, butoes ficam dentro de uma array de objeto)
        Alert.alert("Remover", `Remover o tarefa ${title}?`, [
            {
                text: "Sim",
                //logica de escluir adicionada ao clica no botao;
                onPress: () => setTask(prevState => prevState.filter(participant => participant !== title))
            },
            {
                text: "Não",
                style: "cancel"
            }
        ])
    }
    console.log(props)
    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                ToDo List Ubistart
            </Text>

            <Text style={styles.eventSubTitle}>
                Desafio FullStack React-Native Ubistart
            </Text>
            
            
            <Text style={styles.eventTitle}>
                Tarefas!!!
            </Text>

            <View style={styles.form}>

                <TextInput
                    maxLength={33}
                    style={styles.inputTitle}
                    placeholder="Titulo"
                    placeholderTextColor="#6b6b6b"
                    // onChangeText={text => (settaskTitle(text))} outra forma de fazer.
                    onChangeText={setTaskTitle}
                    value={taskTitle}
                />


            </View >
            
            <View style={styles.form}>
                <TextInput
                    multiline
                    maxLength={200}
                    style={styles.inputDescription}
                    placeholder="Descrição"
                    placeholderTextColor="#6b6b6b"
                    // onChangeText={text => (settaskTitle(text))} outra forma de fazer.
                    // onChangeText={setTaskTitle}
                    // value={taskTitle}
                />
            </View>
            <View style={styles.viewButton}>

            <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
                <Text style={styles.buttonText}>
                    +
                </Text>
            </TouchableOpacity>
            </View>

            {/* METODO DE SCROLL POR FLATLIST */}
            <FlatList
                data={task}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <TaskScroll
                        key={item}
                        taskTitle={item}
                        onRemove={() => handleTaskRemove(item)} />
                )}
                //para sumir barra de scroll
                showsVerticalScrollIndicator={false}
                //renderiza quando data estiver vazio
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Nenhuma tarefa criada.
                    </Text>
                )}
            />

            {/* METODO DE SCROLL POR SCROLLVIEW */}
            {/* <ScrollView showsVerticalScrollIndicator={false}>
                {
                    participants.map(participants => (
                        <Participant
                            key={participants}
                            name={participants}
                            onRemove={() => handleParticipantRemove("Thiago")} />
                    ))
                }
            </ScrollView> */}


        </View>
    )
}

