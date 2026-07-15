const destinations = [
  { id: 'okinawa', name: '沖縄・宮古島', emoji: '🏝️', days: ['3-4', '5-7'], budget: ['mid', 'high'], purpose: ['relax', 'nature', 'activity'], climate: ['warm'], pace: ['slow', 'balanced'], cost: '7〜18万円', time: '東京から飛行機で約3時間', reason: '透明度の高い海と島時間で、短い休みでも一気にリゾート気分へ切り替えられます。', plan: '午前は与那覇前浜、午後は来間大橋ドライブ、夕方はサンセットを眺める島カフェへ。', food: '宮古そば、島野菜、マンゴースイーツ' },
  { id: 'kyoto', name: '京都', emoji: '⛩️', days: ['1-2', '3-4'], budget: ['low', 'mid', 'high'], purpose: ['culture', 'food'], climate: ['mild', 'cool'], pace: ['slow', 'balanced'], cost: '3〜12万円', time: '東京から新幹線で約2時間15分', reason: '寺社、町家カフェ、季節の景色がまとまり、週末旅でも濃い時間を過ごせます。', plan: '朝の清水寺から祇園散策、昼は京料理、午後は鴨川沿いでのんびり。', food: '湯豆腐、抹茶甘味、おばんざい' },
  { id: 'sapporo', name: '札幌・小樽', emoji: '❄️', days: ['3-4', '5-7'], budget: ['mid', 'high'], purpose: ['food', 'snow', 'culture'], climate: ['cool', 'snow'], pace: ['balanced'], cost: '6〜16万円', time: '東京から飛行機で約1時間40分', reason: '海鮮、夜景、レトロな運河を組み合わせられる、食いしん坊向け北国旅です。', plan: '市場で朝食、札幌市内観光、小樽運河ライトアップ、締めは味噌ラーメン。', food: '海鮮丼、ジンギスカン、味噌ラーメン' },
  { id: 'kanazawa', name: '金沢', emoji: '🍵', days: ['1-2', '3-4'], budget: ['low', 'mid'], purpose: ['culture', 'food'], climate: ['mild', 'cool'], pace: ['slow', 'balanced'], cost: '3〜10万円', time: '東京から新幹線で約2時間30分', reason: '庭園、美術館、茶屋街、海の幸がコンパクトに巡れる上品な街旅です。', plan: '兼六園、21世紀美術館、ひがし茶屋街を巡り、近江町市場で海鮮ランチ。', food: 'のどぐろ、金沢カレー、和菓子' },
  { id: 'yakushima', name: '屋久島', emoji: '🌲', days: ['5-7', '8+'], budget: ['mid', 'high'], purpose: ['nature', 'activity'], climate: ['mild', 'warm'], pace: ['active'], cost: '10〜22万円', time: '東京から鹿児島経由で約5〜6時間', reason: '苔むす森とトレッキングで、自然に深く潜るような休暇が叶います。', plan: '白谷雲水峡ハイク、島内ドライブ、温泉、翌日は縄文杉トレッキングへ。', food: '首折れサバ、飛魚料理、たんかん' },
  { id: 'hakone', name: '箱根', emoji: '♨️', days: ['1-2'], budget: ['low', 'mid', 'high'], purpose: ['relax', 'nature'], climate: ['mild', 'cool'], pace: ['slow'], cost: '2〜9万円', time: '東京から電車で約1時間30分', reason: '温泉、美術館、富士山ビューを近距離で楽しめるリセット旅に最適です。', plan: '登山電車で強羅へ、美術館を巡り、湖畔散歩後は温泉宿でゆったり。', food: '黒たまご、湯葉丼、ベーカリー巡り' },
  { id: 'ishigaki', name: '石垣島', emoji: '🐠', days: ['3-4', '5-7'], budget: ['mid', 'high'], purpose: ['relax', 'activity', 'nature'], climate: ['warm'], pace: ['balanced', 'active'], cost: '8〜20万円', time: '東京から飛行機で約3時間30分', reason: '離島めぐりやシュノーケルで、海を主役にした開放的な旅になります。', plan: '川平湾、竹富島サイクリング、夜は星空ツアーで南国を満喫。', food: '八重山そば、石垣牛、島豆腐' },
  { id: 'nara', name: '奈良', emoji: '🦌', days: ['1-2', '3-4'], budget: ['low', 'mid'], purpose: ['culture', 'nature'], climate: ['mild'], pace: ['slow'], cost: '2〜8万円', time: '東京から新幹線と電車で約3時間', reason: '古都の空気と緑が近く、落ち着いたペースで歴史に浸れます。', plan: '奈良公園、東大寺、ならまち散策、翌朝は春日大社の森へ。', food: '柿の葉寿司、茶粥、葛スイーツ' },
  { id: 'fukuoka', name: '福岡', emoji: '🍜', days: ['1-2', '3-4'], budget: ['low', 'mid'], purpose: ['food', 'culture'], climate: ['mild', 'warm'], pace: ['balanced', 'active'], cost: '4〜11万円', time: '東京から飛行機で約2時間', reason: '空港から街が近く、屋台・市場・海辺をテンポよく楽しめます。', plan: '糸島ドライブ、太宰府散策、夜は屋台をはしごして博多グルメ三昧。', food: '博多ラーメン、明太子、もつ鍋' },
  { id: 'nagano', name: '上高地・松本', emoji: '🏔️', days: ['3-4'], budget: ['low', 'mid'], purpose: ['nature', 'activity'], climate: ['cool', 'mild'], pace: ['balanced', 'active'], cost: '4〜12万円', time: '東京から電車・バスで約3〜4時間', reason: '澄んだ川と山岳景観、城下町歩きを組み合わせた爽やかな旅です。', plan: '上高地ハイキング、松本城、クラフトショップ巡り、山小屋風カフェへ。', food: '信州そば、山賊焼き、りんごスイーツ' },
  { id: 'seoul', name: 'ソウル', emoji: '🛍️', days: ['3-4'], budget: ['mid'], purpose: ['food', 'culture'], climate: ['cool', 'mild'], pace: ['balanced', 'active'], cost: '7〜15万円', time: '東京から飛行機で約2時間30分', reason: '近い海外で、カフェ、コスメ、歴史スポット、屋台グルメを効率よく満喫できます。', plan: '景福宮、聖水洞カフェ、明洞ショッピング、夜は広蔵市場へ。', food: 'サムギョプサル、キンパ、韓国スイーツ' },
  { id: 'taipei', name: '台北', emoji: '🥟', days: ['3-4'], budget: ['mid'], purpose: ['food', 'culture'], climate: ['warm', 'mild'], pace: ['slow', 'balanced'], cost: '7〜14万円', time: '東京から飛行機で約4時間', reason: '夜市と茶藝館、レトロな街並みが気軽に楽しめる、初海外にもやさしい旅先です。', plan: '龍山寺、迪化街、九份半日旅、夜は士林夜市で食べ歩き。', food: '小籠包、魯肉飯、豆花' },
  { id: 'bangkok', name: 'バンコク', emoji: '🛺', days: ['5-7'], budget: ['mid', 'high'], purpose: ['food', 'culture', 'relax'], climate: ['warm'], pace: ['balanced', 'active'], cost: '10〜22万円', time: '東京から飛行機で約6〜7時間', reason: '寺院、スパ、ルーフトップ、屋台を自在に組み合わせられる熱気ある都市旅です。', plan: '王宮と寺院巡り、チャオプラヤ川クルーズ、スパ、ナイトマーケットへ。', food: 'トムヤムクン、パッタイ、マンゴースティッキーライス' },
  { id: 'bali', name: 'バリ島', emoji: '🌺', days: ['5-7', '8+'], budget: ['high', 'luxury'], purpose: ['relax', 'nature'], climate: ['warm'], pace: ['slow', 'balanced'], cost: '18〜40万円', time: '東京から飛行機で約7〜8時間', reason: 'ビーチと森のヴィラ、スパ、サンセットで心ほどけるリゾート休暇に。', plan: 'ウブドの棚田、スパ、ビーチクラブ、夕暮れの寺院散策。', food: 'ナシゴレン、サテ、フルーツボウル' },
  { id: 'hawaii', name: 'ハワイ・オアフ島', emoji: '🌈', days: ['5-7', '8+'], budget: ['high', 'luxury'], purpose: ['relax', 'activity'], climate: ['warm'], pace: ['balanced'], cost: '25〜55万円', time: '東京から飛行機で約7時間', reason: '海、買い物、自然アクティビティの王道バランスで満足度が高い旅先です。', plan: 'ワイキキ散歩、ダイヤモンドヘッド、ノースショア、サンセットディナー。', food: 'ポキ、ガーリックシュリンプ、パンケーキ' },
  { id: 'paris', name: 'パリ', emoji: '🥐', days: ['5-7', '8+'], budget: ['high', 'luxury'], purpose: ['culture', 'food'], climate: ['mild', 'cool'], pace: ['slow', 'balanced'], cost: '28〜60万円', time: '東京から飛行機で約14〜15時間', reason: '美術館、街角のカフェ、歴史的建築をゆっくり味わう大人の特集旅に。', plan: 'ルーヴル、セーヌ川散歩、マレ地区、翌日はヴェルサイユへ。', food: 'クロワッサン、ビストロ料理、マカロン' },
  { id: 'rome', name: 'ローマ', emoji: '🏛️', days: ['5-7', '8+'], budget: ['high', 'luxury'], purpose: ['culture', 'food'], climate: ['mild', 'warm'], pace: ['balanced', 'active'], cost: '25〜55万円', time: '東京から乗継便で約15〜18時間', reason: '古代遺跡と美食が街全体に広がり、歩くほど物語が増える旅先です。', plan: 'コロッセオ、トレビの泉、バチカン美術館、夜はトラットリアへ。', food: 'カルボナーラ、ジェラート、エスプレッソ' },
  { id: 'queenstown', name: 'クイーンズタウン', emoji: '🛶', days: ['8+'], budget: ['high', 'luxury'], purpose: ['nature', 'activity'], climate: ['cool', 'mild'], pace: ['active'], cost: '35〜70万円', time: '東京から乗継便で約16〜20時間', reason: '湖と山に囲まれ、トレッキングやアドベンチャー好きの心をくすぐります。', plan: 'ワカティプ湖クルーズ、絶景ゴンドラ、ミルフォードサウンド日帰り。', food: 'ラム料理、フィッシュ＆チップス、ピノ・ノワール' },
  { id: 'vancouver', name: 'バンクーバー', emoji: '🌲', days: ['5-7', '8+'], budget: ['high'], purpose: ['nature', 'food'], climate: ['cool', 'mild'], pace: ['balanced'], cost: '25〜50万円', time: '東京から飛行機で約9時間', reason: '都市と海と森が近く、自然もマーケットも欲張れるクリーンな旅先です。', plan: 'スタンレーパーク、グランビルアイランド、吊り橋公園、港の夕景。', food: 'サーモン、クラフトビール、アジアンフード' },
  { id: 'dubai', name: 'ドバイ', emoji: '🏜️', days: ['5-7'], budget: ['high', 'luxury'], purpose: ['activity', 'culture', 'relax'], climate: ['warm'], pace: ['balanced', 'active'], cost: '22〜55万円', time: '東京から飛行機で約11〜12時間', reason: '近未来建築、砂漠、ラグジュアリー体験を一度に味わえる非日常旅です。', plan: '高層展望台、旧市街スーク、砂漠サファリ、噴水ショー。', food: '中東グリル、デーツ、アラビックコーヒー' }
];

const form = document.querySelector('#travel-form');
const loading = document.querySelector('#loading');
const results = document.querySelector('#results');
const resultList = document.querySelector('#result-list');
const retry = document.querySelector('#retry');
const favoriteList = document.querySelector('#favorite-list');
const favoriteKey = 'holidayCompassFavorites';
let favorites = JSON.parse(localStorage.getItem(favoriteKey) || '[]');

function matchScore(destination, answers) {
  const weights = { days: 24, budget: 24, purpose: 26, climate: 16, pace: 10 };
  let score = 35;
  Object.entries(weights).forEach(([key, value]) => {
    if (destination[key].includes(answers[key])) score += value;
  });
  return Math.min(score, 100);
}

function getAnswers() {
  return Object.fromEntries(new FormData(form).entries());
}

function renderResults(items) {
  resultList.innerHTML = items.map(({ destination, score }, index) => `
    <article class="destination-card">
      <div class="card-photo">
        <span class="emoji" aria-hidden="true">${destination.emoji}</span>
        <span class="score">相性 ${score}%</span>
      </div>
      <div class="card-body">
        <p class="eyebrow">No.${index + 1}</p>
        <h3>${destination.name}</h3>
        <p>${destination.reason}</p>
        <div class="meta">
          <span>💰 予算目安：${destination.cost}</span>
          <span>🕒 移動時間：${destination.time}</span>
        </div>
        <p class="plan"><strong>モデルプラン：</strong>${destination.plan}</p>
        <p class="food"><strong>おすすめグルメ：</strong>${destination.food}</p>
        <button class="favorite-button ${favorites.includes(destination.id) ? 'saved' : ''}" data-id="${destination.id}">
          ${favorites.includes(destination.id) ? 'お気に入り済み' : 'お気に入りに保存'}
        </button>
      </div>
    </article>
  `).join('');
}

function saveFavorites() {
  localStorage.setItem(favoriteKey, JSON.stringify(favorites));
  renderFavorites();
}

function renderFavorites() {
  if (!favorites.length) {
    favoriteList.innerHTML = '<p>まだお気に入りはありません。気になる旅先を保存して、次の休みの候補にしましょう。</p>';
    return;
  }
  favoriteList.innerHTML = favorites.map(id => {
    const destination = destinations.find(item => item.id === id);
    return `<span class="favorite-chip">${destination.emoji} ${destination.name}<button data-remove="${id}" aria-label="${destination.name}を削除">×</button></span>`;
  }).join('');
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const answers = getAnswers();
  results.hidden = true;
  loading.hidden = false;
  window.setTimeout(() => {
    const ranked = destinations
      .map(destination => ({ destination, score: matchScore(destination, answers) }))
      .sort((a, b) => b.score - a.score || a.destination.name.localeCompare(b.destination.name, 'ja'))
      .slice(0, 3);
    renderResults(ranked);
    loading.hidden = true;
    results.hidden = false;
    results.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 1150);
});

resultList.addEventListener('click', event => {
  const button = event.target.closest('.favorite-button');
  if (!button) return;
  const id = button.dataset.id;
  favorites = favorites.includes(id) ? favorites.filter(item => item !== id) : [...favorites, id];
  saveFavorites();
  document.querySelectorAll(`[data-id="${id}"]`).forEach(item => {
    const saved = favorites.includes(id);
    item.classList.toggle('saved', saved);
    item.textContent = saved ? 'お気に入り済み' : 'お気に入りに保存';
  });
});

favoriteList.addEventListener('click', event => {
  const button = event.target.closest('[data-remove]');
  if (!button) return;
  favorites = favorites.filter(id => id !== button.dataset.remove);
  saveFavorites();
  const visibleButton = document.querySelector(`[data-id="${button.dataset.remove}"]`);
  if (visibleButton) {
    visibleButton.classList.remove('saved');
    visibleButton.textContent = 'お気に入りに保存';
  }
});

retry.addEventListener('click', () => {
  form.reset();
  results.hidden = true;
  document.querySelector('#diagnosis').scrollIntoView({ behavior: 'smooth' });
});

renderFavorites();
