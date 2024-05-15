import Keyvisual from "@/components/Keyvisual";
import Markdown from "@/components/Markdown";
import "@/styles/page.style.scss";
import "@/styles/keyvisual.style.scss";
import readfile from "@/lib/read-file";
const mdText = await readfile('home', 'homepage.md');

export default function Home() {
  return (
    <div id="main">
      <Keyvisual />
      <main>
        <section>
          <h1>項目</h1>
          <nav>
            <ol>
              <li><a href="#whatican" >なにができるか</a></li>
              <li><a href="#myskill" >スキル</a></li>
              <li><a href="#myworks" >ウェブリンク</a></li>
            </ol>
          </nav>
        </section>
        <section>
          <Markdown text={mdText}/>
        </section>
      </main>
    </div>
  );
}
