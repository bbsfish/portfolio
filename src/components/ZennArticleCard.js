export default function ZennArticleCard(props) {
  const { title, emoji, body_updated_at, published_at, path, article_type } = props;
  return (
    <article class="ArticleCard_container__duCK7">
      <a class="ArticleCard_category__Vu1N1" href="/tech-or-idea">
      tech
      </a>
      <a class="ArticleCard_mainLink__mLJti" href="/bbsfish/articles/ffd0ca5b4ac547">
        <div class="ArticleCard_emojiContainer__cmNrd">
          <span class="Emoji_twemoji__hcxYF">
            <span class="Emoji_twemojiImg__Oc6vR" style="background-image: url(&quot;https://asia-northeast1-zenn-dev-production.cloudfunctions.net/twemoji/📖.svg&quot;);">
            </span>
          </span>
          <span class="Emoji_nativeEmoji__GMBzX">📖</span>
        </div>
        <div class="ArticleCard_titleContainer__4zT9f">
          <h3 class="ArticleCard_title__Y2xJl">Vuex Store の引数 | Vue3 + Vuex4</h3>
        </div>
        <div class="ArticleCard_meta__SNrMQ">
          <div class="ArticleCard_dateAndLikes__SNvc5">
            <time datetime="2024-04-08T17:06:42+09:00">1ヶ月前</time>
          </div>
        </div>
      </a>
    </article>
  );
}