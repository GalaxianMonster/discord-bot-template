module.exports = {
  name: 'sample', // name here. If you execute it will be like this: (prefix)sample
  description: 'a sample command',
  async execute(message, args) {
  // your codes here
  message.channel.send('A sample command')
  // Until here
}
}
