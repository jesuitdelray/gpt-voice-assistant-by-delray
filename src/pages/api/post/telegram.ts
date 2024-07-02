import TelegramBot from "node-telegram-bot-api"

const token = process.env.TELEGRAM_BOT_TOKEN as string
const bot = new TelegramBot(token, { polling: true })

bot.onText(/\/start/, msg => {
    const opts = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Открыть веб-приложение",
                        url: "https://gpt-voice-assistant-by-delray-git-v21-jesuitdelrays-projects.vercel.app/",
                    },
                ],
            ],
        },
    }
    bot.sendMessage(msg.chat.id, "Нажми кнопку ниже, чтобы открыть приложение:", opts)
})

export default function handler(res: {
    status: (arg0: number) => { (): any; new (): any; send: { (arg0: string): void; new (): any } }
}) {
    res.status(200).send("Telegram bot endpoint")
}
