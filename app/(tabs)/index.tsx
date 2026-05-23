import { Image } from "expo-image";
import { Button, ScrollView, StyleSheet, TextInput } from "react-native";

import { HelloWave } from "@/components/hello-wave";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useState } from "react";
import Groq from "groq-sdk";
import Markdown from "react-native-markdown-display";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export default function HomeScreen() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">AI Chat</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <TextInput
          style={{ backgroundColor: "white" }}
          onChangeText={(t) => setInput(t)}
        />
        <Button
          title={loading ? "Loading.." : "Send"}
          disabled={loading}
          onPress={async () => {
            setLoading(true);

            const completion = await groq.chat.completions.create({
              messages: [
                {
                  role: "user",
                  content: input,
                },
              ],
              model: "llama-3.3-70b-versatile",
            });

            setResponse(completion.choices[0].message.content || "Failed");
            setLoading(false);
          }}
        />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={{ height: "100%" }}
          >
            <Markdown
              style={{
                body: { color: "white" },
                heading1: { color: "white" },
                heading2: { color: "white" },
                strong: { color: "white" },
                code_inline: {
                  backgroundColor: "#2d2d2d",
                },
                fence: {
                  backgroundColor: "#2d2d2d",
                  borderRadius: 10,
                },
              }}
            >
              {response}
            </Markdown>
          </ScrollView>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
