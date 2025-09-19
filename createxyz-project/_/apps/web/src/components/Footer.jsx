"use client";

import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <div className="text-white font-bold text-xl mb-4">FitAI</div>
            <p
              className="text-gray-300 text-[14px] leading-relaxed mb-4"
              style={{ fontFamily: "Noto Sans JP, sans-serif" }}
            >
              山梨県を中心に、小規模事業者から中小企業まで、AI技術を活用した業務効率化とDX推進をサポートしています。
            </p>
            <div className="flex items-center gap-2 text-gray-300 text-[14px]">
              <MapPin size={16} />
              <span style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                山梨県甲府市
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white font-semibold text-[16px] mb-4"
              style={{ fontFamily: "Noto Sans JP, sans-serif" }}
            >
              サービス
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#services"
                  className="text-gray-300 text-[14px] hover:text-white transition-colors"
                  style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                >
                  AIコンサルティング
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-gray-300 text-[14px] hover:text-white transition-colors"
                  style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                >
                  AIエージェント開発
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-gray-300 text-[14px] hover:text-white transition-colors"
                  style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                >
                  デジタルサイネージ
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-gray-300 text-[14px] hover:text-white transition-colors"
                  style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                >
                  研修・人材育成
                </a>
              </li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4
              className="text-white font-semibold text-[16px] mb-4"
              style={{ fontFamily: "Noto Sans JP, sans-serif" }}
            >
              サイトマップ
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#vision"
                  className="text-gray-300 text-[14px] hover:text-white transition-colors"
                  style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                >
                  ビジョン
                </a>
              </li>
              <li>
                <a
                  href="/#cases"
                  className="text-gray-300 text-[14px] hover:text-white transition-colors"
                  style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                >
                  導入事例
                </a>
              </li>
              <li>
                <a
                  href="/news"
                  className="text-gray-300 text-[14px] hover:text-white transition-colors"
                  style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                >
                  お知らせ
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-gray-300 text-[14px] hover:text-white transition-colors"
                  style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                >
                  プライバシーポリシー
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white font-semibold text-[16px] mb-4"
              style={{ fontFamily: "Noto Sans JP, sans-serif" }}
            >
              お問い合わせ
            </h4>
            <div className="space-y-3">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSftWe0Dfm2G4QACDT1VJEiqBlGWS16JuJpUiGiRULsLexX4vA/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 text-[14px] hover:text-white transition-colors"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                こちら
              </a>
              <a
                href="tel:070-9194-4512"
                className="flex items-center gap-2 text-gray-300 text-[14px] hover:text-white transition-colors"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                <Phone size={16} />
                <span>070-9194-4512</span>
              </a>
            </div>

            {/* Business hours */}
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p
                className="text-gray-400 text-[13px]"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                営業時間：平日 9:00-18:00
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-gray-400 text-[14px]"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          >
            © 2024 FitAI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-gray-400 text-[14px] hover:text-white transition-colors"
              style={{ fontFamily: "Noto Sans JP, sans-serif" }}
            >
              プライバシーポリシー
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
