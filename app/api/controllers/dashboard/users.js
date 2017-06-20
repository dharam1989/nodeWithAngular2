import {User} from "../../../../models/"
import Logger from "../../../../logger"
import {PublicException} from "../../../../api/"
import modelUtil from "../../../../util/model"

const logger = Logger("api:controller:dashboard:users")

export default {
  search(req, res, next) {

    let {fields, filters} = req.query
    let options = {}
    let findAllOptions = {}

    if (filters) {
      findAllOptions.where = filters
    }

    if (fields) {
      options.fields = fields
      options.full   = true
    }

    logger.trace("With fields:", {options})
    User.findAll(findAllOptions)
    .then((users)=>modelUtil.serialize(users, options))
    .then((users)=> {
      res.send({data:{users}})
    })
    .catch((err)=> {
      next(new PublicException(400,err))
    })
  },

  remove(req, res, next) {
    let fields = req.body

    User.remove(fields.userId).then(()=> {
      res.send({status: "ok"})
    }).catch((err) => {
      next(new PublicException(400, err))
    })

  },
}
