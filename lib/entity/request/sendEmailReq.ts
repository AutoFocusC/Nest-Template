//服务端配置文件
import backend from "../../../doc/backend";

export class EmailReq {
    title: string
    content: string
    receiver?: string

    constructor(title: string, content: string, receiver: string = backend.AdminInfo.email) {
        this.title = title;
        this.content = content;
        this.receiver = receiver;
    }
}