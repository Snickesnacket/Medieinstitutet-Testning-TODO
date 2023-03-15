# FED22 Testning - Inlämningsuppgift 1

## Enhetstester med jest

Syftet med detta repo är att det skall fungera som er kod som ni får given. Ni skall inte ändra på funktionaliteten som nu finns på något sätt.

## Gör er bekväm med koden

Jag vill att ni tittar igenom koden, gör er bekväm med den så att ni förstår vad den gör. Testkör applikationen och se till att den beter sig som ni tänker er att den skall göra. Ni får i detta läge absolut lägga till en del `console.log` där ni känner för det.

### Att köra applikationen

När ni har klonat ner ert egna repo för uppgiften så kör ni:

- `npm install`
- `npm run dev`

För att starta testerna så kör ni

- `npm run test`

och för att få en code coverage report så kör ni

- `npm run coverage`

## Er uppgift

Det ni behöver göra i denna inlämning är att skapa nedan 7 tester för de funktioner som finns i `functions.ts`. Ni får så klart skapa fler tester om ni vill, men nedan krävs för godkänt. Detta kommer att ge er ett G.

- add todo
  - should add a todo
  - should not add a todo with empty title
  - should not add a todo with title shorter than 3 characters
- toggle todo
  - should toggle a todo
  - should not toggle a todo that does not exist
- delete todo
  - should delete a todo
  - should not delete a todo that does not exist
