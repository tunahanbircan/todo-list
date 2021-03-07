import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Delete } from './icon';

function CardListItem(props) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const handleDelete = () => {
    return (
      Alert.alert(
        "Are you sure want to delete this?",
        "Item removed if you click the OK button ",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          { text: "OK", onPress: () => props.delete(props.todo.id) }
        ],
        { cancelable: false },
    ));
  };

  return (
    <View style={styles.list}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          boxType='square'
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        <Text style={toggleCheckBox ? [styles.text, styles.completedTodo] : styles.text}>
          { props.todo.text }
        </Text>
      </View>
      <TouchableOpacity onPress={handleDelete}>
        <Delete width={24} height={24} stroke='black' />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    borderTopWidth: 1,
    borderColor: '#000',
    padding: 18,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 16,
  },
  text: {
    fontSize: 18,
  },
  completedTodo: {
    textDecorationLine: 'line-through',
    textDecorationColor: '#007aff',
    textDecorationStyle: 'double',
  }
});

export { CardListItem };
