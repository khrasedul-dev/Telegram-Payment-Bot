const {Telegraf} = require('micro-bot')

const bot = new Telegraf('5207445244:AAEjujAEbhUQz2wSKzQtgc9LRoekudkG9F4')

bot.start(ctx=>{
    ctx.reply("Bot started")
})

bot.command('product',ctx=>{
    ctx.telegram.sendInvoice(ctx.chat.id , {
        title: "Apple",
        description: "This is test payment invoice",
        payload: 16,
        provider_token: "284685063:TEST:Y2NmZmMwMjQ2NTI3",
        currency: "USD",
        prices: [{label: "Normal",amount: 145}]
    })
})

bot.on("pre_checkout_query",ctx=>{
    // console.log(ctx)
    ctx.answerPreCheckoutQuery(true)
})

bot.on('successful_payment',ctx=>{
    ctx.reply("Payment is successfully")
})


bot.launch()
.then(()=>console.log("bot start"))
.catch(e=>console.log(e))