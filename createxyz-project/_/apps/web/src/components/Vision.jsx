export default function Vision() {
  return (
    <section
      id="vision"
      className="bg-white py-20 md:py-24 px-6 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: -1 }}
      >
        {/* Subtle geometric shapes */}
        <div className="absolute top-20 right-10 w-24 h-24 border border-blue-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-gray-100 rounded-lg opacity-40"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Short CEO Message for Top Page */}
        <div className="text-center mb-20">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-[32px] md:text-[48px] font-bold text-black mb-6 leading-tight"
              style={{ fontFamily: "Noto Sans JP, sans-serif" }}
            >
              「AIを、あなたの現場にフィットさせる。」
            </h2>
            <p
              className="text-[18px] md:text-[22px] text-gray-700 leading-relaxed font-medium"
              style={{ fontFamily: "Noto Sans JP, sans-serif" }}
            >
              FitAIは、中小企業の課題を解決する伴走型AIパートナーです。
            </p>
          </div>
        </div>

        {/* Section header */}
        <div className="text-center mb-16">
          <h3
            className="text-[40px] md:text-[56px] leading-[1.1] font-bold text-black mb-6"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          >
            ビジョン
          </h3>
        </div>

        {/* Vision content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Text content */}
          <div>
            {/* Vision statement */}
            <div className="mb-12">
              <h3
                className="text-[24px] md:text-[28px] font-bold text-black mb-6 relative"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                Vision
                <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-blue-500"></div>
              </h3>
              <p
                className="text-[18px] md:text-[20px] text-gray-700 leading-relaxed"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                小さな会社でもAIを使いこなす
                <br />
                未来を山梨から
              </p>
            </div>

            {/* Mission statement */}
            <div>
              <h3
                className="text-[24px] md:text-[28px] font-bold text-black mb-6 relative"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                Mission
                <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-blue-500"></div>
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4
                      className="text-[18px] font-semibold text-black mb-2"
                      style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                    >
                      誰でも使えるAI
                    </h4>
                    <p
                      className="text-[16px] text-gray-600 leading-relaxed"
                      style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                    >
                      専門知識がなくても、直感的に操作できるAIツールを提供し、すべての事業者がAIの恩恵を受けられる環境を作ります。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4
                      className="text-[18px] font-semibold text-black mb-2"
                      style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                    >
                      現場起点
                    </h4>
                    <p
                      className="text-[16px] text-gray-600 leading-relaxed"
                      style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                    >
                      現場の課題を深く理解し、実際の業務に即したAIソリューションを設計・開発します。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4
                      className="text-[18px] font-semibold text-black mb-2"
                      style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                    >
                      地域伴走
                    </h4>
                    <p
                      className="text-[16px] text-gray-600 leading-relaxed"
                      style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                    >
                      山梨県を中心とした地域企業と長期的なパートナーシップを築き、継続的な成長をサポートします。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Visual element */}
          <div className="relative">
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <pattern
                      id="grid"
                      width="10"
                      height="10"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 10 0 L 0 0 0 10"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#grid)" />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg
                    className="w-12 h-12 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
                <h4
                  className="text-[20px] font-bold text-black mb-4"
                  style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                >
                  信頼・安心のサポート
                </h4>
                <p
                  className="text-[16px] text-gray-600 leading-relaxed"
                  style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                >
                  導入前の相談から運用後のメンテナンスまで、
                  <br />
                  一貫したサポート体制で安心をお届けします
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
