import {
  Bot,
  MonitorSpeaker,
  GraduationCap,
  MessageSquare,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Bot,
      title: "AIコンサルティング",
      description:
        "業務分析からAI導入まで、専門家がトータルサポート。現場に最適なAIソリューションをご提案します。",
      features: ["業務分析", "AI戦略策定", "導入支援", "効果測定"],
    },
    {
      icon: MessageSquare,
      title: "AIエージェント開発",
      description:
        "チャットボットから自動応答システムまで、お客様専用のAIエージェントを開発・運用します。",
      features: ["チャットボット", "自動応答", "顧客対応", "予約管理"],
    },
    {
      icon: MonitorSpeaker,
      title: "デジタルサイネージ",
      description:
        "AI技術を活用したインタラクティブなデジタルサイネージで、効果的な情報発信をサポートします。",
      features: ["コンテンツ管理", "リアルタイム更新", "来店促進", "情報配信"],
    },
    {
      icon: GraduationCap,
      title: "研修・人材育成",
      description:
        "AI時代に対応するためのスキルアップ研修や、DX推進のための人材育成プログラムを提供します。",
      features: ["AI基礎研修", "DX推進", "スキルアップ", "継続サポート"],
    },
  ];

  return (
    <section id="services" className="bg-gray-50 py-20 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            className="text-[40px] md:text-[56px] leading-[1.1] font-bold text-black mb-6"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          >
            サービス
          </h2>
          <p
            className="text-[18px] md:text-[20px] text-gray-600 max-w-[600px] mx-auto"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          >
            あらゆる業種の課題を解決する
            <br />
            4つのAIソリューション
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent
                      size={32}
                      className="text-blue-600 group-hover:text-white transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-[20px] font-bold text-black mb-4"
                  style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[14px] text-gray-600 leading-relaxed mb-6"
                  style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                >
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-[13px] text-gray-500 flex items-center"
                      style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                    >
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p
            className="text-[16px] text-gray-600 mb-6"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          >
            詳しいサービス内容についてはお気軽にご相談ください
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-[16px] font-medium transition-all duration-200 hover:shadow-lg"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          >
            サービス詳細を相談する
          </a>
        </div>
      </div>
    </section>
  );
}
