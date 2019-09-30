import Vue from "vue"
import { Auth } from "aws-amplify"
import { CognitoUser } from "@aws-amplify/auth"

export default Vue.extend({
  data() {
    return {
      title: "Token Getter",
      userID: "",
      password: "",
      token: ""
    }
  },
  methods: {
    async signin(): Promise<void> {
      try {
        const user: CognitoUser = await Auth.signIn(this.userID, this.password)
        console.log(user)
        this.token = user
          .getSignInUserSession()
          .getIdToken()
          .getJwtToken()
      } catch (err) {
        console.error(err)
      }
    }
  }
})
