describe('hhtpbin tests', () => {
    // const bodyData = {
    //     bodyKey: "bodyValue"
    // };
    // const request = {
    //     method: 'POST',
    //     url: 'https://httpbin.org/post',
    //     qs: {
    //         "username": "michalo"
    //     },
    //     body: bodyData,
    //     headers: {
    //         'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0',
    //         "Set-Cookie" : "key=value",
    //     },
    //     failOnStatusCode: false
    // };
    // it.only('response should be 200', () => {
    //     cy.setCookie('session_id', '123456')
    //     cy.request(request).then(response => {
    //     const status = response.status;
    // // assert.equal(200, status);
    // assert.equal(200, status);
    // assert.equal("michalo", response.body.args.username);
    // assert.notStrictEqual(bodyData,response.body.data);
    // assert.equal('key=value', response.headers['Set-Cookie']);
    //     });
    // });
        it.only('response should be 200', () => {
            for (let i = 0; i <10; i++) {
                const randomId = getRandomInt(1000);
            
        const request = {
            method: 'GET',
            // url: 'https://reqres.in/api/users/2',
            url: 'https://httpbin.org/headers',
            id: randomId
        }

        cy.request(request).then(resp => {
            assert.isTrue(resp.status == 200)
            cy.log(randomId)
            // debugger;
            // cy.log(resp.body.data.email);
            // cy.log(resp.body.data.first_name);
            // cy.log('Hello GoIT')
            assert.isTrue(resp.duration < 1000);
            // assert.equal("janet.weaver@reqres.in", resp.body.data.email);
        })
    }
    })
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}