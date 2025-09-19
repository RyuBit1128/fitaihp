import { ArrowRight } from "lucide-react";

export default function CaseStudies() {
  const cases = [
    {
      title: "飲食店：予約対応の手間を削減",
      industry: "飲食業",
      description:
        "AIチャットボットにより24時間自動予約受付を実現。スタッフの負担を軽減し、機会損失を防いでいます。",
      results: [
        "予約対応時間 80%削減",
        "予約取りこぼし 95%減少",
        "顧客満足度向上",
      ],
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
    },
    {
      title: "美容室：LINE連携で顧客管理",
      industry: "美容業",
      description:
        "LINE公式アカウントとAIを連携し、予約管理と顧客フォローを自動化。リピート率の向上を実現しました。",
      results: ["予約効率 60%向上", "リピート率 25%増加", "業務時間短縮"],
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop",
    },
    {
      title: "民泊：多言語対応で稼働率向上",
      industry: "宿泊業",
      description:
        "AIチャットボットによる多言語対応で海外ゲストとの円滑なやり取りを実現。予約から滞在まで自動サポートしています。",
      results: ["稼働率 35%向上", "ゲスト満足度UP", "運営効率化"],
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section id="cases" className="bg-gray-50 py-20 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            className="text-[40px] md:text-[56px] leading-[1.1] font-bold text-black mb-6"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          >
            導入事例
          </h2>
          <p
            className="text-[18px] md:text-[20px] text-gray-600 max-w-[600px] mx-auto"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          >
            課題解決事例を通じて
            <br />
            FitAIの効果をご紹介します
          </p>
        </div>

        {/* Cases grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className="bg-blue-600 text-white px-3 py-1 rounded-full text-[12px] font-medium"
                    style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                  >
                    {caseItem.industry}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-[18px] font-bold text-black mb-3 leading-tight"
                  style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                >
                  {caseItem.title}
                </h3>
                <p
                  className="text-[14px] text-gray-600 leading-relaxed mb-4"
                  style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                >
                  {caseItem.description}
                </p>

                {/* Results */}
                <div className="space-y-2 mb-4">
                  {caseItem.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span
                        className="text-[13px] text-gray-700"
                        style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                      >
                        {result}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200 group/btn">
                  <span
                    className="text-[14px] font-medium"
                    style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                  >
                    詳細を見る
                  </span>
                  <ArrowRight
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform duration-200"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 text-center">
          <h3
            className="text-[24px] md:text-[28px] font-bold text-black mb-4"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          >
            あなたの業種でも
            <br />
            AI活用の可能性を探してみませんか？
          </h3>
          <p
            className="text-[16px] text-gray-600 mb-8 max-w-[500px] mx-auto"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          >
            業種や規模に関わらず、あらゆる企業でAI導入の機会があります。
            <br />
            まずはお気軽にご相談ください。
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-[16px] font-medium transition-all duration-200 hover:shadow-lg gap-2"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          >
            導入事例の詳細を相談する
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
