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

## DŮLEŽITÉ – aby objednávkový formulář odesílal sám (bez otevírání e-mailu):
1. Jdi na https://web3forms.com a zadej e-mail `chirurgiepodiatrie@gmail.com`.
   Přijde ti zdarma "Access Key".
2. V souboru `kontakt/index.html` najdi `YOUR-WEB3FORMS-ACCESS-KEY`
   a nahraď ho tímto klíčem.
Hotovo — zprávy pak chodí rovnou do schránky. Dokud klíč nevložíš,
formulář funguje záložně (otevře e-mailový program pacienta).

## SEO
- Každá stránka má vlastní title, popis, Open Graph a strukturovaná data (Schema.org MedicalClinic).
- Po nasazení přidej web do Google Search Console a odešli `sitemap.xml`.
- Doporučeno: založit/ověřit Google Business Profile (mapy + místní vyhledávání).

## Poznámky
- Kanonická doména je nastavena na https://www.chirurgie-podiatrie.cz
  (v `<head>` a `sitemap.xml`). Pokud bude jiná, dej vědět – upravím.
- Mapa na stránce Kontakt je vložena přes Google Maps (bez API klíče).
