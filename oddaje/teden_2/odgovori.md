Brez normalizacije se igralec pri diagonalnem premikanju premika po obeh oseh s polno hitrostjo; v mojem primeru 320 pikslov. zato v istem času prepotuje daljšo razdaljo; v mojem primeru približno 453 pikslov. Normalizacija poskrbi, da je hitrost po diagonali enaka hitrosti naravnost, torej 320 pikslov.

dt je čas med zaporednima sličicama, izražen v sekundah. Z njim pomnožimo hitrost, da premikanje ni odvisno od števila sličic na sekundo. Po vrnitvi iz zavihka v ozadju bi lahko bil dt zelo velik, zato bi igralec naredil velik preskok. V naši zanki ga omejimo na največ 0,05 sekunde.

Dodal sem upravljanje s puščicami in sprint s Shiftom pri hitrosti 640 px/s; upravljanje je bolj prilagodljivo, dvojna hitrost sprinta pa mi po preizkusu ustreza.

Predlagani množilnik sprinta 1,6 sem spremenil na 2,0. Osnovna hitrost je ostala 320 px/s, hitrost sprinta pa se je povečala s 512 na 640 px/s. Spremembo sem preizkusil in jo obdržal, ker mi hitrejše premikanje ustreza. Sprint deluje ves čas držanja Shifta, brez časovne omejitve in čakanja na ponovno uporabo.

Math.hypot(dx, dy) izračuna dolžino smernega vektorja. Ko se igralec premika, obe komponenti smeri delimo s to dolžino in tako dobimo smer dolžine 1. S tem preprečimo hitrejše premikanje po diagonali. Pred deljenjem preverimo, ali se igralec sploh premika, da ne delimo z nič.

Pri razlagi funkcije updatePlayer nisem opazil napačnih trditev. Razlaga je ustrezala kodi: ta vključuje premikanje, normalizacijo diagonale, sprint in omejitev na platno