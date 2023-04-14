document.getElementById('fortuneButton').addEventListener('click', function () {
  const fortunes = [
    '1-1：こころと身体を愛でる「自分を慈しむことは、贅沢や怠けることではなく、自分らしさを取り戻すこと」',
    '1-2：枠を外し自由になる「誰かがつくった枠を、掛けているのは自分」',
    '1-3：私の魅力再発見「自分の魅力を知ることで、自信が生まれる」',
    '1-4：当たり前への感謝「当たり前は当たり前ではない」',
    '1-5：変化を楽しむ「変化をワクワク楽しむ自分もいるはず」',
    '1-6：ギブする幸せ「幸せギブの無限連鎖がはじまる」',
    '2-1：あなたらしさを尊ぶ「ひとりひとり違って当たり前、個性を尊ぶ」',
    '2-2：心理的安全性がベースライン「安心して力を発揮できる居場所が必要」',
    '2-3：活かし合う「仕事はチームで成し遂げるもの」',
    '2-4：ともに成長する「競争だけじゃなく、共創することでチーム全体で背伸びできる」',
    '3-1：幸せの連鎖「ひとりひとりの幸せを大事にすると、世界はひとつになる」',
    '3-2：幸せ基準の新世界「幸せ基準のパラダイムシフトが起きている」',
  ];
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const result = fortunes[randomIndex];
  document.getElementById('fortuneResult').textContent = result;
});
