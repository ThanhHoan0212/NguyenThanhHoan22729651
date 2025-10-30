import { AntDesign, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { deleteTodo, getAllTodos, Todo } from "../db/database";
const Screen02 = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const fetchTodos = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await getAllTodos();
      setTodos(data);
    } catch (error) {
      console.error("Lỗi khi lấy Todos:", error);
      Alert.alert("Lỗi", "Không thể tải danh sách công việc.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);



  const handleDelete = async (id: number) => {
    await deleteTodo(id);
    await fetchTodos();
  };

  if (isLoading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text>Đang tải dữ liệu...</Text>
      </View>
    );
  }

  const filteredTodos = todos.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Image
          source={require('../image/Frame.png')}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.hiText}>Hi Twinkle</Text>
          <Text style={styles.subText}>Have a great day ahead</Text>
        </View>
      </View>

    
      <View style={styles.searchBox}>
        <Feather name="search" size={20} color="#555" style={{ marginRight: 8 }} />
        <TextInput
          style={{ flex: 1 }}
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      
      <FlatList
        data={filteredTodos}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Feather name="check-circle" size={24} color="green" />
            <Text style={styles.todoText}>{item.name}</Text>
            <TouchableOpacity
              onPress={() => handleDelete(item.id)}
              style={styles.deleteBtn}
            >
              <View style={styles.redBox} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="edit-2" size={20} color="red" />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No tasks found.</Text>
        }
      />

      
      <TouchableOpacity style={styles.addButton} onPress={() => router.push("/Screen03")} >
        <AntDesign name="plus" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Screen02;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  hiText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  subText: {
    fontSize: 14,
    color: "#888",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 15,
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  todoText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  redBox: {
    width: 30,
    height: 20,
    backgroundColor: "red",
    borderRadius: 4,
    marginRight: 10,
  },
  deleteBtn: {
    marginRight: 5,
  },
  emptyText: {
    textAlign: "center",
    color: "#888",
    marginTop: 40,
  },
  addButton: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    backgroundColor: "#00BFFF",
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 5,
  },
});
