import { Processor } from "./services/processor.service";
import { NetworkService } from "./services/network.service";
import { WordProcessor } from "./services/wordprocessor.service";
import fs from "fs";

const start = async () => {
    const processor = new Processor(new NetworkService(), new WordProcessor());
    const result = await processor.fetchData("http://www.loyalbooks.com/download/text/Railway-Children-by-E-Nesbit.txt");

    //writing result in data.json
    fs.writeFileSync("./data.json", JSON.stringify(result));
}
start();