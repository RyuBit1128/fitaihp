import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="text-[40px] md:text-[48px] font-bold text-black mb-12 text-center"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          >
            プライバシーポリシー
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 
                className="text-[24px] md:text-[28px] font-bold text-black mb-4 border-b-2 border-blue-500 pb-2"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                第1条（基本方針）
              </h2>
              <p 
                className="text-[16px] md:text-[18px] text-gray-700 leading-relaxed"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                FitAI（以下「当事業」といいます）は、個人情報の重要性を認識し、個人情報の保護に関する法律その他関連法令を遵守するとともに、適切な管理と利用を行います。
              </p>
            </section>

            <section className="mb-8">
              <h2 
                className="text-[24px] md:text-[28px] font-bold text-black mb-4 border-b-2 border-blue-500 pb-2"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                第2条（個人情報の定義）
              </h2>
              <p 
                className="text-[16px] md:text-[18px] text-gray-700 leading-relaxed"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                本ポリシーにおける「個人情報」とは、氏名、会社名、住所、電話番号、メールアドレスなど、特定の個人を識別できる情報を指します。
              </p>
            </section>

            <section className="mb-8">
              <h2 
                className="text-[24px] md:text-[28px] font-bold text-black mb-4 border-b-2 border-blue-500 pb-2"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                第3条（取得する情報と利用目的）
              </h2>
              <p 
                className="text-[16px] md:text-[18px] text-gray-700 leading-relaxed mb-4"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                当事業は、お客様からご提供いただいた個人情報を以下の目的で利用します。
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li 
                  className="text-[16px] md:text-[18px] text-gray-700 leading-relaxed"
                  style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                >
                  お問い合わせや無料相談への対応
                </li>
                <li 
                  className="text-[16px] md:text-[18px] text-gray-700 leading-relaxed"
                  style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                >
                  サービスの提供およびご案内
                </li>
                <li 
                  className="text-[16px] md:text-[18px] text-gray-700 leading-relaxed"
                  style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                >
                  セミナー・イベント等のご案内や運営管理
                </li>
                <li 
                  className="text-[16px] md:text-[18px] text-gray-700 leading-relaxed"
                  style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                >
                  サービス改善や新サービス開発のための分析
                </li>
                <li 
                  className="text-[16px] md:text-[18px] text-gray-700 leading-relaxed"
                  style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                >
                  法令等に基づく必要な対応
                </li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 
                className="text-[24px] md:text-[28px] font-bold text-black mb-4 border-b-2 border-blue-500 pb-2"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                第4条（個人情報の管理）
              </h2>
              <p 
                className="text-[16px] md:text-[18px] text-gray-700 leading-relaxed"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                当事業は、取得した個人情報を正確かつ最新の状態に保つよう努め、不正アクセス・改ざん・漏洩・滅失等を防止するため、適切な安全管理措置を講じます。
              </p>
            </section>

            <section className="mb-8">
              <h2 
                className="text-[24px] md:text-[28px] font-bold text-black mb-4 border-b-2 border-blue-500 pb-2"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                第5条（第三者提供の制限）
              </h2>
              <p 
                className="text-[16px] md:text-[18px] text-gray-700 leading-relaxed"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                当事業は、あらかじめお客様の同意を得た場合、または法令に基づく場合を除き、個人情報を第三者に提供することはありません。
              </p>
            </section>

            <section className="mb-8">
              <h2 
                className="text-[24px] md:text-[28px] font-bold text-black mb-4 border-b-2 border-blue-500 pb-2"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                第6条（業務委託先の監督）
              </h2>
              <p 
                className="text-[16px] md:text-[18px] text-gray-700 leading-relaxed"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                当事業は、業務遂行のために個人情報の取扱いを外部に委託する場合、委託先に対して適切な監督を行います。
              </p>
            </section>

            <section className="mb-8">
              <h2 
                className="text-[24px] md:text-[28px] font-bold text-black mb-4 border-b-2 border-blue-500 pb-2"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                第7条（個人情報の開示・訂正・削除）
              </h2>
              <p 
                className="text-[16px] md:text-[18px] text-gray-700 leading-relaxed"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                お客様ご本人から個人情報の開示・訂正・利用停止・削除のご要望があった場合には、本人確認のうえ速やかに対応いたします。
              </p>
            </section>

            <section className="mb-8">
              <h2 
                className="text-[24px] md:text-[28px] font-bold text-black mb-4 border-b-2 border-blue-500 pb-2"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                第8条（アクセス解析ツールの利用）
              </h2>
              <p 
                className="text-[16px] md:text-[18px] text-gray-700 leading-relaxed"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                当事業のウェブサイトでは、利用状況を把握するためにGoogleアナリティクス等の解析ツールを利用する場合があります。これらのツールはクッキーを使用して匿名のデータを収集しますが、個人を特定するものではありません。
              </p>
            </section>

            <section className="mb-8">
              <h2 
                className="text-[24px] md:text-[28px] font-bold text-black mb-4 border-b-2 border-blue-500 pb-2"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                第9条（法令遵守と見直し）
              </h2>
              <p 
                className="text-[16px] md:text-[18px] text-gray-700 leading-relaxed"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                当事業は、個人情報に関して適用される法令や規範を遵守するとともに、本ポリシーの内容を適宜見直し、改善に努めます。
              </p>
            </section>

            <section className="mb-8">
              <h2 
                className="text-[24px] md:text-[28px] font-bold text-black mb-4 border-b-2 border-blue-500 pb-2"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                第10条（お問い合わせ窓口）
              </h2>
              <p 
                className="text-[16px] md:text-[18px] text-gray-700 leading-relaxed"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                本ポリシーに関するお問い合わせは、
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSftWe0Dfm2G4QACDT1VJEiqBlGWS16JuJpUiGiRULsLexX4vA/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  「問い合わせ」
                </a>
                フォームからご連絡ください。
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}