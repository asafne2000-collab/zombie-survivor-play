import{A as pt,a as ht,P as G,S as bt,e as I,b as yt,c as ft,M as Y,d as _,W as O,C as R,f as D,g as V,m as x,r as dt,R as gt,h as j,i as St,j as Z,k as X,s as vt,l as xt,N as J,n as wt,o as kt,p as z,q as Ct,t as Q,O as tt,u as Et,B as At,v as $t,w as q,x as et,T as B,y as Tt,z as Ot,D as Nt,E as U,F as v,G as Rt,H as Mt,I as Pt,J as It,K as nt,L as Lt,Q as at,U as ot,V as Ut,X as Ht}from"./index-D19ROpiN.js";import{fakeStore as C}from"./FakeStore-DYOVzL_G.js";function _t(e,t){const s=`
    <div class="tm-run">
      <b>ACHIEVEMENTS · then tap 🏆 on the home screen</b>
      <select id="tm-ach-pick">${pt.map(d=>`<option value="${d.id}">🏆 ${d.name}${d.hidden?" (hidden)":""}</option>`).join("")}</select>
      <button data-act="achOne">✓ Complete the achievement picked above</button>
      <button data-act="achAll">✓✓ Complete all achievements</button>
      <button data-act="achKills">🧟 +10,000 zombie kills</button>
      <button data-act="achGoblins">👺 +10,000 goblin kills</button>
      <button data-act="achReset">↺ Reset achievements (and lifetime counters)</button>
      <p>Completing makes it claimable: its reward is given when you tap CLAIM on the Achievements page. Reset takes back no rewards already claimed (Diamonds, skins, items).</p>
    </div>`,m=d=>(t(),d);return{html:s,actions:{achOne:()=>{const d=document.getElementById("tm-ach-pick")?.value??"";return e().testAchievements(d),m(`"${ht[d]?.name}" is complete: claim it on the Achievements page.`)},achAll:()=>(e().testAchievements("all"),m("Every achievement is complete: claim them on the Achievements page.")),achReset:()=>(e().testAchievements("reset"),m("Achievements and lifetime counters reset (rewards already claimed are kept).")),achKills:()=>(e().addStat("zombieKills",1e4),e().save(),m(`Zombie kills: ${e().data.stats.zombieKills.toLocaleString("en-US")}.`)),achGoblins:()=>(e().addStat("goblinKills",1e4),e().save(),m(`Goblin kills: ${e().data.stats.goblinKills.toLocaleString("en-US")}.`))}}}const st={shaman:"Shaman",wolfRider:"Wolf Rider",slime:"Crystal Slime",burrower:"Burrower",hexer:"Hexer",illusionist:"Illusionist",sapper:"Sapper",drummer:"War Drummer"},F={oak:"Cursed Oak",warchief:"Warchief",golem:"Crystal Golem",wyrm:"Cave Wyrm",witch:"Bog Witch",hydra:"Bog Hydra",siege:"Siege Engine",king:"Goblin King"},Dt=`
#test-menu .tm-pu select { width: 100%; }
#test-zoom .tm-pu-spawn { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-top: 8px; }
#test-zoom .tm-pu-spawn b { grid-column: 1 / -1; }
#test-zoom .tm-pu-spawn button { min-height: 44px; }
#test-zoom .tm-pu-spawn.hidden { display: none; }
`;function zt(e,t,s,m){const i=document.createElement("style");i.textContent=Dt,document.head.appendChild(i);const d=t.querySelector(".tm-done"),r=document.createElement("div");r.className="tm-run tm-pu",r.innerHTML=`
    <b>PARALLEL UNIVERSE</b>
    <button data-pu="unlock">🌀 Unlock all PU houses</button>
    <select data-pu-house>${G.map((u,h)=>`<option value="${h}">Parallel ${h+1} · ${u.name}</option>`).join("")}</select>
    <select data-pu-stage>${Array.from({length:bt},(u,h)=>`<option value="${h+1}">Stage ${h+1}${h===4?" · boss":h===9?" · final boss":""}</option>`).join("")}</select>
    <button data-pu="start">▶ Start PU house at this stage</button>
    <button data-pu="elf"></button>
    <p>During a PU run, tap the 🧪 tab for buttons that spawn each new enemy and boss next to you.</p>`,([...t.querySelectorAll(".tm-run")].find(u=>u.textContent?.includes("TRANSITION MAP"))??t.querySelector(".tm-done")).after(r);const l=r.querySelector('[data-pu="elf"]'),p=()=>{l.textContent=`🧝 Elf look: ${I.on?"ON":"OFF"}`};p();const b=r.querySelector("[data-pu-house]"),y=r.querySelector("[data-pu-stage]");r.addEventListener("click",u=>{const h=u.target.closest("[data-pu]")?.dataset.pu;if(h==="unlock")m().unlockAllPu(),d.textContent="Every Parallel Universe house is unlocked: their cards are after the Transition.",e.menus.show("home");else if(h==="elf")I.on=!I.on,p(),d.textContent=`The elf look is ${I.on?"on":"off"} for the next PU runs.`;else if(h==="start"){t.classList.add("hidden"),e.puStart=Number(y.value);try{e.newRun(yt+Number(b.value))}finally{e.puStart=1}}});const c=document.createElement("div");c.className="tm-pu-spawn hidden",c.innerHTML=`<b>🌀 SPAWN NEW ENEMY</b>${Object.keys(st).map(u=>`<button data-spawn="${u}">${st[u]}</button>`).join("")}
    <b>☠ SPAWN BOSS</b>${Object.keys(F).map(u=>`<button data-boss="${u}">${F[u]}</button>`).join("")}`,s.appendChild(c);const E=()=>{const u=Math.random()*Math.PI*2,h=e.player;return[Math.max(-22,Math.min(22,h.x+Math.cos(u)*7)),Math.max(-22,Math.min(22,h.z+Math.sin(u)*7))]};c.addEventListener("click",u=>{const h=u.target.closest("button"),$=e.pu;if(!h||!$||e.state!=="playing")return;const[M,P]=E(),T=e.director.stage;if(h.dataset.spawn){const S=h.dataset.spawn,w=e.zombies.spawn(ft[S].base,M,P,T);w&&(e.director.addExtra(1),$.makeSpecial(w,S))}else if(h.dataset.boss){const S=h.dataset.boss,w=e.zombies.spawn("brute",M,P,T,!0);if(w){e.director.addExtra(1);const f=G.some(N=>N.finalBoss===S);$.makeBoss(w,S,f),e.boss=w,e.hud.showBanner(f?"FINAL BOSS":"BOSS",F[S].toUpperCase())}}});const A=()=>{c.classList.toggle("hidden",!e.pu),requestAnimationFrame(A)};A()}const rt=["supernova","starfall","lance","swarm"];function qt(e,t,s){const m=n=>{e().data.inventory.push(...n),e().save()},i=n=>x(V[n].slot,"mythic",e().topHouse(),n),d=`
    <div class="tm-run">
      <b>MYTHIC ARMOUR · power of your highest house</b>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">${Y.map(n=>`<button data-act="armor-${n}">${_[n].icon} ${_[n].name}</button>`).join("")}</div>
      <button data-act="armorSet">✨ Give full Mythic armour set (equipped)</button>
      <button data-act="skinArmor">👕 Wear a skin + full Mythic armour set</button>
      <p>The full set is one piece per slot: Crown of Echoes, Phoenix Vest, Storm Greaves, Phantom Steps, Overdrive Gauntlets. Tap an item for its power. The skin button also wears the Phoenix Warrior skin: flip "Show skin over armor" (Settings, or Equipment → 🎨 → SKINS) to see the skin or the armour.</p>
    </div>
    <div class="tm-run">
      <b>COSMIC WEAPONS</b>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">${rt.map(n=>`<button data-act="cosmic-${n}">✧ ${O[n].name}</button>`).join("")}</div>
      <button data-act="puChest">🌌 Open a PU boss chest (Cosmic moment)</button>
      <button data-act="cosmicPity">🎯 Cosmic pity: counter → ${R.cosmicPity-1}</button>
      <p>The chest button opens a Parallel Universe final-boss chest that holds a Cosmic weapon for sure (it goes into your inventory). The pity button makes the next real PU final-boss chest a Cosmic one.</p>
    </div>
    <div class="tm-run">
      <b>STARLIGHT CHEST ✧ · free test opening (the shop sells it for real money)</b>
      <button data-act="starlight">✧ Open Starlight Chest (test, free)</button>
      <button data-act="starlightPity">🎯 Starlight pity: counter → ${D.pity-1}</button>
      <button data-act="starlightPity0">↺ Starlight pity: counter → 0</button>
      <p>Opens a real Starlight Chest roll with its own pity counter (at ${D.pity-1} without a Cosmic weapon, the next one is Cosmic for sure). The item goes into your inventory. Shop → OFFERS → "i" shows the odds and the counter.</p>
    </div>`,r={...Object.fromEntries(rt.map(n=>[`cosmic-${n}`,()=>(m([x("weapon","cosmic",e().topHouse(),n)]),`Added a Cosmic ${O[n].name}: Equipment → Weapon.`)])),puChest:()=>{const n=dt(e().topHouse(),0,R.cosmicPity);return e().addChest(n),t(n),""},starlight:()=>(s(e().openStarlightChest()),""),starlightPity:()=>(e().setStarlightPity(D.pity-1),"The next Starlight Chest holds a Cosmic weapon for sure."),starlightPity0:()=>(e().setStarlightPity(0),"Starlight pity counter back to 0."),cosmicPity:()=>(e().setCosmicPity(R.cosmicPity-1),"The next Parallel Universe final-boss chest holds a Cosmic weapon for sure."),...Object.fromEntries(Y.map(n=>[`armor-${n}`,()=>(m([i(n)]),`Added ${_[n].name}: Equipment → ${V[n].slot}.`)])),skinArmor:()=>{const n=e(),l="skin30";n.ownsSkin(l)||n.data.ownedSkins.push(l),n.wearSkin(l);const p=["crown","phoenix","storm","phantom","overdrive"].map(i);m(p);for(const b of p)n.equip(b);return'Wearing Phoenix Warrior with a full Mythic armour set: flip "Show skin over armor" to compare.'},armorSet:()=>{const n=["crown","phoenix","storm","phantom","overdrive"].map(i);m(n);for(const l of n)e().equip(l);return"Added and equipped a full Mythic armour set."}};return{html:d,actions:r}}const Bt=[["wooden","Wooden"],["silver","Silver"],["gold","Gold"],["boss","Boss chest"],["mythic","Mythic Chest"],["pu","PU boss chest"],["starlight","Starlight Chest"]],Ft=[...gt,"diamonds"],jt=["common","rare","diamonds","epic","rare","legendary","common","mythic","epic","cosmic"],Kt=["tesla","plasma","frost","blackhole","dragon"],Wt=["supernova","starfall","lance","swarm"],L=e=>e[Math.floor(Math.random()*e.length)];function Gt(e,t){const s=`
    <div class="tm-run">
      <b>CHEST OPENING PREVIEW · nothing is given</b>
      <select data-chest-kind>${Bt.map(([r,n])=>`<option value="${r}">📦 ${n}</option>`).join("")}</select>
      <select data-chest-result>${Ft.map(r=>`<option value="${r}">✨ Result: ${r==="diamonds"?"Diamonds":r[0].toUpperCase()+r.slice(1)}</option>`).join("")}</select>
      <button data-act="chestPreview">▶ Play the opening</button>
      <button data-act="chestTen">🔟 Open 10 in a row (mixed results)</button>
      <p>Any chest with any result, also ones it could never hold. No item, Diamonds or pity counter changes. Tap during an opening to skip to the item.</p>
    </div>`,m=r=>document.querySelector(`#test-menu ${r}`)?.value??"",i=(r,n)=>{const l=e().topHouse();let p=null;n==="cosmic"?p=x("weapon","cosmic",l,L(Wt)):n==="mythic"?p=Math.random()<.5?x("weapon","mythic",l,L(Kt)):x(L(j.filter(y=>y!=="weapon")),"mythic",l):n!=="diamonds"&&(p=x(L(j),n,l));const b=r==="mythic"?St.diamonds:R.diamonds[Math.min(l,R.diamonds.length-1)];return{id:-1,kind:r==="pu"?"boss":r,house:l,item:p,cosmic:r==="pu"||void 0,diamonds:p?0:Math.round(b[0]+Math.random()*(b[1]-b[0]))}};return{html:s,actions:{chestPreview:()=>{const r=m("[data-chest-kind]"),n=m("[data-chest-result]");return t([i(r,n)],()=>i(r,n)),""},chestTen:()=>{const r=m("[data-chest-kind]");return t(jt.map(n=>i(r,n)),null),""}}}}function Yt(e,t){return{html:`
    <div class="tm-run">
      <b>SKIN CHEST · ${Z.length} skins inside</b>
      <button data-act="skinChest">👕 Open Skin Chest (free)</button>
      <button data-act="skinChestAll">✓ Own all chest skins</button>
      <button data-act="skinPity">🎯 Skin pity: counter → ${X.pity-1}</button>
      <button data-act="cosmicSkins">✧ Unlock Cosmic skins</button>
      <p>The free chest is a real roll (a skin you don't own, the pity counter moves; no Diamonds taken). "Own all chest skins" makes the shop's button say "All collected". The pity button makes the next Skin Chest Legendary or Mythic. Lock everything again with "Lock all skins again".</p>
    </div>`,actions:{skinChest:()=>t()?"":'You own every skin in the Skin Chest. Use "Lock all skins again" to start over.',skinChestAll:()=>(e().ownAllChestSkins(),`You own all ${Z.length} chest skins: the shop's Skin Chest now says "All collected".`),skinPity:()=>(e().setSkinPity(X.pity-1),vt(e().data.ownedSkins).some(i=>i.rarity==="legendary"||i.rarity==="mythic")?"The next Skin Chest gives a Legendary or Mythic skin for sure.":"Counter set, but you already own every Legendary and Mythic chest skin."),cosmicSkins:()=>(e().unlockCosmicSkins(),"The 3 Cosmic skins are yours: Equipment → 🎨 → SKINS (bottom group).")}}}function Vt(e,t){return{html:`
    <div class="tm-run">
      <b>REDEEM CODES · ⚙️ Settings → 🎟️ Redeem code</b>
      <button data-act="codesReset">↺ Reset redeemed codes</button>
      <button data-act="shaniSkin">💗 Unlock Shani's skin</button>
      <button data-act="shaniHearts">💗 Replay the hearts celebration</button>
      <button data-act="adminSkins">⚔️👑 Unlock Asaf's skins</button>
      <button data-act="adminKnight">⚔️ Replay the knight celebration</button>
      <button data-act="adminTyrant">👑 Replay the tyrant celebration</button>
      <button data-act="adminBoth">⚔️👑 Replay both + the choice</button>
      <button data-act="ninjaSkin">🥷 Unlock the two secret ninjas</button>
      <p>Codes: ${xt.filter(i=>!i.hidden).map(i=>`<b>${i.code}</b>${i.expires?" (expired example)":""}`).join(", ")}. Each works once per player; "Reset" lets you use them again (rewards already given stay).</p>
    </div>`,actions:{codesReset:()=>(e().resetRedeemedCodes(),"Every code can be redeemed again."),shaniSkin:()=>(e().giveSkin(Ct),`Shani's capybara is yours: Equipment → 🎨 → SKINS (top). Lock it again with "Lock all skins again".`),shaniHearts:()=>(t.shani(),""),adminSkins:()=>{const i=e();return i.data.redeemedCodes.includes(z)&&(i.data.redeemedCodes=i.data.redeemedCodes.filter(d=>d!==z)),i.redeemCode(z),`Asaf's Shining Knight and Ashen Tyrant are yours: Equipment → 🎨 → SKINS (top), and ⚙️ shows "Admin skin effects".`},adminKnight:()=>(t.admin("knight"),""),adminTyrant:()=>(t.admin("tyrant"),""),adminBoth:()=>(t.admin(),""),ninjaSkin:()=>{const i=e();i.data.redeemedCodes.includes(J)||i.data.redeemedCodes.push(J);for(const d of[wt,kt])i.ownsSkin(d)||i.data.ownedSkins.push(d);return i.save(),'The two secret ninjas are yours: Equipment → 🎨 → SKINS (top). "Reset redeemed codes" + reload locks them again.'}}}}const Zt=[["","▶ Play the placeholder video"],["rewarded","✓ Rewarded (skip the video)"],["closed_early","✕ Closed early"],["failed","⚠ Failed"],["unavailable","⛔ Unavailable"]];function Xt(e,t){const s=document.createElement("div");s.className="tm-drops",s.innerHTML=`<b>💖 VIDEO REVIVE</b>
    <button data-rv-test="die">💀 Die now</button>
    <button data-rv-test="reset">↺ Reset revive for this run</button>
    <select data-rv-test="ad" aria-label="Ad result" style="grid-column: 1 / -1; min-height: 44px; border-radius: 8px; background: #2b3524; color: inherit; font: 800 12px system-ui, sans-serif;">
      ${Zt.map(([r,n])=>`<option value="${r}">Ad result: ${n}</option>`).join("")}
    </select>
    <span data-rv-test="info" style="grid-column: 1 / -1; font-size: 11px; color: #9fb196; text-align: center;"></span>`,t.appendChild(s);const m=s.querySelector('[data-rv-test="info"]'),i=s.querySelector("select");i.value=Q.force??"",i.addEventListener("change",()=>{Q.force=i.value||null});const d=r=>{m.textContent=r};s.querySelector('[data-rv-test="die"]').addEventListener("click",()=>{if(e.state!=="playing"||e.dying>=0)return d("Only during a run.");const r=e.player;for(let n=0;n<30&&e.dying<0&&r.hp>0;n++)r.iframe=0,e.supply.shieldT=0,e.hurtPlayer(r.maxHp*1e3);d(e.dying>=0?`Dying… (revives used this run: ${e.revive.used})`:"Saved by Second Wind / Phoenix: tap again."),e.dying>=0&&t.classList.add("hidden")}),s.querySelector('[data-rv-test="reset"]').addEventListener("click",()=>{e.revive.used=0,d("This run can revive again.")})}function Jt(e,t){const s=[["paySuccess","success","✅ Success"],["payCancel","cancel","✖ Cancel"],["payFail","fail","⚠ Fail"],["payPending","pending","⏳ Pending"],["payClosed","closed","💥 Paid, app closes before the grant"]];let m=tt[0].id;const i=`
    <div class="tm-run">
      <b>PAYMENTS · TEST STORE (no real money)</b>
      <select data-pay="offer">${tt.map(n=>`<option value="${n.id}">${n.icon} ${n.name} · ${n.price}</option>`).join("")}</select>
      ${s.map(([n,,l])=>`<button data-act="${n}">${l}</button>`).join("")}
      <button data-act="payClosedAfter">💥 Granted, app closes before the store is told</button>
      <button data-act="payDouble">👆👆 Double tap (two buys at once)</button>
      <button data-act="payPendingOk">✔ Pending payments go through now</button>
      <button data-act="payPendingDrop">✖ Pending payments never arrive</button>
      <button data-act="payRedeliver">🔁 Store sends the last purchase again</button>
      <button data-act="payBundleAgain">⚔️ Try to buy the one-time bundle again</button>
      <button data-act="payNewPhone">📱 New phone: this save forgets the bundle, then Restore</button>
      <button data-act="payReset" class="tm-danger">↺ Clear purchase history + test store</button>
      <p>Pick an offer, then an answer: the shop's real purchase screen opens and the test store answers by itself. Buying from the shop without these buttons shows the test sheet instead. The "app closes" buttons reload the page; the purchase must then arrive by itself, once.</p>
    </div>`;setTimeout(()=>{const n=document.querySelector('[data-pay="offer"]');n?.addEventListener("change",()=>m=n.value)},0);const d=()=>e().data.purchases.length,r={...Object.fromEntries(s.map(([n,l])=>[n,()=>(C.nextAnswer=l,t.buyThroughShop(m),"")])),payClosedAfter:()=>(C.nextAnswer="success",C.closeBeforeFinish=!0,t.buyThroughShop(m),""),payDouble:()=>{const n=d();C.nextAnswer="success";const l=t.purchases();return Promise.all([l.buy(m),l.buy(m)]).then(([p,b])=>{const y=document.querySelector("#test-menu .tm-done");y&&(y.textContent=`First: ${p.status}, second: ${b.status}. Purchases granted: ${d()-n} (must be 1).`)}),"Buying twice at once…"},payPendingOk:()=>`${C.payPending()} pending payment(s) went through. They are delivered at once (close this menu to see them).`,payPendingDrop:()=>`${C.dropPending()} pending payment(s) dropped. Restart the game to see them gone from Settings → Purchases.`,payRedeliver:()=>{const n=e().data.purchases,l=n[n.length-1];if(!l)return"Buy something first.";const p=d(),b=e().data.diamonds;return C.undeliver(l.id)?(t.purchases().restore().then(y=>{const c=document.querySelector("#test-menu .tm-done");c&&(c.textContent=`Store sent ${Et[l.product]?.name??l.product} again: ${y.delivered} delivered, purchases ${p} → ${d()}, Diamonds ${b} → ${e().data.diamonds} (both must stay the same).`)}),"Asking the store again…"):"The last purchase is not in the test store."},payBundleAgain:()=>{const n=d();return t.purchases().buy("warrior_bundle").then(l=>{const p=document.querySelector("#test-menu .tm-done");p&&(p.textContent=`Answer: ${l.status}. Purchases granted: ${d()-n} (must be 0 once you own it).`)}),"Trying to buy the bundle…"},payNewPhone:()=>{const n=e().data;if(!n.purchases.filter(b=>b.product==="warrior_bundle").length)return"Buy the bundle first.";n.purchases=n.purchases.filter(b=>b.product!=="warrior_bundle"),e().save();const p=n.coins;return t.purchases().restore().then(async b=>{const y=await t.purchases().restore(),c=document.querySelector("#test-menu .tm-done"),E=e().data.purchases.filter(A=>A.product==="warrior_bundle").length;c&&(c.textContent=`Restore 1: ${b.delivered} delivered, restore 2: ${y.delivered}. Bundle in this save: ${E} (must be 1), coins +${e().data.coins-p} (must be 5,000). Close this menu to see it.`)}),"Restoring…"},payReset:()=>(e().data.purchases=[],e().save(),C.clear(),"Purchase history and the test store are empty: the one-time bundle is back on the shelf.")};return{html:i,actions:r}}const Qt=`
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
  position: absolute; left: calc(var(--safe-left, 0px) + 30px); top: 50%; translate: 0 -50%; z-index: 40; width: min(240px, 70vw);
  max-height: calc(100% - 24px - var(--safe-top, 0px) - var(--safe-bottom, 0px)); overflow-y: auto; overscroll-behavior: contain; touch-action: pan-y;
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
`,it=Mt(`zs.camzoom@${U}`),lt=.8,ut=2,ct=`<div class="tm-zoom"><b>📷 CAMERA ZOOM</b>
  <input type="range" min="${lt}" max="${ut}" step="0.02" aria-label="Camera zoom">
  <span class="tm-zoom-val"></span>
  <button data-zoom="default">Back to default (×${U.toFixed(2)})</button></div>`,te=[["common","pistol"],["rare","crossbow"],["epic","flamethrower"]];function ae(e){const t=e,s=()=>t.save,m=document.getElementById("app")??document.body,i=_t(s,()=>t.menus.current&&t.menus.show(t.menus.current)),d=qt(s,a=>{c.classList.add("hidden"),t.menus.chests.show([a],()=>t.menus.show("home"))},a=>{c.classList.add("hidden"),t.menus.chests.showBought(a,null,()=>t.menus.show("home"))}),r=Yt(s,()=>{const a=t.menus.shop.openFreeSkinChest(()=>t.menus.show("home"));return a&&c.classList.add("hidden"),a}),n=Vt(s,{shani:()=>{c.classList.add("hidden"),t.celebrateShani()},admin:a=>{c.classList.add("hidden"),t.celebrateAdmin(a)}}),l=Jt(s,{purchases:()=>t.menus.purchases,buyThroughShop:a=>{c.classList.add("hidden"),t.menus.show("shop"),t.menus.offers.open(Nt[a]),document.querySelector(".offer-screen .offer-pay")?.click()}}),p=Gt(s,(a,o)=>{c.classList.add("hidden"),t.menus.chests.preview(a,o)}),b=document.createElement("style");b.textContent=Qt,document.head.appendChild(b);const y=document.createElement("button");y.id="test-ribbon",y.textContent="🧪 TEST VERSION",y.title="Test menu (home screen)",m.appendChild(y);const c=document.createElement("div");c.id="test-menu",c.className="hidden",c.innerHTML=`
    <div class="tm-card">
      <h3>🧪 TEST MENU</h3>
      <div class="tm-label">${At}${`<br>Published ${new Date($t).toLocaleString()}`}</div>
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
        ${q.map(a=>`<button data-act="pity-${a.id}">🎯 ${a.name}: counter → ${a.pity-1}</button>`).join("")}
        <button data-act="pity-reset">↺ All pity counters → 0</button>
      </div>
      ${l.html}
      ${p.html}
      ${r.html}
      ${n.html}
      ${d.html}
      <div class="tm-run">
        <b>NEXT RUNS</b>
        <select data-run="weapon"><option value="">🔫 Weapon: the equipped one</option>${et.map(a=>`<option value="${a}">🔫 Weapon: ${O[a].name}</option>`).join("")}</select>
        <button data-act="maxAll">⭐ Max all upgrades: OFF</button>
      </div>
      <div class="tm-run">
        <b>TEST ARENA · every house, next runs</b>
        <button data-act="arenaMap"></button>
        <button data-act="arenaObstacles"></button>
        <p>Clean: flat grey floor, plain grey obstacles (same places and size), no scenery or fog. Zombies, stages and balance are the real house.</p>
      </div>
      ${i.html}
      <div class="tm-run">
        <b>TRANSITION MAP</b>
        <button data-act="transitionUnlock">🚧 Unlock transition map</button>
        <div class="tm-row">${Array.from({length:B.stages},(a,o)=>`<button data-act="transition-${o+1}">▶ Stage ${o+1}</button>`).join("")}</div>
        <p>Starts a transition run at that stage, with your gear and talents (no level-ups yet: try ⭐ Max all upgrades).</p>
      </div>
      <div class="tm-run">${ct}<p>During a run, tap the 🧪 tab for this slider, the supply-drop buttons and 💖 VIDEO REVIVE (die now, the ad's answer, reset).</p></div>
      <button data-act="reset" class="tm-danger">🗑️ Reset the test save</button>
      <div class="tm-done"></div>
      <button data-act="close" class="tm-close">CLOSE</button>
    </div>`,m.appendChild(c);const E=c.querySelector(".tm-done"),A=a=>{s().data.inventory.push(...a),s().save()},u={weapon:"",maxAll:!1},h=c.querySelector('[data-act="maxAll"]'),$=c.querySelector('[data-run="weapon"]');$.addEventListener("change",()=>{u.weapon=$.value,E.textContent=u.weapon?`Next runs use the ${O[u.weapon].name}.`:"Next runs use the equipped weapon."});const M=t.newRun.bind(t);t.newRun=a=>{if(t.loadoutOverride=null,u.weapon){const o=O[u.weapon],g=o.minRarity==="mythic"||o.minRarity==="legendary"||o.minRarity==="cosmic"?o.minRarity:"epic";t.loadoutOverride={...s().loadout(),weapon:x("weapon",g,s().topHouse(),u.weapon)}}if(M(a),!!u.maxAll){for(const o of Ut)if(Number.isFinite(o.max))for(;t.upgrades.levels[o.id]<o.max;)t.applyUpgrade(o.id);for(const o of Ht(t.upgrades.style))for(;(t.upgrades.perks[o.id]??0)<5;)t.applyUpgrade(o.id);t.pendingLevelUps=Math.max(t.pendingLevelUps,1)}};const P=t.toHome.bind(t);t.toHome=()=>{u.weapon&&(t.loadoutOverride=null),P()},Tt();const T=document.createElement("div");T.id="test-arena-tag",document.getElementById("hud")?.appendChild(T);const S=()=>{const a=c.querySelector('[data-act="arenaMap"]'),o=c.querySelector('[data-act="arenaObstacles"]');a.textContent=`🗺️ Map: ${v.map==="clean"?"Clean":"Normal"}`,a.classList.toggle("tm-on",v.map==="clean"),o.textContent=`🪨 Obstacles: ${v.obstacles?"ON":"OFF"}`,o.classList.toggle("tm-on",!v.obstacles),T.textContent=Rt()};S();const w={...d.actions,...p.actions,...l.actions,...r.actions,...n.actions,arenaMap:()=>(v.map=v.map==="clean"?"normal":"clean",ot(),S(),v.map==="clean"?"Next runs use the clean arena (every house).":"Next runs use the normal maps."),arenaObstacles:()=>(v.obstacles=!v.obstacles,ot(),S(),v.obstacles?"Obstacles are back from the next run.":"Next runs have no obstacles (every house)."),...i.actions,maxAll:()=>(u.maxAll=!u.maxAll,h.textContent=`⭐ Max all upgrades: ${u.maxAll?"ON":"OFF"}`,h.classList.toggle("tm-on",u.maxAll),u.maxAll?"Next runs start with every upgrade and weapon perk maxed: Elite cards at once.":"Max all upgrades is off."),houses:()=>{for(const a of s().data.houses)a.unlocked=!0;return s().save(),`All ${nt.length} houses unlocked.`},coins:()=>(s().addCoins(1e4),"+10,000 coins."),scrap:()=>(s().data.scrap+=5e3,s().save(),"+5,000 Scrap."),diamonds:()=>(s().addDiamonds(1e4),"+10,000 Diamonds."),missionsDone:()=>{const a=s().missions();for(const o of at.daily)a.daily[o.kind]=Math.max(a.daily[o.kind]??0,o.target);for(const o of at.weekly)a.weekly[o.kind]=Math.max(a.weekly[o.kind]??0,o.target);return s().save(),"All missions done: claim them on the Missions screen."},missionsReset:()=>(s().data.missions=Lt(),s().save(),"Missions reset: all progress and claims cleared."),sets:()=>{const a=[];for(const o of j)if(o==="weapon")for(const[g,k]of te)for(let W=0;W<3;W++)a.push(x("weapon",g,0,k));else for(const g of["common","rare","epic"])for(let k=0;k<3;k++)a.push(x(o,g,0));return A(a),`Added ${a.length} items: 3 identical Common, Rare and Epic items for every slot.`},weapons:()=>{const a=et.map(o=>x("weapon",O[o].minRarity,0,o));return A(a),`Added ${a.length} weapons, each at its lowest rarity.`},skinsAll:()=>(s().setAllSkins(!0),"All skins unlocked: Equipment → 🎨 → SKINS."),skinsNone:()=>(s().setAllSkins(!1),"Only Default is owned again (and worn, if the worn skin was locked)."),chests:()=>{for(let a=0;a<3;a++)s().addChest(dt(s().topHouse()));return"Added 3 boss chests: open them with the 🎁 button."},...Object.fromEntries(q.map(a=>[`pity-${a.id}`,()=>(s().setPity(a.id,a.pity-1),`${a.name}: the next one you buy gives ${a.pityRarity==="mythic"?"a Mythic weapon or armour piece":`a ${a.pityRarity} item`} for sure.`)])),transitionUnlock:()=>(s().unlockTransition(),`${B.name} unlocked: its card is after House ${nt.length} on the home screen.`),...Object.fromEntries(Array.from({length:B.stages},(a,o)=>[`transition-${o+1}`,()=>{c.classList.add("hidden"),t.transitionStart=o+1;try{t.newRun(Ot)}finally{t.transitionStart=1}return""}])),"pity-reset":()=>{for(const a of q)s().setPity(a.id,0);return"All shop pity counters are back to 0."},reset:()=>{if(!confirm("Delete the test save and start over? (The live game is not affected.)"))return"";try{localStorage.removeItem(It)}catch{}return location.reload(),""}},f=document.createElement("div");f.id="test-zoom",f.className="hidden",f.innerHTML=`${ct}<div class="tm-drops"><b>📦 SUPPLY DROPS</b>
    <button data-drop="">📦 Drop crate now</button>
    <button data-drop="health">❤️ Health</button><button data-drop="power">🔥 Power</button><button data-drop="shield">🛡️ Shield</button></div>
    <div class="tm-drops"><b>✧ COSMIC SKIN FORM</b><button data-form="1">Base</button><button data-form="5">Lv 5</button><button data-form="10">Lv 10</button><button data-form="15">Lv 15</button></div>`,f.querySelectorAll("[data-drop]").forEach(a=>a.addEventListener("click",()=>{if(t.state!=="playing")return;const o=a.dataset.drop||void 0;t.supply.crate=null,t.supply.drop(t.player.x,t.player.z,t.obstacles,o,!0)})),f.querySelectorAll("[data-form]").forEach(a=>a.addEventListener("click",()=>{const o=Number(a.dataset.form),g=t.player.model.wholeBody;o===1?g?.setRunLevel?.(1,!0):g?.setRunLevel?.(o)})),m.appendChild(f),zt(t,c,f,s),Xt(t,f);const N=a=>{a=Math.min(ut,Math.max(lt,Math.round(a*100)/100)),t.rig.zoom=a,Pt(t.scene,a);const o=Math.round((a*a-1)*100),g=`×${a.toFixed(2)} · ${o>=0?"+":""}${o}% ground vs the old view`;for(const k of document.querySelectorAll(".tm-zoom input"))k.value=String(a);for(const k of document.querySelectorAll(".tm-zoom-val"))k.textContent=g;try{localStorage.setItem(it,String(a))}catch{}};let H=NaN;try{H=parseFloat(localStorage.getItem(it)??"")}catch{}N(Number.isFinite(H)?H:U);for(const a of[c,f])a.querySelector(".tm-zoom input").addEventListener("input",o=>N(parseFloat(o.target.value))),a.querySelector('[data-zoom="default"]').addEventListener("click",()=>N(U));const mt=()=>{if(t.state!=="home"){f.classList.toggle("hidden");return}E.textContent="",c.classList.remove("hidden")};y.addEventListener("click",mt),c.addEventListener("click",a=>{const o=a.target;o===c&&c.classList.add("hidden");const g=o.closest("[data-act]")?.dataset.act;if(g){if(g==="close"){c.classList.add("hidden");return}E.textContent=w[g]?.()??"",t.audio?.click?.(),t.refreshLook?.(),t.state==="home"&&t.menus.show(t.menus.current??"home")}});const K=()=>{y.style.opacity=t.state==="home"?"1":"0.55",t.state==="home"&&!f.classList.contains("hidden")&&f.classList.add("hidden"),requestAnimationFrame(K)};K()}export{ae as installTestMenu};
