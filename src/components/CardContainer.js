import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { CardListItem } from './';
import { Check } from './icon';

function CardContainer() {
  const [text, setText] = useState('');
  const [todos, setTodo] = useState([]);

  const addTodo = () => {
    setTodo([...todos, {text, id: Math.random().toString() }]);

    this.textInput.clear();
  }

  const handleDelete = (id) => {
    const filteredList = todos.filter((todo) => {
      return todo.id !== id;
    })

    setTodo([...filteredList]);
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.inputContainer}>
        <TextInput
            ref={input => { this.textInput = input }}
            placeholder="Add todo"
            autoFocus={true}
            style={styles.input}
            onChangeText={(value) => setText(value)}
        />
        <TouchableOpacity style={styles.icon} onPress={addTodo}>
          <Check width={24} height={24} stroke='black' />
        </TouchableOpacity>
      </View>
      <ScrollView>
        { todos.map((todo) => {
            return <CardListItem key={todo.id} todo={todo} delete={handleDelete} />
          })
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 24,
    width: Dimensions.get('window').width * 0.9,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    flex: 1,
    marginBottom: 36,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 24,
  },
  input: {
    padding: 18,
    paddingLeft: 18,
    fontSize: 18,
  },
  icon: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export { CardContainer };
