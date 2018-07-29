import axios from "axios";
import { NetworkResult } from "../models/NetworkResult";
export class NetworkService {
    constructor() { }

    async Get(url: string): Promise<NetworkResult> {
        try {
            const result = await axios.get(url);
            return { ...result, success: true, error: null };
        } catch (error) {
            return error;
        }

    }
}