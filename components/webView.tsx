import { Text } from "react-native";
import WebView from "react-native-webview";

export const WebViewPartyApp = () => {
  return (
    <WebView
      source={{ uri: "http://192.168.0.147:3000/" }}
      onLoadProgress={({ nativeEvent }) => {
        if (nativeEvent.progress === 1) {
          console.log(3, "loaded");
        }
      }}
      startInLoadingState={true}
      renderLoading={() => <Text>Loadddddingggg</Text>}
      geolocationEnabled={true}
    />
  );
};
