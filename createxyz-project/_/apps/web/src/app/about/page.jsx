import Header from "../../components/Header";
import CEOMessage from "../../components/CEOMessage";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Page title */}
      <section className="pt-32 pb-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1
            className="text-[40px] md:text-[56px] font-bold text-black leading-tight"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          >
            会社案内
          </h1>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>
      </section>

      {/* CEO Message */}
      <CEOMessage />

      {/* Company Information */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-16">
            <h2
              className="text-[32px] md:text-[40px] font-bold text-black mb-4"
              style={{ fontFamily: "Noto Sans JP, sans-serif" }}
            >
              会社概要
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* Company details */}
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start border-b border-gray-100 pb-6">
                <div className="md:col-span-1">
                  <h3
                    className="text-[18px] font-semibold text-black"
                    style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                  >
                    会社名
                  </h3>
                </div>
                <div className="md:col-span-2">
                  <p
                    className="text-[16px] text-gray-700"
                    style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                  >
                    FitAI（フィットエーアイ）
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start border-b border-gray-100 pb-6">
                <div className="md:col-span-1">
                  <h3
                    className="text-[18px] font-semibold text-black"
                    style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                  >
                    代表者
                  </h3>
                </div>
                <div className="md:col-span-2">
                  <p
                    className="text-[16px] text-gray-700"
                    style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                  >
                    今村龍太郎
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start border-b border-gray-100 pb-6">
                <div className="md:col-span-1">
                  <h3
                    className="text-[18px] font-semibold text-black"
                    style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                  >
                    事業内容
                  </h3>
                </div>
                <div className="md:col-span-2">
                  <div
                    className="text-[16px] text-gray-700 space-y-2"
                    style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                  >
                    <p>・AIコンサルティング</p>
                    <p>・AIエージェント開発</p>
                    <p>・デジタルサイネージソリューション</p>
                    <p>・AI活用研修・人材育成</p>
                    <p>・DX推進支援</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start border-b border-gray-100 pb-6">
                <div className="md:col-span-1">
                  <h3
                    className="text-[18px] font-semibold text-black"
                    style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                  >
                    設立
                  </h3>
                </div>
                <div className="md:col-span-2">
                  <p
                    className="text-[16px] text-gray-700"
                    style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                  >
                    2024年
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="md:col-span-1">
                  <h3
                    className="text-[18px] font-semibold text-black"
                    style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                  >
                    主要取引先
                  </h3>
                </div>
                <div className="md:col-span-2">
                  <p
                    className="text-[16px] text-gray-700"
                    style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                  >
                    山梨県内の小規模事業者・中小企業
                    <br />
                    飲食店、美容室、士業、運送業、建設業、製造業など
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-16">
            <h2
              className="text-[32px] md:text-[40px] font-bold text-black mb-4"
              style={{ fontFamily: "Noto Sans JP, sans-serif" }}
            >
              私たちの価値観
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                </svg>
              </div>
              <h3
                className="text-[20px] font-bold text-black mb-4"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                信頼性
              </h3>
              <p
                className="text-[16px] text-gray-600 leading-relaxed"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                確実で安心できるAIソリューションを提供し、お客様との長期的な信頼関係を築きます。
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3
                className="text-[20px] font-bold text-black mb-4"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                品質重視
              </h3>
              <p
                className="text-[16px] text-gray-600 leading-relaxed"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                妥協のない品質管理により、実用性と効果を兼ね備えたAIツールをお届けします。
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3
                className="text-[20px] font-bold text-black mb-4"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                地域密着
              </h3>
              <p
                className="text-[16px] text-gray-600 leading-relaxed"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                地域の特性と課題を深く理解し、地域に根ざしたAI活用を推進します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
