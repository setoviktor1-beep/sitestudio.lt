# SiteStudio URL migracijos žemėlapis

Šis dokumentas aprašo viešų senųjų URL elgesį. Šaltiniai: dabartinis
`sitemap.xml`, vieša paieškos rezultatų patikra, repozitorijos istorija ir
projekto savininko pateiktas senų URL sąrašas.

| Senas URL | Elgesys | Tikslas arba paaiškinimas |
| --- | --- | --- |
| `/lt/` | Momentinis statinis peradresavimas | `/` |
| `/lt/privacy-policy/` | Momentinis statinis peradresavimas | `/privatumas/` |
| `/en/privacy-policy/` | Momentinis statinis peradresavimas | `/privatumas/` |
| `/privacy-policy/` | Momentinis statinis peradresavimas | `/privatumas/` |
| `/portfolio/` | Momentinis statinis peradresavimas | `/darbai/` |
| `/lt/portfolio/` | Momentinis statinis peradresavimas | `/darbai/` |
| `/en/` | `noindex` pašalinimo puslapis | Pilna EN svetainė nepalaikoma |
| `/en/portfolio/` | `noindex` pašalinimo puslapis | Pilna EN darbų galerija nepalaikoma |
| `/lt/portfolio/london-handyman-pro/` | `noindex` pašalinimo puslapis | Nėra tikras viešas SiteStudio darbas |
| `/en/portfolio/london-handyman-pro/` | `noindex` pašalinimo puslapis | Nėra tikras viešas SiteStudio darbas |
| `/en/portfolio/ai-audit-saas/` | `noindex` pašalinimo puslapis | Nėra tikras viešas SiteStudio darbas |
| `/paslaugu-teikimo-salygos/` | `noindex` juodraščio puslapis | Tekstas nėra galutinai teisiškai patvirtintas |

GitHub Pages neturi serverinių 301 peradresavimų, todėl lygiaverčiams URL
naudojami momentiniai HTML peradresavimo puslapiai su naujo puslapio
`canonical` ir `noindex`. Pašalintas ar nepatvirtintas turinys
neperadresuojamas į nesusijusį pradžios puslapį.

Tik kanoniniai ir indeksuojami URL įtraukiami į `sitemap.xml`.
