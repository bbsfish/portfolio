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
      <main>
        <section>
          {articles.map((article, i) => <ZennArticleCard {...article} key={i}/>)}
        </section>
      </main>
    </div>
  );
}
