<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="description" content="NaturIA — Aprende Ciencias Naturales con Inteligencia Artificial">
<meta name="theme-color" content="#060d1a">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="NaturIA">
<link rel="manifest" href="manifest.json">
<title>NaturIA — Ciencias con IA</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
:root{
  --bg:#060d1a;--surface:#0d1b2e;
  --border:rgba(255,255,255,0.07);--border2:rgba(255,255,255,0.13);
  --text:#f0f4ff;--text2:#8fa3c0;--text3:#3d5470;
  --teal:#00d4a8;--teal2:#00a882;--teal3:#004a38;
  --purple:#9b7fea;--amber:#f5a623;--coral:#ff6b6b;
  --font-d:'Sora',sans-serif;--font-b:'DM Sans',sans-serif;
  --r-md:14px;--r-lg:20px;--r-xl:28px;
}
html,body{background:var(--bg);font-family:var(--font-b);color:var(--text);height:100%;overscroll-behavior:none}
#root{height:100%}
::-webkit-scrollbar{width:3px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:var(--teal3);border-radius:3px}
@keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes orbFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-18px)}}
@keyframes orbFloat2{0%,100%{transform:translateY(0)}50%{transform:translateY(14px)}}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0.2}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(0,212,168,0.4)}70%{box-shadow:0 0 0 10px rgba(0,212,168,0)}}
.fu{animation:fadeUp .42s cubic-bezier(.16,1,.3,1) both}
.fi{animation:fadeIn .3s ease both}
button{cursor:pointer;border:none;outline:none;font-family:var(--font-b);transition:all .18s cubic-bezier(.16,1,.3,1)}
button:active{transform:scale(0.96)}
.glass{background:linear-gradient(135deg,rgba(255,255,255,0.045),rgba(255,255,255,0.01));border:1px solid var(--border);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px)}
.nav-bar{position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%;max-width:430px;background:rgba(6,13,26,0.94);border-top:1px solid var(--border);backdrop-filter:blur(24px);display:flex;justify-content:space-around;padding:10px 0 max(14px,env(safe-area-inset-bottom,14px));z-index:200}
.nav-item{display:flex;flex-direction:column;align-items:center;gap:3px;padding:4px 14px;background:transparent;color:var(--text3);font-size:10px;font-weight:500;font-family:var(--font-b);letter-spacing:.03em;position:relative}
.nav-item.active{color:var(--teal)}
.nav-item.active::before{content:'';position:absolute;top:-10px;left:50%;transform:translateX(-50%);width:26px;height:2px;background:var(--teal);border-radius:0 0 4px 4px}
.tag{display:inline-flex;align-items:center;padding:3px 10px;border-radius:20px;font-size:10px;font-weight:600;letter-spacing:.05em;font-family:var(--font-d);text-transform:uppercase}
.gd{width:8px;height:8px;border-radius:50%;background:var(--teal);animation:pulse 2s infinite}
.msg-u{background:linear-gradient(135deg,#004a38,#006b52);border:1px solid rgba(0,212,168,0.2)}
.msg-a{background:var(--surface);border:1px solid var(--border)}
.dot{width:7px;height:7px;border-radius:50%;background:var(--teal)}
.dot:nth-child(1){animation:blink 1.2s ease infinite}
.dot:nth-child(2){animation:blink 1.2s ease infinite .2s}
.dot:nth-child(3){animation:blink 1.2s ease infinite .4s}
input,textarea{font-family:var(--font-b);background:var(--surface);border:1px solid var(--border);color:var(--text);outline:none;transition:border-color .2s}
input:focus,textarea:focus{border-color:rgba(0,212,168,.45)}
input::placeholder,textarea::placeholder{color:var(--text3)}
</style>
</head>
<body>
<div id="root"></div>
<script type="text/babel">
const {useState,useRef,useEffect}=React;

// ── CONFIGURACIÓN CENTRAL ──
// En producción (Vercel), usa el endpoint seguro del servidor.
// En desarrollo local, también usa el proxy (nunca expone la API key).
const API_ENDPOINT = '/api/chat';

const STATIONS=[
  {id:'g',e:'🧬',t:'El Código de la Vida',s:'Genética',a:'#9b7fea',ad:'rgba(155,127,234,0.12)',ab:'rgba(155,127,234,0.28)',
   desc:'Explora la herencia genética, el daltonismo y los patrones de herencia dominante y recesiva.',
   cs:['ADN y cromosomas','Genes dominantes y recesivos','Herencia ligada al sexo','Daltonismo','Árboles genealógicos']},
  {id:'q',e:'⚗️',t:'Zoom Atómico',s:'Química',a:'#f5a623',ad:'rgba(245,166,35,0.12)',ab:'rgba(245,166,35,0.28)',
   desc:'Descubre la estructura atómica, los enlaces químicos y cómo los átomos forman moléculas.',
   cs:['Estructura atómica','Tabla periódica','Enlace covalente e iónico','Moléculas: H₂O, CO₂','Propiedades de la materia']},
  {id:'e',e:'🌿',t:'Ecosistemas del Futuro',s:'Biodiversidad',a:'#00d4a8',ad:'rgba(0,212,168,0.12)',ab:'rgba(0,212,168,0.28)',
   desc:'Sumérgete en los ecosistemas: páramos, selvas amazónicas, arrecifes y mucho más.',
   cs:['Cadenas alimentarias','Biodiversidad','Páramos y selvas','Cambio climático','Especies endémicas']},
  {id:'f',e:'🚀',t:'Newton en Acción',s:'Física',a:'#ff6b6b',ad:'rgba(255,107,107,0.12)',ab:'rgba(255,107,107,0.28)',
   desc:'Experimenta con las tres leyes de Newton que gobiernan todo el movimiento del universo.',
   cs:['1ª Ley: Inercia','2ª Ley: F = ma','3ª Ley: Acción y reacción','Gravedad','Movimiento real']}
];

const META_STEPS=[
  {n:1,icon:'🔍',l:'Nuestra duda era',d:'Identificamos qué no comprendemos y formulamos una pregunta clara. Esta es la base del pensamiento científico.',ex:'¿Por qué el cielo es azul y no de otro color?'},
  {n:2,icon:'💬',l:'Le pedimos a la IA que',d:'Diseñamos un prompt específico y bien estructurado. La calidad de la pregunta determina la calidad de la respuesta.',ex:'"Explícame la dispersión de la luz en la atmósfera con un ejemplo visual"'},
  {n:3,icon:'🤖',l:'La IA nos respondió',d:'Analizamos la respuesta: identificamos conceptos clave y lo que queremos verificar.',ex:'La IA explicó la dispersión de Rayleigh y cómo las longitudes de onda cortas (azul) se dispersan más.'},
  {n:4,icon:'🔬',l:'Lo comprobamos con',d:'Verificamos con fuentes confiables. La IA ayuda, pero nunca reemplaza la verificación crítica.',ex:'Confirmamos con el libro de física y realizamos el experimento del prisma.'}
];

// ── LLAMADA A LA IA — AHORA A TRAVÉS DEL SERVIDOR SEGURO ──
async function askClaude(messages, station) {
  const system = `Eres NaturIA, un asistente educativo experto en Ciencias Naturales.
${station ? `Estación actual: ${station.t} (${station.s}). Temas: ${station.cs.join(', ')}.` : 'Puedes responder sobre genética, química, ecosistemas y física.'}
Responde siempre en español. Sé didáctico, entusiasta y claro. Usa analogías cotidianas y ejemplos relevantes.
Máximo 180 palabras. Termina con una pregunta para motivar la curiosidad.`;

  const res = await fetch(API_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages, system }),
  });

  if (!res.ok) throw new Error(`Error ${res.status}`);
  const data = await res.json();
  return data.content?.[0]?.text || 'Sin respuesta.';
}

function Orbs({colors}){
  return(<div style={{position:'absolute',inset:0,overflow:'hidden',pointerEvents:'none',zIndex:0}}>
    {colors.filter(Boolean).map((c,i)=>(
      <div key={i} style={{position:'absolute',borderRadius:'50%',filter:'blur(65px)',pointerEvents:'none',
        background:`radial-gradient(circle,${c} 0%,transparent 70%)`,
        width:[220,160,130][i]+'px',height:[220,160,130][i]+'px',
        top:['-8%','38%','65%'][i],left:['-10%','55%','15%'][i],
        animation:`${['orbFloat','orbFloat2','orbFloat'][i]} ${[9,12,14][i]}s ease-in-out ${[0,2,5][i]}s infinite`}}/>
    ))}
  </div>);
}

function Home({onNav}){
  const cards=[
    {icon:'🔭',l:'Estaciones Interactivas',d:'Genética · Química · Ecosistemas · Física',v:'stations',a:'#00d4a8',rgb:'0,212,168'},
    {icon:'💬',l:'Asistente IA',d:'Respuestas en tiempo real con Claude AI',v:'chat',a:'#9b7fea',rgb:'155,127,234'},
    {icon:'🧠',l:'Metacognición',d:'Aprende a pensar críticamente con inteligencia artificial',v:'meta',a:'#f5a623',rgb:'245,166,35'}
  ];
  return(<div style={{minHeight:'100%',position:'relative',overflow:'hidden'}}>
    <Orbs colors={['rgba(0,180,140,0.2)','rgba(77,158,245,0.1)','rgba(155,127,234,0.1)']}/>
    <div style={{position:'relative',zIndex:1,padding:'0 22px 90px'}}>
      <div style={{paddingTop:'56px',textAlign:'center',marginBottom:'40px'}}>
        <div style={{width:'88px',height:'88px',borderRadius:'26px',margin:'0 auto 22px',background:'linear-gradient(135deg,#003d2c,#00a882)',border:'1px solid rgba(0,212,168,0.35)',boxShadow:'0 12px 48px rgba(0,212,168,0.22)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'44px'}}>🌿</div>
        <h1 style={{fontFamily:'var(--font-d)',fontSize:'38px',fontWeight:'800',letterSpacing:'-0.03em',color:'var(--text)',marginBottom:'6px',lineHeight:1}}>NaturIA</h1>
        <p style={{color:'var(--text2)',fontSize:'13px',fontWeight:'300',letterSpacing:'.1em',textTransform:'uppercase',marginBottom:'16px'}}>Ciencias Naturales · IA</p>
        <div style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'rgba(0,212,168,0.08)',border:'1px solid rgba(0,212,168,0.2)',borderRadius:'20px',padding:'7px 16px'}}>
          <div className="gd"></div>
          <span style={{fontSize:'12px',color:'var(--teal)',fontWeight:'500'}}>Asistente IA activo</span>
        </div>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:'12px',marginBottom:'32px'}}>
        {cards.map((c,i)=>(
          <div key={i} className="glass fu" style={{animationDelay:`${.06+i*.09}s`,borderRadius:'var(--r-lg)',padding:'20px',cursor:'pointer',border:`1px solid rgba(${c.rgb},.22)`}} onClick={()=>onNav(c.v)}>
            <div style={{display:'flex',alignItems:'center',gap:'16px'}}>
              <div style={{width:'54px',height:'54px',borderRadius:'16px',background:`rgba(${c.rgb},.12)`,border:`1px solid rgba(${c.rgb},.22)`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'26px',flexShrink:0}}>{c.icon}</div>
              <div style={{flex:1}}>
                <div style={{fontFamily:'var(--font-d)',fontWeight:'700',fontSize:'15px',color:'var(--text)',marginBottom:'4px'}}>{c.l}</div>
                <div style={{fontSize:'12px',color:'var(--text2)',lineHeight:'1.5'}}>{c.d}</div>
              </div>
              <div style={{color:c.a,fontSize:'20px',opacity:.8}}>›</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{textAlign:'center'}}>
        <div style={{height:'1px',background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)',marginBottom:'18px'}}></div>
        <div style={{display:'inline-flex',alignItems:'center',gap:'8px',opacity:.5}}>
          <span style={{fontSize:'18px'}}>🌿</span>
          <span style={{fontFamily:'var(--font-d)',fontSize:'13px',fontWeight:'600',color:'var(--text)',letterSpacing:'0.05em'}}>NaturIA</span>
          <span style={{fontSize:'11px',color:'var(--text3)'}}>v1.0</span>
        </div>
        <p style={{fontSize:'10px',color:'var(--text3)',marginTop:'6px',letterSpacing:'.04em'}}>Powered by Claude AI · Anthropic</p>
      </div>
    </div>
  </div>);
}

function Stations({onSel}){
  return(<div style={{padding:'24px 20px 90px',position:'relative',minHeight:'100%'}}>
    <Orbs colors={['rgba(0,180,140,0.1)','rgba(155,127,234,0.08)','']}/>
    <div style={{position:'relative',zIndex:1}}>
      <p style={{fontFamily:'var(--font-d)',fontSize:'11px',fontWeight:'600',color:'var(--teal)',letterSpacing:'.1em',textTransform:'uppercase',marginBottom:'6px'}}>Explorar</p>
      <h2 style={{fontFamily:'var(--font-d)',fontSize:'24px',fontWeight:'800',color:'var(--text)',marginBottom:'6px',letterSpacing:'-.02em'}}>Estaciones</h2>
      <p style={{fontSize:'13px',color:'var(--text2)',marginBottom:'24px'}}>Elige un tema para comenzar</p>
      <div style={{display:'flex',flexDirection:'column',gap:'14px'}}>
        {STATIONS.map((s,i)=>(
          <div key={s.id} className="glass fu" style={{animationDelay:`${i*.08}s`,borderRadius:'var(--r-lg)',padding:'20px',cursor:'pointer',background:`linear-gradient(135deg,${s.ad},transparent)`,border:`1px solid ${s.ab}`}} onClick={()=>onSel(s)}>
            <div style={{display:'flex',alignItems:'center',gap:'14px',marginBottom:'12px'}}>
              <div style={{width:'52px',height:'52px',borderRadius:'14px',background:s.ad,border:`1px solid ${s.ab}`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'26px',flexShrink:0}}>{s.e}</div>
              <div style={{flex:1}}>
                <div style={{fontFamily:'var(--font-d)',fontWeight:'700',fontSize:'15px',color:'var(--text)',marginBottom:'4px'}}>{s.t}</div>
                <span className="tag" style={{background:s.ad,color:s.a,border:`1px solid ${s.ab}`}}>{s.s}</span>
              </div>
            </div>
            <p style={{fontSize:'12px',color:'var(--text2)',lineHeight:'1.6',marginBottom:'12px'}}>{s.desc}</p>
            <div style={{display:'flex',flexWrap:'wrap',gap:'6px'}}>
              {s.cs.slice(0,3).map((c,j)=><span key={j} style={{fontSize:'10px',padding:'3px 9px',borderRadius:'20px',background:'rgba(255,255,255,0.04)',color:'var(--text2)',border:'1px solid var(--border)'}}>{c}</span>)}
              <span style={{fontSize:'10px',padding:'3px 9px',borderRadius:'20px',background:'rgba(255,255,255,0.03)',color:'var(--text3)',border:'1px solid var(--border)'}}>+{s.cs.length-3} más</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>);
}

function Detail({s,onBack,onChat}){
  return(<div style={{padding:'16px 20px 90px',position:'relative',minHeight:'100%'}}>
    <div style={{position:'absolute',inset:0,overflow:'hidden',pointerEvents:'none',zIndex:0}}>
      <div style={{position:'absolute',top:'-10%',left:'-10%',width:'260px',height:'260px',borderRadius:'50%',background:`radial-gradient(circle,${s.ad} 0%,transparent 70%)`,filter:'blur(70px)'}}/>
    </div>
    <div style={{position:'relative',zIndex:1}}>
      <button onClick={onBack} style={{background:'transparent',border:'1px solid var(--border2)',color:'var(--text2)',padding:'8px 16px',borderRadius:'20px',fontSize:'13px',marginBottom:'20px',display:'flex',alignItems:'center',gap:'6px'}}>‹ Estaciones</button>
      <div className="glass fu" style={{borderRadius:'var(--r-xl)',padding:'26px',marginBottom:'14px',background:`linear-gradient(135deg,${s.ad},transparent)`,border:`1px solid ${s.ab}`}}>
        <div style={{fontSize:'52px',marginBottom:'14px',lineHeight:1}}>{s.e}</div>
        <span className="tag" style={{background:s.ad,color:s.a,border:`1px solid ${s.ab}`,marginBottom:'10px',display:'inline-flex'}}>{s.s}</span>
        <h2 style={{fontFamily:'var(--font-d)',fontSize:'22px',fontWeight:'800',color:'var(--text)',marginBottom:'8px',marginTop:'10px'}}>{s.t}</h2>
        <p style={{fontSize:'13px',color:'var(--text2)',lineHeight:'1.7'}}>{s.desc}</p>
      </div>
      <div className="glass fu" style={{borderRadius:'var(--r-lg)',padding:'20px',marginBottom:'14px',border:'1px solid var(--border)',animationDelay:'.07s'}}>
        <h3 style={{fontFamily:'var(--font-d)',fontSize:'11px',fontWeight:'600',color:'var(--text3)',textTransform:'uppercase',letterSpacing:'.1em',marginBottom:'14px'}}>Conceptos</h3>
        {s.cs.map((c,i)=>(
          <div key={i} style={{display:'flex',alignItems:'center',gap:'12px',padding:'10px 0',borderBottom:i<s.cs.length-1?'1px solid var(--border)':'none'}}>
            <div style={{width:'7px',height:'7px',borderRadius:'50%',background:s.a,flexShrink:0}}></div>
            <span style={{fontSize:'13px',color:'var(--text)'}}>{c}</span>
          </div>
        ))}
      </div>
      <button className="fu" onClick={()=>onChat(s)} style={{animationDelay:'.14s',width:'100%',padding:'16px',borderRadius:'var(--r-md)',fontSize:'15px',fontFamily:'var(--font-d)',fontWeight:'700',background:`linear-gradient(135deg,${s.a}bb,${s.a})`,color:'#001a12',boxShadow:`0 6px 28px ${s.ad}`}}>
        💬 Preguntar sobre {s.s}
      </button>
    </div>
  </div>);
}

function Chat({initSt}){
  const welcome=initSt
    ?`¡Hola! Soy NaturIA 🌿\n\nEstoy especializado en ${initSt.s}. Puedo explicarte ${initSt.cs.slice(0,2).join(' y ')}.\n\n¿Cuál es tu pregunta?`
    :'¡Hola! Soy NaturIA 🌿\n\nSoy tu asistente de Ciencias Naturales con IA real. Puedo ayudarte con genética, química, ecosistemas y física.\n\n¿Qué quieres explorar hoy?';
  const [msgs,setMsgs]=useState([{role:'assistant',content:welcome}]);
  const [inp,setInp]=useState('');
  const [load,setLoad]=useState(false);
  const [st,setSt]=useState(initSt);
  const endRef=useRef(null);
  const inRef=useRef(null);
  useEffect(()=>{endRef.current?.scrollIntoView({behavior:'smooth'})},[msgs]);
  const send=async(txt)=>{
    const m=(txt||inp).trim();
    if(!m||load)return;
    setInp('');
    const nm=[...msgs,{role:'user',content:m}];
    setMsgs(nm);setLoad(true);
    try{
      const r=await askClaude(nm.map(x=>({role:x.role,content:x.content})),st);
      setMsgs(p=>[...p,{role:'assistant',content:r}]);
    }catch{
      setMsgs(p=>[...p,{role:'assistant',content:'🔌 Error de conexión. Verifica tu conexión a internet e intenta de nuevo.'}]);
    }
    setLoad(false);setTimeout(()=>inRef.current?.focus(),100);
  };
  const sugs=st?[`¿Cómo funciona ${st.cs[0]}?`,'Dame un ejemplo real','¿Por qué es importante?']:['¿Qué es la fotosíntesis?','Explícame el ADN','¿Cómo funciona la gravedad?'];
  return(<div style={{display:'flex',flexDirection:'column',height:'100%'}}>
    <div style={{padding:'14px 18px',borderBottom:'1px solid var(--border)',background:'rgba(6,13,26,0.95)',backdropFilter:'blur(20px)',flexShrink:0}}>
      <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'12px'}}>
        <div style={{width:'40px',height:'40px',borderRadius:'12px',background:'linear-gradient(135deg,#003d2c,#00a882)',border:'1px solid rgba(0,212,168,0.3)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'20px',boxShadow:'0 4px 20px rgba(0,212,168,0.2)'}}>🌿</div>
        <div style={{flex:1}}>
          <div style={{fontFamily:'var(--font-d)',fontWeight:'700',fontSize:'15px',color:'var(--text)'}}>NaturIA</div>
          <div style={{display:'flex',alignItems:'center',gap:'6px'}}><div className="gd" style={{width:'6px',height:'6px'}}></div><span style={{fontSize:'11px',color:'var(--teal)'}}>En línea{st?' · '+st.s:''}</span></div>
        </div>
      </div>
      <div style={{display:'flex',gap:'6px',overflowX:'auto',scrollbarWidth:'none',paddingBottom:'2px'}}>
        <button onClick={()=>setSt(null)} style={{padding:'5px 12px',borderRadius:'20px',fontSize:'11px',fontWeight:'500',whiteSpace:'nowrap',background:!st?'rgba(0,212,168,0.15)':'transparent',border:`1px solid ${!st?'rgba(0,212,168,0.4)':'var(--border)'}`,color:!st?'var(--teal)':'var(--text3)'}}>🌐 General</button>
        {STATIONS.map(s=><button key={s.id} onClick={()=>setSt(s)} style={{padding:'5px 12px',borderRadius:'20px',fontSize:'11px',fontWeight:'500',whiteSpace:'nowrap',background:st?.id===s.id?s.ad:'transparent',border:`1px solid ${st?.id===s.id?s.ab:'var(--border)'}`,color:st?.id===s.id?s.a:'var(--text3)'}}>{s.e} {s.s}</button>)}
      </div>
    </div>
    <div style={{flex:1,overflowY:'auto',padding:'20px 16px',display:'flex',flexDirection:'column',gap:'14px'}}>
      {msgs.map((m,i)=>(
        <div key={i} className="fu" style={{display:'flex',justifyContent:m.role==='user'?'flex-end':'flex-start',gap:'8px',animationDelay:`${Math.min(i,2)*.04}s`}}>
          {m.role==='assistant'&&<div style={{width:'32px',height:'32px',borderRadius:'10px',background:'linear-gradient(135deg,#003d2c,#00a882)',border:'1px solid rgba(0,212,168,0.25)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'16px',flexShrink:0,marginTop:'2px'}}>🌿</div>}
          <div className={m.role==='user'?'msg-u':'msg-a'} style={{maxWidth:'80%',padding:'12px 16px',borderRadius:m.role==='user'?'18px 18px 6px 18px':'18px 18px 18px 6px'}}>
            <p style={{fontSize:'13px',lineHeight:'1.7',whiteSpace:'pre-wrap',color:'var(--text)'}}>{m.content}</p>
          </div>
        </div>
      ))}
      {load&&<div style={{display:'flex',gap:'8px',alignItems:'flex-start'}}>
        <div style={{width:'32px',height:'32px',borderRadius:'10px',background:'linear-gradient(135deg,#003d2c,#00a882)',border:'1px solid rgba(0,212,168,0.25)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'16px',flexShrink:0}}>🌿</div>
        <div className="msg-a" style={{padding:'14px 18px',borderRadius:'18px 18px 18px 6px',display:'flex',gap:'5px',alignItems:'center'}}>
          <div className="dot"/><div className="dot"/><div className="dot"/>
        </div>
      </div>}
      <div ref={endRef}/>
    </div>
    {msgs.length<=1&&<div style={{padding:'0 16px 8px',display:'flex',gap:'7px',overflowX:'auto',scrollbarWidth:'none',flexShrink:0}}>
      {sugs.map((s,i)=><button key={i} onClick={()=>send(s)} style={{fontSize:'12px',padding:'8px 14px',borderRadius:'20px',background:'var(--surface)',border:'1px solid var(--border2)',color:'var(--text2)',whiteSpace:'nowrap',flexShrink:0}}>{s}</button>)}
    </div>}
    <div style={{padding:'12px 16px',borderTop:'1px solid var(--border)',background:'rgba(6,13,26,0.95)',backdropFilter:'blur(20px)',display:'flex',gap:'10px',alignItems:'flex-end',paddingBottom:'max(12px,env(safe-area-inset-bottom,12px))',flexShrink:0}}>
      <textarea ref={inRef} value={inp} onChange={e=>setInp(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send();}}} placeholder="Escribe tu pregunta…" rows={1} style={{flex:1,borderRadius:'14px',padding:'11px 16px',fontSize:'13px',resize:'none',lineHeight:'1.5',maxHeight:'90px'}}/>
      <button onClick={()=>send()} disabled={!inp.trim()||load} style={{width:'44px',height:'44px',borderRadius:'13px',flexShrink:0,display:'flex',alignItems:'center',justifyContent:'center',background:inp.trim()&&!load?'linear-gradient(135deg,#00a882,#00d4a8)':'var(--surface)',border:`1px solid ${inp.trim()&&!load?'rgba(0,212,168,0.3)':'var(--border)'}`,boxShadow:inp.trim()&&!load?'0 4px 20px rgba(0,212,168,0.3)':'none',opacity:inp.trim()||load?1:.4}}>
        {load?<svg style={{animation:'spin .8s linear infinite'}} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d4a8" strokeWidth="2.5"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>:<span style={{color:'#001a12',fontSize:'18px',fontWeight:'700'}}>↑</span>}
      </button>
    </div>
  </div>);
}

function Meta(){
  const [op,setOp]=useState(null);
  const ethics=[
    {q:'¿La IA siempre tiene razón?',a:'No. La IA puede generar errores. Siempre verifica con fuentes confiables.',i:'⚠️'},
    {q:'¿La IA reemplaza al profesor?',a:'No. El docente aporta experiencia humana y guía personalizada. La IA es una herramienta de apoyo.',i:'👨‍🏫'},
    {q:'¿Qué aprendemos al usar IA?',a:'A hacer mejores preguntas y a pensar críticamente: habilidades esenciales del siglo XXI.',i:'💡'}
  ];
  return(<div style={{padding:'24px 20px 90px',minHeight:'100%',position:'relative'}}>
    <Orbs colors={['rgba(245,166,35,0.08)','rgba(0,180,140,0.07)','']}/>
    <div style={{position:'relative',zIndex:1}}>
      <p style={{fontFamily:'var(--font-d)',fontSize:'11px',fontWeight:'600',color:'var(--amber)',letterSpacing:'.1em',textTransform:'uppercase',marginBottom:'6px'}}>Metodología</p>
      <h2 style={{fontFamily:'var(--font-d)',fontSize:'24px',fontWeight:'800',color:'var(--text)',marginBottom:'6px',letterSpacing:'-.02em'}}>Metacognición</h2>
      <p style={{fontSize:'13px',color:'var(--text2)',marginBottom:'24px'}}>Aprende a pensar críticamente con IA</p>
      <div style={{position:'relative',marginBottom:'22px'}}>
        <div style={{position:'absolute',left:'17px',top:'36px',bottom:'36px',width:'2px',background:'linear-gradient(to bottom,rgba(0,212,168,0.35),rgba(0,212,168,0.04))',borderRadius:'2px'}}/>
        <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
          {META_STEPS.map((s,i)=>(
            <div key={i} className="glass fu" style={{animationDelay:`${i*.08}s`,borderRadius:'var(--r-lg)',padding:'16px 16px 16px 12px',border:'1px solid var(--border)',cursor:'pointer'}} onClick={()=>setOp(op===i?null:i)}>
              <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
                <div style={{width:'34px',height:'34px',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-d)',fontWeight:'800',fontSize:'14px',background:'linear-gradient(135deg,#003d2c,#005c47)',border:'1px solid rgba(0,212,168,0.3)',color:'var(--teal)',flexShrink:0}}>{s.n}</div>
                <div style={{flex:1}}>
                  <div style={{fontSize:'10px',color:'var(--teal)',fontWeight:'600',letterSpacing:'.07em',textTransform:'uppercase',marginBottom:'2px'}}>Paso {s.n}</div>
                  <div style={{fontFamily:'var(--font-d)',fontWeight:'600',fontSize:'13px',color:'var(--text)'}}>{s.l}</div>
                </div>
                <span style={{color:'var(--text3)',fontSize:'17px',transform:op===i?'rotate(90deg)':'none',transition:'transform .2s'}}>{s.icon}</span>
              </div>
              {op===i&&<div className="fi" style={{marginTop:'13px',paddingTop:'13px',borderTop:'1px solid var(--border)'}}>
                <p style={{fontSize:'13px',color:'var(--text2)',lineHeight:'1.7',marginBottom:'10px'}}>{s.d}</p>
                <div style={{background:'rgba(0,212,168,0.06)',border:'1px solid rgba(0,212,168,0.18)',borderRadius:'10px',padding:'12px 14px'}}>
                  <div style={{fontSize:'10px',color:'var(--teal)',fontWeight:'600',letterSpacing:'.07em',textTransform:'uppercase',marginBottom:'5px'}}>Ejemplo</div>
                  <p style={{fontSize:'12px',color:'var(--text2)',lineHeight:'1.6',fontStyle:'italic'}}>{s.ex}</p>
                </div>
              </div>}
            </div>
          ))}
        </div>
      </div>
      <div className="glass fu" style={{borderRadius:'var(--r-lg)',padding:'20px',border:'1px solid var(--border)',animationDelay:'.33s'}}>
        <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'18px'}}>
          <div style={{width:'36px',height:'36px',borderRadius:'10px',background:'rgba(245,166,35,0.12)',border:'1px solid rgba(245,166,35,0.28)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'18px'}}>⚖️</div>
          <h3 style={{fontFamily:'var(--font-d)',fontSize:'15px',fontWeight:'700',color:'var(--text)'}}>Uso Ético de la IA</h3>
        </div>
        {ethics.map((e,i)=>(
          <div key={i} style={{marginBottom:i<ethics.length-1?'16px':0,paddingBottom:i<ethics.length-1?'16px':0,borderBottom:i<ethics.length-1?'1px solid var(--border)':'none'}}>
            <div style={{display:'flex',alignItems:'flex-start',gap:'9px',marginBottom:'5px'}}>
              <span style={{fontSize:'14px'}}>{e.i}</span>
              <div style={{fontFamily:'var(--font-d)',fontWeight:'600',fontSize:'13px',color:'var(--text)'}}>{e.q}</div>
            </div>
            <p style={{fontSize:'12px',color:'var(--text2)',lineHeight:'1.6',paddingLeft:'23px'}}>{e.a}</p>
          </div>
        ))}
      </div>
    </div>
  </div>);
}

/* ── TRADING SCREEN ── */
function Trading(){
  const [img,setImg]=useState(null);
  const [imgData,setImgData]=useState(null);
  const [mimeType,setMimeType]=useState('image/jpeg');
  const [analysis,setAnalysis]=useState(null);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);
  const fileRef=useRef(null);

  const handleFile=e=>{
    const file=e.target.files?.[0];
    if(!file)return;
    setMimeType(file.type||'image/jpeg');
    const reader=new FileReader();
    reader.onload=ev=>{
      const dataUrl=ev.target.result;
      setImg(dataUrl);
      const base64=dataUrl.split(',')[1];
      setImgData(base64);
      setAnalysis(null);
      setError(null);
    };
    reader.readAsDataURL(file);
  };

  const analyze=async()=>{
    if(!imgData){return;}
    setLoading(true);setError(null);setAnalysis(null);
    try{
      const r=await fetch('/api/analyze',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({image:imgData,mimeType})
      });
      const d=await r.json();
      if(!r.ok)throw new Error(d.error||'Error del servidor');
      setAnalysis(d.analysis);
    }catch(e){
      setError('Error al analizar. Verifica tu conexión e intenta de nuevo.');
    }
    setLoading(false);
  };

  // Parse analysis into sections
  const parseSections=text=>{
    if(!text)return[];
    const icons=['📊','🎯','🔍','📈','✅','🎯','🛑','⚠️'];
    const lines=text.split('\n');
    const sections=[];
    let current=null;
    lines.forEach(line=>{
      const isHeader=icons.some(ic=>line.trim().startsWith(ic));
      if(isHeader){
        if(current)sections.push(current);
        current={title:line.trim(),content:[]};
      } else if(current&&line.trim()){
        current.content.push(line.trim());
      }
    });
    if(current)sections.push(current);
    return sections;
  };

  const sections=parseSections(analysis);

  const sectionColors={
    '📊':'#00d4a8','🎯':'#4d9ef5','🔍':'#9b7fea',
    '📈':'#f5a623','✅':'#00d4a8','🛑':'#ff6b6b','⚠️':'#f5a623'
  };

  const getColor=title=>{
    const icon=title?.[0];
    return sectionColors[icon]||'#8fa3c0';
  };

  return(<div style={{padding:'0 0 90px',minHeight:'100%',position:'relative'}}>
    <Orbs colors={['rgba(77,158,245,0.1)','rgba(245,166,35,0.08)','']}/>
    <div style={{position:'relative',zIndex:1}}>

      {/* Header */}
      <div style={{padding:'24px 20px 16px'}}>
        <p style={{fontFamily:'var(--font-d)',fontSize:'11px',fontWeight:'600',color:'#4d9ef5',letterSpacing:'.1em',textTransform:'uppercase',marginBottom:'6px'}}>Análisis Técnico</p>
        <h2 style={{fontFamily:'var(--font-d)',fontSize:'24px',fontWeight:'800',color:'var(--text)',marginBottom:'6px',letterSpacing:'-.02em'}}>Trading IA</h2>
        <p style={{fontSize:'13px',color:'var(--text2)'}}>Sube una foto de tu gráfico y recibe análisis profesional</p>
      </div>

      {/* Upload zone */}
      <div style={{padding:'0 20px'}}>
        <input ref={fileRef} type="file" accept="image/*" capture="environment" onChange={handleFile} style={{display:'none'}}/>
        {!img?(
          <div className="glass fu" onClick={()=>fileRef.current?.click()} style={{borderRadius:'var(--r-xl)',padding:'40px 20px',textAlign:'center',cursor:'pointer',border:'2px dashed rgba(77,158,245,0.3)',background:'rgba(77,158,245,0.04)',marginBottom:'16px'}}>
            <div style={{fontSize:'52px',marginBottom:'14px'}}>📊</div>
            <p style={{fontFamily:'var(--font-d)',fontWeight:'600',fontSize:'15px',color:'var(--text)',marginBottom:'6px'}}>Subir gráfico de trading</p>
            <p style={{fontSize:'12px',color:'var(--text2)',marginBottom:'14px'}}>Toca para seleccionar o tomar foto</p>
            <div style={{display:'inline-flex',gap:'8px'}}>
              <span style={{fontSize:'11px',padding:'5px 12px',borderRadius:'20px',background:'rgba(77,158,245,0.12)',color:'#4d9ef5',border:'1px solid rgba(77,158,245,0.25)'}}>📷 Cámara</span>
              <span style={{fontSize:'11px',padding:'5px 12px',borderRadius:'20px',background:'rgba(77,158,245,0.12)',color:'#4d9ef5',border:'1px solid rgba(77,158,245,0.25)'}}>🖼️ Galería</span>
            </div>
          </div>
        ):(
          <div style={{marginBottom:'16px'}}>
            <div style={{borderRadius:'var(--r-lg)',overflow:'hidden',border:'1px solid var(--border)',marginBottom:'10px',position:'relative'}}>
              <img src={img} alt="Gráfico" style={{width:'100%',maxHeight:'240px',objectFit:'contain',background:'#0d1b2e',display:'block'}}/>
              <button onClick={()=>{setImg(null);setImgData(null);setAnalysis(null);setError(null);}} style={{position:'absolute',top:'8px',right:'8px',width:'28px',height:'28px',borderRadius:'50%',background:'rgba(0,0,0,0.7)',color:'white',fontSize:'14px',display:'flex',alignItems:'center',justifyContent:'center'}}>×</button>
            </div>
            <button onClick={()=>fileRef.current?.click()} style={{background:'transparent',border:'1px solid var(--border2)',color:'var(--text2)',padding:'7px 14px',borderRadius:'20px',fontSize:'12px',width:'100%',marginBottom:'10px'}}>
              🔄 Cambiar imagen
            </button>
          </div>
        )}

        {/* Analyze button */}
        {img&&!loading&&(
          <button className="fu" onClick={analyze} style={{width:'100%',padding:'16px',borderRadius:'var(--r-md)',fontSize:'15px',fontFamily:'var(--font-d)',fontWeight:'700',background:'linear-gradient(135deg,#1a6fd4,#4d9ef5)',color:'white',boxShadow:'0 6px 28px rgba(77,158,245,0.3)',marginBottom:'20px'}}>
            🔍 Analizar Gráfico
          </button>
        )}

        {/* Loading */}
        {loading&&(
          <div className="glass fu" style={{borderRadius:'var(--r-lg)',padding:'24px',textAlign:'center',border:'1px solid rgba(77,158,245,0.2)',marginBottom:'20px'}}>
            <div style={{width:'40px',height:'40px',border:'3px solid rgba(77,158,245,0.2)',borderTop:'3px solid #4d9ef5',borderRadius:'50%',margin:'0 auto 14px',animation:'spin .9s linear infinite'}}></div>
            <p style={{fontFamily:'var(--font-d)',fontWeight:'600',color:'var(--text)',marginBottom:'4px'}}>Analizando gráfico...</p>
            <p style={{fontSize:'12px',color:'var(--text2)'}}>La IA está procesando tendencias, soportes y patrones</p>
          </div>
        )}

        {/* Error */}
        {error&&(
          <div style={{background:'rgba(255,107,107,0.1)',border:'1px solid rgba(255,107,107,0.3)',borderRadius:'var(--r-md)',padding:'14px',marginBottom:'16px'}}>
            <p style={{fontSize:'13px',color:'#ff6b6b'}}>{error}</p>
          </div>
        )}

        {/* Results */}
        {sections.length>0&&(
          <div className="fu">
            <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'16px',padding:'12px 16px',background:'rgba(0,212,168,0.06)',border:'1px solid rgba(0,212,168,0.18)',borderRadius:'var(--r-md)'}}>
              <span style={{fontSize:'16px'}}>✅</span>
              <span style={{fontFamily:'var(--font-d)',fontWeight:'600',fontSize:'13px',color:'var(--teal)'}}>Análisis completado por IA</span>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
              {sections.map((s,i)=>(
                <div key={i} className="glass" style={{borderRadius:'var(--r-lg)',padding:'16px',border:`1px solid ${getColor(s.title)}33`}}>
                  <div style={{fontFamily:'var(--font-d)',fontWeight:'700',fontSize:'14px',color:getColor(s.title),marginBottom:'10px'}}>{s.title}</div>
                  {s.content.map((line,j)=>(
                    <p key={j} style={{fontSize:'13px',color:'var(--text2)',lineHeight:'1.7',marginBottom:'4px'}}>{line}</p>
                  ))}
                </div>
              ))}
            </div>
            <div style={{marginTop:'16px',padding:'12px 14px',background:'rgba(255,107,107,0.06)',border:'1px solid rgba(255,107,107,0.2)',borderRadius:'var(--r-md)'}}>
              <p style={{fontSize:'11px',color:'#ff6b6b',lineHeight:'1.6'}}>⚠️ Este análisis es educativo e informativo. No constituye asesoría financiera. El trading implica riesgo de pérdida de capital.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>);
}

const NAV=[
  {i:'⌂',l:'Inicio',v:'home'},
  {i:'🔭',l:'Ciencias',v:'stations'},
  {i:'💬',l:'IA Chat',v:'chat'},
  {i:'📈',l:'Trading',v:'trading'},
  {i:'🧠',l:'Método',v:'meta'}
];

function App(){
  const [view,setView]=useState('home');
  const [sel,setSel]=useState(null);
  const [chatSt,setChatSt]=useState(null);
  const navTo=v=>{if(v!=='chat')setChatSt(null);setSel(null);setView(v);};
  const activeNav=view==='station-detail'?'stations':view;
  return(<div style={{maxWidth:'430px',margin:'0 auto',background:'var(--bg)',height:'100svh',display:'flex',flexDirection:'column',overflow:'hidden'}}>
    <div style={{flex:1,overflowY:view==='chat'?'hidden':'auto',display:'flex',flexDirection:'column',overflow:view==='chat'?'hidden':'auto'}}>
      {view==='home'&&<Home onNav={navTo}/>}
      {view==='stations'&&<Stations onSel={s=>{setSel(s);setView('station-detail');}}/>}
      {view==='station-detail'&&sel&&<Detail s={sel} onBack={()=>setView('stations')} onChat={s=>{setChatSt(s);setView('chat');}}/>}
      {view==='chat'&&<Chat initSt={chatSt} key={chatSt?.id||'g'}/>}
      {view==='trading'&&<Trading/>}
      {view==='meta'&&<Meta/>}
    </div>
    {view!=='chat'&&(
      <nav className="nav-bar">
        {NAV.map(n=>(
          <button key={n.v} className={`nav-item ${activeNav===n.v?'active':''}`} onClick={()=>navTo(n.v)}>
            <span style={{fontSize:'20px'}}>{n.i}</span>
            <span style={{fontSize:'9px'}}>{n.l}</span>
          </button>
        ))}
      </nav>
    )}
  </div>);
}

ReactDOM.render(React.createElement(App),document.getElementById('root'));
</script>
</body>
</html>
