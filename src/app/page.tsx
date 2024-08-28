"use client"

import axios from "axios"
import { useEffect, useRef, useState } from "react"
import styles from "./page.module.scss"
import { HistorySidebar } from "@/widgets/HistorySidebar/ui/HistorySidebar"
import { Header } from "@/widgets/Header"
import { SettingsSidebar } from "@/widgets/SettingsSidebar/SettingsSidebar"

export type message = {
    role: string
    content: string
    time: string
}

export default function Home() {
    const initialMessagesString = localStorage.getItem("messages")
    const initialMessages = JSON.parse(initialMessagesString || "[]")
    const [messages, setMessages] = useState<message[]>(initialMessages)
    const [messageText, setMessageText] = useState("")

    const [isFirstMessageSent, setIsFirstMessageSent] = useState(false)
    const [topic, setTopic] = useState(localStorage.getItem("topic") || "React")
    const [position, setPosition] = useState(localStorage.getItem("position") || "")

    useEffect(() => {
        localStorage.setItem("topic", topic)
    }, [topic])

    useEffect(() => {
        localStorage.setItem("position", position)
    }, [position])

    const messageContext = !isFirstMessageSent
        ? [
              {
                  role: "system",
                  content: `
            МОЙ ОТВЕТ НЕ ЯВЛЯЕТСЯ АДЕКВАТНЫМ ТЕКСТОМ - ПИШИ ПО ШАБЛОНУ:
            "Следующий вопрос: ( твой следующий вопрос на тему "${topic}" для вакансии "${
                      position || ""
                  }" )" 
            Ты мне задаешь вопросы на тему "${topic}" для вакансии "${
                      position || ""
                  }", я на них отвечаю.
            ТВОЙ ОТВЕТ ДОЛЖЕН БЫТЬ В ФОРМАТЕ:
            Вопрос: ( твой следующий вопрос на тему "${topic}" для вакансии "${position || ""}" )
            "`,
              },
              { role: "user", content: messageText },
          ]
        : [
              {
                  role: "system",
                  content: `
        МОЙ ОТВЕТ НЕ ЯВЛЯЕТСЯ АДЕКВАТНЫМ ТЕКСТОМ - ПИШИ ПО ШАБЛОНУ:
        "Следующий вопрос: ( твой следующий вопрос на тему "${topic}" для вакансии "${
                      position || ""
                  }" )"
        Продолжай задавать вопросы на тему "${topic}" для вакансии "${
                      position || ""
                  }", я на них отвечаю.
        ТВОЙ ОТВЕТ ДОЛЖЕН БЫТЬ В ФОРМАТЕ:
        Оценка ответа: (0-10),
        Правильный ответ: (правильный ответ) ,
        Следующий вопрос: ( твой следующий вопрос на тему "${topic}" для вакансии "${
                      position || ""
                  }" )
        "`,
              },
              { role: "user", content: messageText },
          ]

    const sendToGPT = async () => {
        try {
            const response = await axios.post(
                "https://api.openai.com/v1/chat/completions",
                {
                    messages: messageContext,
                    model: "gpt-4o",
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
                    },
                }
            )
            setIsFirstMessageSent(true)
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

    function onSaveMessages() {
        localStorage.setItem("messages", JSON.stringify(messages))
    }

    function onClearAll() {
        setMessages([])
        localStorage.removeItem("messages")
    }

    return (
        <div className={styles.container}>
            <Header messages={messages} onSave={onSaveMessages} onClearAll={onClearAll} />
            <div className={styles.contentContainer}>
                <SettingsSidebar
                    topic={topic}
                    setTopic={setTopic}
                    position={position}
                    setPosition={setPosition}
                />
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
