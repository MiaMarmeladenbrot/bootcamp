**How to Start**

1. Projekt aufsetzen mit vite wie gewohnt
2. npm install -D tailwindcss postcss autoprefixer
3. npx tailwindcss init -p
4. tailwind.config.js anpassen ->  
    content: [
   "./index.html",
   "./src/**/*.{js,ts,jsx,tsx}",
   ],
5. index.css anpassen
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
6. FERTIG!

---

**Farben**
https://tailwindcss.com/docs/customizing-colors

Können gliobal in die tailwind.config.js gemacht werden
BG Farbe setzen: bg-green-500

---

**Font**
size: text-xs bis text-9xl text-[14px]
weight: font-thin bis font-bold
align: text-center, text-right
color: text-slate-100

---

**Margin**
m-10 = alle richtungen
mt-10 = oben
mb-10 = unten
mr-10 = rechts
ml-10 = links

mx-10 = links / recht
my-10 = oben / unten

---

**Padding**
p-10 = alle richtungen
pt-10 = oben
pb-10 = unten
pr-10 = rechts
pl-10 = links

px-10 = links / recht
py-10 = oben / unten

---

**Flex**
flex = display: flex
justify-center = justify-content: center;
items-center = align-items: center;

flex-col = flex-direction: column;

gap-0 = gap: 0px;
gap-y-0 = column-gap: 0px;
gap-x-0 = row-gap: 0px;

---

**Grid**
grid = display: grid
grid-cols-3 = grid-template-columns: repeat(3, minmax(0, 1fr));

---

**Abstande**
Tailwind benutzt seine eigene zahlen um abstände
zb ist "1" = 4px
Custom geht so zb: m-[5px]
https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale

**Responsive Design**
WICHTIG: Tailwind arbeitet mit Mobile first prinzip! Also sollte man erst mit dem handy starten

Breakpoint prefix Minimum width CSS
sm => 640px => @media (min-width: 640px) { ... }
md => 768px => @media (min-width: 768px) { ... }
lg => 1024px => @media (min-width: 1024px) { ... }
xl => 1280px => @media (min-width: 1280px) { ... }
2xl => 1536px => @media (min-width: 1536px) { ... }
