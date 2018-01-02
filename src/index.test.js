import {expect} from 'chai';
import jsdom from "jsdom";
import fs from "fs";

const { JSDOM } = jsdom;

describe("test the test package",() => {
  it("should pass",()=>{
    expect(true).to.equal(true);
  });
});

describe("test the dom structor",()=>{
  it("should have h1 with Users text",(done)=>{
    const index = fs.readFileSync("./src/index.html","utf-8");
    const { window } = new JSDOM(index);
    const h1 = window.document.getElementsByTagName("h1")[0];
    expect(h1.innerHTML).to.equal("Users");
    done();
    window.close();
  });
});


