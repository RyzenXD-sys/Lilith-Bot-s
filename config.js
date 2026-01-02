global.config = {
  // - PLATFORM SETTING -
  // Atur ke 'true' untuk mengaktifkan, 'false' untuk menonaktifkan
  enableTelegram: true,
  enableDiscord: false,
  enableWhatsApp: true,

  // - BOT CONFIG -
  telegramToken: "8236409464:AAH0zOc5gR_lJLSgqo62WOGtw2vw5hdNqb8",
  discordToken: "YOUR_discord_token_here",
  discordClientId: "YOUR_discord_client_id_here",
  whatsappNumber: "6283143694217", // example: 628123456789
  
  // - OWNER CONFIG -
  ownerTelegram: "7858878920", // example: 123456789"",
  ownerDiscord: "YOU_DISCORD_ID", // example: 123456789012345678
  ownerWhatsapp: "6283143694217", // example: 628123456789

  // - BOT SETTING -
  selfMode: false, // false = Public, true = Self
  prefix: ["/", "."],
  ownerName: "HanzXD",
  botName: "Lilith Bot's",

  // - GEMINI API KEY -
  geminikey: "YOUR_API_KEY",
    /* ganti dengan API Key Gemini kamu sendiri dari http://aistudio.google.com/
       agar bisa menggunakan fitur AI Dev Assistant (Aidev) */
};

module.exports = global.config;
