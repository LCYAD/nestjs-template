export default () => ({
  port: parseInt(process.env.PORT, 10) ?? 3000,
  appEnv: process.env.APP_ENV,
  host: process.env.HOST ?? 'localhost'
})
