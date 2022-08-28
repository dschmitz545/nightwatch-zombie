
let alertDanger = (".alert-danger");
let alertInfo = (".alert-info");
let cardLogin = (".card-login")
let url = ("http://localhost:30001/login");
let janelaX = 1024;
let janelaY = 768;

module.exports = {

    "email errado": (browser) => {
        browser
            .resizeWindow(janelaX, janelaY)
            .url(url)
            .waitForElementVisible(cardLogin, 4000)
            .setValue("input[name=email]", "qualquer@dospalmares.com.br")
            .setValue("input[name=password]", "abc123")
            .click(".login-button")
            .waitForElementVisible(alertDanger, 4000)
            .assert.textContains(alertDanger, "Usuário e/ou senha inválidos")

    },

    "senha errada": (browser) => {
        browser
            .resizeWindow(janelaX, janelaY)
            .url(url)
            .waitForElementVisible(cardLogin, 4000)
            .setValue("input[name=email]", "zumbi@dospalmares.com.br")
            .setValue("input[name=password]", "abc123")
            .click(".login-button")
            .waitForElementVisible(alertDanger, 4000)
            .assert.textContains(alertDanger, "Usuário e/ou senha inválidos")
    },
    "não cadastrado": (browser) => {
        browser
            .resizeWindow(janelaX, janelaY)
            .url(url)
            .waitForElementVisible(cardLogin, 4000)
            .setValue("input[name=email]", "qualquer@dospalmares.com.br")
            .setValue("input[name=password]", "abc123")
            .click(".login-button")
            .waitForElementVisible(alertDanger, 4000)
            .assert.textContains(alertDanger, "Usuário e/ou senha inválidos")
    },
    "email não informado": (browser) => {
        browser
            .resizeWindow(janelaX, janelaY)
            .url(url)
            .waitForElementVisible(cardLogin, 4000)
            .setValue("input[name=email]", "")
            .setValue("input[name=password]", "abc123")
            .click(".login-button")
            .waitForElementVisible(alertInfo, 4000)
            .assert.textContains(alertInfo, "Opps. Cadê o email?")

    },
    "senha não informada": (browser) => {
        browser
            .resizeWindow(janelaX, janelaY)
            .url(url)
            .waitForElementVisible(cardLogin, 4000)
            .setValue("input[name=email]", "qualquer@dospalmares.com.br")
            .setValue("input[name=password]", "")
            .click(".login-button")
            .waitForElementVisible(alertInfo, 4000)
            .assert.textContains(alertInfo, "Opps. Cadê a senha?")
            .end();

    }
}