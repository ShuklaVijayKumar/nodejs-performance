import * as TestSuite from "./common";
import { Processor } from "../services/processor.service";
import { WordProcessor } from "../services/wordprocessor.service";
import { NetworkService } from "../services/network.service";

const expect = TestSuite.chai.expect;

TestSuite.describe("Wordprocessor tests", () => {
    let processor: Processor, wordProcessor: WordProcessor, networkService: NetworkService;
    before(() => {
        wordProcessor = new WordProcessor();
        networkService = new NetworkService();

        //mock get
        networkService.Get = TestSuite.sinon.stub().resolves({ "data": TestSuite.testData, "success": true });
        processor = new Processor(networkService, wordProcessor);
    })

    it("should process correctly", async () => {

        const result = await processor.fetchData("url");  
        //prime false      
        expect(result["this"].count).to.equal(4);
        expect(result["this"].prime).to.be.false;

        //prime true
        expect(result["new"].count).to.equal(1);
        expect(result["new"].prime).to.be.true;


    });
})
