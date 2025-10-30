import * as SQLite from 'expo-sqlite';
import { type SQLiteDatabase } from 'expo-sqlite';

// Định nghĩa kiểu dữ liệu cho một Todo Item
export interface Todo {
  id: number;
  name: string;
}

// Biến cục bộ để giữ instance database (Singleton)
let _db: SQLiteDatabase | null = null;

// =======================================================
// HÀM LẤY INSTANCE DATABASE
// =======================================================
export async function getDb(): Promise<SQLiteDatabase> {
  if (_db === null) {
    _db = await SQLite.openDatabaseAsync('todo_db.db');
  }
  return _db;
}

// =======================================================
// HÀM KHỞI TẠO CẤU TRÚC VÀ DỮ LIỆU MẪU (CHẠY MỘT LẦN)
// =======================================================
export async function setupDatabase(db: SQLiteDatabase) {
  // Lệnh tạo bảng
  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    
    CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY NOT NULL,
      name TEXT NOT NULL
    );
  `);

  // Logic chèn dữ liệu mẫu chỉ khi bảng trống
  const countResult = await db.getFirstAsync<{ "COUNT(*)": number }>('SELECT COUNT(*) FROM todos');
  const rowCount = countResult?.["COUNT(*)"] ?? 0;

  if (rowCount === 0) {
    console.log("Chèn dữ liệu mẫu...");
    await db.execAsync(`
      INSERT INTO todos (name) VALUES 
        ('To check email'),
        ('UI task web page'),
        ('Learn javascript basic');
    `);
  }
}

// =======================================================
// HÀM THÊM MỘT HÀNG MỚI (CREATE)
// =======================================================
export async function addTodo(name: string): Promise<number> {
  const db = await getDb();
  
  const result = await db.runAsync(
    "INSERT INTO todos (name) VALUES (?)",
    [name]
  );
  
  return result.lastInsertRowId; 
}


// =======================================================
// HÀM LẤY TẤT CẢ CÁC HÀNG (READ)
// =======================================================
export async function getAllTodos(): Promise<Todo[]> {
  const db = await getDb();
  
  const rows = await db.getAllAsync<Todo>('SELECT id, name FROM todos ORDER BY id DESC');
  return rows;
}

// =======================================================
// HÀM XÓA MỘT HÀNG (DELETE)
// =======================================================
export async function deleteTodo(id: number) {
  const db = await getDb();
  
  await db.runAsync(
    "DELETE FROM todos WHERE id = ?",
    [id]
  );
}