"use client";

export default function CEOMessage() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2
            className="text-[32px] md:text-[40px] font-bold text-black mb-4"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          >
            代表挨拶
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* CEO message content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Photo - smaller size */}
          <div className="order-2 lg:order-1 lg:col-span-1">
            <div className="relative max-w-[300px] mx-auto lg:mx-0">
              <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden">
                {/* CEO photo */}
                <img
                  src="https://ucarecdn.com/6994f564-dc51-4f69-9cda-f5157af36e29/-/format/auto/"
                  alt="今村龍太郎 代表"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Name plate */}
              <div className="absolute -bottom-4 left-4 bg-white shadow-lg rounded-lg px-4 py-2">
                <p
                  className="text-[16px] font-bold text-black"
                  style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                >
                  今村龍太郎
                </p>
                <p
                  className="text-[12px] text-gray-600"
                  style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                >
                  FitAI 代表
                </p>
              </div>
            </div>
          </div>

          {/* Message text - expanded to fill more space */}
          <div className="order-1 lg:order-2 lg:col-span-2">
            <div className="space-y-6">
              <p
                className="text-[16px] md:text-[18px] leading-relaxed text-gray-800"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                FitAI代表の今村龍太郎です。
              </p>

              <p
                className="text-[16px] md:text-[18px] leading-relaxed text-gray-800"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                私たちFitAIは、地域の中小企業や小規模事業者に向けて、AIを活用した業務効率化と新たな価値創出を支援しています。
              </p>

              <p
                className="text-[16px] md:text-[18px] leading-relaxed text-gray-800"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                AI活用のニーズは年々高まっていますが、実際には「導入コストが高い」「専門知識が必要」「何から始めればよいか分からない」といった声が多く聞かれます。
              </p>

              <p
                className="text-[16px] md:text-[18px] leading-relaxed text-gray-800"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                そこで私たちは、現場に即した課題整理から、実装・運用・人材育成までを
                <span className="font-bold text-blue-600">
                  ワンストップで伴走するパートナー
                </span>
                でありたいと考えています。
              </p>

              <p
                className="text-[16px] md:text-[18px] leading-relaxed text-gray-800"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                特に、地域を支える産業に焦点を当て、
                <span className="font-bold text-blue-600">
                  小規模でもすぐに導入できるスモールスタート型のAI活用
                </span>
                を推進しています。
              </p>

              <p
                className="text-[16px] md:text-[18px] leading-relaxed text-gray-800"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                補助金の活用やLINEなど身近なツールとの連携にも対応し、現場で「すぐに使える」「効果が見える」形を提供します。
              </p>

              <p
                className="text-[16px] md:text-[18px] leading-relaxed text-gray-800"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                山梨を拠点に、地域に根ざした信頼関係を築きながら、全国の中小企業のAI活用モデルとなることを目指します。
              </p>

              <p
                className="text-[16px] md:text-[18px] leading-relaxed text-gray-800 font-medium"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                ぜひ、貴社の次の成長を一緒にデザインさせてください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
