import axios from "axios";

const getAllTodo =  async() => {
    const URL = `https://todos-go.herokuapp.com/api/todos`
    const req = await axios.get(URL)
    return req
}
export default getAllTodo; 