/* ============ IMAGES + CONFIG: edit boutique details and photos here ============ */
const IMG = {
  white: "images/dress-white-aline.jpg",
  navy: "images/kurta-set-navy.jpg",
  maroon: "images/kurta-set-maroon.jpg",
  kurti: "images/kurti-navy-stole.jpg",
  pink: "images/suit-pink-festive.jpg",
  teal: "images/saree-teal-zari.jpg",
  beige: "images/anarkali-beige.jpg",
  wine: "images/anarkali-wine-suit.jpg",
  mann: "images/kurta-set-mannequin.jpg",
  coral: "images/saree-coral-silk.jpg",
  gown: "images/gown-coral-anarkali.jpg",
  floral: "images/kurti-floral-palazzo.jpg",
  kanchi: "images/saree-kanchi-pink.jpg",
  tissue: "images/saree-tissue-pearl.jpg",
  redsilk: "images/saree-red-silk.jpg",
  sharara: "images/sharara-maroon.jpg"
};

const CONFIG = {
  name: "Raghavi Boutique",
  location: "Rahata, Maharashtra",
  phone: "",       // verified phone number
  address: "",     // verified shop address
  whatsapp: "",    // digits with country code, e.g. "919XXXXXXXXX". WhatsApp opens only when this is set.
  instagram: "https://www.instagram.com/raghavi_boutique_/",
  /* Real photographs: set an image URL, data URI or file name beside this page. Empty keeps the sample illustration. */
  photos: { hero:IMG.maroon, featured:IMG.pink, about:IMG.white }
};
const CATEGORIES = [
  {name:"Sarees", kind:"saree", c:["#7A1F3D","#C6A36A","#F4E1DC"], src:IMG.teal, pos:"30%"},
  {name:"Kurtis", kind:"kurti", c:["#1F5C5A","#C6A36A","#E4F0EC"], src:IMG.kurti, pos:"30%"},
  {name:"Kurta Sets", kind:"kurtaset", c:["#B5532F","#C6A36A","#F7E6D6"], src:IMG.navy, pos:"25%"},
  {name:"Festive Wear", kind:"lehenga", c:["#8E2A52","#C6A36A","#F6E0E6"], src:IMG.pink, pos:"30%"},
  {name:"Dresses", kind:"dress", c:["#2D4F7C","#C6A36A","#E6ECF6"], src:IMG.white, pos:"35%"},
  {name:"Traditional Wear", kind:"traditional", c:["#B07A1E","#641C32","#FBEFD3"], src:IMG.coral, pos:"35%"}
];
/* PRODUCTS: demo data. Add "src":"photo.jpg" to show a real photo for any product. */
const SZ=["S","M","L","XL"];
const P=(id,name,cat,price,was,kind,c,set,flags={})=>({id,name,cat,price,was,kind,c,set,sizes:flags.free?["Free size"]:SZ,...flags});
const PRODUCTS = [
  P("p1","Shimmer Silk Saree with Zari Border","Sarees",4500,5600,"saree",["#7A1F3D","#C6A36A","#F4E1DC"],"new",{free:1,src:IMG.teal,pos:"35%"}),
  P("p2","Cotton Kurti with Block-Print Stole","Kurtis",1850,2300,"kurti",["#1F5C5A","#C6A36A","#E4F0EC"],"new",{src:IMG.kurti,pos:"35%"}),
  P("p3","Embroidered Kurta Set with Dupatta","Kurta Sets",3200,3900,"kurtaset",["#B5532F","#C6A36A","#F7E6D6"],"new",{src:IMG.navy,pos:"30%"}),
  P("p4","Embroidered Festive Suit with Dupatta","Festive Wear",7900,9800,"lehenga",["#8E2A52","#C6A36A","#F6E0E6"],"new",{src:IMG.pink,pos:"35%"}),
  P("p5","Block-Print A-line Long Dress","Dresses",2400,0,"dress",["#2D4F7C","#C6A36A","#E6ECF6"],"new",{src:IMG.white,pos:"35%"}),
  P("p6","Silk Saree with Zari Weave Border","Traditional Wear",5900,7200,"traditional",["#B07A1E","#641C32","#FBEFD3"],"new",{free:1,src:IMG.coral,pos:"35%"}),
  P("p7","Anarkali Kurta Set with Dupatta","Kurta Sets",3900,4700,"kurtaset",["#5B2A6B","#C6A36A","#EFE3F4"],"new",{src:IMG.beige,pos:"40%"}),
  P("p8","Floral Print Kurti with Palazzo","Kurtis",1250,0,"kurti",["#B23A48","#C6A36A","#FBE4E4"],"new",{src:IMG.floral,pos:"35%"}),
  P("p9","Kanchipuram Style Silk Saree","Sarees",6200,7600,"saree",["#B07A1E","#722F37","#FBEFD3"],"best",{free:1,src:IMG.kanchi,pos:"35%"}),
  P("p10","Tissue Silk Saree with Pearl Detailing","Sarees",3300,4100,"saree",["#2D4F7C","#C6A36A","#E6ECF6"],"best",{free:1,src:IMG.tissue,pos:"30%"}),
  P("p11","Silk Blend Kurta Set with Woven Dupatta","Kurta Sets",2950,3600,"kurtaset",["#3E6B4A","#C6A36A","#E6F0E4"],"best",{src:IMG.mann,pos:"35%"}),
  P("p12","Silk Anarkali Suit with Organza Dupatta","Festive Wear",8900,10900,"lehenga",["#641C32","#C6A36A","#F3E1DC"],"best",{src:IMG.wine,pos:"35%"}),
  P("p13","Printed Cotton Kurta Set","Kurta Sets",1450,1800,"kurtaset",["#6B4A8E","#C6A36A","#EFE6F6"],"best",{src:IMG.maroon,pos:"35%"}),
  P("p14","Anarkali Gown with Dupatta","Dresses",2750,3400,"dress",["#8E2A52","#C6A36A","#F6E0E6"],"best",{src:IMG.gown,pos:"35%"}),
  P("p15","Zari Woven Traditional Saree","Traditional Wear",7400,8800,"traditional",["#2F6F73","#C6A36A","#E4F0EE"],"best",{free:1,src:IMG.redsilk,pos:"35%"}),
  P("p16","Sharara Festive Set","Festive Wear",6400,0,"lehenga",["#B5532F","#C6A36A","#F7E6D6"],"best",{src:IMG.sharara,pos:"30%"})
];
const REVIEWS=[
  {t:"Lovely designs and a very friendly experience choosing an outfit for a family function.",n:"Sample Customer A",w:"Demo review"},
  {t:"The colours and fabrics felt just right for festive wear. Easy to find something elegant.",n:"Sample Customer B",w:"Demo review"},
  {t:"Great for everyday kurtis as well as special occasions. Would happily recommend.",n:"Sample Customer C",w:"Demo review"}
];
const SHOWCASE=[
  {src:IMG.kanchi,pos:"35%",name:"Kanchipuram Style Silk Saree",cat:"Sarees"},
  {src:IMG.sharara,pos:"30%",name:"Sharara Festive Set",cat:"Festive Wear"},
  {src:IMG.redsilk,pos:"35%",name:"Zari Woven Traditional Saree",cat:"Traditional Wear"},
  {src:IMG.tissue,pos:"30%",name:"Tissue Silk Saree with Pearl Detailing",cat:"Sarees"},
  {src:IMG.teal,pos:"35%",name:"Shimmer Silk Saree with Zari Border",cat:"Sarees"},
  {src:IMG.coral,pos:"35%",name:"Silk Saree with Zari Weave Border",cat:"Traditional Wear"}
];
const IG=[{src:IMG.wine,pos:"40%"},{src:IMG.teal,pos:"35%"},{src:IMG.mann,pos:"30%"},{src:IMG.coral,pos:"40%"},{src:IMG.floral,pos:"40%"},{src:IMG.gown,pos:"40%"}];

/* ============ helpers ============ */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const inr=n=>"₹"+n.toLocaleString("en-IN");
const off=p=>p.was>p.price?Math.round((1-p.price/p.was)*100):0;
let uid=0;
const shade=(h,p)=>{const n=parseInt(h.slice(1),16),f=v=>Math.max(0,Math.min(255,Math.round(p<0?v*(1+p):v+(255-v)*p)));return "#"+[n>>16,n>>8&255,n&255].map(f).map(v=>v.toString(16).padStart(2,"0")).join("")};
function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("show");clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove("show"),2600)}
const store={get(k,d){try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};

/* sample illustrations, flat vector. Replace with photographs via CONFIG.photos / product "src". */
function art(kind,c){
  const [m,g,bg]=c,id="a"+(++uid),dk=shade(m,-.25),lt=shade(m,.25),skin="#D8A27D",hair="#2A1A14";
  let s=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Sample ethnic fashion illustration"><defs><pattern id="${id}" width="26" height="26" patternUnits="userSpaceOnUse"><circle cx="13" cy="13" r="2.6" fill="${g}" opacity=".85"/><path d="M0 0l6 6M26 0l-6 6M0 26l6-6M26 26l-6-6" stroke="${g}" stroke-width="1" opacity=".5"/></pattern><linearGradient id="${id}b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${bg}"/><stop offset="1" stop-color="${shade(bg,-.08)}"/></linearGradient></defs><rect width="600" height="800" fill="url(#${id}b)"/><circle cx="300" cy="360" r="250" fill="${g}" opacity=".13"/><rect y="735" width="600" height="65" fill="${shade(bg,-.14)}"/>`;
  const head=(y=150)=>`<path d="M286 ${y+60}h28v36h-28z" fill="${skin}"/><ellipse cx="300" cy="${y+22}" rx="34" ry="40" fill="${skin}"/><path d="M262 ${y+14}q4-52 44-50q40 2 34 52q-6-30-38-34q-30 0-40 32z" fill="${hair}"/><circle cx="300" cy="${y-32}" r="22" fill="${hair}"/><circle cx="300" cy="${y-32}" r="22" fill="none" stroke="${g}" stroke-width="3" stroke-dasharray="3 5"/>`;
  if(kind==="saree"||kind==="traditional"){
    const t=kind==="traditional";
    s+=head()+`<path d="M238 238q62-22 124 0l8 100h-140z" fill="${shade(g,-.1)}"/><path d="M232 332h136l44 405H188z" fill="${m}"/>`;
    if(t)s+=`<path d="M232 332h136l44 405H188z" fill="url(#${id})" opacity=".4"/>`;
    for(let i=0;i<9;i++)s+=`<path d="M${250+i*12} 340l${-24+i*6} 397" stroke="${dk}" stroke-width="3" opacity=".55"/>`;
    s+=`<rect x="186" y="${t?660:690}" width="228" height="${t?76:46}" fill="${g}"/><rect x="186" y="${t?670:698}" width="228" height="${t?56:30}" fill="${m}"/><rect x="186" y="${t?670:698}" width="228" height="${t?56:30}" fill="url(#${id})"/>`;
    s+=`<path d="M236 240l-10 120q-4 150 90 330l40-8q-100-170-88-330l62-92z" fill="${lt}" opacity=".95"/><path d="M236 240l-10 120q-4 150 90 330" fill="none" stroke="${g}" stroke-width="7"/><path d="M236 240q60 34 134 92l-8 28q-70-48-126-84z" fill="${m}"/><path d="M236 240q60 34 134 92" stroke="${g}" stroke-width="5" fill="none"/>`;
  }
  else if(kind==="kurti"||kind==="kurtaset"){
    const ks=kind==="kurtaset";
    s+=head();
    s+=ks?`<path d="M232 500h136l86 236H146z" fill="${shade(m,-.3)}"/><path d="M232 500h136l86 236H146z" fill="url(#${id})" opacity=".3"/>`:`<path d="M232 340h136l22 396H210z" fill="${shade(m,-.3)}"/><path d="M296 340l-10 396M304 340l10 396" stroke="${shade(m,-.4)}" stroke-width="3" opacity=".6"/>`;
    s+=`<rect x="${ks?140:204}" y="716" width="${ks?320:192}" height="20" fill="${g}"/>`;
    s+=`<path d="M236 236q64-20 128 0l50 110-34 18-26-52 14 218q10 40 24 50H210q14-10 24-50l14-218-26 52-34-18z" fill="${m}"/><path d="M236 236q64-20 128 0l50 110-34 18-26-52" fill="none" stroke="${g}" stroke-width="3"/><path d="M268 236q32 44 64 0" fill="${skin}"/><path d="M262 238q38 56 76 0" stroke="${g}" stroke-width="5" fill="none"/><path d="M300 262v150" stroke="${g}" stroke-width="6"/>`;
    for(let i=0;i<6;i++)s+=`<circle cx="300" cy="${282+i*24}" r="4.5" fill="${g}"/>`;
    s+=`<rect x="226" y="470" width="148" height="30" fill="url(#${id})"/>`;
    s+=ks?`<path d="M232 244q-50 130 20 330q40-20 50-60q-50-130-40-250z" fill="${shade(g,.3)}" opacity=".92"/><path d="M366 244q40 100 0 260q-14 40-38 60" stroke="${shade(g,.3)}" stroke-width="26" fill="none" opacity=".9"/>`:`<path d="M236 252q-40 120 10 260q14-120 40-240z" fill="${shade(g,.3)}" opacity=".85"/>`;
  }
  else if(kind==="lehenga"){
    s+=head()+`<path d="M254 340h92l6 22h-104z" fill="${skin}"/><path d="M240 240q60-18 120 0l4 98q-64 18-128 0z" fill="${m}"/><path d="M242 300q58 14 116 0" stroke="${g}" stroke-width="4" fill="none"/><path d="M262 246q38 40 76 0" fill="${skin}"/><path d="M262 246q38 40 76 0" stroke="${g}" stroke-width="4" fill="none"/><rect x="246" y="262" width="108" height="30" fill="url(#${id})" opacity=".85"/>`;
    s+=`<path d="M246 358h108q90 150 168 378H78q78-228 168-378z" fill="${m}"/><path d="M246 358h108q90 150 168 378H78q78-228 168-378z" fill="url(#${id})" opacity=".45"/>`;
    for(let i=0;i<8;i++)s+=`<path d="M${268+i*9} 360l${-170+i*50} 376" stroke="${dk}" stroke-width="2" opacity=".4"/>`;
    s+=`<path d="M120 640h360l22 96H98z" fill="${g}"/><rect x="108" y="664" width="384" height="26" fill="${m}"/><rect x="108" y="664" width="384" height="26" fill="url(#${id})"/><path d="M246 358h108" stroke="${g}" stroke-width="10"/><path d="M356 244q60 70 46 220q-6 60 18 150l-30 10q-34-120-18-168q10-110-38-170z" fill="${shade(g,.35)}" opacity=".9"/>`;
  }
  else if(kind==="dress"){
    s+=head()+`<path d="M236 240q64-24 128 0l-4 118h-120z" fill="${m}"/><path d="M262 242q38 44 76 0" fill="${skin}"/><path d="M236 240l-34 70 26 14 22-40zM364 240l34 70-26 14-22-40z" fill="${m}"/><path d="M240 358h120l128 378H112z" fill="${m}"/><path d="M240 358h120l128 378H112z" fill="url(#${id})" opacity=".4"/>`;
    for(let i=0;i<7;i++)s+=`<path d="M${252+i*16} 362l${-110+i*36} 372" stroke="${dk}" stroke-width="2" opacity=".35"/>`;
    s+=`<rect x="236" y="346" width="128" height="18" fill="${g}"/><path d="M122 700h356l10 36H112z" fill="${g}"/>`;
  }
  return s+"</svg>";
}
const media=(o,key)=>{const src=(key&&CONFIG.photos[key])||o.src;return src?`<img src="${esc(src)}" alt="${esc(o.name||CONFIG.name)}" loading="lazy" style="object-position:50% ${o.pos||"30%"}">`:art(o.kind,o.c)};
const ICON={heart:'<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.4a4.3 4.3 0 0 1 7.5 2.4C19.500 15.400 12 20 12 20z"/>',ig:'<rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.6"/><path d="M16.8 7.2h.01"/>'};

/* ============ state ============ */
const state={filter:"All",sort:"featured",query:"",cart:store.get("rb-cart",{}),wish:new Set(store.get("rb-wish",[])),modal:null,size:null};
const byId=id=>PRODUCTS.find(p=>p.id===id);
const matches=p=>!state.query||(p.name+" "+p.cat).toLowerCase().includes(state.query.toLowerCase());

function card(p){
  const d=off(p);
  return `<article class="prod reveal in"><div class="pimg"><div class="badges">${p.set==="new"?'<span class="badge">New Arrival</span>':''}${d?`<span class="badge off">${d}% off</span>`:''}</div><button class="wish" type="button" data-wish="${p.id}" aria-pressed="${state.wish.has(p.id)}" aria-label="Add ${esc(p.name)} to wishlist"><svg viewBox="0 0 24 24">${ICON.heart}</svg></button><div class="art">${media(p)}</div></div><div><span class="kind">${esc(p.cat)}</span><h3>${esc(p.name)}</h3></div><div class="pricerow"><span class="price">${inr(p.price)}</span>${d?`<span class="was">${inr(p.was)}</span><span class="save">${d}% off</span>`:''}</div><button class="btn btn-line btn-sm" type="button" data-view="${p.id}">View Details</button></article>`;
}
function renderProducts(){
  const nl=PRODUCTS.filter(p=>p.set==="new"&&matches(p));
  $("#newGrid").innerHTML=nl.length?nl.map(card).join(""):`<div class="empty">No new arrivals match “${esc(state.query)}”.</div>`;
  let bl=PRODUCTS.filter(p=>p.set==="best"&&matches(p)&&(state.filter==="All"||p.cat===state.filter));
  if(state.sort==="low")bl.sort((a,b)=>a.price-b.price);else if(state.sort==="high")bl.sort((a,b)=>b.price-a.price);else if(state.sort==="disc")bl.sort((a,b)=>off(b)-off(a));
  $("#bestGrid").innerHTML=bl.length?bl.map(card).join(""):`<div class="empty">No bestsellers match this filter. Try another category or clear the search.</div>`;
  $("#chips").innerHTML=["All",...CATEGORIES.map(c=>c.name)].map(n=>`<button class="chip" type="button" data-chip="${esc(n)}" aria-pressed="${n===state.filter}">${esc(n)}</button>`).join("");
}
function cartCount(){return Object.values(state.cart).reduce((a,l)=>a+l.qty,0)}
function renderCart(){
  const lines=Object.entries(state.cart),n=cartCount(),bc=$("#bagCount");
  bc.hidden=!n;bc.textContent=n;
  let sub=0;
  $("#drBody").innerHTML=lines.length?lines.map(([k,l])=>{const p=byId(l.id);sub+=p.price*l.qty;return `<div class="line"><div class="th"><div class="art">${media(p)}</div></div><div><h4>${esc(p.name)}</h4><small>Size: ${esc(l.size)} · ${inr(p.price)}</small><div class="qty"><button type="button" data-q="${esc(k)}" data-d="-1" aria-label="Decrease quantity">−</button><span aria-live="polite">${l.qty}</span><button type="button" data-q="${esc(k)}" data-d="1" aria-label="Increase quantity">+</button></div></div><div style="text-align:right"><div class="price" style="font-size:1rem">${inr(p.price*l.qty)}</div><button class="rm" type="button" data-rm="${esc(k)}">Remove</button></div></div>`}).join(""):`<div class="dr-empty">Your bag is empty.<br>Add a demo product to see how it works.</div>`;
  $("#subTotal").textContent=inr(sub);$("#checkout").disabled=!lines.length;
  store.set("rb-cart",state.cart);
}
function addToBag(id,size){
  const p=byId(id),sz=size||p.sizes[0],k=id+"|"+sz;
  state.cart[k]=state.cart[k]?{...state.cart[k],qty:state.cart[k].qty+1}:{id,size:sz,qty:1};
  renderCart();toast(`${p.name} added to your bag (demo).`);
}
function toggleWish(id){
  const p=byId(id);state.wish.has(id)?state.wish.delete(id):state.wish.add(id);
  store.set("rb-wish",[...state.wish]);
  $$(`[data-wish="${id}"]`).forEach(b=>b.setAttribute("aria-pressed",state.wish.has(id)));
  if(state.modal===id){$("#pdWish").setAttribute("aria-pressed",state.wish.has(id));$("#pdWish").textContent=state.wish.has(id)?"In Wishlist":"Add to Wishlist"}
  toast(state.wish.has(id)?`${p.name} saved to your wishlist.`:`Removed from your wishlist.`);
}
function openDrawer(o){$("#drawer").classList.toggle("open",o);$("#scrim").classList.toggle("open",o);$("#drawer").setAttribute("aria-hidden",!o);if(o)setTimeout(()=>$("#drX").focus(),50)}
function openModal(id){
  const p=byId(id),d=off(p);state.modal=id;state.size=p.sizes[0];
  $("#pdImg").innerHTML=media(p);$("#pdK").textContent=p.cat+(p.set==="new"?" · New Arrival":"");$("#pdT").textContent=p.name;
  $("#pdP").textContent=inr(p.price);$("#pdW").textContent=d?inr(p.was):"";$("#pdS").textContent=d?d+"% off":"";
  $("#pdD").textContent="Sample product shown for design purposes. Fabric, colours, sizes and availability will be added by the boutique.";
  $("#pdSizes").innerHTML=p.sizes.map((s,i)=>`<button class="size" type="button" data-size="${esc(s)}" aria-pressed="${i===0}">${esc(s)}</button>`).join("");
  const w=state.wish.has(id);$("#pdWish").setAttribute("aria-pressed",w);$("#pdWish").textContent=w?"In Wishlist":"Add to Wishlist";
  $("#pdlg").showModal();
}

/* ============ render static sections ============ */
function renderStatic(){
  $("#heroArt").innerHTML=media({kind:"saree",c:["#7A1F3D","#C6A36A","#F4E1DC"],name:"Kurta set",pos:"22%"},"hero");
  $("#featArt").innerHTML=media({kind:"lehenga",c:["#8E2A52","#C6A36A","#F6E0E6"],name:"Kurta set with dupatta",pos:"20%"},"featured");
  $("#aboutArt").innerHTML=media({kind:"kurtaset",c:["#B5532F","#C6A36A","#F7E6D6"],name:"Ethnic wear",pos:"30%"},"about");
  if(CONFIG.photos.hero)$("#heroTag").hidden=true;
  $("#catGrid").innerHTML=CATEGORIES.map(k=>`<button class="cat reveal" type="button" data-cat="${esc(k.name)}" aria-label="Explore ${esc(k.name)}"><div class="art">${media(k)}</div><div class="cap"><h3>${esc(k.name)}</h3><span class="lab">Explore</span></div></button>`).join("");
  $("#revGrid").innerHTML=REVIEWS.map(r=>`<article class="rev reveal"><div class="stars" aria-label="5 out of 5 stars">★★★★★</div><p class="t">${esc(r.t)}</p><div class="who"><span class="av" aria-hidden="true">${esc(r.n.slice(-1))}</span><span>${esc(r.n)} <span class="ph">${esc(r.w)}</span></span></div></article>`).join("");
  $("#igGrid").innerHTML=IG.map((t,i)=>`<a class="itile" href="${esc(CONFIG.instagram)}" target="_blank" rel="noopener" aria-label="Open Instagram profile (sample tile ${i+1})"><div class="art">${t.src?media(t):art(t.kind,CATEGORIES[t.ci].c)}</div><span class="ov"><svg viewBox="0 0 24 24">${ICON.ig}</svg></span></a>`).join("");
  const ph=t=>`<span class="ph">${t}</span>`;
  $("#clist").innerHTML=[["Boutique",esc(CONFIG.name)],["Location",esc(CONFIG.location)],["Phone",CONFIG.phone?esc(CONFIG.phone):ph("Verified number to be added")],["Shop address",CONFIG.address?esc(CONFIG.address):ph("Verified address to be added")],["Instagram",`<a href="${esc(CONFIG.instagram)}" target="_blank" rel="noopener" style="color:var(--burg)">@raghavi_boutique_</a>`]].map(r=>`<li><span class="k">${r[0]}</span><span class="v">${r[1]}</span></li>`).join("");
  const wa=CONFIG.whatsapp.replace(/\D/g,"");
  $("#ctaRow").innerHTML=(wa?`<a class="btn" href="https://wa.me/${wa}?text=${encodeURIComponent("Hello, I would like to enquire about your collection.")}" target="_blank" rel="noopener">WhatsApp Enquiry</a>`:`<button class="btn" type="button" id="waBtn">WhatsApp Enquiry</button>`)+`<a class="btn btn-line" href="${esc(CONFIG.instagram)}" target="_blank" rel="noopener">Instagram</a>`;
  const sc=(it,dup)=>`<button class="sc-card" type="button" data-cat="${esc(it.cat)}" ${dup?'aria-hidden="true" tabindex="-1"':""}><span class="sc-img"><img src="${esc(it.src)}" alt="${dup?"":esc(it.name)}" loading="lazy" style="object-position:50% ${it.pos}"></span><span class="sc-cap">${esc(it.name)}</span></button>`;
  $("#scTrack").innerHTML=SHOWCASE.map(i=>sc(i,false)).join("")+SHOWCASE.map(i=>sc(i,true)).join("");
  $("#copyText").textContent=`© ${new Date().getFullYear()} ${CONFIG.name}. All rights reserved.`;
}

/* ============ events ============ */
function ui(){
  const hdr=$("header.site"),menu=$("#menu"),burger=$("#burger"),top=$("#toTop");
  const setMenu=o=>{menu.classList.toggle("open",o);burger.setAttribute("aria-expanded",o);burger.setAttribute("aria-label",o?"Close menu":"Open menu");$("#bIc").innerHTML=o?'<path d="M6 6l12 12M18 6L6 18"/>':'<path d="M4 7h16M4 12h16M4 17h16"/>'};
  burger.addEventListener("click",()=>setMenu(!menu.classList.contains("open")));
  $$("#menu a").forEach(a=>a.addEventListener("click",()=>setMenu(false)));
  document.addEventListener("keydown",e=>{if(e.key==="Escape"){setMenu(false);openDrawer(false)}});
  const onS=()=>{hdr.classList.toggle("scrolled",scrollY>8);top.classList.toggle("show",scrollY>700)};
  addEventListener("scroll",onS,{passive:true});onS();
  top.addEventListener("click",()=>scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion:reduce)").matches?"auto":"smooth"}));
  // nav link "Shop" -> New Arrivals
  const shop=$('a[href="#shop"]',document);
  $$('a[href="#shop"]').forEach(a=>a.addEventListener("click",e=>{e.preventDefault();$("#new-arrivals").scrollIntoView({behavior:"smooth"})}));
  const links=$$("#menu a"),map={home:"#home",collections:"#collections","new-arrivals":"#shop",bestsellers:"#shop",about:"#about",reviews:"#about",gallery:"#about",contact:"#contact"};
  if("IntersectionObserver" in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const h=map[e.target.id];links.forEach(l=>l.classList.toggle("active",l.getAttribute("href")===h))}}),{rootMargin:"-45% 0px -50% 0px"});$$("main > section[id]").forEach(s=>io.observe(s))}
  // search
  const sb=$("#searchbar"),sbtn=$("#searchBtn"),q=$("#q");
  sbtn.addEventListener("click",()=>{const o=!sb.classList.contains("open");sb.classList.toggle("open",o);sbtn.setAttribute("aria-expanded",o);if(o)setTimeout(()=>q.focus(),250);else{q.value="";state.query="";renderProducts()}});
  q.addEventListener("input",()=>{state.query=q.value.trim();renderProducts()});
  $("#searchForm").addEventListener("submit",e=>{e.preventDefault();state.query=q.value.trim();renderProducts();$("#new-arrivals").scrollIntoView({behavior:"smooth"})});
  // bag
  $("#bagBtn").addEventListener("click",()=>openDrawer(true));$("#drX").addEventListener("click",()=>openDrawer(false));$("#scrim").addEventListener("click",()=>openDrawer(false));
  $("#checkout").addEventListener("click",()=>toast("Checkout is a demo. Online ordering and payment are not available."));
  // delegated clicks
  document.addEventListener("click",e=>{
    const t=e.target;let b;
    if(b=t.closest("[data-wish]"))return toggleWish(b.dataset.wish);
    if(b=t.closest("[data-view]"))return openModal(b.dataset.view);
    if(b=t.closest("[data-chip]")){state.filter=b.dataset.chip;renderProducts();return}
    if(b=t.closest("[data-cat]")){state.filter=b.dataset.cat;state.query="";$("#q").value="";renderProducts();$("#bestsellers").scrollIntoView({behavior:"smooth"});return}
    if(b=t.closest("[data-filter]")){e.preventDefault();state.filter=b.dataset.filter;renderProducts();$("#bestsellers").scrollIntoView({behavior:"smooth"});return}
    if(b=t.closest("[data-size]")){state.size=b.dataset.size;$$("#pdSizes .size").forEach(s=>s.setAttribute("aria-pressed",s===b));return}
    if(b=t.closest("[data-q]")){const k=b.dataset.q,l=state.cart[k];l.qty+=+b.dataset.d;if(l.qty<1)delete state.cart[k];renderCart();return}
    if(b=t.closest("[data-rm]")){delete state.cart[b.dataset.rm];renderCart();return}
    if(t.closest("#waBtn"))return toast("WhatsApp opens once the boutique's verified number is configured.");
  });
  $("#sort").addEventListener("change",e=>{state.sort=e.target.value;renderProducts()});
  const d=$("#pdlg");
  $("#pdX").addEventListener("click",()=>d.close());d.addEventListener("click",e=>{if(e.target===d)d.close()});d.addEventListener("close",()=>state.modal=null);
  $("#pdAdd").addEventListener("click",()=>{addToBag(state.modal,state.size);d.close();openDrawer(true)});
  $("#pdWish").addEventListener("click",()=>toggleWish(state.modal));
  // contact form
  const mob=v=>/^[6-9]\d{9}$/.test(v.replace(/^(\+91|91|0)[\s-]?/,"").replace(/[\s-]/g,"")),mail=v=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
  const rules={cname:v=>v.length<2?"Enter your name.":"",cphone:v=>!v?"Enter your phone number.":(!mob(v)?"Enter a valid 10-digit mobile number.":""),cemail:v=>v&&!mail(v)?"Enter a valid email, like name@example.com.":"",cmsg:v=>v.length<5?"Write a short message.":""};
  const check=id=>{const el=$("#"+id),m=rules[id](el.value.trim());el.closest(".field").classList.toggle("bad",!!m);el.setAttribute("aria-invalid",!!m);$("#"+id+"-e").textContent=m;return !m};
  Object.keys(rules).forEach(id=>$("#"+id).addEventListener("blur",()=>check(id)));
  $("#conForm").addEventListener("submit",e=>{e.preventDefault();const bad=Object.keys(rules).filter(id=>!check(id)),ok=$("#conOk");if(bad.length){ok.classList.remove("show");$("#"+bad[0]).focus();return}ok.classList.add("show");ok.focus();e.target.reset()});
  // reveal
  const els=$$(".reveal:not(.in)");
  if("IntersectionObserver" in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});els.forEach((e,i)=>{e.style.transitionDelay=((i%4)*80)+"ms";io.observe(e)});setTimeout(()=>els.forEach(e=>e.classList.add("in")),3500)}else els.forEach(e=>e.classList.add("in"));
}
renderStatic();renderProducts();renderCart();ui();
