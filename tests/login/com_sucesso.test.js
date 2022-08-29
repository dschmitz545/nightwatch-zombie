
let sidebar = browser.page.sideBarPages();
let login = browser.page.loginPages();

module.exports = {

    "@disable": true,

    "dado que eu acesso a pagina de login": () => {
        login
            .navigate()
            .waitForElementVisible("@cardLogin", 4000);

    },

    "quando eu faço login com sucesso": () => {
        login
            .loginWith("zumbi@dospalmares.com.br", "pwd123")
            .click("@loginButton")

    },

    "então devo ver o nome na área logada": () => {
        sidebar
            .expectLoggedUser("Quilombo")
    }
}