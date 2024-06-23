"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("");

  useEffect(() => {
    if (transcript) {
      sendToGPT();
    }
  }, [transcript]);

  const startListening = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = "ru-RU";
    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onresult = (event: any) => {
      const result = event.results[event.results.length - 1][0].transcript;
      setTranscript(result);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
  };

  const sendToGPT = async () => {
    console.log("Sending to GPT:", transcript);
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          messages: [
            { role: "user", content: transcript },
            {
              role: "system",
              content: "Пиши как Тревор из гта 5, без матов.",
            },
          ],
          model: "gpt-4o",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
          },
        }
      );
      setResponse(response.data.choices[0].message.content.trim());
    } catch (error) {
      console.error("Error fetching GPT response:", error);
    }
  };

  function speak(text: string) {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);

      const voices = window.speechSynthesis.getVoices();
      console.log("Voices:", voices);

      if (voices.length > 0) {
        console.log("Using voice:", voices[17]);
        utterance.voice = voices[1];
      }

      utterance.lang = "ru-RU";
      utterance.rate = 2;
      utterance.onend = () => console.log("SpeechSynthesisUtterance.onend");
      utterance.onerror = (event) => console.error("SpeechSynthesisUtterance.onerror", event);
      window.speechSynthesis.speak(utterance);
    } else {
      console.error("Speech synthesis not supported");
    }
  }

  useEffect(() => {
    if (response) {
      speak(response);
    }
  }, [response]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        padding: "20px",
        height: "100vh",
        justifyContent: "center",
        backgroundColor: "white",
        overflow: "hidden",
      }}
    >
      <button
        onClick={startListening}
        disabled={listening}
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          backgroundColor: listening ? "black" : "white",
          color: listening ? "white" : "black",
          border: listening ? "none" : "2px solid black",
          fontSize: "24px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          transition: "background-color 0.3s ease",
        }}
      >
        {listening ? "🎙️" : "🎙️"}
      </button>
    </div>
  );
}
