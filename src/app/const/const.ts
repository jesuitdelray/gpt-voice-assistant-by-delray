type message = {
    role: string
    content: string
    time: string
}

export const messages: message[] = [
    {
        role: "user",
        content: "Hello, I'm a chatbot. How can I help you today?",
        time: "10:00",
    },
    {
        role: "assistant",
        content: "Hi, I'm your chatbot. How can I help you today?",
        time: "10:01",
    },
    {
        role: "user",
        content: "What's up?",
        time: "10:02",
    },
    {
        role: "assistant",
        content: "Nothing much, just chatting.",
        time: "10:03",
    },
    {
        role: "user",
        content: "How are you?",
        time: "10:04",
    },
    {
        role: "assistant",
        content: "I'm doing well, thank you. How about you?",
        time: "10:05",
    },
    {
        role: "user",
        content: "I'm good. What about you?",
        time: "10:06",
    },
    {
        role: "assistant",
        content: "I'm doing well too. How about you?",
        time: "10:07",
    },
    {
        role: "user",
        content: "I'm good. What about you?",
        time: "10:08",
    },
    {
        role: "assistant",
        content: "I'm doing well too. How about you?",
        time: "10:09",
    },
]
