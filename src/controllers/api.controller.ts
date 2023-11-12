import { IApiController } from "#types/Api.type";

export default class ApiController implements IApiController {
    private workers: string[] = [];

    private validateWorker(name: string) {
        if (this.workers.includes(name)) {
            return false;
        }
        return true;
    }

    public addWorker(name: string): { status: boolean; message: string } {
        const notExist = this.validateWorker(name);
        if (!notExist) {
            return { status: false, message: `Worker ${name} already exist` };
        }
        this.workers.push(name);
        return { status: true, message: `Worker ${name} added` };
    }

    public getWorker(): string[] {
        return this.workers;
    }
}
