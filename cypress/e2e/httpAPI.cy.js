describe('httpbin API test 1', () => {
    const request = "https://httpbin.org/#/"
    it('should return 200', () => {
        cy.request(request).then(response => {
            const status = response.status;
            assert.equal(200, status);
        });
    });
})

describe('httpbin API test2', () => {
    it('GET', () => {
        const request = "https://httpbin.org/get"
        cy.request("GET", request).then(response => {
            const body = response.body;
            expect(body).to.be.an('object');
            expect(body).to.include.keys('origin');
            cy.log(body.origin)
        });
    });
});

describe('httpbin API test 3', () => {
    const request = {
      url: 'https://httpbin.org/non-existing-url',
      failOnStatusCode: false
    };
  
    it('should return 200', () => {
      cy.request(request).then(response => {
        const status = response.status;
        assert.equal(200, status);
      });
    });
  });

describe('httpbin API test 4', () => {
    const request = {
        method: "POST",
        url: "https://httpbin.org/post",
        qs: {
            "username": "mozdarski"
        },
        failOnStatusCode: false
    }
    it('response should be 200', () => {
        cy.request(request).then(response => {
            const status = response.status;
            assert.equal(200, status);
            assert.equal("mozdarski", response.body.args.username)
        });
    });
});

describe('httpbin API test 5', () => {
    const request = "https://httpbin.org/#/"
    it('should return 200', () => {
        cy.request(request).then(response => {
            const status = response.status;
            assert.equal(200, status);
            assert.isTrue(response.duration < 1000);
        });
    });
});

describe('httpbin API test 6', () => {
    it('header test', () => {
        const request = "https://httpbin.org/headers"
        cy.request("GET", request).then(response => {
            const body = response.body;
            expect(body).to.include.property('headers');
        });
    });
});
    
describe('httpbin API test 7', () => {
    it('checking json', () => {
        const request = {
            method : 'GET',
            url : 'https://httpbin.org/json'
        }
        cy.request(request).then(response => {
            const body = response.body;
            expect(response.headers["content-type"]).to.contain("application/json");
        });
    });
});

describe('httpbin API test 8', () => {
    it("delay test", () => {
        const randomId = getRandomInt(20000)
        const request = {
            method: "PATCH",
            url: "https://httpbin.org/delay/20", 
            timeout: randomId
         }
         cy.request(request).then(response => {
            expect(response.status).to.equal(200);
            cy.log(request.timeout)
        });
    });
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

describe('httpbin API test 9', () => {
    const request = {
      method: 'GET',
      url: 'https://httpbin.org/post',
      failOnStatusCode: false
    };
  
    it('response code should be 405', () => {
      cy.request(request).then(response => {
        assert.equal(405, response.status);
      });
    });
  });

  describe('httpbin API test 10', () => {

    it('random ids', () => {
      for(let i = 0; i < 10; i++) {
        const randomId = getRandomInt(10000000);
  
        const request = {
          url: 'https://httpbin.org/headers',
          id: randomId
        };
  
        cy.request(request).then(response => {
          assert.isTrue(response.status == 200)
          cy.log(randomId)
        })
      };
    });
  });



