import Image from "next/image";

export default function Keyvisual() {
  return (
    <div id="top-kv">
      <div className="profile-image-container">
        <Image
          src="/me.png"
          width={200}
          height={200}
          alt="プロフィール写真"
          className="profile-image"
          ></Image>
      </div>
      <div className="profile-hello">
        <p>こんにちは</p>
        <p>細田佳希のポートフォリオです</p>
      </div>
    </div>
  );
}