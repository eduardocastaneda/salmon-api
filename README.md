# salmon-api
salmon project - api

1. Installera node och npm
  - Om du kör på osx är det lättast genom en homebrew som är en package manager http://treehouse.github.io/installation-guides/mac/node-mac.html
  - Om du kör på windows går det att tanka från https://nodejs.org/en/download/ (funkar även för mac)

2. Installera mongodb https://docs.mongodb.org/manual/installation/

3. Stå i projektet och skriv "npm install" i terminalen

4. Öppna ny terminal och starta mongodb genom att skriva "mongod"

5. Gå in i config filen och sätt "populateDb" till true

6. Starta api:et genom att skriva node server.js

7. Sätt populateDB till false och surfa in på localhost:3000/users och kolla att det finns två users