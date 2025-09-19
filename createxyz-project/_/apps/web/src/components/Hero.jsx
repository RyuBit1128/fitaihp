export default function Hero() {
  return (
    <section className="min-h-screen bg-white relative flex items-center justify-center px-6 py-20 pt-32">
      <div className="max-w-[900px] mx-auto text-center relative">
        {/* Decorative elements */}
        <div className="absolute -top-8 -right-16 hidden lg:block">
          <div className="w-2 h-2 bg-blue-500 rounded-full opacity-40"></div>
        </div>
        <div className="absolute -bottom-8 -left-12 hidden lg:block">
          <div className="w-3 h-3 bg-gray-300 rounded-full opacity-30"></div>
        </div>

        {/* Main headline */}
        <div className="mb-8 relative">
          <h1
            className="text-[48px] md:text-[72px] lg:text-[88px] leading-[0.9] font-bold text-black tracking-[-1px]"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          >
            <span className="block">地域の未来を</span>
            <span className="block relative">
              AIで変える
              {/* Decorative underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-[80%]">
                <svg className="w-full h-3" viewBox="0 0 300 12" fill="none">
                  <path
                    d="M5 8c30-4 60-2 90 0s60 2 90-1s60-3 90 1c15 2 25 3 30 2"
                    stroke="#93C5FD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.7"
                  />
                </svg>
              </div>
            </span>
          </h1>
        </div>

        {/* Sub-headline */}
        <div className="mb-12">
          <p
            className="text-[20px] md:text-[24px] font-normal text-black leading-relaxed max-w-[600px] mx-auto"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          >
            山梨からすべての企業に
            <br />
            <span className="font-semibold">"ちょうどいいAI"</span>を
          </p>
        </div>

        {/* Description */}
        <div className="mb-16">
          <p
            className="text-[16px] md:text-[18px] font-normal text-gray-600 leading-relaxed max-w-[520px] mx-auto"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          >
            小規模事業者から中小企業まで、業務効率化とDX推進を
            <br className="hidden md:block" />
            AI技術でサポートします
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-[16px] px-10 py-4 rounded-full transition-all duration-200 hover:shadow-lg min-w-[200px]"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          >
            無料相談を申し込む
          </a>
          <a
            href="#services"
            className="border-2 border-gray-300 hover:border-gray-400 text-black font-medium text-[16px] px-10 py-4 rounded-full transition-all duration-200 hover:bg-gray-50 min-w-[200px]"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          >
            サービスを見る
          </a>
        </div>
      </div>
    </section>
  );
}
