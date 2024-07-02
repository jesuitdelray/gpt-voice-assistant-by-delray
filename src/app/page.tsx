"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import styles from "./page.module.scss"
import { HistorySidebar } from "@/widgets/HistorySidebar/ui/HistorySidebar"
import clsx from "clsx"

export type message = {
    role: string
    content: string
    time: string
}

export default function Home() {
    const [listening, setListening] = useState(false)
    const [transcript, setTranscript] = useState("")
    const [response, setResponse] = useState("")
    const [messages, setMessages] = useState<message[]>([])
    const [messageText, setMessageText] = useState("")

    useEffect(() => {
        if (transcript) {
            sendToGPT()
        }
    }, [transcript])

    const startListening = () => {
        console.log("Start listening")
        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel()
        }

        const recognition = new (window as any).webkitSpeechRecognition()
        recognition.lang = "ru-RU"
        recognition.onstart = () => {
            setListening(true)
        }

        recognition.onresult = (event: any) => {
            const result = event.results[event.results.length - 1][0].transcript
            setTranscript(result)
            setMessages(prevMessages => [
                ...prevMessages,
                { role: "user", content: result, time: new Date().toLocaleTimeString() },
            ])
        }

        recognition.onend = () => {
            setListening(false)
        }

        recognition.start()
    }

    async function test() {
        const response = await axios.get("http://localhost:3000/api/post/telegram")

        console.log(response)
    }

    const sendToGPT = async () => {
        console.log("Sending to GPT:", transcript)
        try {
            const response = await axios.post(
                "https://api.openai.com/v1/chat/completions",
                {
                    messages: [
                        { role: "user", content: transcript || messageText },
                        {
                            role: "system",
                            content: "Отвечай кратко и по делу. Не давай ничего подробнее.",
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
            )
            setResponse(response.data.choices[0].message.content.trim())
            setMessages(prevMessages => [
                ...prevMessages,
                {
                    role: "Assistant",
                    content: response.data.choices[0].message.content.trim(),
                    time: new Date().toLocaleTimeString(),
                },
            ])
        } catch (error) {
            console.error("Error fetching GPT response:", error)
        }
    }

    function speak(text: string) {
        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel()
            const utterance = new SpeechSynthesisUtterance(text)

            const voices = window.speechSynthesis.getVoices()

            if (voices.length > 0) {
                utterance.voice = voices[1]
            }

            utterance.lang = "ru-RU"
            utterance.rate = 1
            utterance.onend = () => console.log("SpeechSynthesisUtterance.onend")
            utterance.onerror = event => console.error("SpeechSynthesisUtterance.onerror", event)
            window.speechSynthesis.speak(utterance)
        } else {
            console.error("Speech synthesis not supported")
        }
    }

    // useEffect(() => {
    //   if (response) {
    //     speak(response);
    //   }
    // }, [response]);

    return (
        <div className={styles.container}>
            {/* <Header /> */}
            <div className={styles.contentContainer}>
                <div className={styles.subContainer}>
                    <button
                        onClick={startListening}
                        disabled={listening}
                        className={clsx(styles.micButton, listening && styles.micButtonActive)}
                    >
                        {listening ? "Recording..." : "Click and talk"}
                    </button>
                </div>
                <button onClick={test} style={{ height: "24px", width: "24px" }}></button>
                <HistorySidebar
                    messages={messages}
                    setMessages={setMessages}
                    onSuccess={sendToGPT}
                    messageText={messageText}
                    setMessageText={setMessageText}
                />
            </div>
        </div>
    )
}
