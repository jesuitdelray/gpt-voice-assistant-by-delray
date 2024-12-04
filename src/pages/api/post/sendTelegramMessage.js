import axios from "axios"

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { chatId, text, url } = req.body
        const botToken = process.env.TELEGRAM_BOT_TOKEN

        try {
            const response = await axios.post(
                `https://api.telegram.org/bot${botToken}/sendMessage`,
                {
                    chat_id: chatId,
                    text: text,
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: "Открыть приложение",
                                    web_app: { url },
                                },
                            ],
                        ],
                    },
                }
            )

            res.status(200).json({
                success: true,
                message: "Сообщение отправлено",
                data: response.data,
            })
        } catch (error) {
            console.error("Ошибка отправки сообщения:", error)
            res.status(500).json({
                success: false,
                message: "Ошибка отправки сообщения",
                error: error.message,
            })
        }
    } else {
        res.setHeader("Allow", ["POST"])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}
