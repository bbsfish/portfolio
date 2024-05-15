import Image from "next/image";
import Keyvisual from "@/components/Keyvisual";
import lcImage from "@/public/sharkbrown.html.xdomain.jp.png";
import "@/styles/page.style.scss";
import "@/styles/keyvisual.style.scss";


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
        </section>
        <section id="whatican">
          <h1>なにができるか</h1>
          <h2>ホームページ作成</h2>
          <div className="sample-view">
            <h3 className="sample-view-title">
              イメージ
            </h3>
            <div className="sample-view-content">
              <div className="sample-works-image">
                <Image
                  src={lcImage}
                  height={500}
                  width={300}
                  alt="サンプルホームページのスクリーンショット"
                  ></Image>
              </div>
              <div className="sample-works-description">
                <a
                  className="sample-works-a"
                  href="https://panmryofficial.vercel.app/"
                  target="_blank"
                >サンプルホームページ</a>
                <p>
                  中規模なホームページ作成ができます。モダンな見た目や、あるコンセプトに従ったデザインが可能です。
                  また、必要に応じた会員システムや予約機能も作成できます。
                </p>
              </div>
            </div>
          </div>
          <div className="tech-for-sample">
            <div>
              <h3>使った経験のある主な技術</h3>
              <ul>
                <li>SCSS</li>
                <li>Vanila JS</li>
                <li>Next.js</li>
                <li>Gatsby</li>
                <li>PHP (ベタ打ち)</li>
                <li>Node.js</li>
                <li>Node Express</li>
              </ul>
            </div>
            <div>
              <h3>その他ツールやプラットフォーム</h3>
              <ul>
                <li>ESLint</li>
                <li>GCP [Compute Engine, App Engine, Firestore]</li>
                <li>Google App Script / Google Spread Sheet</li>
              </ul>
            </div>
          </div>
          <h2>Windowsメモ帳のような機能のメモ帳ウェブアプリ</h2>
          <div className="sample-view">
            <h3 className="sample-view-title">{/* イメージ */}</h3>
            <div className="sample-view-content">
              <div className="sample-works-image">{/* Image Tag */}</div>
              <div className="sample-works-description">
                {/* <a
                  className="sample-works-a"
                  href="http://sharkbrown.html.xdomain.jp/panmryofficial/"
                  target="_blank"
                ></a> */}
                <p>
                  File APIのほか、FileSystemAccessAPIのような、
                  主にGoogleChromeで動作するメモ帳ウェブアプリを作成できます。
                  もちろんファイルは編集でき、それをローカルに出し入れしたり、
                  それに付随して、内容を暗号化するなどの機能も作成できます。
                  暗号化には、暗号の基本的な知識と、バイナリの取り扱いなどの、
                  ローレベルな技術が含まれます。
                </p>
              </div>
            </div>
          </div>
          <div className="tech-for-sample">
            <div>
              <h3>使った経験のある主な技術</h3>
              <ul>
                <li>File API, File System Access API</li>
                <li>Crypto API</li>
                <li>Node Express</li>
              </ul>
            </div>
            <div>
              <h3>サーバー構築</h3>
              <ul>
                <li>ウェブサーバー [Apache 2, Express]</li>
                <li>メールサーバー [Postfix, Dovecot]</li>
              </ul>
            </div>
          </div>
          
        </section>
        <section id="myskill">
          <h1>スキル(上記のまとめ)</h1>
          <h2>JS系</h2>
          <ul>
            <li>Next.js</li>
            <li>Gatsby</li>
            <li>Node.js</li>
            <li>Node Express</li>
          </ul>
          <h2>その他</h2>
          <ul>
            <li>SCSS</li>
            <li>PHP (ベタ打ち)</li>
            <li>Crypto API, File API, File System API, File System Access API</li>
          </ul>
          <h2>プラットフォーム</h2>
          <ul>
            <li>GCP [Compute Engine, App Engine, Firestore]</li>
            <li>Google App Script / Google Spread Sheet</li>
            <li>ESLint</li>
            <li>Apache 2</li>
            <li>Postfix</li>
            <li>Dovecot</li>
            <li>Docker</li>
          </ul>
        </section>
        <section id="myworks">
          <h1>ウェブリンク</h1>
          <p>
            <a
              href="https://github.com/bbsfish"
              target="_blank"
              >GitHub - bbsfish</a>
          </p>
          <p>
            <a
              href="https://zenn.dev/bbsfish"
              target="_blank"
              >Zenn - bbsfish</a>
          </p>
        </section>
      </main>
    </div>
  );
}
