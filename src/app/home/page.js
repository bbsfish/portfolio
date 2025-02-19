import Keyvisual from "@/components/Keyvisual";
import Markdown from "@/components/Markdown";
import "@/styles/page.style.scss";
import "@/styles/keyvisual.style.scss";
import readfile from "@/lib/read-file";
import ZennArticleCard from "@/components/ZennArticleCard";
const skillText = await readfile('home', 'skill.md');
const devsText = await readfile('home', 'devs.md');
const weblinkText = await readfile('home', 'weblink.md');
const articles = await (async () => {
  const response = await fetch('https://zenn.dev/api/articles?username=bbsfish');
  const data = await response.json();
  const { articles } = data;
  return articles;
})();

export default function Home() {
  return (
    <div id="main">
      <Keyvisual />
      <main>
        <section>
          <h1>項目</h1>
          <nav>
            <ol>
              <li><a href="#articles">記事</a></li>
              <li><a href="#skill">スキル</a></li>
              <li><a href="#devs">作ったもの</a></li>
              <li><a href="#weblink">ウェブリンク</a></li>
            </ol>
          </nav>
        </section>
        <section id="articles">
          <h1>記事</h1>
          {articles.map((article, i) => {
            if (i >= 3) return;
            return <ZennArticleCard {...article} key={i}/>;
          })}
          <a href="/articles" class="AllArticlesButton">すべて表示</a>
        </section>
        <section id="skill">
          <h1>スキル</h1>
          <Markdown text={skillText}/>
        </section>
        <section id="devs">
          <h1>作ったもの</h1>
          <Markdown text={devsText}/>
        </section>
        <section id="weblink">
          <h1>ウェブリンク</h1>
          <Markdown text={weblinkText}/>
        </section>
      </main>
    </div>
  );
}
