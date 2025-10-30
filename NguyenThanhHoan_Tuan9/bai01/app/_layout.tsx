import { Stack } from 'expo-router';
import { SQLiteDatabase, SQLiteProvider } from 'expo-sqlite';
import { setupDatabase } from "../db/database";

async function migrateDbIfNeeded(db: SQLiteDatabase) {
    await setupDatabase(db);
}

export default function RootLayout() {
  return (
    <SQLiteProvider databaseName="todo_db.db" onInit={migrateDbIfNeeded}>
    <Stack>
      <Stack.Screen name="index" options={{title:'Home'}}/>
      <Stack.Screen name="Screen02" options={{title:'TodoList'}}/>
    </Stack>
  </SQLiteProvider>
  );
}
