# AMPLIACIÓ DE QUÍMICA | 1r de Batxillerat

Portal web docent dissenyat específicament per a l'assignatura d'**Ampliació de Química** de **1r de Batxillerat**, preparat per ser allotjat a **GitHub Pages**:
👉 **URL del repositori:** [https://github.com/ccarrascosa-aimerigues/AMPLIACIO-DE-QUIMICA](https://github.com/ccarrascosa-aimerigues/AMPLIACIO-DE-QUIMICA)  
👉 **URL de la web pública (un cop activat GitHub Pages):** [https://ccarrascosa-aimerigues.github.io/AMPLIACIO-DE-QUIMICA/](https://ccarrascosa-aimerigues.github.io/AMPLIACIO-DE-QUIMICA/)

---

## 🧪 Estructura de la Web

La plataforma s'organitza de forma modular per unitats didàctiques. La primera unitat dissenyada i completament operativa és **DISSOLUCIONS**.

### 💧 Unitat 1: DISSOLUCIONS
Conté 3 sub-pestanyes principals:
1. **Resum de Teoria:**
   - **Teoria de les dissolucions:** Naturalesa del solut i dissolvent, classificació (diluïdes, concentrades, saturades, sobresaturades), procés de solvatació, balanç energètic ($\Delta H_{\text{diss}}$), factors que modifiquen la solubilitat i Llei d'Henry.
   - **Canvis de concentració:** Taula interactiva d'unitats físiques i químiques (Molaritat $M$, Molalitat $m$, Fracció molar $\chi$, $\% \text{ m/m}$, concentració en massa $\text{g/L}$, densitat $\rho$) i procediments per a càlculs de dilució ($C_1 V_1 = C_2 V_2$) i mescles de dissolucions.
   - **Dispersions col·loidals:** Comparativa detallada entre dissolucions vertaderes, col·loides i suspensions (mida de partícula), classificació de col·loides (sols, gels, aerosols, emulsions, escumes), efecte Tyndall i moviment brownià.
   - **Propietats de les dissolucions (Propietats Col·ligatives):** Descens de la pressió de vapor (Llei de Raoult), augment ebullioscòpic ($\Delta T_e = K_e \cdot m \cdot i$), descens crioscòpic ($\Delta T_c = K_c \cdot m \cdot i$) i pressió osmòtica ($\Pi = M \cdot R \cdot T \cdot i$). Factor de van 't Hoff ($i$) i determinació experimental de masses moleculars.

2. **Activitats:**
   - **Activitats de Reforç:** Exercicis guiats pas a pas amb solucions desplegables sobre càlculs bàsics de concentració, dilucions al laboratori i càlculs inicials de propietats col·ligatives.
   - **Activitats d'Ampliació:** Problemes avançats de nivell PAU i recerca (mescles d'àcids amb densitats diferents, osmometria per calcular la massa molecular d'enzims, grau de dissociació d'electròlits).

3. **Audiovisual i Pràctiques:**
   - **Simuladors Virtuals PhET incrustats:** Dues simulacions interactives HTML5 de la Universitat de Colorado (*Molaritat* i *Concentració*) operatives directament a la pàgina.
   - **Guions de Pràctiques de Laboratori (Imprimibles):**
     - *Pràctica 1:* Preparació d'una dissolució a partir d'un sòlid pur i posterior dilució (amb material, EPI, procediment detallat pas a pas i qüestionari d'avaluació).
     - *Pràctica 2:* Diferenciació experimental entre dissolució vertadera, col·loide i suspensió (Efecte Tyndall amb làser).
   - **Material audiovisual:** Selecció de recursos en vídeo de tècniques de laboratori i animacions moleculars 3D.

4. **Eines Especials:**
   - **Calculadora interactiva de dissolucions:** Eina integrada a la capçalera per calcular molaritats instantànies i càlculs de dilucions per a l'alumnat.
   - **Compatibilitat d'impressió (`Ctrl + P`):** Estils optimitzats per imprimir resums de teoria i guions de pràctiques en paper o PDF net sense capçaleres ni botons innecessaris.

---

## 🚀 Com publicar la web a GitHub Pages (en 3 passos)

1. **Pujar els fitxers al repositori:**
   - Puja tots els fitxers d'aquesta carpeta (`index.html`, `css/`, `js/`, `.nojekyll`, `README.md`) a la branca principal `main` del repositori `https://github.com/ccarrascosa-aimerigues/AMPLIACIO-DE-QUIMICA`.
2. **Activar GitHub Pages:**
   - Al teu repositori de GitHub, ves a la pestanya **Settings** (Configuració).
   - Al menú lateral esquerre, fes clic a **Pages**.
   - A l'apartat **Build and deployment > Branch**:
     - Selecciona la branca `main`.
     - Deixa la carpeta a `/(root)`.
     - Fes clic a **Save**.
3. **Accedir a la web:**
   - En uns minuts, GitHub activarà la web a:  
     `https://ccarrascosa-aimerigues.github.io/AMPLIACIO-DE-QUIMICA/`

---

## 📂 Estructura de fitxers

```text
AMPLIACIO-DE-QUIMICA/
├── index.html          # Pàgina principal amb la Unitat 1 (Dissolucions)
├── css/
│   └── styles.css      # Estils personalitzats, animacions i regles d'impressió
├── js/
│   └── main.js         # Interactivitat, KaTeX, calculadora i filtres
├── .nojekyll           # Evita que GitHub Pages processi el lloc amb Jekyll
└── README.md           # Documentació del projecte
```

---

## 🧩 Com anar afegint les següents Unitats Didàctiques

L'aplicació s'ha dissenyat de forma completament **modular**:
- A la barra de navegació superior ja hi ha els marcadors preparats per a les futures unitats:
  - *UD 2: Termoquímica*
  - *UD 3: Cinètica Química*
  - *UD 4: Equilibri Químic*
  - *UD 5: Àcid-Base*
  - *UD 6: Redox i Electroquímica*
- Quan vulguis dissenyar la següent unitat (per exemple, *Termoquímica*), només haurem d'afegir el seu contenidor de contingut seguint el mateix esquema que hem utilitzat per a *Dissolucions*.
