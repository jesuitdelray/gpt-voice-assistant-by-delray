import TelegramBot from "node-telegram-bot-api"

const token = process.env.TELEGRAM_BOT_TOKEN
const bot = new TelegramBot(token, { polling: true })

bot.onText(/\/start/, msg => {
    const opts = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Открыть веб-приложение",
                        url: "https://gpt-voice-assistant-by-delray.vercel.app/",
                    },
                ],
            ],
        },
    }
    bot.sendMessage(msg.chat.id, "Нажми кнопку ниже, чтобы открыть приложение:", opts)
})

export default function handler(req, res) {
    res.status(200).send("Telegram bot endpoint")
}
