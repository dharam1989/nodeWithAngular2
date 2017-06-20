class Exception {
  constructor(code, messages = []) {

    // Check to see if this is a Sequlize error

    if (!Array.isArray(messages) && (messages.name === "SequelizeValidationError" || messages.name === "SequelizeUniqueConstraintError")) {

      let errs = []

      for (let error of messages.errors) {
        errs.push(error.message)
      }

      messages = errs
    }

    if (!Array.isArray(messages)) {
      messages = [messages]
    }

    this.code     = code
    this.messages = messages
    this.message  = messages.join(", ")

  }

  getCode () {
    return this.code
  }

  getMessages () {
    return this.messages
  }

}

export default Exception
