/* AIVX — MLFF Comercial — i18n PT / EN / ES */
(function () {
  'use strict';

  function set(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }
  function setText(id, txt) {
    var el = document.getElementById(id);
    if (el) el.textContent = txt;
  }

  var TRANSLATIONS = {

    /* ══════════════ PORTUGUÊS ══════════════ */
    pt: {
      /* s-hero */
      hero_sub:    'Arquitetura aberta. Identificação precisa. Receita protegida.',
      hero_slogan: 'Feito aqui, para o tráfego daqui.',

      /* s-about */
      about_label:   'Quem Somos',
      about_title:   'Inteligência tecnológica para <span class="hl-p">operações críticas</span>',
      about_desc:    'A AIVX é uma empresa focada em tecnologia e inovação, desenvolvendo soluções inteligentes que impulsionam eficiência e transformação digital, com foco em rodovias, mobilidade urbana e infraestrutura de alto impacto.',
      about_pill1:   'Rodovias',
      about_pill2:   'ITS',
      about_pill3:   'CFTV',
      about_pill4:   'Free Flow',
      about_pill5:   'Mobilidade Urbana',
      about_pill6:   'Infraestrutura',
      about_sc1_val: 'ITS',
      about_sc1_lbl: 'Sistemas Inteligentes de Transporte nosso DNA',
      about_sc2_val: 'API-First',
      about_sc2_lbl: 'Arquitetura aberta integra qualquer tecnologia',
      about_sc3_val: 'Zero Lock-in',
      about_sc3_lbl: 'Independência de fabricante por design',

      /* s-freeflow */
      ff_label:    'Por que Free Flow',
      ff_title:    'Praça de pedágio <span class="hl-p">vs</span> Pórtico MLFF',
      ff_desc:     'A Lei 14.157/2021 tornou o MLFF obrigatório em novos contratos. Um novo ciclo de rodovias digitais está em andamento.',
      ff_law:      'Lei 14.157/2021 · Free Flow Obrigatório',
      ff_comp_hdr: 'Comparativo operacional',
      ff_th1: 'Característica', ff_th2: 'Praça Conv.', ff_th3: 'MLFF',
      ff_r1c1: 'Infraestrutura',  ff_r1c2: 'Cabines + barreiras',  ff_r1c3: 'Pórtico com sensores',
      ff_r2c1: 'Velocidade',      ff_r2c2: 'Parada/redução',        ff_r2c3: 'Velocidade de cruzeiro',
      ff_r3c1: 'Pagamento',       ff_r3c2: 'No ato na cabine',      ff_r3c3: 'TAG ou placa + app',
      ff_r4c1: 'Segurança',       ff_r4c2: 'Risco de colisões',     ff_r4c3: 'Fluxo contínuo',
      ff_r5c1: 'Capacidade',      ff_r5c2: 'Limitada por cabines',  ff_r5c3: 'Ilimitada (rodovia)',
      ff_r6c1: 'Impacto CO₂',     ff_r6c2: '↑ Para e arranca',      ff_r6c3: '↓ Emissões',

      /* s-comp */
      comp_label:  'Como chegamos ao mercado',
      comp_title:  'Tecnologia de referência, <span class="hl-p">feita para o Brasil</span>',
      comp_body1:  'Na AIVX, rodovia é infraestrutura crítica.<br>Rodovia inteligente é o nosso <span style="color:var(--green)">DNA</span>.',
      comp_body2:  'Construímos uma plataforma de Free Flow desenhada do zero para a realidade brasileira. Não importada, não adaptada.',

      /* s-solution */
      sol_label:         'A Solução',
      sol_title:         'Plataforma <span class="hl-p">aberta</span>, identificação <span class="hl-t">inteligente</span>',
      sol_desc:          'API-first, multi-vendor, LIDAR 360° e redundância distribuída, desenvolvida para a realidade do tráfego brasileiro.',
      sol_vs_bad_title:  'Concorrentes',
      sol_vs_bad_list:   '<li>Arquitetura fechada</li><li>Vendor lock-in total</li><li>Timestamp-based</li><li>Alta validação manual</li><li>Sem redundância ativa</li>',
      sol_vs_good_title: 'AIVX MLFF',
      sol_vs_good_list:  '<li>API-first e aberta</li><li>Multi-vendor nativo</li><li>LIDAR 360° + ID único</li><li>Autovalidação elevada</li><li>Redundância + auditoria</li>',
      sol_fc1_title: 'Arquitetura API-First',
      sol_fc1_desc:  'Integra qualquer fabricante, sem dependência de ecossistema fechado.',
      sol_fc2_title: 'LIDAR 360° Inteligente',
      sol_fc2_desc:  'ID único por veículo. Zero embaralhamento, zero sobreposição.',
      sol_fc3_title: 'Redundância Ativa',
      sol_fc3_desc:  'Semi-pórtico a 300m audita em tempo real, não só cobre falhas.',
      sol_fc4_title: '2 Níveis de Processamento',
      sol_fc4_desc:  'Edge (captura) + Core (consolidação). Opera mesmo em falhas totais.',
      sol_fc5_title: '100% Tropicalizado',
      sol_fc5_desc:  'Placas Mercosul, dimensões locais, condições climáticas brasileiras.',
      sol_fc6_title: 'Expansão Contínua',
      sol_fc6_desc:  'Novos equipamentos integram via API. Investimento se valoriza.',

      /* s-portico */
      portico_note:      'Representação ilustrativa da arquitetura de pórtico',
      portico_label:     'Estrutura Física',
      portico_title:     'Pórtico <span class="hl-t">completo</span>, cada sensor no lugar certo',
      portico_desc:      'Hardware posicionado estrategicamente para cobertura total de faixas, sem ponto cego, com redundância integrada na própria estrutura.',
      portico_ap1_title: 'Sensores na travessa',
      portico_ap1_desc:  'Câmeras OCR frontais e traseiras + câmera de eixo cobrindo todas as faixas.',
      portico_ap2_title: 'LIDAR no centro',
      portico_ap2_desc:  'Varredura 360° de toda a pista, gatilho de todos os demais sensores.',
      portico_ap3_title: 'Antenas nas laterais',
      portico_ap3_desc:  'RFID/DSRC para leitura de TAG, identificação complementar ao OCR.',

      /* s-archlvl */
      archlvl_label:   'Como Funciona',
      archlvl_title:   'Dois níveis de processamento, <span class="hl-t">zero ponto de falha único</span>',
      archlvl_c1_badge: 'Edge · Pórtico',
      archlvl_c1_title: 'Captura em Tempo Real',
      archlvl_c1_desc:  'PC industrial, câmeras OCR, LIDAR, antenas. Cria os trânsitos e encaminha ao Core. Opera mesmo sem conectividade.',
      archlvl_c2_badge: 'Core · Sala Técnica',
      archlvl_c2_title: 'Consolidação & Inteligência',
      archlvl_c2_desc:  'Server de imagem (4TB), consolidação, auditoria, reprocessamento, comparação com redundância e interface de gestão.',
      archlvl_c3_badge: 'Semi-Pórtico · 300m',
      archlvl_c3_title: 'Redundância Ativa & Auditoria',
      archlvl_c3_desc:  'Infraestrutura independente (energia + fibra separadas). Compara com o pórtico principal em tempo real.',
      archlvl_c4_badge: 'Hardware Premium',
      archlvl_c4_title: 'Sensoriamento de Alta Performance',
      archlvl_c4_desc:  'OCR Adaptive Recognition, câmera de eixo Tattile, LIDAR VANJEE 360°, antenas RFID/DSRC, calibrados para tráfego brasileiro.',

      /* s-video */
      video_label: 'Na Prática',
      video_title: 'Veja o sistema <span class="hl-g">funcionando</span>',
      video_desc:  'Identificação em tempo real, múltiplas faixas, alta velocidade.',

      /* s-dashboard */
      dash_label: 'Interface de Validação',
      dash_title: 'Interface de <span class="hl-t">Validação N2</span>',
      dash_desc:  'Todas as evidências de um trânsito em uma única tela: imagem de eixos, OCR, redundância, TAG e classificação. Validação com total rastreabilidade.',

      /* s-diff */
      diff_label:   'Diferenciais Competitivos',
      diff_title:   'Por que a AIVX é <span class="hl-p">diferente</span>',
      diff_tagline: 'Custo que faz sentido. Alta performance. Receita que não escapa.',
      diff_dc1_title: 'Arquitetura 100% Aberta',
      diff_dc1_desc:  'Enquanto fornecedores vendem ecossistemas fechados, a AIVX entrega plataforma que integra qualquer fabricante, hoje e nas próximas décadas.',
      diff_dc2_title: 'Identificação por Perfil, não por Tempo',
      diff_dc2_desc:  'LIDAR 360° cria fingerprint único por veículo. Zero embaralhamento, zero sobreposição, mínima intervenção humana, mesmo em pico de tráfego.',
      diff_dc3_title: 'Redundância que Audita, não só Cobre',
      diff_dc3_desc:  'Semi-pórtico a 300m compara continuamente com o principal. Detecta falhas intermitentes antes que virem perda de receita.',

      /* s-impact */
      impact_label: 'Impacto de Negócio',
      impact_title: 'Ganhos diretos para a <span class="hl-t">concessionária</span>',
      impact_c1_title: 'Redução de OPEX',
      impact_c1_desc:  'Autovalidação elevada reduz revisão manual e equipe de back-office.',
      impact_c1_tag:   '↓ Custo Operacional',
      impact_c2_title: 'Receita Protegida',
      impact_c2_desc:  'Redundância ativa garante que nenhuma transação seja perdida por falha.',
      impact_c2_tag:   '↑ Taxa de Cobrança',
      impact_c3_title: 'Alta Disponibilidade',
      impact_c3_desc:  'Edge opera independente do Core, sem ponto único de falha.',
      impact_c3_tag:   '↑ Uptime',
      impact_c4_title: 'Auditoria & Regulação',
      impact_c4_desc:  'Rastreabilidade completa por veículo, atende ANTT e auditorias de concessão.',
      impact_c4_tag:   '↑ Conformidade',
      impact_c5_title: 'Sem Lock-in',
      impact_c5_desc:  'Novos equipamentos integram via API. Investimento se valoriza no tempo.',
      impact_c5_tag:   '↑ Longevidade',
      impact_c6_title: 'Expansão Acelerada',
      impact_c6_desc:  'Replicar em novos pórticos e contratos sem partir do zero.',
      impact_c6_tag:   '↑ Escalabilidade',

      /* s-end */
      end_title:   'Não mais um sistema MLFF.<br><span class="stroke">Uma plataforma</span><br>para o futuro das rodovias.',
      end_desc:    'A próxima geração de tecnologia já existe. Aberta. Precisa. Pronta pra escalar com você.',
      end_slogan:  'Feito aqui, para o tráfego daqui.',
      end_tagline: 'Inteligência <span style="color:var(--green)">que move.</span>',
      end_foot:    'AIVX TECNOLOGIA · MULTI LANE FREE FLOW PLATFORM',

      /* ARCH_STEPS */
      arch: [
        { label:'Arquitetura · Visão Geral', title:'Layout de Equipamentos',
          desc:'Dois sentidos, duas faixas e acostamento cobertos por uma rede integrada de sensores — cada um com função específica e acionado via gatilho inteligente do LIDAR.',
          eqTitle:'Layout Completo', eqDesc:'Visualização top-down da distribuição dos sensores no pórtico.', specs:[] },
        { label:'Sensor 01 · Gatilho Principal', title:'Sensor LIDAR 360°',
          desc:'O LIDAR cria um identificador único do veículo durante a travessia. Define pontos de gatilho inteligentes — sincronizando todos os demais sensores com base no percurso real do veículo.',
          eqTitle:'LIDAR 360°', eqDesc:'Varredura completa da pista. Identifica perfil e posição de cada veículo com precisão centimétrica.',
          specs:['360° scan','Perfil único','Multi-faixa','Gatilho ativo'] },
        { label:'Sensor 02 · Leitura de Placa', title:'OCR Frontal / Traseira',
          desc:'Câmera inteligente com duas lentes: uma para leitura de placa (OCR) e outra para identificação de marca, modelo e cor. Opera a até 120 FPS e captura veículos a até 320 km/h — com IA embarcada.',
          eqTitle:'OCR Frontal / Traseira', eqDesc:'Alta precisão em múltiplas faixas e alta velocidade.',
          specs:['120 FPS','320 km/h','Multi-faixa','IA embarcada'] },
        { label:'Sensor 03 · Classificação', title:'Câmera de Eixo',
          desc:'Sistema compacto de contagem de eixos com deep learning. Detecta e conta eixos 24/7, gera imagens reconstruídas dos veículos e fornece metadados de classificação configuráveis.',
          eqTitle:'Câmera de Eixo', eqDesc:'Reconhecimento por IA — classificação precisa em qualquer condição.',
          specs:['Deep Learning','24/7','Reconstrução visual','Metadados'] },
        { label:'Sensor 04 · Identificação TAG', title:'Antena RFID / DSRC',
          desc:'Transmite e recebe sinais de radiofrequência para leitura de TAGs veiculares. Identificação complementar ao OCR — especialmente eficaz para frotas com TAGs ativas.',
          eqTitle:'Antena RFID', eqDesc:'Leitura de TAG passiva e ativa. Opera em conjunto com OCR para identificação redundante.',
          specs:['RFID','DSRC','Multi-vendor','Identificação TAG'] }
      ]
    },

    /* ══════════════ ENGLISH ══════════════ */
    en: {
      hero_sub:    'Open architecture. Precise identification. Protected revenue.',
      hero_slogan: 'Built here, for traffic from here.',

      about_label:   'About Us',
      about_title:   'Technological intelligence for <span class="hl-p">critical operations</span>',
      about_desc:    'AIVX is a technology and innovation company developing intelligent solutions that drive efficiency and digital transformation, focused on highways, urban mobility and high-impact infrastructure.',
      about_pill1:   'Highways',
      about_pill2:   'ITS',
      about_pill3:   'CCTV',
      about_pill4:   'Free Flow',
      about_pill5:   'Urban Mobility',
      about_pill6:   'Infrastructure',
      about_sc1_val: 'ITS',
      about_sc1_lbl: 'Intelligent Transportation Systems our DNA',
      about_sc2_val: 'API-First',
      about_sc2_lbl: 'Open architecture integrates any technology',
      about_sc3_val: 'Zero Lock-in',
      about_sc3_lbl: 'Vendor independence by design',

      ff_label:    'Why Free Flow',
      ff_title:    'Toll plaza <span class="hl-p">vs</span> MLFF Gantry',
      ff_desc:     'Law 14.157/2021 made MLFF mandatory in new contracts. A new cycle of digital highways is underway.',
      ff_law:      'Law 14.157/2021 · Free Flow Mandatory',
      ff_comp_hdr: 'Operational comparison',
      ff_th1: 'Feature', ff_th2: 'Conv. Plaza', ff_th3: 'MLFF',
      ff_r1c1: 'Infrastructure',  ff_r1c2: 'Booths + barriers',    ff_r1c3: 'Gantry with sensors',
      ff_r2c1: 'Speed',           ff_r2c2: 'Stop/reduction',        ff_r2c3: 'Cruising speed',
      ff_r3c1: 'Payment',         ff_r3c2: 'On-site at booth',      ff_r3c3: 'TAG or plate + app',
      ff_r4c1: 'Safety',          ff_r4c2: 'Collision risk',        ff_r4c3: 'Continuous flow',
      ff_r5c1: 'Capacity',        ff_r5c2: 'Limited by booths',     ff_r5c3: 'Unlimited (highway)',
      ff_r6c1: 'CO₂ Impact',      ff_r6c2: '↑ Stop and go',        ff_r6c3: '↓ Emissions',

      comp_label:  'How we reach the market',
      comp_title:  'Reference technology, <span class="hl-p">built for Brazil</span>',
      comp_body1:  'At AIVX, highways are critical infrastructure.<br>Smart highway is our <span style="color:var(--green)">DNA</span>.',
      comp_body2:  'We built a Free Flow platform designed from scratch for Brazilian reality. Not imported, not adapted.',

      sol_label:         'The Solution',
      sol_title:         '<span class="hl-p">Open</span> platform, <span class="hl-t">intelligent</span> identification',
      sol_desc:          'API-first, multi-vendor, LIDAR 360° and distributed redundancy, built for the reality of Brazilian traffic.',
      sol_vs_bad_title:  'Competitors',
      sol_vs_bad_list:   '<li>Closed architecture</li><li>Total vendor lock-in</li><li>Timestamp-based</li><li>High manual validation</li><li>No active redundancy</li>',
      sol_vs_good_title: 'AIVX MLFF',
      sol_vs_good_list:  '<li>API-first and open</li><li>Native multi-vendor</li><li>LIDAR 360° + unique ID</li><li>High auto-validation</li><li>Redundancy + audit</li>',
      sol_fc1_title: 'API-First Architecture',
      sol_fc1_desc:  'Integrates any manufacturer, with no dependency on closed ecosystems.',
      sol_fc2_title: 'Intelligent LIDAR 360°',
      sol_fc2_desc:  'Unique ID per vehicle. Zero mixing, zero overlap.',
      sol_fc3_title: 'Active Redundancy',
      sol_fc3_desc:  'Semi-gantry at 300m audits in real time, not just covers failures.',
      sol_fc4_title: '2 Processing Levels',
      sol_fc4_desc:  'Edge (capture) + Core (consolidation). Operates even during total failures.',
      sol_fc5_title: '100% Tropicalized',
      sol_fc5_desc:  'Mercosur plates, local dimensions, Brazilian weather conditions.',
      sol_fc6_title: 'Continuous Expansion',
      sol_fc6_desc:  'New equipment integrates via API. Investment appreciates over time.',

      portico_note:      'Illustrative representation of gantry architecture',
      portico_label:     'Physical Structure',
      portico_title:     '<span class="hl-t">Complete</span> gantry, every sensor in the right place',
      portico_desc:      'Hardware strategically positioned for full lane coverage, no blind spots, with integrated redundancy in the structure itself.',
      portico_ap1_title: 'Sensors on the crossbar',
      portico_ap1_desc:  'Front and rear OCR cameras + axle camera covering all lanes.',
      portico_ap2_title: 'LIDAR at center',
      portico_ap2_desc:  '360° scan of the entire lane, trigger for all other sensors.',
      portico_ap3_title: 'Antennas on the sides',
      portico_ap3_desc:  'RFID/DSRC for TAG reading, complementary identification to OCR.',

      archlvl_label:    'How It Works',
      archlvl_title:    'Two processing levels, <span class="hl-t">zero single point of failure</span>',
      archlvl_c1_badge: 'Edge · Gantry',
      archlvl_c1_title: 'Real-Time Capture',
      archlvl_c1_desc:  'Industrial PC, OCR cameras, LIDAR, antennas. Creates transits and sends to Core. Operates even without connectivity.',
      archlvl_c2_badge: 'Core · Technical Room',
      archlvl_c2_title: 'Consolidation & Intelligence',
      archlvl_c2_desc:  'Image server (4TB), consolidation, audit, reprocessing, redundancy comparison and management interface.',
      archlvl_c3_badge: 'Semi-Gantry · 300m',
      archlvl_c3_title: 'Active Redundancy & Audit',
      archlvl_c3_desc:  'Independent infrastructure (separate power + fiber). Compares with the main gantry in real time.',
      archlvl_c4_badge: 'Premium Hardware',
      archlvl_c4_title: 'High-Performance Sensing',
      archlvl_c4_desc:  'OCR Adaptive Recognition, Tattile axle camera, VANJEE LIDAR 360°, RFID/DSRC antennas, calibrated for Brazilian traffic.',

      video_label: 'In Practice',
      video_title: 'See the system <span class="hl-g">in action</span>',
      video_desc:  'Real-time identification, multiple lanes, high speed.',

      dash_label: 'Validation Interface',
      dash_title: '<span class="hl-t">N2 Validation</span> Interface',
      dash_desc:  'All evidence for a transit on a single screen: axle image, OCR, redundancy, TAG and classification. Validation with full traceability.',

      diff_label:   'Competitive Differentiators',
      diff_title:   'Why AIVX is <span class="hl-p">different</span>',
      diff_tagline: 'Cost that makes sense. High performance. Revenue that doesn\'t escape.',
      diff_dc1_title: '100% Open Architecture',
      diff_dc1_desc:  'While vendors sell closed ecosystems, AIVX delivers a platform that integrates any manufacturer, today and in the coming decades.',
      diff_dc2_title: 'Profile-Based ID, Not Time-Based',
      diff_dc2_desc:  'LIDAR 360° creates a unique fingerprint per vehicle. Zero mixing, zero overlap, minimal human intervention, even at peak traffic.',
      diff_dc3_title: 'Redundancy that Audits, Not Just Covers',
      diff_dc3_desc:  'Semi-gantry at 300m continuously compares with the main. Detects intermittent failures before they become revenue loss.',

      impact_label: 'Business Impact',
      impact_title: 'Direct gains for the <span class="hl-t">concessionaire</span>',
      impact_c1_title: 'OPEX Reduction',
      impact_c1_desc:  'High auto-validation reduces manual review and back-office team.',
      impact_c1_tag:   '↓ Operating Cost',
      impact_c2_title: 'Protected Revenue',
      impact_c2_desc:  'Active redundancy ensures no transaction is lost due to failure.',
      impact_c2_tag:   '↑ Collection Rate',
      impact_c3_title: 'High Availability',
      impact_c3_desc:  'Edge operates independently of Core, without a single point of failure.',
      impact_c3_tag:   '↑ Uptime',
      impact_c4_title: 'Audit & Regulation',
      impact_c4_desc:  'Full traceability per vehicle, meets ANTT and concession audit requirements.',
      impact_c4_tag:   '↑ Compliance',
      impact_c5_title: 'No Lock-in',
      impact_c5_desc:  'New equipment integrates via API. Investment appreciates over time.',
      impact_c5_tag:   '↑ Longevity',
      impact_c6_title: 'Accelerated Expansion',
      impact_c6_desc:  'Replicate across new gantries and contracts without starting from scratch.',
      impact_c6_tag:   '↑ Scalability',

      end_title:   'Not just another MLFF system.<br><span class="stroke">A platform</span><br>for the future of highways.',
      end_desc:    'The next generation of technology already exists. Open. Precise. Ready to scale with you.',
      end_slogan:  'Built here, for traffic from here.',
      end_tagline: 'Intelligence <span style="color:var(--green)">that moves.</span>',
      end_foot:    'AIVX TECHNOLOGY · MULTI LANE FREE FLOW PLATFORM',

      arch: [
        { label:'Architecture · Overview', title:'Equipment Layout',
          desc:'Two directions, two lanes and shoulder covered by an integrated sensor network — each with a specific role, triggered by the LIDAR intelligent trigger.',
          eqTitle:'Full Layout', eqDesc:'Top-down view of sensor distribution on the gantry.', specs:[] },
        { label:'Sensor 01 · Main Trigger', title:'LIDAR Sensor 360°',
          desc:'LIDAR creates a unique vehicle identifier during the crossing. Defines intelligent trigger points — synchronizing all other sensors based on the vehicle\'s actual path.',
          eqTitle:'LIDAR 360°', eqDesc:'Full lane scan. Identifies each vehicle\'s profile and position with centimetric precision.',
          specs:['360° scan','Unique profile','Multi-lane','Active trigger'] },
        { label:'Sensor 02 · Plate Reading', title:'OCR Front / Rear',
          desc:'Smart camera with two lenses: one for plate reading (OCR) and one for make, model and color identification. Up to 120 FPS, captures vehicles at up to 320 km/h — with embedded AI.',
          eqTitle:'OCR Front / Rear', eqDesc:'High precision in multiple lanes and at high speed.',
          specs:['120 FPS','320 km/h','Multi-lane','Embedded AI'] },
        { label:'Sensor 03 · Classification', title:'Axle Camera',
          desc:'Compact axle counting system with deep learning. Detects and counts axles 24/7, generates reconstructed vehicle images and provides configurable classification metadata.',
          eqTitle:'Axle Camera', eqDesc:'AI recognition — precise classification in any condition.',
          specs:['Deep Learning','24/7','Visual reconstruction','Metadata'] },
        { label:'Sensor 04 · TAG Identification', title:'RFID / DSRC Antenna',
          desc:'Transmits and receives radio frequency signals to read vehicle TAGs. Complementary identification to OCR — especially effective for fleets with active TAGs.',
          eqTitle:'RFID Antenna', eqDesc:'Passive and active TAG reading. Works with OCR for redundant identification.',
          specs:['RFID','DSRC','Multi-vendor','TAG identification'] }
      ]
    },

    /* ══════════════ ESPAÑOL ══════════════ */
    es: {
      hero_sub:    'Arquitectura abierta. Identificación precisa. Ingresos protegidos.',
      hero_slogan: 'Hecho aquí, para el tráfico de aquí.',

      about_label:   'Quiénes Somos',
      about_title:   'Inteligencia tecnológica para <span class="hl-p">operaciones críticas</span>',
      about_desc:    'AIVX es una empresa de tecnología e innovación que desarrolla soluciones inteligentes que impulsan la eficiencia y la transformación digital, con foco en autopistas, movilidad urbana e infraestructura de alto impacto.',
      about_pill1:   'Autopistas',
      about_pill2:   'ITS',
      about_pill3:   'CCTV',
      about_pill4:   'Free Flow',
      about_pill5:   'Movilidad Urbana',
      about_pill6:   'Infraestructura',
      about_sc1_val: 'ITS',
      about_sc1_lbl: 'Sistemas Inteligentes de Transporte nuestro ADN',
      about_sc2_val: 'API-First',
      about_sc2_lbl: 'Arquitectura abierta integra cualquier tecnología',
      about_sc3_val: 'Zero Lock-in',
      about_sc3_lbl: 'Independencia de proveedor por diseño',

      ff_label:    'Por qué Free Flow',
      ff_title:    'Plaza de peaje <span class="hl-p">vs</span> Pórtico MLFF',
      ff_desc:     'La Ley 14.157/2021 hizo obligatorio el MLFF en nuevos contratos. Un nuevo ciclo de autopistas digitales está en marcha.',
      ff_law:      'Ley 14.157/2021 · Free Flow Obligatorio',
      ff_comp_hdr: 'Comparativo operacional',
      ff_th1: 'Característica', ff_th2: 'Plaza Conv.', ff_th3: 'MLFF',
      ff_r1c1: 'Infraestructura',  ff_r1c2: 'Cabinas + barreras',    ff_r1c3: 'Pórtico con sensores',
      ff_r2c1: 'Velocidad',        ff_r2c2: 'Parada/reducción',       ff_r2c3: 'Velocidad de crucero',
      ff_r3c1: 'Pago',             ff_r3c2: 'En el momento en cabina',ff_r3c3: 'TAG o placa + app',
      ff_r4c1: 'Seguridad',        ff_r4c2: 'Riesgo de colisiones',   ff_r4c3: 'Flujo continuo',
      ff_r5c1: 'Capacidad',        ff_r5c2: 'Limitada por cabinas',   ff_r5c3: 'Ilimitada (autopista)',
      ff_r6c1: 'Impacto CO₂',      ff_r6c2: '↑ Para y arranca',       ff_r6c3: '↓ Emisiones',

      comp_label:  'Cómo llegamos al mercado',
      comp_title:  'Tecnología de referencia, <span class="hl-p">hecha para Brasil</span>',
      comp_body1:  'En AIVX, la autopista es infraestructura crítica.<br>Autopista inteligente es nuestro <span style="color:var(--green)">ADN</span>.',
      comp_body2:  'Construimos una plataforma Free Flow diseñada desde cero para la realidad brasileña. No importada, no adaptada.',

      sol_label:         'La Solución',
      sol_title:         'Plataforma <span class="hl-p">abierta</span>, identificación <span class="hl-t">inteligente</span>',
      sol_desc:          'API-first, multi-vendor, LIDAR 360° y redundancia distribuida, desarrollada para la realidad del tráfico brasileño.',
      sol_vs_bad_title:  'Competidores',
      sol_vs_bad_list:   '<li>Arquitectura cerrada</li><li>Vendor lock-in total</li><li>Basado en timestamp</li><li>Alta validación manual</li><li>Sin redundancia activa</li>',
      sol_vs_good_title: 'AIVX MLFF',
      sol_vs_good_list:  '<li>API-first y abierta</li><li>Multi-vendor nativo</li><li>LIDAR 360° + ID único</li><li>Autovalidación elevada</li><li>Redundancia + auditoría</li>',
      sol_fc1_title: 'Arquitectura API-First',
      sol_fc1_desc:  'Integra cualquier fabricante, sin dependencia de ecosistemas cerrados.',
      sol_fc2_title: 'LIDAR 360° Inteligente',
      sol_fc2_desc:  'ID único por vehículo. Cero mezcla, cero solapamiento.',
      sol_fc3_title: 'Redundancia Activa',
      sol_fc3_desc:  'Semi-pórtico a 300m audita en tiempo real, no solo cubre fallas.',
      sol_fc4_title: '2 Niveles de Procesamiento',
      sol_fc4_desc:  'Edge (captura) + Core (consolidación). Opera incluso en fallas totales.',
      sol_fc5_title: '100% Tropicalizado',
      sol_fc5_desc:  'Matrículas Mercosur, dimensiones locales, condiciones climáticas brasileñas.',
      sol_fc6_title: 'Expansión Continua',
      sol_fc6_desc:  'Nuevos equipos integran vía API. La inversión se valoriza.',

      portico_note:      'Representación ilustrativa de la arquitectura de pórtico',
      portico_label:     'Estructura Física',
      portico_title:     'Pórtico <span class="hl-t">completo</span>, cada sensor en su lugar',
      portico_desc:      'Hardware posicionado estratégicamente para cobertura total de carriles, sin punto ciego, con redundancia integrada en la propia estructura.',
      portico_ap1_title: 'Sensores en el travesaño',
      portico_ap1_desc:  'Cámaras OCR frontales y traseras + cámara de ejes cubriendo todos los carriles.',
      portico_ap2_title: 'LIDAR en el centro',
      portico_ap2_desc:  'Barrido 360° de toda la vía, disparador de todos los demás sensores.',
      portico_ap3_title: 'Antenas en los laterales',
      portico_ap3_desc:  'RFID/DSRC para lectura de TAG, identificación complementaria al OCR.',

      archlvl_label:    'Cómo Funciona',
      archlvl_title:    'Dos niveles de procesamiento, <span class="hl-t">cero punto único de falla</span>',
      archlvl_c1_badge: 'Edge · Pórtico',
      archlvl_c1_title: 'Captura en Tiempo Real',
      archlvl_c1_desc:  'PC industrial, cámaras OCR, LIDAR, antenas. Crea los tránsitos y los envía al Core. Opera incluso sin conectividad.',
      archlvl_c2_badge: 'Core · Sala Técnica',
      archlvl_c2_title: 'Consolidación e Inteligencia',
      archlvl_c2_desc:  'Servidor de imagen (4TB), consolidación, auditoría, reprocesamiento, comparación con redundancia e interfaz de gestión.',
      archlvl_c3_badge: 'Semi-Pórtico · 300m',
      archlvl_c3_title: 'Redundancia Activa y Auditoría',
      archlvl_c3_desc:  'Infraestructura independiente (energía + fibra separadas). Compara con el pórtico principal en tiempo real.',
      archlvl_c4_badge: 'Hardware Premium',
      archlvl_c4_title: 'Sensado de Alta Performance',
      archlvl_c4_desc:  'OCR Adaptive Recognition, cámara de ejes Tattile, LIDAR VANJEE 360°, antenas RFID/DSRC, calibrados para el tráfico brasileño.',

      video_label: 'En Práctica',
      video_title: 'Vea el sistema <span class="hl-g">en acción</span>',
      video_desc:  'Identificación en tiempo real, múltiples carriles, alta velocidad.',

      dash_label: 'Interfaz de Validación',
      dash_title: 'Interfaz de <span class="hl-t">Validación N2</span>',
      dash_desc:  'Todas las evidencias de un tránsito en una sola pantalla: imagen de ejes, OCR, redundancia, TAG y clasificación. Validación con trazabilidad total.',

      diff_label:   'Diferenciadores Competitivos',
      diff_title:   'Por qué AIVX es <span class="hl-p">diferente</span>',
      diff_tagline: 'Costo que tiene sentido. Alto rendimiento. Ingresos que no escapan.',
      diff_dc1_title: 'Arquitectura 100% Abierta',
      diff_dc1_desc:  'Mientras los proveedores venden ecosistemas cerrados, AIVX entrega una plataforma que integra cualquier fabricante, hoy y en las próximas décadas.',
      diff_dc2_title: 'Identificación por Perfil, no por Tiempo',
      diff_dc2_desc:  'LIDAR 360° crea un fingerprint único por vehículo. Cero mezcla, cero solapamiento, mínima intervención humana, incluso en pico de tráfico.',
      diff_dc3_title: 'Redundancia que Audita, no solo Cubre',
      diff_dc3_desc:  'Semi-pórtico a 300m compara continuamente con el principal. Detecta fallas intermitentes antes de que se conviertan en pérdida de ingresos.',

      impact_label: 'Impacto de Negocio',
      impact_title: 'Ganancias directas para la <span class="hl-t">concesionaria</span>',
      impact_c1_title: 'Reducción de OPEX',
      impact_c1_desc:  'La alta autovalidación reduce la revisión manual y el equipo de back-office.',
      impact_c1_tag:   '↓ Costo Operativo',
      impact_c2_title: 'Ingresos Protegidos',
      impact_c2_desc:  'La redundancia activa garantiza que ninguna transacción se pierda por falla.',
      impact_c2_tag:   '↑ Tasa de Cobro',
      impact_c3_title: 'Alta Disponibilidad',
      impact_c3_desc:  'Edge opera independiente del Core, sin punto único de falla.',
      impact_c3_tag:   '↑ Uptime',
      impact_c4_title: 'Auditoría y Regulación',
      impact_c4_desc:  'Trazabilidad completa por vehículo, cumple con ANTT y auditorías de concesión.',
      impact_c4_tag:   '↑ Cumplimiento',
      impact_c5_title: 'Sin Lock-in',
      impact_c5_desc:  'Nuevos equipos integran vía API. La inversión se valoriza con el tiempo.',
      impact_c5_tag:   '↑ Longevidad',
      impact_c6_title: 'Expansión Acelerada',
      impact_c6_desc:  'Replicar en nuevos pórticos y contratos sin empezar desde cero.',
      impact_c6_tag:   '↑ Escalabilidad',

      end_title:   'No más un sistema MLFF.<br><span class="stroke">Una plataforma</span><br>para el futuro de las autopistas.',
      end_desc:    'La próxima generación de tecnología ya existe. Abierta. Precisa. Lista para escalar contigo.',
      end_slogan:  'Hecho aquí, para el tráfico de aquí.',
      end_tagline: 'Inteligencia <span style="color:var(--green)">que mueve.</span>',
      end_foot:    'AIVX TECNOLOGÍA · MULTI LANE FREE FLOW PLATFORM',

      arch: [
        { label:'Arquitectura · Visión General', title:'Distribución de Equipos',
          desc:'Dos sentidos, dos carriles y acotamiento cubiertos por una red integrada de sensores — cada uno con función específica y activado por el disparador inteligente del LIDAR.',
          eqTitle:'Distribución Completa', eqDesc:'Vista top-down de la distribución de sensores en el pórtico.', specs:[] },
        { label:'Sensor 01 · Disparador Principal', title:'Sensor LIDAR 360°',
          desc:'El LIDAR crea un identificador único del vehículo durante el cruce. Define puntos de disparo inteligentes — sincronizando todos los demás sensores con base en la trayectoria real del vehículo.',
          eqTitle:'LIDAR 360°', eqDesc:'Barrido completo de la vía. Identifica el perfil y posición de cada vehículo con precisión centimétrica.',
          specs:['360° scan','Perfil único','Multi-carril','Disparador activo'] },
        { label:'Sensor 02 · Lectura de Matrícula', title:'OCR Frontal / Trasera',
          desc:'Cámara inteligente con dos lentes: una para lectura de matrícula (OCR) y otra para identificación de marca, modelo y color. Opera hasta 120 FPS y captura vehículos hasta 320 km/h — con IA embebida.',
          eqTitle:'OCR Frontal / Trasera', eqDesc:'Alta precisión en múltiples carriles y alta velocidad.',
          specs:['120 FPS','320 km/h','Multi-carril','IA embebida'] },
        { label:'Sensor 03 · Clasificación', title:'Cámara de Ejes',
          desc:'Sistema compacto de conteo de ejes con deep learning. Detecta y cuenta ejes 24/7, genera imágenes reconstruidas de los vehículos y provee metadatos de clasificación configurables.',
          eqTitle:'Cámara de Ejes', eqDesc:'Reconocimiento por IA — clasificación precisa en cualquier condición.',
          specs:['Deep Learning','24/7','Reconstrucción visual','Metadatos'] },
        { label:'Sensor 04 · Identificación TAG', title:'Antena RFID / DSRC',
          desc:'Transmite y recibe señales de radiofrecuencia para leer TAGs vehiculares. Identificación complementaria al OCR — especialmente eficaz para flotas con TAGs activas.',
          eqTitle:'Antena RFID', eqDesc:'Lectura de TAG pasiva y activa. Opera junto con OCR para identificación redundante.',
          specs:['RFID','DSRC','Multi-vendor','Identificación TAG'] }
      ]
    }
  };

  /* ── applyLang ── */
  function applyLang(lang) {
    var t = TRANSLATIONS[lang];
    if (!t) return;

    /* s-hero */
    setText('hero-sub',    t.hero_sub);
    setText('hero-slogan', t.hero_slogan);

    /* s-about */
    setText('about-label',   t.about_label);
    set('about-title',       t.about_title);
    setText('about-desc',    t.about_desc);
    setText('about-pill1',   t.about_pill1);
    setText('about-pill2',   t.about_pill2);
    setText('about-pill3',   t.about_pill3);
    setText('about-pill4',   t.about_pill4);
    setText('about-pill5',   t.about_pill5);
    setText('about-pill6',   t.about_pill6);
    setText('about-sc1-val', t.about_sc1_val);
    setText('about-sc1-lbl', t.about_sc1_lbl);
    setText('about-sc2-val', t.about_sc2_val);
    setText('about-sc2-lbl', t.about_sc2_lbl);
    setText('about-sc3-val', t.about_sc3_val);
    setText('about-sc3-lbl', t.about_sc3_lbl);

    /* s-freeflow */
    setText('ff-label',    t.ff_label);
    set('ff-title',        t.ff_title);
    setText('ff-desc',     t.ff_desc);
    setText('ff-law',      t.ff_law);
    setText('ff-comp-hdr', t.ff_comp_hdr);
    setText('ff-th1', t.ff_th1); setText('ff-th2', t.ff_th2); setText('ff-th3', t.ff_th3);
    for (var r = 1; r <= 6; r++) {
      for (var col = 1; col <= 3; col++) {
        setText('ff-r' + r + 'c' + col, t['ff_r' + r + 'c' + col]);
      }
    }

    /* s-comp */
    setText('comp-label', t.comp_label);
    set('comp-title',     t.comp_title);
    set('comp-body1',     t.comp_body1);
    setText('comp-body2', t.comp_body2);

    /* s-solution */
    setText('sol-label',         t.sol_label);
    set('sol-title',             t.sol_title);
    setText('sol-desc',          t.sol_desc);
    setText('sol-vs-bad-title',  t.sol_vs_bad_title);
    set('sol-vs-bad-list',       t.sol_vs_bad_list);
    setText('sol-vs-good-title', t.sol_vs_good_title);
    set('sol-vs-good-list',      t.sol_vs_good_list);
    for (var fc = 1; fc <= 6; fc++) {
      setText('sol-fc' + fc + '-title', t['sol_fc' + fc + '_title']);
      setText('sol-fc' + fc + '-desc',  t['sol_fc' + fc + '_desc']);
    }

    /* s-portico */
    setText('portico-note',      t.portico_note);
    setText('portico-label',     t.portico_label);
    set('portico-title',         t.portico_title);
    setText('portico-desc',      t.portico_desc);
    setText('portico-ap1-title', t.portico_ap1_title);
    setText('portico-ap1-desc',  t.portico_ap1_desc);
    setText('portico-ap2-title', t.portico_ap2_title);
    setText('portico-ap2-desc',  t.portico_ap2_desc);
    setText('portico-ap3-title', t.portico_ap3_title);
    setText('portico-ap3-desc',  t.portico_ap3_desc);

    /* s-archlvl */
    setText('archlvl-label', t.archlvl_label);
    set('archlvl-title',     t.archlvl_title);
    for (var al = 1; al <= 4; al++) {
      setText('archlvl-c' + al + '-badge', t['archlvl_c' + al + '_badge']);
      setText('archlvl-c' + al + '-title', t['archlvl_c' + al + '_title']);
      setText('archlvl-c' + al + '-desc',  t['archlvl_c' + al + '_desc']);
    }

    /* s-video */
    setText('video-label', t.video_label);
    set('video-title',     t.video_title);
    setText('video-desc',  t.video_desc);

    /* s-dashboard */
    setText('dash-label', t.dash_label);
    set('dash-title',     t.dash_title);
    setText('dash-desc',  t.dash_desc);

    /* s-diff */
    setText('diff-label',   t.diff_label);
    set('diff-title',       t.diff_title);
    setText('diff-tagline', t.diff_tagline);
    for (var dc = 1; dc <= 3; dc++) {
      setText('diff-dc' + dc + '-title', t['diff_dc' + dc + '_title']);
      setText('diff-dc' + dc + '-desc',  t['diff_dc' + dc + '_desc']);
    }

    /* s-impact */
    setText('impact-label', t.impact_label);
    set('impact-title',     t.impact_title);
    for (var ic = 1; ic <= 6; ic++) {
      setText('impact-c' + ic + '-title', t['impact_c' + ic + '_title']);
      setText('impact-c' + ic + '-desc',  t['impact_c' + ic + '_desc']);
      setText('impact-c' + ic + '-tag',   t['impact_c' + ic + '_tag']);
    }

    /* s-end */
    set('end-title',       t.end_title);
    setText('end-desc',    t.end_desc);
    setText('end-slogan',  t.end_slogan);
    set('end-tagline',     t.end_tagline);
    setText('end-foot',    t.end_foot);

    /* ARCH_STEPS dinâmico */
    if (window.ARCH_STEPS && t.arch) {
      t.arch.forEach(function (step, i) {
        if (window.ARCH_STEPS[i]) {
          window.ARCH_STEPS[i].label   = step.label;
          window.ARCH_STEPS[i].title   = step.title;
          window.ARCH_STEPS[i].desc    = step.desc;
          window.ARCH_STEPS[i].eqTitle = step.eqTitle;
          window.ARCH_STEPS[i].eqDesc  = step.eqDesc;
          window.ARCH_STEPS[i].specs   = step.specs;
        }
      });
      var cur = window.archGetCurrent ? window.archGetCurrent() : 0;
      if (window.archGoTo) window.archGoTo(cur);
    }
  }

  /* ── switcher UI ── */
  document.addEventListener('DOMContentLoaded', function () {
    var saved = localStorage.getItem('mlff-com-lang') || 'pt';
    var sw = document.getElementById('lang-switcher');
    if (sw) {
      [['PT','pt'],['EN','en'],['ES','es']].forEach(function (pair) {
        var btn = document.createElement('button');
        btn.className = 'lang-btn' + (pair[1] === saved ? ' active' : '');
        btn.textContent = pair[0];
        btn.onclick = function () {
          localStorage.setItem('mlff-com-lang', pair[1]);
          document.querySelectorAll('.lang-btn').forEach(function (b) { b.classList.remove('active'); });
          btn.classList.add('active');
          applyLang(pair[1]);
        };
        sw.appendChild(btn);
      });
    }
    if (saved !== 'pt') applyLang(saved);
  });

})();
