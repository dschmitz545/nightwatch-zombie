
var loginActions = {
    loginWith: function (email, pass) {
        return this
            .navigate()
            .waitForElementVisible("@cardLogin", 4000)
            .setValue("@emailInput", email)
            .setValue("@passInput", pass)
            .click("@loginButton")
    },

    expectDanger: function (mensagem) {
        return this
            .waitForElementVisible("@alertDanger", 4000)
            .assert.textContains("@alertDanger", mensagem)
    },

    expectInfo: function (msg) {
        return this
            .waitForElementVisible("@alertInfo", 4000)
            .assert.textContains("@alertInfo", msg)
    }
}

module.exports = {
    url: "http://localhost:30001/login",
    commands: [loginActions],
    elements: {
        cardLogin: ".card-login",
        emailInput: "input[name=email]",
        passInput: "input[name=password]",
        loginButton: ".login-button",
        alertDanger: ".alert-danger",
        alertInfo: ".alert-info"
    }
}