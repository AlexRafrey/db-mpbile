import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
// import useColorScheme from "./hooks/useColorScheme";
import WebView from "react-native-webview";
import { Text } from "react-native";

export default function App() {
  const isLoadingComplete = useCachedResources();
  // const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <WebView
          source={{ uri: "http://192.168.1.65:3000/" }}
          onLoadProgress={({ nativeEvent }) => {
            if (nativeEvent.progress === 1) {
              console.log(3, "loaded");
            }
          }}
          startInLoadingState={true}
          renderLoading={() => <Text>Loadddddingggg</Text>}
        />
        {/*<Navigation colorScheme={colorScheme} />*/}
        {/*<StatusBar />*/}
      </SafeAreaProvider>
    );
  }
}
