// Public-page override for career route labels.
// Keep this small so existing portrait URLs and license credits stay untouched.
(() => {
  const data = window.FINAL_GENERATION_DATA;
  if (!data || !Array.isArray(data.players)) return;

  const routeUpdates = {
    messi: {
      card: {
        routeFocus: "Newell's to Inter Miami CF",
        routeFocusJa: "ニューウェルズからインテル・マイアミCFへ"
      },
      routeLabel: "Newell's Old Boys → FC Barcelona → Paris Saint-Germain → Inter Miami CF",
      routeLabelJa: "ニューウェルズ・オールドボーイズ → FCバルセロナ → パリ・サンジェルマン → インテル・マイアミCF",
      roles: [{ index: 0, role: "Newell's Old Boys" }, { index: 3, role: "Inter Miami CF" }]
    },
    ronaldo: {
      card: {
        routeFocus: "CD Nacional to Al Nassr",
        routeFocusJa: "CDナシオナルからアル・ナスルへ"
      },
      routeLabel: "CD Nacional → Sporting CP → Manchester United → Real Madrid → Juventus → Al Nassr",
      routeLabelJa: "CDナシオナル → スポルティングCP → マンチェスター・ユナイテッド → レアル・マドリード → ユヴェントス → アル・ナスル",
      roles: [{ index: 0, role: "CD Nacional" }]
    },
    neymar: {
      card: {
        routeFocus: "Santos FC to Al Hilal",
        routeFocusJa: "サントスFCからアル・ヒラルへ"
      },
      routeLabel: "Santos FC → FC Barcelona → Paris Saint-Germain → Al Hilal",
      routeLabelJa: "サントスFC → FCバルセロナ → パリ・サンジェルマン → アル・ヒラル",
      roles: []
    },
    modric: {
      card: {
        routeFocus: "NK Zadar to AC Milan",
        routeFocusJa: "NKザダルからACミランへ"
      },
      routeLabel: "NK Zadar → Dinamo Zagreb → Tottenham Hotspur → Real Madrid → AC Milan",
      routeLabelJa: "NKザダル → ディナモ・ザグレブ → トッテナム・ホットスパー → レアル・マドリード → ACミラン",
      roles: [{ index: 0, role: "NK Zadar" }]
    }
  };

  data.players.forEach((player) => {
    const update = routeUpdates[player.id];
    if (!update) return;

    player.card = { ...(player.card || {}), ...update.card };
    player.routeLabel = update.routeLabel;
    player.routeLabelJa = update.routeLabelJa;

    update.roles.forEach(({ index, role }) => {
      if (player.route[index]) player.route[index].role = role;
    });
  });
})();