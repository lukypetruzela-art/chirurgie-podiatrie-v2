# Web – MUDr. Pavel Murín (Chirurgie & Podiatrie) — vícestránková verze

Statický web, samostatné URL adresy pro každou stránku. Připraveno pro Vercel
(GitHub → Vercel funguje bez další konfigurace).

## Struktura
- `/index.html` .............. Domů
- `/o-nas/`, `/podiatrie/`, `/sluzby/`, `/vlozky-formthotics/`, `/ostatni-vlozky/`,
  `/tejpovani/`, `/silikonove-korektory/`, `/zarustajici-nehet/`, `/cenik/`, `/kontakt/`
- `/assets/` ................. sdílené styly, skript, logo a fotky
- `/sitemap.xml`, `/robots.txt`, `/vercel.json`

## Nasazení
Nahraj CELÝ obsah této složky do kořene repozitáře (vč. složky `assets`).
Adresy typu `/o-nas/` fungují díky struktuře složek automaticky.

## Objednání
Objednávkový formulář byl odstraněn. Pacienti se objednávají telefonicky
(571 611 936) nebo osobně na recepci Medica Chirurgica (stránka `/kontakt/`).

## SEO
- Každá stránka má vlastní title, popis, Open Graph a strukturovaná data (Schema.org MedicalClinic).
- Po nasazení přidej web do Google Search Console a odešli `sitemap.xml`.
- Doporučeno: založit/ověřit Google Business Profile (mapy + místní vyhledávání).

## Poznámky
- Kanonická doména je nastavena na https://www.chirurgie-podiatrie.cz
  (v `<head>` a `sitemap.xml`). Pokud bude jiná, dej vědět – upravím.
- Mapa na stránce Kontakt je vložena přes Google Maps (bez API klíče).
