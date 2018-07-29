import { PARSE } from "../models/config";

export class WordProcessor {
    private __searchResult: any = {};
    constructor() { }
    processArray(line: string) {

        const words = line.replace(/[&\/\\#,+()$~%.'":*?<>{}!-';_]/g, '').split(/\s+/g).filter(word => word.trim());
        words.forEach(word => {
            if (this.__searchResult.hasOwnProperty(word)) {
                //already has word so will increase the count
                this.__searchResult[word].count++;
                this.__markPrime(word);
                return;
            }

            this.__searchResult[word] = { count: 1, prime: true };
        })


    }

    private __isPrime(num: number) {
        if (num === 1 || num === 2) {
            return true;
        }
        else {
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    return false;
                }
            }
        }

        return true;
    }

    private __markPrime(word: string) {
        this.__searchResult[word].prime = this.__isPrime(this.__searchResult[word].count)
        return;
    }

    getResult() {
        return this.__searchResult;
    }
}