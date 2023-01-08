// Can setup setting for different environments
export default () => ({
  reqIdPrefix: 'service', // set service name
  validatorOptions: {
    validationError: {
      target: false,
      value: true
    }
  }
})
