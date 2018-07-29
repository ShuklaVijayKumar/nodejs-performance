import { NetworkService } from "./network.service";
import os from "os";
import { WordProcessor } from "./wordprocessor.service";

export class Processor {
    private _processes = [];
    constructor(private networkService: NetworkService,
        private wordProcessor: WordProcessor) {


    }



    async fetchData(url: string) {

        try {
            const result = await this.networkService.Get(url);
            if (result.success) {
                const lines: Array<string> = result.data.split(/[\r\n]+/);
                lines.forEach(element => {
                    this.wordProcessor.processArray(element.toLowerCase());
                });
                return this.wordProcessor.getResult();
            }
        } catch (error) {
            throw error;
        }


    }

}