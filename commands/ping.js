module.exports = {
  name: "ping",
  description: "ping",
  async execute(message, args) {
    message.channel.send(`Getting Ping`).then(msg => {
      const ping = msg.createdTimestamp - message.createdTimestamp
      msg.edit(`Pong! ${ping} ms`)
    })
  }
}
