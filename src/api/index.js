import http from "@/utils/request";

export const getData=()=>{
    return http.get("/users/1")
}
// 使用
// getData().then(data=>{
//     console.log(data)
// })