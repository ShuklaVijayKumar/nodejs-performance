import * as TestSuite from "./common";
import mockery from "mockery";


const testData = "This is a test line 1 \r\n This is test line 2\r\nThis is test line 3";
const expect = TestSuite.chai.expect;

let axiosMock: any = {};

axiosMock.get = TestSuite.sinon.stub().resolves({ data: TestSuite.testData });
mockery.registerMock("axios", axiosMock);
mockery.enable({
    warnOnReplace: false,
    warnOnUnregistered: false
});
//importing after adding mock..else will not override axios package
import { NetworkService } from "../services/network.service";

TestSuite.describe("it should send network request", () => {
    let networkService: NetworkService = new NetworkService();
    after(() => mockery.disable());

    it("should return valid data", async () => {

        const result = await networkService.Get("url");
        console.log(result.data);
        return expect(result.data).equals(TestSuite.testData);
    });
});
