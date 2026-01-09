# recepttar
Feladat: „ReceptTár"-React Router Gyakorló Projekt

1. Bevezetés
A feladatod egy többlapos receptböngésző alkalmazás elkészítése React keretrendszerben. A cél a React Router (v6+) könyvtár magabiztos használata: útvonalak kezelése, dinamikus paraméterek átadása és a navigációs hook-ok alkalmazása.

2. Funkcionális elvárások (Útvonalak)
Az alkalmazásnak az alábbi URL-struktúrát kell kezelnie:
Útvonal
Megjelenítendő tartalom
Főoldal: Üdvözlő szöveg és egy gomb, ami a receptekhez visz.
/receptek
Listaoldal: Az összes recept neve és kategóriája listázva.
/receptek/:id
Részletek: Egy konkrét recept leírása az ID alapján.
/kereses
Kereső: Egy input mező, ami query paraméterrel (?nev-...) szür.
/admin
Védett oldal: Csak "bejelentkezve" látható, egyébként átirányit.
404: Hibaoldal, ha nem létező útvonalra téved a felhasználó.

3. Technikai követelmények
A megoldás során az alábbi eszközöket kell kötelezően használnod:
- `<BrowserRouter>`, `<Routes>`, `<Route>`: Az alapvető struktúrához.
- `<NavLink>`: A menüpontokhoz (használd az aktív állapot stílusozását!).
- useParams: A recept részletes nézeténél az ID kinyeréséhez.
- useNavigate: Egy „Vissza a listához" gomb megvalósításához a részletek oldalon.
- useSearchParams: A keresőoldalon a szűrési feltételek kezeléséhez.
- Maps komponens: A védett /admin oldalról való átirányításhoz.

4. Segédadatok (Mock Data)
Használd az alábbi adatstruktúrát a receptek.js fájlodban vagy a fő komponensedben:
const receptek = 
`{id: '1', nev: "Bolognai spagetti', kateg: 'Olasz', leiras: 'Főzd ki a tésztát...)`
`{id: '2', nev: 'Gulyásleves', kateg: 'Magyar', leiras: 'Piritsd meg a hagymát...')`,
`{id: '3', nev: "Sushi tál, kateg: 'Japán', leiras: 'Használj friss halat...}`'

5. Beadási feltételek
Az alkalmazás legyen reszponziv (alapszintű CSS).
Ne legyen konzolhiba navigáció közben.
A kód legyen jól strukturált (külön mappák a komponenseknek).

## telepites
``` javascript
npm create vite@latest myproject
cd myproject
npm i react-router-dom bootstrap react-bootstrap
```