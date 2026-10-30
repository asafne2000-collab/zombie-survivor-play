import{P as q,S as Q,e as O,a as tt,b as et,M as _,c as P,W as E,C as L,d as R,f as B,m as A,r as V,B as ot,g as at,h as I,i as D,T as z,l as nt,j as st,k as N,n as h,o as rt,s as it,p as lt,q as ct,H as F,t as dt,u as ut,v as W,w as j,U as pt,x as mt}from"./index-C-hPbO6o.js";const G={shaman:"Shaman",wolfRider:"Wolf Rider",slime:"Crystal Slime",burrower:"Burrower",hexer:"Hexer",illusionist:"Illusionist",sapper:"Sapper",drummer:"War Drummer"},U={oak:"Cursed Oak",warchief:"Warchief",golem:"Crystal Golem",wyrm:"Cave Wyrm",witch:"Bog Witch",hydra:"Bog Hydra",siege:"Siege Engine",king:"Goblin King"},ht=`
#test-menu .tm-pu select { width: 100%; }
#test-zoom .tm-pu-spawn { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-top: 8px; }
#test-zoom .tm-pu-spawn b { grid-column: 1 / -1; }
#test-zoom .tm-pu-spawn button { min-height: 44px; }
#test-zoom .tm-pu-spawn.hidden { display: none; }
`;function bt(n,o,s,m){const b=document.createElement("style");b.textContent=ht,document.head.appendChild(b);const w=o.querySelector(".tm-done"),c=document.createElement("div");c.className="tm-run tm-pu",c.innerHTML=`
    <b>PARALLEL UNIVERSE</b>
    <button data-pu="unlock">🌀 Unlock all PU houses</button>
    <select data-pu-house>${q.map((i,r)=>`<option value="${r}">Parallel ${r+1} · ${i.name}</option>`).join("")}</select>
    <select data-pu-stage>${Array.from({length:Q},(i,r)=>`<option value="${r+1}">Stage ${r+1}${r===4?" · boss":r===9?" · final boss":""}</option>`).join("")}</select>
    <button data-pu="start">▶ Start PU house at this stage</button>
    <button data-pu="elf"></button>
    <p>During a PU run, tap the 🧪 tab for buttons that spawn each new enemy and boss next to you.</p>`,([...o.querySelectorAll(".tm-run")].find(i=>i.textContent?.includes("TRANSITION MAP"))??o.querySelector(".tm-done")).after(c);const u=c.querySelector('[data-pu="elf"]'),g=()=>{u.textContent=`🧝 Elf look: ${O.on?"ON":"OFF"}`};g();const l=c.querySelector("[data-pu-house]"),M=c.querySelector("[data-pu-stage]");c.addEventListener("click",i=>{const r=i.target.closest("[data-pu]")?.dataset.pu;if(r==="unlock")m().unlockAllPu(),w.textContent="Every Parallel Universe house is unlocked: their cards are after the Transition.",n.menus.show("home");else if(r==="elf")O.on=!O.on,g(),w.textContent=`The elf look is ${O.on?"on":"off"} for the next PU runs.`;else if(r==="start"){o.classList.add("hidden"),n.puStart=Number(M.value);try{n.newRun(tt+Number(l.value))}finally{n.puStart=1}}});const y=document.createElement("div");y.className="tm-pu-spawn hidden",y.innerHTML=`<b>🌀 SPAWN NEW ENEMY</b>${Object.keys(G).map(i=>`<button data-spawn="${i}">${G[i]}</button>`).join("")}
    <b>☠ SPAWN BOSS</b>${Object.keys(U).map(i=>`<button data-boss="${i}">${U[i]}</button>`).join("")}`,s.appendChild(y);const T=()=>{const i=Math.random()*Math.PI*2,r=n.player;return[Math.max(-22,Math.min(22,r.x+Math.cos(i)*7)),Math.max(-22,Math.min(22,r.z+Math.sin(i)*7))]};y.addEventListener("click",i=>{const r=i.target.closest("button"),C=n.pu;if(!r||!C||n.state!=="playing")return;const[d,v]=T(),k=n.director.stage;if(r.dataset.spawn){const x=r.dataset.spawn,f=n.zombies.spawn(et[x].base,d,v,k);f&&(n.director.addExtra(1),C.makeSpecial(f,x))}else if(r.dataset.boss){const x=r.dataset.boss,f=n.zombies.spawn("brute",d,v,k,!0);if(f){n.director.addExtra(1);const t=q.some(a=>a.finalBoss===x);C.makeBoss(f,x,t),n.boss=f,n.hud.showBanner(t?"FINAL BOSS":"BOSS",U[x].toUpperCase())}}});const $=()=>{y.classList.toggle("hidden",!n.pu),requestAnimationFrame($)};$()}const Y=["supernova","starfall","lance","swarm"];function ft(n,o,s){const m=e=>{n().data.inventory.push(...e),n().save()},b=e=>A(B[e].slot,"mythic",n().topHouse(),e),w=`
    <div class="tm-run">
      <b>MYTHIC ARMOUR · power of your highest house</b>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">${_.map(e=>`<button data-act="armor-${e}">${P[e].icon} ${P[e].name}</button>`).join("")}</div>
      <button data-act="armorSet">✨ Give full Mythic armour set (equipped)</button>
      <button data-act="skinArmor">👕 Wear a skin + full Mythic armour set</button>
      <p>The full set is one piece per slot: Crown of Echoes, Phoenix Vest, Storm Greaves, Phantom Steps, Overdrive Gauntlets. Tap an item for its power. The skin button also wears the Phoenix Warrior skin: flip "Show skin over armor" (Settings, or Equipment → 🎨 → SKINS) to see the skin or the armour.</p>
    </div>
    <div class="tm-run">
      <b>COSMIC WEAPONS</b>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">${Y.map(e=>`<button data-act="cosmic-${e}">✧ ${E[e].name}</button>`).join("")}</div>
      <button data-act="puChest">🌌 Open a PU boss chest (Cosmic moment)</button>
      <button data-act="cosmicPity">🎯 Cosmic pity: counter → ${L.cosmicPity-1}</button>
      <p>The chest button opens a Parallel Universe final-boss chest that holds a Cosmic weapon for sure (it goes into your inventory). The pity button makes the next real PU final-boss chest a Cosmic one.</p>
    </div>
    <div class="tm-run">
      <b>STARLIGHT CHEST ✧ · real money later, locked in the shop</b>
      <button data-act="starlight">✧ Open Starlight Chest (test, free)</button>
      <button data-act="starlightPity">🎯 Starlight pity: counter → ${R.pity-1}</button>
      <button data-act="starlightPity0">↺ Starlight pity: counter → 0</button>
      <p>Opens a real Starlight Chest roll with its own pity counter (at ${R.pity-1} without a Cosmic weapon, the next one is Cosmic for sure). The item goes into your inventory. Shop → PREMIUM → "i" shows the odds and the counter.</p>
    </div>`,c={...Object.fromEntries(Y.map(e=>[`cosmic-${e}`,()=>(m([A("weapon","cosmic",n().topHouse(),e)]),`Added a Cosmic ${E[e].name}: Equipment → Weapon.`)])),puChest:()=>{const e=V(n().topHouse(),0,L.cosmicPity);return n().addChest(e),o(e),""},starlight:()=>(s(n().openStarlightChest()),""),starlightPity:()=>(n().setStarlightPity(R.pity-1),"The next Starlight Chest holds a Cosmic weapon for sure."),starlightPity0:()=>(n().setStarlightPity(0),"Starlight pity counter back to 0."),cosmicPity:()=>(n().setCosmicPity(L.cosmicPity-1),"The next Parallel Universe final-boss chest holds a Cosmic weapon for sure."),...Object.fromEntries(_.map(e=>[`armor-${e}`,()=>(m([b(e)]),`Added ${P[e].name}: Equipment → ${B[e].slot}.`)])),skinArmor:()=>{const e=n(),u="skin30";e.ownsSkin(u)||e.data.ownedSkins.push(u),e.wearSkin(u);const g=["crown","phoenix","storm","phantom","overdrive"].map(b);m(g);for(const l of g)e.equip(l);return'Wearing Phoenix Warrior with a full Mythic armour set: flip "Show skin over armor" to compare.'},armorSet:()=>{const e=["crown","phoenix","storm","phantom","overdrive"].map(b);m(e);for(const u of e)n().equip(u);return"Added and equipped a full Mythic armour set."}};return{html:w,actions:c}}const gt=`
/* A slim tab on the left edge, beside the character on the home screen: never over the top bar, cards or HUD. */
#test-ribbon {
  position: absolute; left: var(--safe-left, 0px); top: 34%; translate: 0 -50%; z-index: 40;
  writing-mode: vertical-rl; rotate: 180deg; font: 900 11px/1 system-ui, sans-serif; letter-spacing: 2px;
  color: #1a0f00; background: #ffb020; padding: 10px 6px; min-width: 26px; border: 0; border-radius: 8px 0 0 8px; /* (rotated: the right side ends up rounded) */
  box-shadow: 0 2px 8px rgba(0,0,0,0.4); white-space: nowrap; cursor: pointer;
}
#test-menu .tm-label { font: 700 11px system-ui, sans-serif; color: #ffb020; text-align: center; word-break: break-all; }
/* Taller than a phone screen: it scrolls (the card's auto margins centre it when it fits, without clipping its top when it doesn't). */
#test-menu {
  position: absolute; inset: 0; z-index: 41; display: grid; justify-items: center; padding: 16px; background: rgba(0,0,0,0.65);
  overflow-y: auto; overscroll-behavior: contain; touch-action: pan-y;
}
#test-menu.hidden { display: none; }
#test-menu .tm-card {
  margin-block: auto; width: 100%; max-width: 340px; display: flex; flex-direction: column; gap: 8px; padding: 14px; border-radius: 16px;
  background: #1b2116; border: 2px solid #ffb020; color: #eaf2e3; font: 14px system-ui, sans-serif;
}
#test-menu h3 { margin: 0; font-size: 16px; letter-spacing: 2px; color: #ffb020; text-align: center; }
#test-menu p { margin: 0; font-size: 12px; color: #9fb196; text-align: center; }
#test-menu button {
  appearance: none; min-height: 44px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.2);
  background: #2b3524; color: inherit; font: 800 14px system-ui, sans-serif; cursor: pointer;
}
#test-menu button.tm-close { background: transparent; color: #9fb196; }
#test-menu button.tm-danger { background: #4a1f1f; }
#test-menu select { min-height: 44px; border-radius: 10px; background: #2b3524; color: inherit; font: 800 14px system-ui, sans-serif; border: 1px solid rgba(255,255,255,0.2); padding: 0 8px; }
#test-menu .tm-run { display: flex; flex-direction: column; gap: 6px; padding: 8px; border-radius: 12px; background: rgba(255,176,32,0.08); }
#test-menu .tm-run b { font-size: 12px; color: #ffb020; text-align: center; letter-spacing: 1px; }
#test-menu button.tm-on { background: #6b4a0a; border-color: #ffd84a; }
#test-menu .tm-done { min-height: 16px; font-size: 12px; color: #6dff7a; text-align: center; }
/* Camera zoom: a row in the menu, and the same slider in a small panel the tab opens during a run. */
.tm-zoom { display: flex; flex-direction: column; gap: 4px; }
.tm-zoom input { width: 100%; height: 44px; margin: 0; accent-color: #ffb020; touch-action: pan-x; }
.tm-zoom .tm-zoom-val { font: 800 13px system-ui, sans-serif; color: #ffd84a; text-align: center; }
.tm-zoom button { min-height: 36px !important; font-size: 12px !important; }
#test-zoom {
  position: absolute; left: calc(var(--safe-left, 0px) + 30px); top: 34%; translate: 0 -50%; z-index: 40; width: min(240px, 70vw);
  padding: 8px 10px; border-radius: 12px; background: rgba(27,33,22,0.92); border: 2px solid #ffb020; color: #eaf2e3;
  font: 12px system-ui, sans-serif;
}
#test-zoom.hidden { display: none; }
/* Shown in the in-run HUD while a test arena is on (world/CleanArena.ts). */
#test-arena-tag {
  position: absolute; left: 50%; bottom: calc(var(--safe-bottom, 0px) + 8px); translate: -50% 0; padding: 3px 8px; border-radius: 6px;
  background: rgba(255,176,32,0.85); color: #1a0f00; font: 900 10px/1.2 system-ui, sans-serif; letter-spacing: 1px; white-space: nowrap;
}
#test-arena-tag:empty { display: none; }
#test-zoom b { font-size: 11px; color: #ffb020; letter-spacing: 1px; text-align: center; }
#test-zoom button { appearance: none; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); background: #2b3524; color: inherit; font: 800 12px system-ui, sans-serif; }
#test-zoom .tm-drops { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-top: 8px; }
#test-zoom .tm-drops b { grid-column: 1 / -1; }
#test-zoom .tm-drops button { min-height: 44px; }
#test-zoom .tm-drops button[data-drop=""] { grid-column: 1 / -1; }
`,Z=it(`zs.camzoom@${N}`),X=.8,J=2,K=`<div class="tm-zoom"><b>📷 CAMERA ZOOM</b>
  <input type="range" min="${X}" max="${J}" step="0.02" aria-label="Camera zoom">
  <span class="tm-zoom-val"></span>
  <button data-zoom="default">Back to default (×${N.toFixed(2)})</button></div>`,yt=[["common","pistol"],["rare","crossbow"],["epic","flamethrower"]];function St(n){const o=n,s=()=>o.save,m=document.getElementById("app")??document.body,b=ft(s,t=>{e.classList.add("hidden"),o.menus.chests.show([t],()=>o.menus.show("home"))},t=>{e.classList.add("hidden"),o.menus.chests.showBought(t,null,()=>o.menus.show("home"))}),w=document.createElement("style");w.textContent=gt,document.head.appendChild(w);const c=document.createElement("button");c.id="test-ribbon",c.textContent="🧪 TEST VERSION",c.title="Test menu (home screen)",m.appendChild(c);const e=document.createElement("div");e.id="test-menu",e.className="hidden",e.innerHTML=`
    <div class="tm-card">
      <h3>🧪 TEST MENU</h3>
      <div class="tm-label">${ot}${`<br>Published ${new Date(at).toLocaleString()}`}</div>
      <p>Only in this test version. It changes the test save, never the live game.</p>
      <button data-act="houses">🔓 Unlock all houses</button>
      <button data-act="coins">🪙 +10,000 coins</button>
      <button data-act="scrap">🔩 +5,000 Scrap</button>
      <button data-act="diamonds">💎 +10,000 Diamonds</button>
      <button data-act="missionsDone">📋 Complete all missions</button>
      <button data-act="missionsReset">↺ Reset missions</button>
      <button data-act="sets">🔀 Add merge sets (3 identical items, every slot)</button>
      <button data-act="weapons">🔫 Add one of every weapon</button>
      <button data-act="chests">🎁 Add 3 boss chests</button>
      <button data-act="skinsAll">👕 Unlock all skins</button>
      <button data-act="skinsNone">🔒 Lock all skins again</button>
      <div class="tm-run">
        <b>SHOP PITY · the next chest bought is the guaranteed one</b>
        ${I.map(t=>`<button data-act="pity-${t.id}">🎯 ${t.name}: counter → ${t.pity-1}</button>`).join("")}
        <button data-act="pity-reset">↺ All pity counters → 0</button>
      </div>
      ${b.html}
      <div class="tm-run">
        <b>NEXT RUNS</b>
        <select data-run="weapon"><option value="">🔫 Weapon: the equipped one</option>${D.map(t=>`<option value="${t}">🔫 Weapon: ${E[t].name}</option>`).join("")}</select>
        <button data-act="maxAll">⭐ Max all upgrades: OFF</button>
      </div>
      <div class="tm-run">
        <b>TEST ARENA · every house, next runs</b>
        <button data-act="arenaMap"></button>
        <button data-act="arenaObstacles"></button>
        <p>Clean: flat grey floor, plain grey obstacles (same places and size), no scenery or fog. Zombies, stages and balance are the real house.</p>
      </div>
      <div class="tm-run">
        <b>TRANSITION MAP</b>
        <button data-act="transitionUnlock">🚧 Unlock transition map</button>
        <div class="tm-row">${Array.from({length:z.stages},(t,a)=>`<button data-act="transition-${a+1}">▶ Stage ${a+1}</button>`).join("")}</div>
        <p>Starts a transition run at that stage, with your gear and talents (no level-ups yet: try ⭐ Max all upgrades).</p>
      </div>
      <div class="tm-run">${K}<p>During a run, tap the 🧪 tab for this slider and the supply-drop buttons.</p></div>
      <button data-act="reset" class="tm-danger">🗑️ Reset the test save</button>
      <div class="tm-done"></div>
      <button data-act="close" class="tm-close">CLOSE</button>
    </div>`,m.appendChild(e);const u=e.querySelector(".tm-done"),g=t=>{s().data.inventory.push(...t),s().save()},l={weapon:"",maxAll:!1},M=e.querySelector('[data-act="maxAll"]'),y=e.querySelector('[data-run="weapon"]');y.addEventListener("change",()=>{l.weapon=y.value,u.textContent=l.weapon?`Next runs use the ${E[l.weapon].name}.`:"Next runs use the equipped weapon."});const T=o.newRun.bind(o);o.newRun=t=>{if(o.loadoutOverride=null,l.weapon){const a=E[l.weapon],p=a.minRarity==="mythic"||a.minRarity==="legendary"||a.minRarity==="cosmic"?a.minRarity:"epic";o.loadoutOverride={...s().loadout(),weapon:A("weapon",p,s().topHouse(),l.weapon)}}if(T(t),!!l.maxAll){for(const a of pt)if(Number.isFinite(a.max))for(;o.upgrades.levels[a.id]<a.max;)o.applyUpgrade(a.id);for(const a of mt(o.upgrades.style))for(;(o.upgrades.perks[a.id]??0)<5;)o.applyUpgrade(a.id);o.pendingLevelUps=Math.max(o.pendingLevelUps,1)}};const $=o.toHome.bind(o);o.toHome=()=>{l.weapon&&(o.loadoutOverride=null),$()},nt();const i=document.createElement("div");i.id="test-arena-tag",document.getElementById("hud")?.appendChild(i);const r=()=>{const t=e.querySelector('[data-act="arenaMap"]'),a=e.querySelector('[data-act="arenaObstacles"]');t.textContent=`🗺️ Map: ${h.map==="clean"?"Clean":"Normal"}`,t.classList.toggle("tm-on",h.map==="clean"),a.textContent=`🪨 Obstacles: ${h.obstacles?"ON":"OFF"}`,a.classList.toggle("tm-on",!h.obstacles),i.textContent=rt()};r();const C={...b.actions,arenaMap:()=>(h.map=h.map==="clean"?"normal":"clean",j(),r(),h.map==="clean"?"Next runs use the clean arena (every house).":"Next runs use the normal maps."),arenaObstacles:()=>(h.obstacles=!h.obstacles,j(),r(),h.obstacles?"Obstacles are back from the next run.":"Next runs have no obstacles (every house)."),maxAll:()=>(l.maxAll=!l.maxAll,M.textContent=`⭐ Max all upgrades: ${l.maxAll?"ON":"OFF"}`,M.classList.toggle("tm-on",l.maxAll),l.maxAll?"Next runs start with every upgrade and weapon perk maxed: Elite cards at once.":"Max all upgrades is off."),houses:()=>{for(const t of s().data.houses)t.unlocked=!0;return s().save(),`All ${F.length} houses unlocked.`},coins:()=>(s().addCoins(1e4),"+10,000 coins."),scrap:()=>(s().data.scrap+=5e3,s().save(),"+5,000 Scrap."),diamonds:()=>(s().addDiamonds(1e4),"+10,000 Diamonds."),missionsDone:()=>{const t=s().missions();for(const a of W.daily)t.daily[a.kind]=Math.max(t.daily[a.kind]??0,a.target);for(const a of W.weekly)t.weekly[a.kind]=Math.max(t.weekly[a.kind]??0,a.target);return s().save(),"All missions done: claim them on the Missions screen."},missionsReset:()=>(s().data.missions=ut(),s().save(),"Missions reset: all progress and claims cleared."),sets:()=>{const t=[];for(const a of dt)if(a==="weapon")for(const[p,S]of yt)for(let H=0;H<3;H++)t.push(A("weapon",p,0,S));else for(const p of["common","rare","epic"])for(let S=0;S<3;S++)t.push(A(a,p,0));return g(t),`Added ${t.length} items: 3 identical Common, Rare and Epic items for every slot.`},weapons:()=>{const t=D.map(a=>A("weapon",E[a].minRarity,0,a));return g(t),`Added ${t.length} weapons, each at its lowest rarity.`},skinsAll:()=>(s().setAllSkins(!0),"All skins unlocked: Equipment → 🎨 → SKINS."),skinsNone:()=>(s().setAllSkins(!1),"Only Default is owned again (and worn, if the worn skin was locked)."),chests:()=>{for(let t=0;t<3;t++)s().addChest(V(s().topHouse()));return"Added 3 boss chests: open them with the 🎁 button."},...Object.fromEntries(I.map(t=>[`pity-${t.id}`,()=>(s().setPity(t.id,t.pity-1),`${t.name}: the next one you buy gives ${t.pityRarity==="mythic"?"a Mythic weapon or armour piece":`a ${t.pityRarity} item`} for sure.`)])),transitionUnlock:()=>(s().unlockTransition(),`${z.name} unlocked: its card is after House ${F.length} on the home screen.`),...Object.fromEntries(Array.from({length:z.stages},(t,a)=>[`transition-${a+1}`,()=>{e.classList.add("hidden"),o.transitionStart=a+1;try{o.newRun(st)}finally{o.transitionStart=1}return""}])),"pity-reset":()=>{for(const t of I)s().setPity(t.id,0);return"All shop pity counters are back to 0."},reset:()=>{if(!confirm("Delete the test save and start over? (The live game is not affected.)"))return"";try{localStorage.removeItem(ct)}catch{}return location.reload(),""}},d=document.createElement("div");d.id="test-zoom",d.className="hidden",d.innerHTML=`${K}<div class="tm-drops"><b>📦 SUPPLY DROPS</b>
    <button data-drop="">📦 Drop crate now</button>
    <button data-drop="health">❤️ Health</button><button data-drop="power">🔥 Power</button><button data-drop="shield">🛡️ Shield</button></div>`,d.querySelectorAll("[data-drop]").forEach(t=>t.addEventListener("click",()=>{if(o.state!=="playing")return;const a=t.dataset.drop||void 0;o.supply.crate=null,o.supply.drop(o.player.x,o.player.z,o.obstacles,a,!0)})),m.appendChild(d),bt(o,e,d,s);const v=t=>{t=Math.min(J,Math.max(X,Math.round(t*100)/100)),o.rig.zoom=t,lt(o.scene,t);const a=Math.round((t*t-1)*100),p=`×${t.toFixed(2)} · ${a>=0?"+":""}${a}% ground vs the old view`;for(const S of document.querySelectorAll(".tm-zoom input"))S.value=String(t);for(const S of document.querySelectorAll(".tm-zoom-val"))S.textContent=p;try{localStorage.setItem(Z,String(t))}catch{}};let k=NaN;try{k=parseFloat(localStorage.getItem(Z)??"")}catch{}v(Number.isFinite(k)?k:N);for(const t of[e,d])t.querySelector(".tm-zoom input").addEventListener("input",a=>v(parseFloat(a.target.value))),t.querySelector('[data-zoom="default"]').addEventListener("click",()=>v(N));const x=()=>{if(o.state!=="home"){d.classList.toggle("hidden");return}u.textContent="",e.classList.remove("hidden")};c.addEventListener("click",x),e.addEventListener("click",t=>{const a=t.target;a===e&&e.classList.add("hidden");const p=a.closest("[data-act]")?.dataset.act;if(p){if(p==="close"){e.classList.add("hidden");return}u.textContent=C[p]?.()??"",o.audio?.click?.(),o.refreshLook?.(),o.state==="home"&&o.menus.show(o.menus.current??"home")}});const f=()=>{c.style.opacity=o.state==="home"?"1":"0.55",o.state==="home"&&!d.classList.contains("hidden")&&d.classList.add("hidden"),requestAnimationFrame(f)};f()}export{St as installTestMenu};
