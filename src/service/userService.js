import { API } from "constant"
import callApiWithToken from "utils/callApiWishToken"


const userService = {
    getUser() {
        return callApiWithToken(`${API}/user/get-info`)
    }
}



export default userService