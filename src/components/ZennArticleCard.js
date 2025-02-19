import '@/styles/zenn_article_card.style.scss';

export default function ZennArticleCard(props) {
  const { title, emoji, body_updated_at, published_at, path, article_type } = props;
  const daysAgo = (() => {
      // 入力された日付を解析して、ミリ秒単位のタイムスタンプに変換する
      const inputTimestamp = new Date(published_at).getTime();
      
      // 現在のタイムスタンプを取得する
      const currentTimestamp = new Date().getTime();
      
      // ミリ秒単位の差分を計算して、日数に変換する
      const difference = currentTimestamp - inputTimestamp;
      const daysAgo = Math.floor(difference / (1000 * 60 * 60 * 24));
      
      return daysAgo;
  })();

  return (
    <article class="ArticleCard_container">
      <a class="ArticleCard_mainLink" href={'https://zenn.dev' + path}>
        <div class="ArticleCard_emojiContainer">
          <span class="Emoji_nativeEmoji">{emoji}</span>
        </div>
        <div class="ArticleCard_titleContainer">
          <h3 class="ArticleCard_title">{title}</h3>
        </div>
        <div class="ArticleCard_meta">
          <div class="ArticleCard_dateAndLikes">
            <time datetime={published_at}>{daysAgo}日前</time>
          </div>
        </div>
      </a>
    </article>
  );
}