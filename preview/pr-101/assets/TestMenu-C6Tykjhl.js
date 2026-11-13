import{A as mt,a as ht,P as W,S as bt,e as N,b as yt,c as ft,M as G,d as H,W as R,C as P,f as B,g as Y,m as x,r as lt,R as gt,h as F,i as vt,j as V,k as Z,s as St,l as xt,N as X,n as J,o as wt,p as Q,O as tt,q as kt,B as Ct,t as Et,u as D,v as et,T as z,w as At,x as $t,y as Tt,z as U,D as S,E as Rt,F as Ot,G as Pt,H as Mt,I as Lt,J as nt,K as Nt,L as at,Q as st,U as It,V as Ut}from"./index-CURhcYV3.js";import{fakeStore as C}from"./FakeStore-CycwIm0w.js";function _t(n,t){const s=`
    <div class="tm-run">
      <b>ACHIEVEMENTS · then tap 🏆 on the home screen</b>
      <select id="tm-ach-pick">${mt.map(l=>`<option value="${l.id}">🏆 ${l.name}${l.hidden?" (hidden)":""}</option>`).join("")}</select>
      <button data-act="achOne">✓ Complete the achievement picked above</button>
      <button data-act="achAll">✓✓ Complete all achievements</button>
      <button data-act="achKills">🧟 +10,000 zombie kills</button>
      <button data-act="achGoblins">👺 +10,000 goblin kills</button>
      <button data-act="achReset">↺ Reset achievements (and lifetime counters)</button>
      <p>Completing makes it claimable: its reward is given when you tap CLAIM on the Achievements page. Reset takes back no rewards already claimed (Diamonds, skins, items).</p>
    </div>`,p=l=>(t(),l);return{html:s,actions:{achOne:()=>{const l=document.getElementById("tm-ach-pick")?.value??"";return n().testAchievements(l),p(`"${ht[l]?.name}" is complete: claim it on the Achievements page.`)},achAll:()=>(n().testAchievements("all"),p("Every achievement is complete: claim them on the Achievements page.")),achReset:()=>(n().testAchievements("reset"),p("Achievements and lifetime counters reset (rewards already claimed are kept).")),achKills:()=>(n().addStat("zombieKills",1e4),n().save(),p(`Zombie kills: ${n().data.stats.zombieKills.toLocaleString("en-US")}.`)),achGoblins:()=>(n().addStat("goblinKills",1e4),n().save(),p(`Goblin kills: ${n().data.stats.goblinKills.toLocaleString("en-US")}.`))}}}const ot={shaman:"Shaman",wolfRider:"Wolf Rider",slime:"Crystal Slime",burrower:"Burrower",hexer:"Hexer",illusionist:"Illusionist",sapper:"Sapper",drummer:"War Drummer"},q={oak:"Cursed Oak",warchief:"Warchief",golem:"Crystal Golem",wyrm:"Cave Wyrm",witch:"Bog Witch",hydra:"Bog Hydra",siege:"Siege Engine",king:"Goblin King"},Ht=`
#test-menu .tm-pu select { width: 100%; }
#test-zoom .tm-pu-spawn { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-top: 8px; }
#test-zoom .tm-pu-spawn b { grid-column: 1 / -1; }
#test-zoom .tm-pu-spawn button { min-height: 44px; }
#test-zoom .tm-pu-spawn.hidden { display: none; }
`;function Bt(n,t,s,p){const c=document.createElement("style");c.textContent=Ht,document.head.appendChild(c);const l=t.querySelector(".tm-done"),r=document.createElement("div");r.className="tm-run tm-pu",r.innerHTML=`
    <b>PARALLEL UNIVERSE</b>
    <button data-pu="unlock">🌀 Unlock all PU houses</button>
    <select data-pu-house>${W.map((u,h)=>`<option value="${h}">Parallel ${h+1} · ${u.name}</option>`).join("")}</select>
    <select data-pu-stage>${Array.from({length:bt},(u,h)=>`<option value="${h+1}">Stage ${h+1}${h===4?" · boss":h===9?" · final boss":""}</option>`).join("")}</select>
    <button data-pu="start">▶ Start PU house at this stage</button>
    <button data-pu="elf"></button>
    <p>During a PU run, tap the 🧪 tab for buttons that spawn each new enemy and boss next to you.</p>`,([...t.querySelectorAll(".tm-run")].find(u=>u.textContent?.includes("TRANSITION MAP"))??t.querySelector(".tm-done")).after(r);const d=r.querySelector('[data-pu="elf"]'),m=()=>{d.textContent=`🧝 Elf look: ${N.on?"ON":"OFF"}`};m();const b=r.querySelector("[data-pu-house]"),y=r.querySelector("[data-pu-stage]");r.addEventListener("click",u=>{const h=u.target.closest("[data-pu]")?.dataset.pu;if(h==="unlock")p().unlockAllPu(),l.textContent="Every Parallel Universe house is unlocked: their cards are after the Transition.",n.menus.show("home");else if(h==="elf")N.on=!N.on,m(),l.textContent=`The elf look is ${N.on?"on":"off"} for the next PU runs.`;else if(h==="start"){t.classList.add("hidden"),n.puStart=Number(y.value);try{n.newRun(yt+Number(b.value))}finally{n.puStart=1}}});const i=document.createElement("div");i.className="tm-pu-spawn hidden",i.innerHTML=`<b>🌀 SPAWN NEW ENEMY</b>${Object.keys(ot).map(u=>`<button data-spawn="${u}">${ot[u]}</button>`).join("")}
    <b>☠ SPAWN BOSS</b>${Object.keys(q).map(u=>`<button data-boss="${u}">${q[u]}</button>`).join("")}`,s.appendChild(i);const E=()=>{const u=Math.random()*Math.PI*2,h=n.player;return[Math.max(-22,Math.min(22,h.x+Math.cos(u)*7)),Math.max(-22,Math.min(22,h.z+Math.sin(u)*7))]};i.addEventListener("click",u=>{const h=u.target.closest("button"),$=n.pu;if(!h||!$||n.state!=="playing")return;const[M,L]=E(),T=n.director.stage;if(h.dataset.spawn){const v=h.dataset.spawn,w=n.zombies.spawn(ft[v].base,M,L,T);w&&(n.director.addExtra(1),$.makeSpecial(w,v))}else if(h.dataset.boss){const v=h.dataset.boss,w=n.zombies.spawn("brute",M,L,T,!0);if(w){n.director.addExtra(1);const f=W.some(O=>O.finalBoss===v);$.makeBoss(w,v,f),n.boss=w,n.hud.showBanner(f?"FINAL BOSS":"BOSS",q[v].toUpperCase())}}});const A=()=>{i.classList.toggle("hidden",!n.pu),requestAnimationFrame(A)};A()}const rt=["supernova","starfall","lance","swarm"];function Dt(n,t,s){const p=a=>{n().data.inventory.push(...a),n().save()},c=a=>x(Y[a].slot,"mythic",n().topHouse(),a),l=`
    <div class="tm-run">
      <b>MYTHIC ARMOUR · power of your highest house</b>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">${G.map(a=>`<button data-act="armor-${a}">${H[a].icon} ${H[a].name}</button>`).join("")}</div>
      <button data-act="armorSet">✨ Give full Mythic armour set (equipped)</button>
      <button data-act="skinArmor">👕 Wear a skin + full Mythic armour set</button>
      <p>The full set is one piece per slot: Crown of Echoes, Phoenix Vest, Storm Greaves, Phantom Steps, Overdrive Gauntlets. Tap an item for its power. The skin button also wears the Phoenix Warrior skin: flip "Show skin over armor" (Settings, or Equipment → 🎨 → SKINS) to see the skin or the armour.</p>
    </div>
    <div class="tm-run">
      <b>COSMIC WEAPONS</b>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">${rt.map(a=>`<button data-act="cosmic-${a}">✧ ${R[a].name}</button>`).join("")}</div>
      <button data-act="puChest">🌌 Open a PU boss chest (Cosmic moment)</button>
      <button data-act="cosmicPity">🎯 Cosmic pity: counter → ${P.cosmicPity-1}</button>
      <p>The chest button opens a Parallel Universe final-boss chest that holds a Cosmic weapon for sure (it goes into your inventory). The pity button makes the next real PU final-boss chest a Cosmic one.</p>
    </div>
    <div class="tm-run">
      <b>STARLIGHT CHEST ✧ · free test opening (the shop sells it for real money)</b>
      <button data-act="starlight">✧ Open Starlight Chest (test, free)</button>
      <button data-act="starlightPity">🎯 Starlight pity: counter → ${B.pity-1}</button>
      <button data-act="starlightPity0">↺ Starlight pity: counter → 0</button>
      <p>Opens a real Starlight Chest roll with its own pity counter (at ${B.pity-1} without a Cosmic weapon, the next one is Cosmic for sure). The item goes into your inventory. Shop → OFFERS → "i" shows the odds and the counter.</p>
    </div>`,r={...Object.fromEntries(rt.map(a=>[`cosmic-${a}`,()=>(p([x("weapon","cosmic",n().topHouse(),a)]),`Added a Cosmic ${R[a].name}: Equipment → Weapon.`)])),puChest:()=>{const a=lt(n().topHouse(),0,P.cosmicPity);return n().addChest(a),t(a),""},starlight:()=>(s(n().openStarlightChest()),""),starlightPity:()=>(n().setStarlightPity(B.pity-1),"The next Starlight Chest holds a Cosmic weapon for sure."),starlightPity0:()=>(n().setStarlightPity(0),"Starlight pity counter back to 0."),cosmicPity:()=>(n().setCosmicPity(P.cosmicPity-1),"The next Parallel Universe final-boss chest holds a Cosmic weapon for sure."),...Object.fromEntries(G.map(a=>[`armor-${a}`,()=>(p([c(a)]),`Added ${H[a].name}: Equipment → ${Y[a].slot}.`)])),skinArmor:()=>{const a=n(),d="skin30";a.ownsSkin(d)||a.data.ownedSkins.push(d),a.wearSkin(d);const m=["crown","phoenix","storm","phantom","overdrive"].map(c);p(m);for(const b of m)a.equip(b);return'Wearing Phoenix Warrior with a full Mythic armour set: flip "Show skin over armor" to compare.'},armorSet:()=>{const a=["crown","phoenix","storm","phantom","overdrive"].map(c);p(a);for(const d of a)n().equip(d);return"Added and equipped a full Mythic armour set."}};return{html:l,actions:r}}const zt=[["wooden","Wooden"],["silver","Silver"],["gold","Gold"],["boss","Boss chest"],["mythic","Mythic Chest"],["pu","PU boss chest"],["starlight","Starlight Chest"]],qt=[...gt,"diamonds"],Ft=["common","rare","diamonds","epic","rare","legendary","common","mythic","epic","cosmic"],jt=["tesla","plasma","frost","blackhole","dragon"],Kt=["supernova","starfall","lance","swarm"],I=n=>n[Math.floor(Math.random()*n.length)];function Wt(n,t){const s=`
    <div class="tm-run">
      <b>CHEST OPENING PREVIEW · nothing is given</b>
      <select data-chest-kind>${zt.map(([r,a])=>`<option value="${r}">📦 ${a}</option>`).join("")}</select>
      <select data-chest-result>${qt.map(r=>`<option value="${r}">✨ Result: ${r==="diamonds"?"Diamonds":r[0].toUpperCase()+r.slice(1)}</option>`).join("")}</select>
      <button data-act="chestPreview">▶ Play the opening</button>
      <button data-act="chestTen">🔟 Open 10 in a row (mixed results)</button>
      <p>Any chest with any result, also ones it could never hold. No item, Diamonds or pity counter changes. Tap during an opening to skip to the item.</p>
    </div>`,p=r=>document.querySelector(`#test-menu ${r}`)?.value??"",c=(r,a)=>{const d=n().topHouse();let m=null;a==="cosmic"?m=x("weapon","cosmic",d,I(Kt)):a==="mythic"?m=Math.random()<.5?x("weapon","mythic",d,I(jt)):x(I(F.filter(y=>y!=="weapon")),"mythic",d):a!=="diamonds"&&(m=x(I(F),a,d));const b=r==="mythic"?vt.diamonds:P.diamonds[Math.min(d,P.diamonds.length-1)];return{id:-1,kind:r==="pu"?"boss":r,house:d,item:m,cosmic:r==="pu"||void 0,diamonds:m?0:Math.round(b[0]+Math.random()*(b[1]-b[0]))}};return{html:s,actions:{chestPreview:()=>{const r=p("[data-chest-kind]"),a=p("[data-chest-result]");return t([c(r,a)],()=>c(r,a)),""},chestTen:()=>{const r=p("[data-chest-kind]");return t(Ft.map(a=>c(r,a)),null),""}}}}function Gt(n,t){return{html:`
    <div class="tm-run">
      <b>SKIN CHEST · ${V.length} skins inside</b>
      <button data-act="skinChest">👕 Open Skin Chest (free)</button>
      <button data-act="skinChestAll">✓ Own all chest skins</button>
      <button data-act="skinPity">🎯 Skin pity: counter → ${Z.pity-1}</button>
      <button data-act="cosmicSkins">✧ Unlock Cosmic skins</button>
      <p>The free chest is a real roll (a skin you don't own, the pity counter moves; no Diamonds taken). "Own all chest skins" makes the shop's button say "All collected". The pity button makes the next Skin Chest Legendary or Mythic. Lock everything again with "Lock all skins again".</p>
    </div>`,actions:{skinChest:()=>t()?"":'You own every skin in the Skin Chest. Use "Lock all skins again" to start over.',skinChestAll:()=>(n().ownAllChestSkins(),`You own all ${V.length} chest skins: the shop's Skin Chest now says "All collected".`),skinPity:()=>(n().setSkinPity(Z.pity-1),St(n().data.ownedSkins).some(c=>c.rarity==="legendary"||c.rarity==="mythic")?"The next Skin Chest gives a Legendary or Mythic skin for sure.":"Counter set, but you already own every Legendary and Mythic chest skin."),cosmicSkins:()=>(n().unlockCosmicSkins(),"The 3 Cosmic skins are yours: Equipment → 🎨 → SKINS (bottom group).")}}}function Yt(n,t){return{html:`
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
      <p>Codes (by id; the codes themselves are kept privately, only their hashes are in the files): ${xt.map(c=>`<b>${c.id}</b>${c.expires?" (expired example)":""}`).join(", ")}. Each works once per player; "Reset" lets you use them again (rewards already given stay).</p>
    </div>`,actions:{codesReset:()=>(n().resetRedeemedCodes(),"Every code can be redeemed again."),shaniSkin:()=>(n().giveSkin(wt),`Shani's capybara is yours: Equipment → 🎨 → SKINS (top). Lock it again with "Lock all skins again".`),shaniHearts:()=>(t.shani(),""),adminSkins:()=>{const c=n();return c.data.redeemedCodes=c.data.redeemedCodes.filter(l=>l!==J),c.grantCode(J),`Asaf's Shining Knight and Ashen Tyrant are yours: Equipment → 🎨 → SKINS (top), and ⚙️ shows "Admin skin effects".`},adminKnight:()=>(t.admin("knight"),""),adminTyrant:()=>(t.admin("tyrant"),""),adminBoth:()=>(t.admin(),""),ninjaSkin:()=>{const c=n();return c.data.redeemedCodes=c.data.redeemedCodes.filter(l=>l!==X),c.grantCode(X),'The two secret ninjas are yours: Equipment → 🎨 → SKINS (top). "Reset redeemed codes" + reload locks them again.'}}}}const Vt=[["","▶ Play the placeholder video"],["rewarded","✓ Rewarded (skip the video)"],["closed_early","✕ Closed early"],["failed","⚠ Failed"],["unavailable","⛔ Unavailable"]];function Zt(n,t){const s=document.createElement("div");s.className="tm-drops",s.innerHTML=`<b>💖 VIDEO REVIVE</b>
    <button data-rv-test="die">💀 Die now</button>
    <button data-rv-test="reset">↺ Reset revive for this run</button>
    <select data-rv-test="ad" aria-label="Ad result" style="grid-column: 1 / -1; min-height: 44px; border-radius: 8px; background: #2b3524; color: inherit; font: 800 12px system-ui, sans-serif;">
      ${Vt.map(([r,a])=>`<option value="${r}">Ad result: ${a}</option>`).join("")}
    </select>
    <span data-rv-test="info" style="grid-column: 1 / -1; font-size: 11px; color: #9fb196; text-align: center;"></span>`,t.appendChild(s);const p=s.querySelector('[data-rv-test="info"]'),c=s.querySelector("select");c.value=Q.force??"",c.addEventListener("change",()=>{Q.force=c.value||null});const l=r=>{p.textContent=r};s.querySelector('[data-rv-test="die"]').addEventListener("click",()=>{if(n.state!=="playing"||n.dying>=0)return l("Only during a run.");const r=n.player;for(let a=0;a<30&&n.dying<0&&r.hp>0;a++)r.iframe=0,n.supply.shieldT=0,n.hurtPlayer(r.maxHp*1e3);l(n.dying>=0?`Dying… (revives used this run: ${n.revive.used})`:"Saved by Second Wind / Phoenix: tap again."),n.dying>=0&&t.classList.add("hidden")}),s.querySelector('[data-rv-test="reset"]').addEventListener("click",()=>{n.revive.used=0,l("This run can revive again.")})}function Xt(n,t){const s=[["paySuccess","success","✅ Success"],["payCancel","cancel","✖ Cancel"],["payFail","fail","⚠ Fail"],["payPending","pending","⏳ Pending"],["payClosed","closed","💥 Paid, app closes before the grant"]];let p=tt[0].id;const c=`
    <div class="tm-run">
      <b>PAYMENTS · TEST STORE (no real money)</b>
      <select data-pay="offer">${tt.map(a=>`<option value="${a.id}">${a.icon} ${a.name} · ${a.price}</option>`).join("")}</select>
      ${s.map(([a,,d])=>`<button data-act="${a}">${d}</button>`).join("")}
      <button data-act="payClosedAfter">💥 Granted, app closes before the store is told</button>
      <button data-act="payDouble">👆👆 Double tap (two buys at once)</button>
      <button data-act="payPendingOk">✔ Pending payments go through now</button>
      <button data-act="payPendingDrop">✖ Pending payments never arrive</button>
      <button data-act="payRedeliver">🔁 Store sends the last purchase again</button>
      <button data-act="payBundleAgain">⚔️ Try to buy the one-time bundle again</button>
      <button data-act="payNewPhone">📱 New phone: this save forgets the bundle, then Restore</button>
      <button data-act="payReset" class="tm-danger">↺ Clear purchase history + test store</button>
      <p>Pick an offer, then an answer: the shop's real purchase screen opens and the test store answers by itself. Buying from the shop without these buttons shows the test sheet instead. The "app closes" buttons reload the page; the purchase must then arrive by itself, once.</p>
    </div>`;setTimeout(()=>{const a=document.querySelector('[data-pay="offer"]');a?.addEventListener("change",()=>p=a.value)},0);const l=()=>n().data.purchases.length,r={...Object.fromEntries(s.map(([a,d])=>[a,()=>(C.nextAnswer=d,t.buyThroughShop(p),"")])),payClosedAfter:()=>(C.nextAnswer="success",C.closeBeforeFinish=!0,t.buyThroughShop(p),""),payDouble:()=>{const a=l();C.nextAnswer="success";const d=t.purchases();return Promise.all([d.buy(p),d.buy(p)]).then(([m,b])=>{const y=document.querySelector("#test-menu .tm-done");y&&(y.textContent=`First: ${m.status}, second: ${b.status}. Purchases granted: ${l()-a} (must be 1).`)}),"Buying twice at once…"},payPendingOk:()=>`${C.payPending()} pending payment(s) went through. They are delivered at once (close this menu to see them).`,payPendingDrop:()=>`${C.dropPending()} pending payment(s) dropped. Restart the game to see them gone from Settings → Purchases.`,payRedeliver:()=>{const a=n().data.purchases,d=a[a.length-1];if(!d)return"Buy something first.";const m=l(),b=n().data.diamonds;return C.undeliver(d.id)?(t.purchases().restore().then(y=>{const i=document.querySelector("#test-menu .tm-done");i&&(i.textContent=`Store sent ${kt[d.product]?.name??d.product} again: ${y.delivered} delivered, purchases ${m} → ${l()}, Diamonds ${b} → ${n().data.diamonds} (both must stay the same).`)}),"Asking the store again…"):"The last purchase is not in the test store."},payBundleAgain:()=>{const a=l();return t.purchases().buy("warrior_bundle").then(d=>{const m=document.querySelector("#test-menu .tm-done");m&&(m.textContent=`Answer: ${d.status}. Purchases granted: ${l()-a} (must be 0 once you own it).`)}),"Trying to buy the bundle…"},payNewPhone:()=>{const a=n().data;if(!a.purchases.filter(b=>b.product==="warrior_bundle").length)return"Buy the bundle first.";a.purchases=a.purchases.filter(b=>b.product!=="warrior_bundle"),n().save();const m=a.coins;return t.purchases().restore().then(async b=>{const y=await t.purchases().restore(),i=document.querySelector("#test-menu .tm-done"),E=n().data.purchases.filter(A=>A.product==="warrior_bundle").length;i&&(i.textContent=`Restore 1: ${b.delivered} delivered, restore 2: ${y.delivered}. Bundle in this save: ${E} (must be 1), coins +${n().data.coins-m} (must be 5,000). Close this menu to see it.`)}),"Restoring…"},payReset:()=>(n().data.purchases=[],n().save(),C.clear(),"Purchase history and the test store are empty: the one-time bundle is back on the shelf.")};return{html:c,actions:r}}const Jt=`
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
`,it=Ot(`zs.camzoom@${U}`),dt=.8,ut=2,ct=`<div class="tm-zoom"><b>📷 CAMERA ZOOM</b>
  <input type="range" min="${dt}" max="${ut}" step="0.02" aria-label="Camera zoom">
  <span class="tm-zoom-val"></span>
  <button data-zoom="default">Back to default (×${U.toFixed(2)})</button></div>`,Qt=[["common","pistol"],["rare","crossbow"],["epic","flamethrower"]];function ne(n){const t=n,s=()=>t.save,p=document.getElementById("app")??document.body,c=_t(s,()=>t.menus.current&&t.menus.show(t.menus.current)),l=Dt(s,e=>{i.classList.add("hidden"),t.menus.chests.show([e],()=>t.menus.show("home"))},e=>{i.classList.add("hidden"),t.menus.chests.showBought(e,null,()=>t.menus.show("home"))}),r=Gt(s,()=>{const e=t.menus.shop.openFreeSkinChest(()=>t.menus.show("home"));return e&&i.classList.add("hidden"),e}),a=Yt(s,{shani:()=>{i.classList.add("hidden"),t.celebrateShani()},admin:e=>{i.classList.add("hidden"),t.celebrateAdmin(e)}}),d=Xt(s,{purchases:()=>t.menus.purchases,buyThroughShop:e=>{i.classList.add("hidden"),t.menus.show("shop"),t.menus.offers.open(Tt[e]),document.querySelector(".offer-screen .offer-pay")?.click()}}),m=Wt(s,(e,o)=>{i.classList.add("hidden"),t.menus.chests.preview(e,o)}),b=document.createElement("style");b.textContent=Jt,document.head.appendChild(b);const y=document.createElement("button");y.id="test-ribbon",y.textContent="🧪 TEST VERSION",y.title="Test menu (home screen)",p.appendChild(y);const i=document.createElement("div");i.id="test-menu",i.className="hidden",i.innerHTML=`
    <div class="tm-card">
      <h3>🧪 TEST MENU</h3>
      <div class="tm-label">${Ct}${`<br>Published ${new Date(Et).toLocaleString()}`}</div>
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
        ${D.map(e=>`<button data-act="pity-${e.id}">🎯 ${e.name}: counter → ${e.pity-1}</button>`).join("")}
        <button data-act="pity-reset">↺ All pity counters → 0</button>
      </div>
      ${d.html}
      ${m.html}
      ${r.html}
      ${a.html}
      ${l.html}
      <div class="tm-run">
        <b>NEXT RUNS</b>
        <select data-run="weapon"><option value="">🔫 Weapon: the equipped one</option>${et.map(e=>`<option value="${e}">🔫 Weapon: ${R[e].name}</option>`).join("")}</select>
        <button data-act="maxAll">⭐ Max all upgrades: OFF</button>
      </div>
      <div class="tm-run">
        <b>TEST ARENA · every house, next runs</b>
        <button data-act="arenaMap"></button>
        <button data-act="arenaObstacles"></button>
        <p>Clean: flat grey floor, plain grey obstacles (same places and size), no scenery or fog. Zombies, stages and balance are the real house.</p>
      </div>
      ${c.html}
      <div class="tm-run">
        <b>TRANSITION MAP</b>
        <button data-act="transitionUnlock">🚧 Unlock transition map</button>
        <div class="tm-row">${Array.from({length:z.stages},(e,o)=>`<button data-act="transition-${o+1}">▶ Stage ${o+1}</button>`).join("")}</div>
        <p>Starts a transition run at that stage, with your gear and talents (no level-ups yet: try ⭐ Max all upgrades).</p>
        <div class="tm-row"><button data-act="cutscene-storm">🚢 Play ship cutscene</button><button data-act="cutscene-classic">🚢 Play ship cutscene (classic)</button></div>
        <div class="tm-row"><button data-act="worldClearReplay">🎉 Replay world-clear celebration</button><button data-act="worldBonusReset">↺ Reset first-clear bonus</button></div>
        <p>The cutscenes and the replay give no rewards (the replay's chest is only played). After a reset, the bonus comes again on the next clear of stage 5, or on the next start (PLAY on the title screen) if the map is already cleared. What it gave before stays.</p>
      </div>
      <div class="tm-run">${ct}<p>During a run, tap the 🧪 tab for this slider, the supply-drop buttons and 💖 VIDEO REVIVE (die now, the ad's answer, reset).</p></div>
      <div class="tm-run"><b>📉 GRAPHICS</b><div class="tm-row"><button data-act="gfx-log">Show the log</button><button data-act="gfx-lose">Lose graphics for 2 s</button><button data-act="gfx-gone">Lose them for good</button></div></div>
      <button data-act="reset" class="tm-danger">🗑️ Reset the test save</button>
      <div class="tm-done" style="white-space:pre-wrap;word-break:break-word"></div>
      <button data-act="close" class="tm-close">CLOSE</button>
    </div>`,p.appendChild(i);const E=i.querySelector(".tm-done"),A=e=>{s().data.inventory.push(...e),s().save()},u={weapon:"",maxAll:!1},h=i.querySelector('[data-act="maxAll"]'),$=i.querySelector('[data-run="weapon"]');$.addEventListener("change",()=>{u.weapon=$.value,E.textContent=u.weapon?`Next runs use the ${R[u.weapon].name}.`:"Next runs use the equipped weapon."});const M=t.newRun.bind(t);t.newRun=e=>{if(t.loadoutOverride=null,u.weapon){const o=R[u.weapon],g=o.minRarity==="mythic"||o.minRarity==="legendary"||o.minRarity==="cosmic"?o.minRarity:"epic";t.loadoutOverride={...s().loadout(),weapon:x("weapon",g,s().topHouse(),u.weapon)}}if(M(e),!!u.maxAll){for(const o of It)if(Number.isFinite(o.max))for(;t.upgrades.levels[o.id]<o.max;)t.applyUpgrade(o.id);for(const o of Ut(t.upgrades.style))for(;(t.upgrades.perks[o.id]??0)<5;)t.applyUpgrade(o.id);t.pendingLevelUps=Math.max(t.pendingLevelUps,1)}};const L=t.toHome.bind(t);t.toHome=()=>{u.weapon&&(t.loadoutOverride=null),L()},At();const T=document.createElement("div");T.id="test-arena-tag",document.getElementById("hud")?.appendChild(T);const v=()=>{const e=i.querySelector('[data-act="arenaMap"]'),o=i.querySelector('[data-act="arenaObstacles"]');e.textContent=`🗺️ Map: ${S.map==="clean"?"Clean":"Normal"}`,e.classList.toggle("tm-on",S.map==="clean"),o.textContent=`🪨 Obstacles: ${S.obstacles?"ON":"OFF"}`,o.classList.toggle("tm-on",!S.obstacles),T.textContent=Rt()};v();const w={...l.actions,...m.actions,...d.actions,...r.actions,...a.actions,arenaMap:()=>(S.map=S.map==="clean"?"normal":"clean",st(),v(),S.map==="clean"?"Next runs use the clean arena (every house).":"Next runs use the normal maps."),arenaObstacles:()=>(S.obstacles=!S.obstacles,st(),v(),S.obstacles?"Obstacles are back from the next run.":"Next runs have no obstacles (every house)."),...c.actions,maxAll:()=>(u.maxAll=!u.maxAll,h.textContent=`⭐ Max all upgrades: ${u.maxAll?"ON":"OFF"}`,h.classList.toggle("tm-on",u.maxAll),u.maxAll?"Next runs start with every upgrade and weapon perk maxed: Elite cards at once.":"Max all upgrades is off."),houses:()=>{for(const e of s().data.houses)e.unlocked=!0;return s().save(),`All ${nt.length} houses unlocked.`},coins:()=>(s().addCoins(1e4),"+10,000 coins."),scrap:()=>(s().data.scrap+=5e3,s().save(),"+5,000 Scrap."),diamonds:()=>(s().addDiamonds(1e4),"+10,000 Diamonds."),missionsDone:()=>{const e=s().missions();for(const o of at.daily)e.daily[o.kind]=Math.max(e.daily[o.kind]??0,o.target);for(const o of at.weekly)e.weekly[o.kind]=Math.max(e.weekly[o.kind]??0,o.target);return s().save(),"All missions done: claim them on the Missions screen."},missionsReset:()=>(s().data.missions=Nt(),s().save(),"Missions reset: all progress and claims cleared."),sets:()=>{const e=[];for(const o of F)if(o==="weapon")for(const[g,k]of Qt)for(let K=0;K<3;K++)e.push(x("weapon",g,0,k));else for(const g of["common","rare","epic"])for(let k=0;k<3;k++)e.push(x(o,g,0));return A(e),`Added ${e.length} items: 3 identical Common, Rare and Epic items for every slot.`},weapons:()=>{const e=et.map(o=>x("weapon",R[o].minRarity,0,o));return A(e),`Added ${e.length} weapons, each at its lowest rarity.`},skinsAll:()=>(s().setAllSkins(!0),"All skins unlocked: Equipment → 🎨 → SKINS."),skinsNone:()=>(s().setAllSkins(!1),"Only Default is owned again (and worn, if the worn skin was locked)."),chests:()=>{for(let e=0;e<3;e++)s().addChest(lt(s().topHouse()));return"Added 3 boss chests: open them with the 🎁 button."},...Object.fromEntries(D.map(e=>[`pity-${e.id}`,()=>(s().setPity(e.id,e.pity-1),`${e.name}: the next one you buy gives ${e.pityRarity==="mythic"?"a Mythic weapon or armour piece":`a ${e.pityRarity} item`} for sure.`)])),transitionUnlock:()=>(s().unlockTransition(),`${z.name} unlocked: its card is after House ${nt.length} on the home screen.`),...Object.fromEntries(Array.from({length:z.stages},(e,o)=>[`transition-${o+1}`,()=>{i.classList.add("hidden"),t.transitionStart=o+1;try{t.newRun($t)}finally{t.transitionStart=1}return""}])),"cutscene-storm":()=>(i.classList.add("hidden"),t.playCutsceneTest("storm"),""),"cutscene-classic":()=>(i.classList.add("hidden"),t.playCutsceneTest("classic"),""),worldClearReplay:()=>(i.classList.add("hidden"),t.replayWorldClear(),""),worldBonusReset:()=>(s().resetWorldBonus(),s().data.transition.completed?"First-clear bonus reset. Reload and tap PLAY on the title screen to get it again (the popup), or clear stage 5 again.":"First-clear bonus reset. It comes with the first clear of the transition map."),"gfx-log":()=>Lt().join(`
`)||"The graphics log is empty.","gfx-lose":()=>{const e=t.renderer.getContext().getExtension("WEBGL_lose_context");return e?.loseContext(),setTimeout(()=>e?.restoreContext(),2e3),"Graphics taken away for 2 s."},"gfx-gone":()=>(t.renderer.getContext().getExtension("WEBGL_lose_context")?.loseContext(),"Graphics taken away for good: Tap to continue should show in about 4 s."),"pity-reset":()=>{for(const e of D)s().setPity(e.id,0);return"All shop pity counters are back to 0."},reset:()=>{if(!confirm("Delete the test save and start over? (The live game is not affected.)"))return"";try{localStorage.removeItem(Mt)}catch{}return location.reload(),""}},f=document.createElement("div");f.id="test-zoom",f.className="hidden",f.innerHTML=`${ct}<div class="tm-drops"><b>📦 SUPPLY DROPS</b>
    <button data-drop="">📦 Drop crate now</button>
    <button data-drop="health">❤️ Health</button><button data-drop="power">🔥 Power</button><button data-drop="shield">🛡️ Shield</button></div>
    <div class="tm-drops"><b>✧ COSMIC SKIN FORM</b><button data-form="1">Base</button><button data-form="5">Lv 5</button><button data-form="10">Lv 10</button><button data-form="15">Lv 15</button></div>`,f.querySelectorAll("[data-drop]").forEach(e=>e.addEventListener("click",()=>{if(t.state!=="playing")return;const o=e.dataset.drop||void 0;t.supply.crate=null,t.supply.drop(t.player.x,t.player.z,t.obstacles,o,!0)})),f.querySelectorAll("[data-form]").forEach(e=>e.addEventListener("click",()=>{const o=Number(e.dataset.form),g=t.player.model.wholeBody;o===1?g?.setRunLevel?.(1,!0):g?.setRunLevel?.(o)})),p.appendChild(f),Bt(t,i,f,s),Zt(t,f);const O=e=>{e=Math.min(ut,Math.max(dt,Math.round(e*100)/100)),t.rig.zoom=e,Pt(t.scene,e);const o=Math.round((e*e-1)*100),g=`×${e.toFixed(2)} · ${o>=0?"+":""}${o}% ground vs the old view`;for(const k of document.querySelectorAll(".tm-zoom input"))k.value=String(e);for(const k of document.querySelectorAll(".tm-zoom-val"))k.textContent=g;try{localStorage.setItem(it,String(e))}catch{}};let _=NaN;try{_=parseFloat(localStorage.getItem(it)??"")}catch{}O(Number.isFinite(_)?_:U);for(const e of[i,f])e.querySelector(".tm-zoom input").addEventListener("input",o=>O(parseFloat(o.target.value))),e.querySelector('[data-zoom="default"]').addEventListener("click",()=>O(U));const pt=()=>{if(t.state!=="home"){f.classList.toggle("hidden");return}E.textContent="",i.classList.remove("hidden")};y.addEventListener("click",pt),i.addEventListener("click",e=>{const o=e.target;o===i&&i.classList.add("hidden");const g=o.closest("[data-act]")?.dataset.act;if(g){if(g==="close"){i.classList.add("hidden");return}E.textContent=w[g]?.()??"",t.audio?.click?.(),t.refreshLook?.(),t.state==="home"&&t.menus.show(t.menus.current??"home")}});const j=()=>{y.style.opacity=t.state==="home"?"1":"0.55",t.state==="home"&&!f.classList.contains("hidden")&&f.classList.add("hidden"),requestAnimationFrame(j)};j()}export{ne as installTestMenu};
