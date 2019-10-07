import Vue from "vue"
import { Auth } from "aws-amplify"
import { CognitoUser } from "@aws-amplify/auth"
import axios from "axios"

export default Vue.extend({
  data() {
    return {
      title: "Token Getter",
      userID: "",
      password: "",
      token: "",
      responseData: null
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
    },
    async execApi(): Promise<void> {
      try {
        this.responseData = await axios.get(
          "https://rg2qxmixl5.execute-api.ap-northeast-1.amazonaws.com/dev/hello",
          {
            headers: {
              Authorization: this.token
            }
          }
        )
      } catch (err) {
        console.error(err)
      }
    }
  }
})
