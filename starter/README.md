# Top-down Zombie Survival — P16, teden 2

Osnova igre v HTML Canvas in JavaScriptu.
Trenutno omogoča premikanje igralca po platnu in sprint.

## Zagon

V terminalu se premakni v mapo `starter`:

    cd "D:\velenje\2. letnik\RRI\RRI\starter"

Zaženi lokalni strežnik:

    python -m http.server 8080

V brskalniku odpri http://localhost:8080.

Strežnik mora med igranjem ostati zagnan.
Igro zaganjamo prek strežnika, ker uporablja JavaScript module.

## Kontrole

| Tipke | Dejanje |
|---|---|
| W ali puščica gor | Premik navzgor |
| S ali puščica dol | Premik navzdol |
| A ali puščica levo | Premik levo |
| D ali puščica desno | Premik desno |
| Shift + smer | Sprint |

Osnovna hitrost je 320 px/s.
Sprint ima množilnik 2,0 in hitrost 640 px/s.
Diagonalni premik je normaliziran, igralec pa ostane znotraj platna.

## Novosti v 2. tednu

- Koda je razdeljena v šest JavaScript modulov.
- Hitrost in množilnik sprinta sta določena v konfiguraciji.
- Dodano je upravljanje s puščicami.
- Dodan je sprint ob držanju tipke Shift.

## Struktura kode

| Datoteka | Namen |
|---|---|
| js/config.js | Hitrost igralca in množilnik sprinta |
| js/world.js | Skupni podatki: platno, igralec in tipke |
| js/input.js | Beleženje pritiskov in spustov tipk |
| js/player.js | Premikanje, sprint in omejitev na platno |
| js/render.js | Risanje ozadja in igralca |
| js/game.js | Glavna zanka in izračun dt |

## Dokumentacija

- [Game Design Document](../docs/moj-GDD.md)

## Avtor

Nik Kralj