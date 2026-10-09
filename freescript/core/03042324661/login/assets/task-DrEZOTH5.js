import {
    al as s,
    bo as a
} from "./index-B4hRM2Oj.js";
const r = {
    getTaskList: () => s.get("/task/share_task_list"),
    getTaskDetail: t => s.get("/task/share_task_detail", t),
    postTaskSubmit: t => s.post("/task/submit_share", t),
    postTaskUpdate: t => s.post("/task/update_share", t),
    getMyShareTask: t => s.get("/task/get_share_task", t),
    postUploadImg: t => a({
        url: "/task/upload",
        method: "post",
        data: t,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
};
export {
    r as t
};