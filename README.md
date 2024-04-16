# Projekty QA Automation

+ Aby uruchomić projekt zimportuj folder "QA-Automation" do VSC (File -> Open Folder...);
+ Otworz terminal;
+ Jeśli nie posiadasz Cypressa zainstaluj go poprzez komendy "npm init -y" oraz "npm i cypress --save-dev";
+ Aby uruchomić Cypressa uyj komendy "npx cypress open"
+ Po uruchomieniu wybierz opcję "E2E Testing" a następnie przeglądarkę, w której chcesz otworzyć projekt.
+ Następnie w folderze specs znajdź porządany plik;
    - Praca domowa 2 - "login.cy.js"
    - Praca domowa 4 - "httpAPI.cy.js"

+ Praca domowa 5:
    - aby otworzyć pracę dopmową nalezy mieć zainstalowane Artillery. W tym celu nalezy wpisać w terminalu komendę "npm install -g artillery".
    - aby sprawdzić czy instalacja się powiodła nalezy wpisać w terminalu komendę "artillery dino", po czym w terminalu powinien się wyświetlić składający się z symboli dinozaur mówiący "Artillery!"
    - aby wyświetlić plik nalezy wejść do folderu artillery -> DnD_test.yml
    - aby uruchomić test w terminalu nalezy wpisać "artillery run artillery/DnD_test.yml"
