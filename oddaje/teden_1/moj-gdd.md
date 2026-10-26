# Game Design Document — predloga (P16)

Izpolni med tednom 1 in dopolnjuj skozi semester.  
Tedni 01–08 (skupna baza): **Top-down Zombie Survival** (alternativa: **Dungeon Escape**).  
Projektna faza: **lastna igra** — posodobi ta GDD (ali naredi novega), da se ujema s tem, kar res oddajaš.

---

## 1. Osnovni podatki

| Polje | Vsebina |
|-------|---------|
| Naslov: Last one alive | |
| Avtor: Nik Kralj | |
| Žanr: top-down survival |
| Platforma | brskalnik (HTML5 Canvas + JS) |
| Ciljna dolžina ene seje | npr. 3–10 min |
| Datum: 26.10.2026 / 1.1 | |

## 2. Elevator pitch (2–3 stavki)

> Kaj igraš, zakaj je zabavno, kako “umreš” ali zmagaš?
Igralec je preživeli, ki se mora braniti pred valovi zombijev. S premikanjem in streljanjem premaguje sovražnike ter poskuša ostati čim dlje živ. Vsak naslednji val prinese večjo nevarnost. Umreš, ko ti zmanjka življenskih toćk. Cilj igre je poraziti čim več valov zombijev in nabirati točke.

## 3. Fantazija / tema

- Svet in ton (npr. mesto ponoči, podzemlje …):
- Referenčne igre (2–3):
- Zakaj Canvas / ta sklop mehanik ustreza temi:

## 4. Jedrne mehanike

Za vsako mehaniko: **vhod → pravilo → feedback**.

| # | Mehanika | Vhod/ sprožilec | Pravilo | Feedback |
|---|----------|------|---------|----------|
| 1 | Premikanje | tipke W,A,S,D | IGralec se premika po areni in ne more čez njen rob. | Igralec vidi premikanje svojega lika. |
| 2 | Streljanje | levi klik miške  | Igralec izstreli naboj proti kazalcu miške. zadetek poškoduje zombija. | viden izstrelek in kratek blisk zadetega zombija. |
| 3 | Škoda / HP | Zombi se dotakne igralca | Igralcu se zmanjša zdravje, kratek čas po zadetku ne prejema nove škode.  | Zdravstvena vrstica se zmanjša, igralec kratko utripne. |
| 4 | Valovi / napredek | igralec premaga vse zombije trenutnega valova. | Začne se nov val z več zombiji. | Prikaže se številka novega vala. |
| 5 | Šprint | Shift+ W,A,S,D | Igralec se največ 2 sekundi premika z dvojno hitrostjo. Šprint laghko ponovno uporabi po 10 sekundah od njegovega konca. | Med šprintom igralec spremeni barvo, indikator prikazuje čas do ponovne uporabe. |

## 5. Igralec

- Velikost / hitrost (začetne vrednosti): 
- Zdravje: 
- Orožje / cooldown: 
- Omejitve: 

## 6. Sovražniki / ovire

| Tip | Vedenje | HP | Hitrost | Nagrada (score) |
|-----|---------|----|--------|-----------------|
| walker | sledi | | | |
| runner | sledi hitro | | | |
| *(opcijsko)* | | | | |

Za **Dungeon Escape**: namesto valov opiši sobe, ključe, izhod.

## 7. Napredek in težavnost

- Score: Igralec dobi 10 točk za vsakega premaganega zombija. Cilj je doseči čim višji rezultat.
- Valovi / sobe: Prvi val vsebuje 5 zombijev. Nov val se začne, ko igralec premaga vse zombije trenutnega vala.
- Kako se otežuje: Vsak naslednji val vsebuje 2 zombija več. Od tretjega vala se pojavijo tudi hitrejši zombiji.
- Win condition (če obstaja) / lose condition: Končne zmage ni, cilj je preživeti čim več valov. Igralec izgubi, ko njegovo zdravje pade na 0.

## 8. Stanja igre

- `MENU` → `PLAYING` → `GAME_OVER` (in morebiti `PAUSE`):
- Kaj vidi igralec v vsakem stanju:

## 9. UI / HUD

- Med igro (HP, score, val …):
- Meni / game over:
- Dostopnost (kontrast, velikost besedila):

## 10. Asseti

| Asset | Opis | Vir / licenca | Status |
|-------|------|---------------|--------|
| sprite igralec | | | |
| sprite sovražnik | | | |
| SFX strel | | | |
| … | | | |

## 11. Tehnični okvir

- Datoteke: `index.html`, `style.css`, `game.js`, `assets/`
- Brez Phaser / Three.js (dogovor predmeta)
- Znane omejitve:

## 12. Lastna igra (projektna faza)

Po tednu 8: lastna igra, ne dodatni tedni polisha skupne baze kot glavni cilj. Glej `projekt/BRIEF.md`.

- Izhodišče: baza tedna 8 / nova Canvas igra:
- Ideja / pitch:
- Zakaj je doable v preostanku semestra:
- Merilo “končano” (vertical slice + demo):
- Asseti (sprite/zvok, vir, licenca):

## 13. Tveganja in plan B

- Kaj lahko odpade, če zmanjka časa:
- Minimalni igrivi rez (MVP):

## 14. Dnevnik sprememb GDD

| Datum | Spremeba |
|-------|----------|
| | Prva verzija |
| | |

---

*Oddaja: ta GDD + povezava do repozitorija. Posodobi pred demom lastne igre (`projekt/`).*
