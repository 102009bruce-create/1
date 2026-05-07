import { motion } from "motion/react";

export default function About() {
  return (
    <section className="py-24 px-6 md:px-10 border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="sticky top-24">
            <h2 className="text-[10px] uppercase tracking-[2px] text-accent mb-4 block">
              The Story
            </h2>
            <h3 className="text-[40px] md:text-[50px] leading-[0.9] font-black tracking-[-2px] mb-6">
              從設計師到<br />AI 工程師的旅程
            </h3>
          </div>
        </div>
        
        <div className="lg:col-span-8 space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="text-[10px] uppercase tracking-[2px] text-muted shrink-0 w-24 pt-1">
                // 起點
              </div>
              <div>
                <h4 className="text-[18px] font-bold mb-4 text-white">我怎麼走到這裡？</h4>
                <p className="font-serif leading-[1.6] text-[15px] text-[#CCC]">
                  我原本是一名 UI/UX 設計師，每天在 Figma 裡推敲像素。但我發現，最完美的介面如果沒有聰明的靈魂，終究只是個漂亮的空殼。當生成式 AI 爆發時，我意識到這就是我一直在尋找的「靈魂」。我開始自學程式，從 Python 到 React，將設計思維與 AI 技術結合，成為能獨立交付產品的開發者。
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="text-[10px] uppercase tracking-[2px] text-muted shrink-0 w-24 pt-1">
                // 使命
              </div>
              <div>
                <h4 className="text-[18px] font-bold mb-4 text-white">我在解什麼問題？</h4>
                <p className="font-serif leading-[1.6] text-[15px] text-[#CCC]">
                  現在的科技充滿了「冷冰冰的效率」。我致力於解決「人機互動的溫度」問題。無論是幫助閱讀障礙兒童的 AI 家教，還是讓非技術人員也能輕鬆使用的自動化工具，我的目標是降低技術門檻，讓 AI 真正服務於人的需求，而不只是炫技。
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="text-[10px] uppercase tracking-[2px] text-muted shrink-0 w-24 pt-1">
                // 未來
              </div>
              <div>
                <h4 className="text-[18px] font-bold mb-4 text-white">我未來想做什麼？</h4>
                <p className="font-serif leading-[1.6] text-[15px] text-[#CCC]">
                  我希望加入一個重視使用者體驗與技術創新的團隊，擔任 AI 產品經理或全端工程師。我渴望打造出下一個百萬人使用的 AI 產品，讓科技不再是少數人的特權，而是每個人日常生活的得力助手。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
