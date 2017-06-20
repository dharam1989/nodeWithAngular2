import {User} from "../../../../models/"
import {PublicException} from "../../../../api/"

export default {
  create(req, res, next) {

    let {email,name,roles} = req.body

    User.sendInvite({email,name,roles})
    .then(()=> {
      res.send({sent:true})
    })
    .catch((err)=> {
      next(new PublicException(400,err))
    })
  },
}
