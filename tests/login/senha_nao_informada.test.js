let loginElements = browser.page.loginPages()

module.exports =  {

    "@disable": true,

    "senha não informada": () => {
        loginElements
            .loginWith("qualquer@dospalmares.com.br", "")
            .expectInfo("Opps. Cadê a senha?")
    }
}