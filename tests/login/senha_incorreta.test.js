let loginElements = browser.page.loginPages()

module.exports =  {

    "@disable": true,

    "senha incorreta": () => {
        loginElements
            .loginWith("zumbi@dospalmares.com.br", "abc123")
            .expectDanger("Usuário e/ou senha inválidos")
    },
}