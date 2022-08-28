

module.exports = {
    "dado que eu acesso a pagina de login": (browser) => {
        browser
            .resizeWindow(1024, 768)
            .url("http://localhost:30001/login")
            .waitForElementVisible('.card-login', 4000);

    },
    "quando eu faço login com sucesso": (browser) => {
        browser
            .setValue("input[name=email]", "zumbi@dospalmares.com.br")
            .setValue("input[name=password]", "pwd123")
            .click(".login-button")

    },
    "então devo ver o nome na área logada": (browser) => {
        let userInfo = ".user .info span";
        browser
            .waitForElementVisible(userInfo, 4000)
            .assert.textContains(userInfo, "Quilombo")
            .end();
    }
}