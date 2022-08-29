

var userActions = {
    expectLoggedUser: function(name) {
        return this
            .waitForElementVisible("@userInfo", 4000)
            .assert.textContains("@userInfo", name)

    }
}

module.exports = {
    commands: [userActions],
    elements: {
        userInfo: ".user .info span"
    }
}