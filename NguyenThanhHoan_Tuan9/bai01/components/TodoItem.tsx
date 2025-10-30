import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Todo } from '../db/database'; // Import type Todo
import EvilIcons from '@expo/vector-icons/EvilIcons';

// Định nghĩa props
interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete }) => {
  return (
    <View style={styles.itemContainer}>
      {/* Tên công việc */}
      <Text style={styles.todoText}>{todo.name}</Text>
      
      {/* Nút Xóa */}
      <TouchableOpacity 
        style={styles.deleteButton} 
        onPress={() => onDelete(todo.id)}
      >
        <EvilIcons name="trash" size={24} color="#FF3B30" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  todoText: {
    fontSize: 16,
    flex: 1, // Chiếm hết không gian còn lại
  },
  deleteButton: {
    paddingLeft: 10,
  }
});

export default TodoItem;