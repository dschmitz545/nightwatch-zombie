let loginElements = browser.page.loginPages()

module.exports = {

    "@disable": true,

    "email não informado": () => {
        loginElements
            .loginWith("", "abc123")
            .expectInfo("Opps. Cadê o email?")
    }
}