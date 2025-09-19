"use client";

import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="bg-white py-20 md:py-24 lg:py-32 px-6 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: -1 }}
      >
        {/* Left side decorative arc */}
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M60,80 Q200,120 180,300 Q160,480 120,600"
            fill="none"
            stroke="#DBEAFE"
            strokeWidth="1"
            opacity="0.6"
          />
        </svg>

        {/* Right side decorative arc */}
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M1000,200 Q1050,350 1080,500 Q1110,650 1140,720"
            fill="none"
            stroke="#DBEAFE"
            strokeWidth="1"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Content container */}
      <div className="max-w-[720px] mx-auto relative text-center">
        {/* Main headline */}
        <div className="mb-8 lg:mb-12">
          <h2
            className="font-bold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] leading-[1.1] text-black"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          >
            AI導入について
            <br />
            お気軽にご相談ください
          </h2>
        </div>

        {/* Description */}
        <div className="mb-12">
          <p
            className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed max-w-[500px] mx-auto"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          >
            無料相談では、現在の課題をお聞きし、
            <br />
            最適なAIソリューションをご提案いたします
          </p>
        </div>

        {/* Action buttons - separated into two categories */}
        <div className="space-y-12 mb-12">
          {/* 無料相談 section */}
          <div className="text-center">
            <h3
              className="text-[24px] font-bold text-black mb-4"
              style={{ fontFamily: "Noto Sans JP, sans-serif" }}
            >
              無料相談
            </h3>
            <p
              className="text-[16px] text-gray-600 mb-6"
              style={{ fontFamily: "Noto Sans JP, sans-serif" }}
            >
              AI導入についての専門的なご相談
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://calendar.app.google/EhRW49BCXFFwMsbF8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium text-[18px] px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg gap-2 min-w-[240px] justify-center"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                <span>無料相談を申し込む</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </div>

          {/* 区切り線 */}
          <div className="w-full h-px bg-gray-200"></div>

          {/* お問い合わせ section */}
          <div className="text-center">
            <h3
              className="text-[24px] font-bold text-black mb-4"
              style={{ fontFamily: "Noto Sans JP, sans-serif" }}
            >
              お問い合わせ
            </h3>
            <p
              className="text-[16px] text-gray-600 mb-6"
              style={{ fontFamily: "Noto Sans JP, sans-serif" }}
            >
              一般的なご質問やご要望について
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSftWe0Dfm2G4QACDT1VJEiqBlGWS16JuJpUiGiRULsLexX4vA/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gray-600 hover:bg-gray-700 text-white font-medium text-[18px] px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg gap-2 min-w-[240px] justify-center"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                <span>問い合わせ</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="space-y-4 text-center">
          <div>
            <p
              className="text-[14px] text-gray-500"
              style={{ fontFamily: "Noto Sans JP, sans-serif" }}
            >
              お電話でのお問い合わせ
            </p>
            <a
              href="tel:070-9194-4512"
              className="text-[18px] font-medium text-black hover:text-blue-600 transition-colors"
              style={{ fontFamily: "Noto Sans JP, sans-serif" }}
            >
              070-9194-4512
            </a>
          </div>
          <div>
            <p
              className="text-[14px] text-gray-500"
              style={{ fontFamily: "Noto Sans JP, sans-serif" }}
            >
              営業時間：平日 9:00-18:00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
