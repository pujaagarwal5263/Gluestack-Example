const chai=require("chai")
const chaiHttp=require("chai-http")

chai.should();
chai.use(chaiHttp)


//testing get route
  describe("testing get route",()=>{
    it("get array",(done)=>{
        chai.request('http://localhost:9090')
        .get('/backend/firstservice/firstfunction')
        .end((err,res)=>{
          res.should.have.status(200);
          done();
        })
    })
})
