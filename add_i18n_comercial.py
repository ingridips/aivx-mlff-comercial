"""
Adiciona IDs de tradução ao index-comercial.html.
Não altera nenhum layout, CSS ou estrutura.
"""
SRC  = 'C:/Users/ingri/OneDrive/Documentos/Projetos/AIVX - Institucional/mlff-comercial/index-comercial.html'
DEST = 'C:/Users/ingri/OneDrive/Documentos/Projetos/AIVX - Institucional/mlff-comercial/index_with_ids.html'

with open(SRC, 'r', encoding='utf-8') as f:
    c = f.read()

def sub1(old, new, tag=''):
    global c
    if old not in c:
        print(f'[WARN] NOT FOUND: {tag or old[:80]}')
        return
    c = c.replace(old, new, 1)

# ── S-HERO ─────────────────────────────────────────────────
sub1('<p class="hero-sub">Arquitetura aberta.',
     '<p class="hero-sub" id="hero-sub">Arquitetura aberta.')

sub1('>Feito aqui, para o tráfego daqui.</p>',
     ' id="hero-slogan">Feito aqui, para o tráfego daqui.</p>')

# ── S-ABOUT ────────────────────────────────────────────────
sub1('<p class="sec-label reveal">Quem Somos</p>',
     '<p class="sec-label reveal" id="about-label">Quem Somos</p>')

sub1('<h2 class="sec-title reveal r1">Inteligência tecnológica para <span class="hl-p">operações críticas</span></h2>',
     '<h2 class="sec-title reveal r1" id="about-title">Inteligência tecnológica para <span class="hl-p">operações críticas</span></h2>')

sub1('<p class="sec-desc reveal r2">A AIVX é uma empresa focada em tecnologia',
     '<p class="sec-desc reveal r2" id="about-desc">A AIVX é uma empresa focada em tecnologia')

sub1('<span class="pill">Rodovias</span>',
     '<span class="pill" id="about-pill1">Rodovias</span>')
sub1('<span class="pill">ITS</span>',
     '<span class="pill" id="about-pill2">ITS</span>')
sub1('<span class="pill">CFTV</span>',
     '<span class="pill" id="about-pill3">CFTV</span>')
sub1('<span class="pill">Free Flow</span>',
     '<span class="pill" id="about-pill4">Free Flow</span>')
sub1('<span class="pill">Mobilidade Urbana</span>',
     '<span class="pill" id="about-pill5">Mobilidade Urbana</span>')
sub1('<span class="pill">Infraestrutura</span>',
     '<span class="pill" id="about-pill6">Infraestrutura</span>')

sub1('<div class="sc-val">ITS</div><div class="sc-lbl">Sistemas Inteligentes de Transporte nosso DNA</div>',
     '<div class="sc-val" id="about-sc1-val">ITS</div><div class="sc-lbl" id="about-sc1-lbl">Sistemas Inteligentes de Transporte nosso DNA</div>')

sub1('<div class="sc-val">API-First</div><div class="sc-lbl">Arquitetura aberta integra qualquer tecnologia</div>',
     '<div class="sc-val" id="about-sc2-val">API-First</div><div class="sc-lbl" id="about-sc2-lbl">Arquitetura aberta integra qualquer tecnologia</div>')

sub1('<div class="sc-val">Zero Lock-in</div><div class="sc-lbl">Independência de fabricante por design</div>',
     '<div class="sc-val" id="about-sc3-val">Zero Lock-in</div><div class="sc-lbl" id="about-sc3-lbl">Independência de fabricante por design</div>')

# ── S-FREEFLOW ─────────────────────────────────────────────
sub1('<p class="sec-label reveal">Por que Free Flow</p>',
     '<p class="sec-label reveal" id="ff-label">Por que Free Flow</p>')

sub1('<h2 class="sec-title reveal r1">Praça de pedágio <span class="hl-p">vs</span> Pórtico MLFF</h2>',
     '<h2 class="sec-title reveal r1" id="ff-title">Praça de pedágio <span class="hl-p">vs</span> Pórtico MLFF</h2>')

sub1('<p class="sec-desc reveal r2">A Lei 14.157/2021 tornou o MLFF obrigatório',
     '<p class="sec-desc reveal r2" id="ff-desc">A Lei 14.157/2021 tornou o MLFF obrigatório')

sub1('class="law-badge reveal r3" style="margin-top:.75rem">Lei 14.157/2021 · Free Flow Obrigatório</div>',
     'class="law-badge reveal r3" style="margin-top:.75rem" id="ff-law">Lei 14.157/2021 · Free Flow Obrigatório</div>')

sub1(';margin-bottom:1.1rem">Comparativo operacional</p>',
     ';margin-bottom:1.1rem" id="ff-comp-hdr">Comparativo operacional</p>')

# Table headers
sub1('<th>Característica</th>', '<th id="ff-th1">Característica</th>')
sub1('<th>Praça Conv.</th>',    '<th id="ff-th2">Praça Conv.</th>')
sub1('<th>MLFF</th>',           '<th id="ff-th3">MLFF</th>')

# Table rows (shared with s-freeflow only)
for row, (c1, c2r, c2g) in enumerate([
    ('Infraestrutura', 'Cabines + barreiras',  'Pórtico com sensores'),
    ('Velocidade',     'Parada/redução',        'Velocidade de cruzeiro'),
    ('Pagamento',      'No ato na cabine',      'TAG ou placa + app'),
    ('Segurança',      'Risco de colisões',     'Fluxo contínuo'),
    ('Capacidade',     'Limitada por cabines',  'Ilimitada (rodovia)'),
], start=1):
    sub1(f'<td>{c1}</td>', f'<td id="ff-r{row}c1">{c1}</td>')
    sub1(f'<td class="td-r">{c2r}</td>', f'<td class="td-r" id="ff-r{row}c2">{c2r}</td>')
    sub1(f'<td class="td-g">{c2g}</td>', f'<td class="td-g" id="ff-r{row}c3">{c2g}</td>')

sub1('<td>Impacto CO₂</td>',
     '<td id="ff-r6c1">Impacto CO₂</td>')
sub1('<td class="td-r">↑ Para e arranca</td>',
     '<td class="td-r" id="ff-r6c2">↑ Para e arranca</td>')
sub1('<td class="td-g">↓ Emissões</td>',
     '<td class="td-g" id="ff-r6c3">↓ Emissões</td>')

# ── S-COMP ─────────────────────────────────────────────────
sub1('<p class="sec-label reveal" style="justify-content:center">Como chegamos ao mercado</p>',
     '<p class="sec-label reveal" style="justify-content:center" id="comp-label">Como chegamos ao mercado</p>')

sub1('<h2 class="sec-title reveal r1" style="text-align:center;max-width:820px;margin:0 auto">\n        Tecnologia de referência, <span class="hl-p">feita para o Brasil</span>\n      </h2>',
     '<h2 class="sec-title reveal r1" style="text-align:center;max-width:820px;margin:0 auto" id="comp-title">\n        Tecnologia de referência, <span class="hl-p">feita para o Brasil</span>\n      </h2>')

sub1(';white-space:normal">\n          Na AIVX, rodovia é infraestrutura crítica.',
     ';white-space:normal" id="comp-body1">\n          Na AIVX, rodovia é infraestrutura crítica.')

sub1(';margin:0 auto">\n          Construímos uma plataforma de Free Flow',
     ';margin:0 auto" id="comp-body2">\n          Construímos uma plataforma de Free Flow')

# ── S-SOLUTION ─────────────────────────────────────────────
sub1('<p class="sec-label reveal">A Solução</p>',
     '<p class="sec-label reveal" id="sol-label">A Solução</p>')

sub1('<h2 class="sec-title reveal r1">Plataforma <span class="hl-p">aberta</span>, identificação <span class="hl-t">inteligente</span></h2>',
     '<h2 class="sec-title reveal r1" id="sol-title">Plataforma <span class="hl-p">aberta</span>, identificação <span class="hl-t">inteligente</span></h2>')

sub1('<p class="sec-desc reveal r2">API-first, multi-vendor, LIDAR 360°',
     '<p class="sec-desc reveal r2" id="sol-desc">API-first, multi-vendor, LIDAR 360°')

sub1('<div class="vs-title">Concorrentes</div>',
     '<div class="vs-title" id="sol-vs-bad-title">Concorrentes</div>')

sub1('<ul class="vs-list"><li>Arquitetura fechada</li>',
     '<ul class="vs-list" id="sol-vs-bad-list"><li>Arquitetura fechada</li>')

sub1('<div class="vs-title">AIVX MLFF</div>',
     '<div class="vs-title" id="sol-vs-good-title">AIVX MLFF</div>')

sub1('<ul class="vs-list"><li>API-first e aberta</li>',
     '<ul class="vs-list" id="sol-vs-good-list"><li>API-first e aberta</li>')

# feat-grid 6 cards
for i, (title, desc) in enumerate([
    ('Arquitetura API-First',         'Integra qualquer fabricante, sem dependência de ecossistema fechado.'),
    ('LIDAR 360° Inteligente',        'ID único por veículo. Zero embaralhamento, zero sobreposição.'),
    ('Redundância Ativa',             'Semi-pórtico a 300m audita em tempo real, não só cobre falhas.'),
    ('2 Níveis de Processamento',     'Edge (captura) + Core (consolidação). Opera mesmo em falhas totais.'),
    ('100% Tropicalizado',            'Placas Mercosul, dimensões locais, condições climáticas brasileiras.'),
    ('Expansão Contínua',             'Novos equipamentos integram via API. Investimento se valoriza.'),
], start=1):
    sub1(f'<div class="fc-title">{title}</div><div class="fc-desc">{desc}</div>',
         f'<div class="fc-title" id="sol-fc{i}-title">{title}</div><div class="fc-desc" id="sol-fc{i}-desc">{desc}</div>')

# ── S-PORTICO ──────────────────────────────────────────────
sub1('<p class="portico-note">Representação ilustrativa da arquitetura de pórtico</p>',
     '<p class="portico-note" id="portico-note">Representação ilustrativa da arquitetura de pórtico</p>')

sub1('<p class="sec-label reveal">Estrutura Física</p>',
     '<p class="sec-label reveal" id="portico-label">Estrutura Física</p>')

sub1('<h2 class="sec-title reveal r1">Pórtico <span class="hl-t">completo</span>, cada sensor no lugar certo</h2>',
     '<h2 class="sec-title reveal r1" id="portico-title">Pórtico <span class="hl-t">completo</span>, cada sensor no lugar certo</h2>')

sub1('<p class="sec-desc reveal r2">Hardware posicionado estrategicamente',
     '<p class="sec-desc reveal r2" id="portico-desc">Hardware posicionado estrategicamente')

sub1('<div class="ap-title" style="font-size:.82rem">Sensores na travessa</div><div class="ap-desc" style="font-size:.73rem">Câmeras OCR frontais',
     '<div class="ap-title" style="font-size:.82rem" id="portico-ap1-title">Sensores na travessa</div><div class="ap-desc" style="font-size:.73rem" id="portico-ap1-desc">Câmeras OCR frontais')

sub1('<div class="ap-title" style="font-size:.82rem">LIDAR no centro</div><div class="ap-desc" style="font-size:.73rem">Varredura 360°',
     '<div class="ap-title" style="font-size:.82rem" id="portico-ap2-title">LIDAR no centro</div><div class="ap-desc" style="font-size:.73rem" id="portico-ap2-desc">Varredura 360°')

sub1('<div class="ap-title" style="font-size:.82rem">Antenas nas laterais</div><div class="ap-desc" style="font-size:.73rem">RFID/DSRC para leitura',
     '<div class="ap-title" style="font-size:.82rem" id="portico-ap3-title">Antenas nas laterais</div><div class="ap-desc" style="font-size:.73rem" id="portico-ap3-desc">RFID/DSRC para leitura')

# ── S-ARCHLVL ──────────────────────────────────────────────
sub1('<p class="sec-label reveal">Como Funciona</p>',
     '<p class="sec-label reveal" id="archlvl-label">Como Funciona</p>')

sub1('<h2 class="sec-title reveal r1">Dois níveis de processamento, <span class="hl-t">zero ponto de falha único</span></h2>',
     '<h2 class="sec-title reveal r1" id="archlvl-title">Dois níveis de processamento, <span class="hl-t">zero ponto de falha único</span></h2>')

sub1('<span class="al-badge">Edge · Pórtico</span><div class="al-title">Captura em Tempo Real</div><div class="al-desc">PC industrial,',
     '<span class="al-badge" id="archlvl-c1-badge">Edge · Pórtico</span><div class="al-title" id="archlvl-c1-title">Captura em Tempo Real</div><div class="al-desc" id="archlvl-c1-desc">PC industrial,')

sub1('<span class="al-badge">Core · Sala Técnica</span><div class="al-title">Consolidação & Inteligência</div><div class="al-desc">Server de imagem',
     '<span class="al-badge" id="archlvl-c2-badge">Core · Sala Técnica</span><div class="al-title" id="archlvl-c2-title">Consolidação & Inteligência</div><div class="al-desc" id="archlvl-c2-desc">Server de imagem')

sub1('<span class="al-badge" style="background:rgba(103,255,142,.1);color:var(--green);border-color:rgba(103,255,142,.3)">Semi-Pórtico · 300m</span><div class="al-title">Redundância Ativa & Auditoria</div><div class="al-desc">Infraestrutura independente',
     '<span class="al-badge" style="background:rgba(103,255,142,.1);color:var(--green);border-color:rgba(103,255,142,.3)" id="archlvl-c3-badge">Semi-Pórtico · 300m</span><div class="al-title" id="archlvl-c3-title">Redundância Ativa & Auditoria</div><div class="al-desc" id="archlvl-c3-desc">Infraestrutura independente')

sub1('<span class="al-badge">Hardware Premium</span><div class="al-title">Sensoriamento de Alta Performance</div><div class="al-desc">OCR Ada',
     '<span class="al-badge" id="archlvl-c4-badge">Hardware Premium</span><div class="al-title" id="archlvl-c4-title">Sensoriamento de Alta Performance</div><div class="al-desc" id="archlvl-c4-desc">OCR Ada')

# ── S-VIDEO ────────────────────────────────────────────────
sub1('<p class="sec-label reveal" style="justify-content:center">Na Prática</p>',
     '<p class="sec-label reveal" style="justify-content:center" id="video-label">Na Prática</p>')

sub1('<h2 class="sec-title reveal r1" style="text-align:center">Veja o sistema <span class="hl-g">funcionando</span></h2>',
     '<h2 class="sec-title reveal r1" style="text-align:center" id="video-title">Veja o sistema <span class="hl-g">funcionando</span></h2>')

sub1('<p class="sec-desc reveal r2" style="text-align:center;margin:.5rem auto 0">Identificação em tempo real, múltiplas faixas, alta velocidade.</p>',
     '<p class="sec-desc reveal r2" style="text-align:center;margin:.5rem auto 0" id="video-desc">Identificação em tempo real, múltiplas faixas, alta velocidade.</p>')

# ── S-DASHBOARD ────────────────────────────────────────────
sub1('<p class="sec-label reveal">Interface de Validação</p>',
     '<p class="sec-label reveal" id="dash-label">Interface de Validação</p>')

sub1('<h2 class="sec-title reveal r1" style="margin-bottom:.2rem">Interface de <span class="hl-t">Validação N2</span></h2>',
     '<h2 class="sec-title reveal r1" style="margin-bottom:.2rem" id="dash-title">Interface de <span class="hl-t">Validação N2</span></h2>')

sub1('<p class="sec-desc reveal r2" style="max-width:720px;font-size:.92rem;line-height:1.55">Todas as evidências de um trânsito em uma única tela:',
     '<p class="sec-desc reveal r2" style="max-width:720px;font-size:.92rem;line-height:1.55" id="dash-desc">Todas as evidências de um trânsito em uma única tela:')

# ── S-DIFF ─────────────────────────────────────────────────
sub1('<p class="sec-label reveal">Diferenciais Competitivos</p>',
     '<p class="sec-label reveal" id="diff-label">Diferenciais Competitivos</p>')

sub1('<h2 class="sec-title reveal r1">Por que a AIVX é <span class="hl-p">diferente</span></h2>',
     '<h2 class="sec-title reveal r1" id="diff-title">Por que a AIVX é <span class="hl-p">diferente</span></h2>')

sub1(';color:var(--green)">Custo que faz sentido. Alta performance. Receita que não escapa.</p>',
     ';color:var(--green)" id="diff-tagline">Custo que faz sentido. Alta performance. Receita que não escapa.</p>')

for i, (title, desc_start) in enumerate([
    ('Arquitetura 100% Aberta',               'Enquanto fornecedores vendem ecossistemas fechados'),
    ('Identificação por Perfil, não por Tempo','LIDAR 360° cria fingerprint único por veículo.'),
    ('Redundância que Audita, não só Cobre',   'Semi-pórtico a 300m compara continuamente'),
], start=1):
    sub1(f'<div class="dc-title">{title}</div><div class="dc-desc">{desc_start}',
         f'<div class="dc-title" id="diff-dc{i}-title">{title}</div><div class="dc-desc" id="diff-dc{i}-desc">{desc_start}')

# ── S-IMPACT ───────────────────────────────────────────────
sub1('<p class="sec-label reveal" style="justify-content:center">Impacto de Negócio</p>',
     '<p class="sec-label reveal" style="justify-content:center" id="impact-label">Impacto de Negócio</p>')

sub1('<h2 class="sec-title reveal r1" style="text-align:center;margin:0 auto">Ganhos diretos para a <span class="hl-t">concessionária</span></h2>',
     '<h2 class="sec-title reveal r1" style="text-align:center;margin:0 auto" id="impact-title">Ganhos diretos para a <span class="hl-t">concessionária</span></h2>')

for i, (title, desc_start, tag) in enumerate([
    ('Redução de OPEX',        'Autovalidação elevada reduz revisão manual',        '↓ Custo Operacional'),
    ('Receita Protegida',      'Redundância ativa garante que nenhuma transação',    '↑ Taxa de Cobrança'),
    ('Alta Disponibilidade',   'Edge opera independente do Core',                   '↑ Uptime'),
    ('Auditoria & Regulação',  'Rastreabilidade completa por veículo',              '↑ Conformidade'),
    ('Sem Lock-in',            'Novos equipamentos integram via API. Investimento',  '↑ Longevidade'),
    ('Expansão Acelerada',     'Replicar em novos pórticos e contratos',            '↑ Escalabilidade'),
], start=1):
    sub1(f'<div class="ic-title">{title}</div><div class="ic-desc">{desc_start}',
         f'<div class="ic-title" id="impact-c{i}-title">{title}</div><div class="ic-desc" id="impact-c{i}-desc">{desc_start}')
    sub1(f'<span class="ic-tag">{tag}</span>',
         f'<span class="ic-tag" id="impact-c{i}-tag">{tag}</span>')

# ── S-END ──────────────────────────────────────────────────
sub1('<h2 class="end-title reveal r1" style="font-size:clamp(2rem,5vw,3.8rem)">Não mais um sistema MLFF.',
     '<h2 class="end-title reveal r1" style="font-size:clamp(2rem,5vw,3.8rem)" id="end-title">Não mais um sistema MLFF.')

sub1('class="end-desc reveal r2"',
     'class="end-desc reveal r2" id="end-desc"')

sub1('class="end-tagline" style="font-size:.95rem;color:var(--muted);font-weight:500">Inteligência',
     'class="end-tagline" style="font-size:.95rem;color:var(--muted);font-weight:500" id="end-tagline">Inteligência')

sub1('class="foot reveal r5"',
     'class="foot reveal r5" id="end-foot"')

# ── LANG-SWITCHER CSS ──────────────────────────────────────
LANG_CSS = """
/* ── LANG SWITCHER ── */
#lang-switcher {
  position:fixed; bottom:24px; right:24px; z-index:9999;
  display:flex; gap:6px;
}
.lang-btn {
  background:rgba(255,255,255,.07); border:1px solid rgba(255,255,255,.15);
  color:rgba(255,255,255,.5); font-family:inherit; font-size:11px;
  font-weight:700; letter-spacing:.1em; text-transform:uppercase;
  padding:6px 12px; border-radius:6px; cursor:pointer;
  transition:all .25s;
}
.lang-btn:hover { background:rgba(116,96,255,.2); border-color:rgba(116,96,255,.5); color:#fff; }
.lang-btn.active { background:rgba(116,96,255,.25); border-color:#7460FF; color:#fff; }
"""
c = c.replace('</style>', LANG_CSS + '\n</style>', 1)

# ── LANG-SWITCHER DIV ──────────────────────────────────────
c = c.replace('<body>', '<body>\n\n<div id="lang-switcher"></div>\n', 1)

# ── INJETAR i18n.js ────────────────────────────────────────
c = c.replace('</body>', '\n<script src="js/i18n.js"></script>\n</body>', 1)

with open(DEST, 'w', encoding='utf-8') as f:
    f.write(c)

print(f'OK — {DEST}')
print(f'Tamanho: {len(c):,} chars')
