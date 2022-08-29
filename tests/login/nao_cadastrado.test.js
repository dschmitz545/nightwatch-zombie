let loginElements = browser.page.loginPages()

module.exports = {

    "@disable": true,

    "não cadastrado": () => {
        loginElements
            .loginWith("qualquer@dospalmares.com.br", "abc123")
            .expectDanger("Usuário e/ou senha inválidos")
    }
}