/* ============================================================
   i18n.js  —  峰悦户外官网 三语国际化
   支持语言：zh（中文）/ en（英语）/ ar（阿拉伯语，RTL）
   ============================================================ */

const translations = {

  /* ══════════════════════════════════════
     公共：导航 & 页脚
  ══════════════════════════════════════ */
  nav_home:          { zh: '首页',     en: 'Home' },
  nav_products:      { zh: '产品中心', en: 'Products' },
  nav_about:         { zh: '关于我们', en: 'About Us' },
  nav_contact:       { zh: '会员登录', en: 'Login' },
  nav_cta:           { zh: '立即咨询', en: 'Inquire Now' },

  footer_tagline:    { zh: '二十年专注专业睡袋研发与制造，以极致工艺守护每一夜的温暖。',
                       en: 'Twenty years dedicated to professional sleeping bag R&D and manufacturing — crafting warmth for every night.' },
  footer_products:   { zh: '产品系列', en: 'Product Lines' },
  footer_envelope:    { zh: '信封系列', en: 'ENVELOPE SERIES' },
  footer_hood:       { zh: '戴帽系列', en: 'WITH HOOD SERIES' },
  footer_mummy:      { zh: '妈咪系列', en: 'MUMMY SERIES' },
  footer_lightweight:{ zh: '轻盈系列', en: 'LIGHTWEIGHT SERIES' },
  footer_military:   { zh: '行军系列', en: 'MILITARY SERIES' },
  footer_twoperson:  { zh: '双人系列', en: 'TWO-PERSON SERIES' },
  footer_down:       { zh: '羽绒系列', en: 'DOWN SERIES' },
  footer_kids:       { zh: '儿童系列', en: 'KIDS SERIES' },
  footer_special:    { zh: '特殊系列', en: 'SPECIAL SERIES' },
  footer_cover:      { zh: '睡袋套系列', en: 'SLEEPING BAG COVER SERIES' },
  footer_pillow:     { zh: '枕头', en: 'PILLOW' },
  footer_quilt:      { zh: '被子&毯子', en: 'QUILT & BLANKET' },
  footer_tent:       { zh: '帐篷系列', en: 'TENT SERIES' },
  footer_accessories:{ zh: '配件', en: 'ACCESSORIES' },
  footer_storage:    { zh: '收纳包', en: 'STORAGE BAG' },
  footer_about_fy:   { zh: '关于峰悦', en: 'About FENGYUE' },
  footer_story:      { zh: '品牌故事', en: 'Brand Story' },
  footer_history:    { zh: '发展历程', en: 'Milestones' },
  footer_certs:      { zh: '资质认证', en: 'Certifications' },
  footer_contact_h:  { zh: '联系方式', en: 'Contact Info' },
  footer_address:    { zh: '江苏省丹阳市运河镇', en: 'Yunhe Town, Danyang City, Jiangsu' },
  footer_copy:       { zh: '© 2024 江苏峰悦户外用品有限公司 版权所有',
                       en: '© 2024 Jiangsu FENGYUE Outdoor Co., Ltd. All rights reserved.' },
  footer_privacy:    { zh: '隐私政策', en: 'Privacy Policy' },
  footer_terms:      { zh: '服务条款', en: 'Terms of Service' },
  footer_icp:        { zh: '苏ICP备XXXXXXXX号', en: 'Su ICP No. XXXXXXXX' },

  /* ══════════════════════════════════════
     首页 (index.html)
  ══════════════════════════════════════ */
  page_title_index:  { zh: '峰悦户外 · 专业睡袋制造商',
                       en: 'FENGYUE Outdoor · Professional Sleeping Bag Manufacturer' },

  hero_subtitle:     { zh: '从家庭聚会到雪山冒险，每一款睡袋都是对环境的完美诠释',
                       en: 'From family gatherings to snowy mountain adventures, every bag is a perfect answer to any environment' },
  hero_btn_explore:  { zh: '探索产品', en: 'Explore Products' },
  hero_btn_quote:    { zh: '获取报价', en: 'Get a Quote' },
  hero_stat_years:   { zh: '年制造经验',     en: 'Years of Experience' },
  hero_stat_temp:    { zh: '极限适温',       en: 'Extreme Temperature' },
  hero_stat_export:  { zh: '出口国家和地区', en: 'Export Destinations' },
  hero_stat_cap:     { zh: '年产能（条）',   en: 'Annual Capacity (pcs)' },

  adv_label:         { zh: '核心优势',  en: 'Core Advantages' },
  adv_title:         { zh: '为什么选择', en: 'Why Choose' },
  adv_brand:         { zh: '峰悦',      en: 'FENGYUE' },
  adv_desc:          { zh: '二十年专注，每一道工序都是对专业的承诺',
                       en: 'Twenty years of dedication — every process is a commitment to professionalism.' },
  feat1_title:       { zh: '极寒科技',  en: 'Arctic Technology' },
  feat1_desc:        { zh: '自研低温保暖材料体系，经-40°C极寒测试认证，覆盖全场景温区需求。',
                       en: 'In-house low-temp insulation system, certified at -40°C, covering all climate zones.' },
  feat2_title:       { zh: '绿色填充',  en: 'Eco Insulation' },
  feat2_desc:        { zh: '采用 RDS 认证负责任羽绒与环保再生纤维，守护自然生态，拒绝动物伤害。',
                       en: 'RDS-certified responsible down and recycled eco-fibers, protecting nature without harming animals.' },
  feat3_title:       { zh: '精密制造',  en: 'Precision Manufacturing' },
  feat3_desc:        { zh: 'ISO 9001 认证工厂，全自动缝纫设备，每款产品经 200+ 道质检工序出厂。',
                       en: 'ISO 9001 certified factory, fully automated sewing equipment, 200+ QC steps per product.' },
  feat4_title:       { zh: 'OEM/ODM',  en: 'OEM/ODM' },
  feat4_desc:        { zh: '支持从设计到成品的一站式定制服务，已为全球 300+ 品牌提供代工合作。',
                       en: 'One-stop custom service from design to finished product, serving 300+ global brands.' },

  prod_label:        { zh: '产品系列',      en: 'Product Lines' },
  prod_title_pre:    { zh: '专业级',        en: 'Professional' },
  prod_title_hl:     { zh: '睡袋',          en: 'Sleeping Bags' },
  prod_view_all:     { zh: '查看全部产品 →', en: 'View All Products →' },

  card1_series:      { zh: '极地系列', en: 'Polar Series' },
  card1_name:        { zh: '冰峰 Pro X -40', en: 'IcePeak Pro X -40' },
  card1_desc:        { zh: '鹅绒填充800蓬，适温-40°C，为极地探险者而生的终极装备。',
                       en: 'Goose down 800-fill, rated -40°C, the ultimate gear for polar explorers.' },
  card1_price:       { zh: '¥2,880 起', en: 'From ¥2,880' },
  card2_series:      { zh: '登山系列', en: 'Alpine Series' },
  card2_name:        { zh: '云脊 Alpine -20', en: 'SkyRidge Alpine -20' },
  card2_desc:        { zh: '防水鸭绒700蓬，修身设计减重20%，征服高山营地首选。',
                       en: 'Water-resistant duck down 700-fill, slim-fit design 20% lighter, the top pick for alpine camping.' },
  card2_price:       { zh: '¥1,580 起', en: 'From ¥1,580' },
  card3_series:      { zh: '四季系列', en: 'Trek Series' },
  card3_name:        { zh: '星野 Trek -5', en: 'StarField Trek -5' },
  card3_desc:        { zh: '化纤速干填充，超轻 800g，三季通用的轻量化露营伴侣。',
                       en: 'Quick-dry synthetic fill, ultralight 800g, a 3-season lightweight camping companion.' },
  card3_price:       { zh: '¥680 起', en: 'From ¥680' },
  card_detail:       { zh: '了解详情', en: 'Learn More' },

  stats_founded:     { zh: '创立于江苏',    en: 'Founded in Jiangsu' },
  stats_brands:      { zh: '全球合作品牌',  en: 'Global Partner Brands' },
  stats_patents:     { zh: '专利技术',      en: 'Patents' },
  stats_repurchase:  { zh: '客户复购率',    en: 'Customer Repurchase Rate' },

  review_label:      { zh: '客户评价',       en: 'Customer Reviews' },
  review_title_pre:  { zh: '用户的',         en: "Customers'" },
  review_title_hl:   { zh: '真实反馈',       en: 'Real Feedback' },
  review1_text:      { zh: '在喜马拉雅大本营使用冰峰 Pro X，零下35度的夜晚睡得非常温暖。做工精细，充绒均匀，是我用过最可靠的睡袋。',
                       en: 'Used the IcePeak Pro X at Himalaya Base Camp. Stayed incredibly warm at -35°C. Excellent craftsmanship and even down distribution — the most reliable sleeping bag I\'ve ever used.' },
  review1_name:      { zh: '李探险',         en: 'Li Explorer' },
  review1_meta:      { zh: '高海拔登山者 · 珠峰大本营', en: 'High-altitude climber · Everest Base Camp' },
  review2_text:      { zh: '作为户外品牌商，峰悦的 OEM 服务非常专业，从版型设计到面料选择都很配合，交货准时，质量稳定，已合作三年。',
                       en: 'As an outdoor brand owner, FENGYUE\'s OEM service is exceptionally professional. From pattern design to fabric selection, they\'re very collaborative. On-time delivery, consistent quality — we\'ve worked together for three years.' },
  review2_name:      { zh: '王总监',         en: 'Director Wang' },
  review2_meta:      { zh: '某户外品牌采购总监', en: 'Procurement Director, Outdoor Brand' },
  review3_text:      { zh: '购买了星野 Trek 系列，重量轻收纳小，骑行和徒步都带着它。客服也很耐心，详细介绍了不同温区的选购建议。',
                       en: 'Bought the StarField Trek series — lightweight and compact, great for cycling and hiking. Customer service was very patient and gave detailed advice on choosing the right temperature rating.' },
  review3_name:      { zh: '张骑行',         en: 'Zhang Cyclist' },
  review3_meta:      { zh: '自行车旅行者',    en: 'Bicycle Traveler' },

  cta_title1:        { zh: '准备好开始合作了吗？', en: 'Ready to Start a Partnership?' },
  cta_title2_hl:     { zh: '获取专属报价',         en: 'Get Your Custom Quote' },
  cta_desc:          { zh: '无论是零售采购还是品牌定制，我们都有专业团队为您服务。',
                       en: 'Whether retail purchasing or brand customization, our professional team is ready to serve you.' },
  cta_btn_contact:   { zh: '立即联系我们', en: 'Contact Us Now' },
  cta_btn_products:  { zh: '浏览产品目录', en: 'Browse Product Catalog' },

  /* ══════════════════════════════════════
     关于页 (about.html)
  ══════════════════════════════════════ */
  page_title_about:  { zh: '关于我们 · 峰悦户外',
                       en: 'About Us · FENGYUE Outdoor' },
  about_eyebrow:     { zh: '关于峰悦',  en: 'About FENGYUE' },
  about_h1_a:        { zh: '为快乐而生', en: 'Built for Joy' },
  about_h1_b:        { zh: '为你而造',  en: 'Made for You' },
  about_desc:        { zh: '1999年创立于江苏，数十年来专注专业睡袋的研发与制造。我们相信，每一次野外的夜晚，都值得拥有最可靠的温暖。',
                       en: 'Founded in Jiangsu in 1999, decades dedicated to professional sleeping bag R&D and manufacturing. We believe every night in the wild deserves the most reliable warmth.' },

  brand_label:       { zh: '品牌故事',  en: 'Brand Story' },
  brand_h2_a:        { zh: '从一针一线', en: 'From Every Stitch' },
  brand_h2_b:        { zh: '到',        en: 'to the' },
  brand_h2_hl:       { zh: '全球市场',  en: 'Global Market' },
  brand_p1:          { zh: '1999年，峰悦的创始人带着对户外运动的热爱和对品质的执着，在江苏创立了这家专注睡袋制造的企业。',
                       en: 'In 1999, FENGYUE\'s founder, driven by a passion for outdoor sports and a commitment to quality, established this sleeping bag manufacturing company in Jiangsu.' },
  brand_p2:          { zh: '二十年来，我们从未停止对极限保暖技术的探索——从北极科考到珠峰攀登，从童军夏令营到家庭露营，峰悦的睡袋陪伴着无数探险者度过了人生中最难忘的夜晚。',
                       en: 'For twenty years we\'ve never stopped exploring extreme insulation technology — from Arctic expeditions to Everest ascents, from scout camps to family camping, FENGYUE sleeping bags have accompanied countless adventurers through the most unforgettable nights of their lives.' },
  brand_p3:          { zh: '今天，峰悦的产品销往全球50多个国家和地区，并为300多个国际知名品牌提供OEM/ODM服务，成为中国专业睡袋制造领域的标杆企业。',
                       en: 'Today, FENGYUE products are sold in more than 50 countries and regions, providing OEM/ODM services for over 300 internationally renowned brands, establishing FENGYUE as a benchmark enterprise in China\'s professional sleeping bag manufacturing sector.' },
  about_stat_years:  { zh: '年制造经验',     en: 'Years of Experience' },
  about_stat_export: { zh: '出口国家和地区', en: 'Export Markets' },
  about_stat_brands: { zh: '合作品牌',       en: 'Partner Brands' },
  about_stat_temp:   { zh: '极限适温',       en: 'Extreme Temperature' },

  timeline_label:    { zh: '发展历程',  en: 'Milestones' },
  timeline_title_a:  { zh: '二十年',    en: 'Twenty Years of' },
  timeline_title_hl: { zh: '成长',      en: 'Growth' },
  timeline_title_b:  { zh: '足迹',      en: 'Journey' },
  tl2004_h:          { zh: '峰悦成立',  en: 'FENGYUE Founded' },
  tl2004_b:          { zh: '江苏峰悦户外用品有限公司正式成立，专注睡袋研发与制造，立志打造中国专业户外睡袋第一品牌。',
                       en: 'Jiangsu FENGYUE Outdoor Co., Ltd. officially established, focusing on sleeping bag R&D and manufacturing, with the ambition to become China\'s No. 1 professional outdoor sleeping bag brand.' },
  tl2008_h:          { zh: '首获国际认证', en: 'First International Certification' },
  tl2008_b:          { zh: '通过 ISO 9001 国际质量管理体系认证，开始向欧美户外品牌提供 OEM 代工服务，产品进入北美市场。',
                       en: 'Obtained ISO 9001 international quality management certification, began providing OEM services to European and American outdoor brands, and entered the North American market.' },
  tl2012_h:          { zh: '技术突破',  en: 'Technology Breakthrough' },
  tl2012_b:          { zh: '自主研发"冰芯"极寒保暖体系，冰峰系列睡袋成功通过-40°C环境测试，填补国内技术空白。',
                       en: 'Independently developed the "IceCore" extreme-cold insulation system; the IcePeak series successfully passed -40°C environmental testing, filling a domestic technology gap.' },
  tl2016_h:          { zh: '全球扩张',  en: 'Global Expansion' },
  tl2016_b:          { zh: '产品覆盖全球30多个国家，合作品牌突破100家，在德国、日本设立海外办事处，全球化布局加速。',
                       en: 'Products reach 30+ countries globally, partner brands exceed 100, overseas offices established in Germany and Japan, accelerating global expansion.' },
  tl2020_h:          { zh: '绿色转型',  en: 'Green Transformation' },
  tl2020_b:          { zh: '率先获得 RDS 负责任羽绒标准认证，推出全系列环保产品线，可再生纤维填充占比超40%。',
                       en: 'Pioneered RDS Responsible Down Standard certification, launched a full eco-friendly product line, with recycled fiber fill exceeding 40% of total products.' },
  tl2024_h:          { zh: '二十周年',  en: 'Twentieth Anniversary' },
  tl2024_b:          { zh: '合作品牌突破300家，出口覆盖50余个国家和地区，全面布局智能化生产，迈向新的二十年。',
                       en: 'Partner brands exceed 300, exports cover 50+ countries and regions, full deployment of intelligent manufacturing, stepping into a new era.' },

  certs_label:       { zh: '资质认证',   en: 'Certifications' },
  certs_title_a:     { zh: '品质',       en: 'Quality' },
  certs_title_hl:    { zh: '有据可查',   en: 'Verified' },
  certs_desc:        { zh: '六项国际权威认证，是我们对品质承诺的有力证明',
                       en: 'Six internationally recognized certifications — powerful proof of our commitment to quality.' },
  cert1_title:       { zh: 'ISO 9001',  en: 'ISO 9001' },
  cert1_desc:        { zh: '国际质量管理体系认证，确保全流程生产标准符合国际规范。',
                       en: 'International quality management system certification, ensuring full-process production meets international standards.' },
  cert2_title:       { zh: 'RDS 认证',  en: 'RDS Certified' },
  cert2_desc:        { zh: '负责任羽绒标准认证，保障羽绒原料全链路符合动物福利要求。',
                       en: 'Responsible Down Standard certification, ensuring the entire down supply chain complies with animal welfare requirements.' },
  cert3_title:       { zh: 'OEKO-TEX®', en: 'OEKO-TEX®' },
  cert3_desc:        { zh: '全系面料通过有害物质检测，无有害物质，安全触肤有保障。',
                       en: 'All fabrics tested for harmful substances — free of harmful chemicals, safe for skin contact.' },
  cert4_title:       { zh: 'SGS 检测',  en: 'SGS Tested' },
  cert4_desc:        { zh: '全产品系列通过SGS第三方检测机构检测，数据公开透明。',
                       en: 'Full product range tested by SGS third-party inspection, with transparent and public data.' },
  cert5_title:       { zh: '欧盟 CE 认证', en: 'EU CE Mark' },
  cert5_desc:        { zh: '符合欧盟产品安全与性能标准，可在欧盟市场自由销售流通。',
                       en: 'Complies with EU product safety and performance standards, freely sold in EU markets.' },
  cert6_title:       { zh: 'GRS 认证',  en: 'GRS Certified' },
  cert6_desc:        { zh: '全球再生标准认证，再生纤维产品符合国际可持续发展要求。',
                       en: 'Global Recycled Standard certification; recycled fiber products meet international sustainability requirements.' },

  about_cta_title:   { zh: '与',           en: 'Partner with an' },
  about_cta_hl:      { zh: '行业标杆',     en: 'Industry Leader' },
  about_cta_suf:     { zh: '合作',         en: '' },
  about_cta_desc:    { zh: '加入全球300+品牌的选择，让峰悦成为您的专属制造伙伴。',
                       en: 'Join 300+ global brands — let FENGYUE be your dedicated manufacturing partner.' },
  about_cta_start:   { zh: '开始合作', en: 'Start Partnership' },
  about_cta_browse:  { zh: '浏览产品', en: 'Browse Products' },

  /* ══════════════════════════════════════
     产品页 (products.html)
  ══════════════════════════════════════ */
  page_title_products: { zh: '产品中心 · 峰悦户外',
                         en: 'Products · FENGYUE Outdoor' },
  products_eyebrow:  { zh: '产品中心',    en: 'Products' },
  products_h1:      { zh: '每款睡袋<br><span class="hl">都是对生活极致的致敬</span>', 
                       en: 'Every Sleeping Bag<br><span class="hl">Is A Tribute To Life</span>' },
  products_desc:     { zh: '覆盖极地探险到休闲露营的全场景产品矩阵，十大系列，满足不同温区、不同场景的专业需求。',
                       en: 'A complete product matrix covering polar expeditions to casual camping, four series meeting the professional needs of different temperature zones and scenarios.' },

  filter_all:        { zh: '全部产品', en: 'All Products' },
  filter_envelope:   { zh: '信封系列', en: 'ENVELOPE SERIES' },
  filter_hood:       { zh: '戴帽系列', en: 'WITH HOOD SERIES' },
  filter_mummy:      { zh: '妈咪系列', en: 'MUMMY SERIES' },
  filter_lightweight:{ zh: '轻盈系列', en: 'LIGHTWEIGHT SERIES' },
  filter_military:   { zh: '行军系列', en: 'MILITARY SERIES' },
  filter_twoperson:  { zh: '双人系列', en: 'TWO-PERSON SERIES' },
  filter_down:       { zh: '羽绒系列', en: 'DOWN SERIES' },
  filter_kids:       { zh: '儿童系列', en: 'KIDS SERIES' },
  filter_special:    { zh: '特殊系列', en: 'SPECIAL SERIES' },
  filter_cover:      { zh: '睡袋套系列', en: 'SLEEPING BAG COVER SERIES' },
  filter_pillow:     { zh: '枕头',     en: 'PILLOW' },
  filter_quilt:      { zh: '被子&amp;毯子', en: 'QUILT & BLANKET' },
  filter_tent:       { zh: '帐篷系列', en: 'TENT SERIES' },
  filter_accessories:{ zh: '配件',     en: 'ACCESSORIES' },
  filter_storage:    { zh: '收纳包',   en: 'STORAGE BAG' },

  spec_temp:         { zh: '适温', en: 'Rating' },
  spec_weight:       { zh: '重量', en: 'Weight' },
  spec_fill:         { zh: '填充', en: 'Fill' },
  price_from:        { zh: '起',   en: 'from' },
  product_inquiry:   { zh: '咨询定价 →', en: 'Inquire Price →' },

  p1_series:  { zh: '极地系列', en: 'Polar Series' },
  p1_name:    { zh: '冰峰 Pro X · -40°C', en: 'IcePeak Pro X · -40°C' },
  p1_desc:    { zh: '顶级鹅绒800蓬，双层防风结构，极地科考级别保暖。', en: 'Premium goose down 800-fill, dual-layer wind-proof structure, polar expedition-grade insulation.' },
  p1_fill:    { zh: '鹅绒', en: 'Goose Down' },

  p2_series:  { zh: '极地系列', en: 'Polar Series' },
  p2_name:    { zh: '冰峰 Elite · -25°C', en: 'IcePeak Elite · -25°C' },
  p2_desc:    { zh: '鸭绒700蓬，轻量化极地方案，专为高效移动设计。', en: 'Duck down 700-fill, lightweight polar solution, designed for high-mobility performance.' },
  p2_fill:    { zh: '鸭绒', en: 'Duck Down' },

  p3_series:  { zh: '登山系列', en: 'Alpine Series' },
  p3_name:    { zh: '云脊 Alpine · -20°C', en: 'SkyRidge Alpine · -20°C' },
  p3_desc:    { zh: '防水处理鸭绒700蓬，修身版型减重20%，登山营地首选。', en: 'DWR-treated duck down 700-fill, slim-fit design 20% lighter, the first choice for alpine camps.' },
  p3_fill:    { zh: '防水绒', en: 'DWR Down' },

  p4_series:  { zh: '登山系列', en: 'Alpine Series' },
  p4_name:    { zh: '云脊 Light · -10°C', en: 'SkyRidge Light · -10°C' },
  p4_desc:    { zh: '超轻800g设计，三季高山露营，背包客的绝佳拍档。', en: 'Ultralight 800g design, 3-season alpine camping, the perfect backpacking companion.' },
  p4_fill:    { zh: '轻量绒', en: 'Light Down' },

  p5_series:  { zh: '四季系列', en: 'Trek Series' },
  p5_name:    { zh: '星野 Trek · -5°C', en: 'StarField Trek · -5°C' },
  p5_desc:    { zh: '化纤速干填充，超轻800g，三季通用的轻量化露营伴侣。', en: 'Quick-dry synthetic fill, ultralight 800g, a versatile 3-season lightweight camping companion.' },
  p5_fill:    { zh: '化纤', en: 'Synthetic' },

  p6_series:  { zh: '四季系列', en: 'Trek Series' },
  p6_name:    { zh: '星野 Camp · +5°C', en: 'StarField Camp · +5°C' },
  p6_desc:    { zh: '夏季露营专款，透气亲肤面料，轻薄舒适，价格亲民。', en: 'Summer camping special, breathable skin-friendly fabric, light, comfortable and affordable.' },
  p6_fill:    { zh: '化纤', en: 'Synthetic' },

  p7_series:  { zh: '儿童系列', en: 'Kids Series' },
  p7_name:    { zh: '小峰 Junior · -5°C', en: 'LittlePeak Junior · -5°C' },
  p7_desc:    { zh: '儿童专属版型，无荧光剂面料，亲子露营和军训首选。', en: 'Child-specific pattern, fluorescent-agent-free fabric, the top pick for family camping and school camps.' },
  p7_fill:    { zh: '环保绒', en: 'Eco Fill' },

  p8_series:  { zh: '儿童系列', en: 'Kids Series' },
  p8_name:    { zh: '小峰 Mini · +5°C', en: 'LittlePeak Mini · +5°C' },
  p8_desc:    { zh: '幼儿款安全缝制，卡通印花，让小朋友爱上户外探险。', en: 'Toddler-safe stitching, cartoon prints, making little ones love outdoor adventures.' },
  p8_fill:    { zh: '环保绒', en: 'Eco Fill' },

  oem_label:         { zh: '定制服务',         en: 'Custom Services' },
  oem_title_a:       { zh: 'OEM / ODM',        en: 'OEM / ODM' },
  oem_title_hl:      { zh: '一站式定制',        en: 'One-Stop Customization' },
  oem_desc:          { zh: '从设计研发到生产交付，我们为全球品牌提供完整的睡袋定制解决方案。最小起订量灵活，交期有保障，已服务300+国际知名品牌。',
                       en: 'From design to delivery, we offer complete sleeping bag customization solutions for global brands. Flexible MOQ, guaranteed lead times, serving 300+ internationally renowned brands.' },
  oem_feat1_title:   { zh: '外观定制', en: 'Appearance Customization' },
  oem_feat1_desc:    { zh: '品牌 LOGO、配色方案、面料选择、印花图案全方位定制',
                       en: 'Brand logo, color scheme, fabric selection and print patterns — fully customizable.' },
  oem_feat2_title:   { zh: '材料定制', en: 'Material Customization' },
  oem_feat2_desc:    { zh: '填充材料、面料、拉链配件等核心材料可自由组合选配',
                       en: 'Insulation materials, fabrics, zipper accessories and other core materials can be freely combined.' },
  oem_feat3_title:   { zh: '包装定制', en: 'Packaging Customization' },
  oem_feat3_desc:    { zh: '收纳袋、吊牌、包装盒、说明书等全套包装定制服务',
                       en: 'Storage bags, hang tags, packaging boxes, manuals and full packaging customization services.' },
  oem_cta:           { zh: '获取定制方案', en: 'Get Custom Solutions' },
  oem_stat1:         { zh: '合作品牌',    en: 'Partner Brands' },
  oem_stat2:         { zh: '年产能（条）', en: 'Annual Capacity' },
  oem_stat3:         { zh: '最快交货期',  en: 'Fastest Lead Time' },
  oem_stat4:         { zh: '最小起订量',  en: 'Minimum Order' },

  products_cta_a:    { zh: '找不到合适的型号？', en: 'Can\'t Find the Right Model?' },
  products_cta_hl:   { zh: '我们来定制',          en: 'We\'ll Customize It' },
  products_cta_desc: { zh: '告诉我们您的需求，专业团队为您量身定制解决方案。',
                       en: 'Tell us your requirements, and our professional team will tailor the solution for you.' },
  products_cta_btn:  { zh: '会员登录', en: 'Login' },

  /* ══════════════════════════════════════
     联系页 (contact.html)
  ══════════════════════════════════════ */
  page_title_contact: { zh: '联系我们 · 峰悦户外',
                        en: 'Contact · FENGYUE Outdoor' },
  contact_eyebrow:   { zh: '联系我们',   en: 'Contact Us' },
  contact_h1_a:      { zh: '让我们',     en: 'Let\'s' },
  contact_h1_b:      { zh: '开始合作',   en: 'Start Cooperating' },
  contact_desc:      { zh: '无论是产品咨询、批量采购还是 OEM/ODM 定制，我们的专业团队将在24小时内响应您的需求。',
                       en: 'Whether product inquiry, bulk purchasing or OEM/ODM customization, our professional team will respond within 24 hours.' },

  contact_info_label:   { zh: '联系方式',  en: 'Contact Info' },
  contact_phone_label:  { zh: '销售热线',  en: 'Sales Hotline' },
  contact_phone_sub:    { zh: '工作日 09:00–18:00', en: 'Weekdays 09:00–18:00' },
  contact_email_label:  { zh: '商务邮箱',  en: 'Business Email' },
  contact_email_sub:    { zh: '24小时内回复', en: 'Reply within 24 hours' },
  contact_addr_label:   { zh: '工厂地址',  en: 'Factory Address' },
  contact_addr_value:   { zh: '江苏省丹阳市运河镇', en: 'Yunhe Town, Danyang City, Jiangsu' },
  contact_addr_sub:     { zh: '欢迎预约参观工厂', en: 'Factory visits welcome by appointment' },
  contact_wechat_label: { zh: '微信客服',  en: 'WeChat Support' },
  contact_wechat_sub:   { zh: '扫码添加企业微信', en: 'Scan to add enterprise WeChat' },
  contact_map_text:     { zh: '江苏省丹阳市运河镇', en: 'Yunhe Town, Danyang City, Jiangsu' },
  contact_map_loading:  { zh: '地图加载中…', en: 'Loading map…' },

  form_title:        { zh: '发送询盘',    en: 'Send Inquiry' },
  form_subtitle:     { zh: '填写以下信息，我们将在24小时内联系您',
                       en: 'Fill in the form below and we\'ll contact you within 24 hours.' },
  form_name:         { zh: '姓名 *',      en: 'Name *' },
  form_name_ph:      { zh: '您的姓名',    en: 'Your name' },
  form_company:      { zh: '公司名称',    en: 'Company Name' },
  form_company_ph:   { zh: '公司/品牌名称', en: 'Company / Brand name' },
  form_phone:        { zh: '联系电话 *',  en: 'Phone *' },
  form_email:        { zh: '电子邮箱',    en: 'Email' },
  form_type:         { zh: '咨询类型',    en: 'Inquiry Type' },
  form_type_ph:      { zh: '请选择咨询类型', en: 'Select inquiry type' },
  form_type_1:       { zh: '产品询价',    en: 'Product Inquiry' },
  form_type_2:       { zh: '批量采购',    en: 'Bulk Purchase' },
  form_type_3:       { zh: 'OEM 代工定制', en: 'OEM Manufacturing' },
  form_type_4:       { zh: 'ODM 设计定制', en: 'ODM Design' },
  form_type_5:       { zh: '其他',        en: 'Other' },
  form_message:      { zh: '留言内容 *',  en: 'Message *' },
  form_message_ph:   { zh: '请详细描述您的需求，例如产品型号、数量、温区要求等...',
                       en: 'Please describe your requirements in detail, e.g. product model, quantity, temperature rating...' },
  form_submit:       { zh: '提交询盘',    en: 'Submit Inquiry' },
  form_sending:      { zh: '发送中…',     en: 'Sending…' },
  form_success_h:    { zh: '询盘已发送！', en: 'Inquiry Sent!' },
  form_success_p:    { zh: '感谢您的咨询，我们将在24小时内通过电话或邮件与您联系。',
                       en: 'Thank you for your inquiry. We\'ll contact you by phone or email within 24 hours.' },

  faq_label:         { zh: '常见问题',    en: 'FAQ' },
  faq_title_a:       { zh: '快速',        en: 'Quick' },
  faq_title_hl:      { zh: '解答',        en: 'Answers' },
  faq1_q:            { zh: '最小起订量是多少？', en: 'What is the minimum order quantity?' },
  faq1_a:            { zh: 'OEM/ODM 定制最小起订量100件，零售订单无最低限制，大宗采购享折扣。',
                       en: 'OEM/ODM custom minimum order is 100 pcs; no minimum for retail orders; bulk orders enjoy discounts.' },
  faq2_q:            { zh: '交货期一般多久？', en: 'What is the typical lead time?' },
  faq2_a:            { zh: '现货产品3–7个工作日发货，定制产品30–45个工作日，急单可协商加急方案。',
                       en: 'In-stock products ship in 3–7 working days; custom products take 30–45 working days; rush orders can be negotiated.' },
  faq3_q:            { zh: '支持哪些支付方式？', en: 'What payment methods are supported?' },
  faq3_a:            { zh: '支持电汇（T/T）、信用证（L/C）、西联汇款及国内对公转账，欢迎咨询详情。',
                       en: 'We support bank wire (T/T), letter of credit (L/C), Western Union and domestic corporate transfers. Contact us for details.' },
  faq4_q:            { zh: '可以参观工厂吗？', en: 'Can I visit the factory?' },
  faq4_a:            { zh: '欢迎预约参观。请提前3个工作日联系我们安排行程，我们将全程接待。',
                       en: 'Factory visits are welcome. Please contact us 3 working days in advance to arrange the itinerary — we\'ll handle full reception.' },
};

/* ──────────────────────────────────────────────────────────
   核心函数：切换语言
────────────────────────────────────────────────────────── */
function switchLang(lang) {
  // 存储选择
  localStorage.setItem('fy_lang', lang);

  // RTL/LTR
  const html = document.documentElement;
  if (lang === 'ar') {
    html.setAttribute('dir', 'rtl');
    html.setAttribute('lang', 'ar');
  } else {
    html.setAttribute('dir', 'ltr');
    html.setAttribute('lang', lang === 'en' ? 'en' : 'zh-CN');
  }

  // 更新所有带 data-i18n 的文本节点
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[key] && translations[key][lang] !== undefined) {
      el.innerHTML = translations[key][lang];
    }
  });

  // 更新 placeholder
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (translations[key] && translations[key][lang] !== undefined) {
      el.placeholder = translations[key][lang];
    }
  });

  // 更新 <title>
  const titleKey = document.documentElement.dataset.titleKey;
  if (titleKey && translations[titleKey] && translations[titleKey][lang]) {
    document.title = translations[titleKey][lang];
  }

  // 更新语言按钮高亮
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/* ──────────────────────────────────────────────────────────
   初始化：读取 localStorage 或浏览器语言
────────────────────────────────────────────────────────── */
function initLang() {
  const saved = localStorage.getItem('fy_lang');
  const browserLang = navigator.language || navigator.userLanguage;
  let lang = 'zh';
  if (saved && ['zh', 'en', 'ar'].includes(saved)) {
    lang = saved;
  } else if (browserLang && browserLang.startsWith('ar')) {
    lang = 'ar';
  } else if (browserLang && browserLang.startsWith('en')) {
    lang = 'en';
  }
  switchLang(lang);
}

document.addEventListener('DOMContentLoaded', initLang);
