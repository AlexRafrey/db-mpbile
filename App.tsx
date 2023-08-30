import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import { TodoList } from "./components/todo/todo-list";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        {/*<SafeAreaView>*/}
        <TodoList />
        {/*</SafeAreaView>*/}
      </SafeAreaProvider>
    );
  }
}
