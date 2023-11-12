
export interface IApiController {
    addWorker(name: string): { status: boolean; message: string };
    getWorker(): string[];
}
