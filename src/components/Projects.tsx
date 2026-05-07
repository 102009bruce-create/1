import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01 / EDUCATION",
    title: "AI Tutor for Dyslexia",
    problem: "閱讀障礙兒童在傳統教育系統中容易感到挫折，缺乏即時且個人化的引導。",
    solution: "開發基於 Gemini API 的互動式繪本 App，根據兒童閱讀速度與情緒動態調整難度。",
    result: "平均閱讀時間提升 40%，挫折感降低 60%",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2622&auto=format&fit=crop"
  },
  {
    id: "02 / PRODUCT",
    title: "Vibe Coding Assistant",
    problem: "設計師與非技術人員想嘗試寫程式，但常被繁瑣的環境設定與報錯訊息勸退。",
    solution: "打造「自然語言轉 UI」網頁工具。使用者描述 Vibe，系統自動生成 Tailwind CSS 與 React 元件。",
    result: "首月獲 1萬+ 次生成，助 500+ 設計師完成原型",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop"
  }
];

export default function Projects() {
  return (
    <section className="py-24 px-6 md:px-10 border-t border-border">
      <div className="mb-16">
        <span className="text-[10px] uppercase tracking-[2px] text-accent mb-4 block">
          Case Studies / Value Propositions
        </span>
        <h3 className="text-[40px] md:text-[50px] leading-[0.9] font-black tracking-[-2px]">
          用案例說話
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="group"
          >
            <div className="bg-glass border border-border p-5 rounded h-full flex flex-col">
              <span className="text-[11px] text-muted mb-2.5 block tracking-widest">{project.id}</span>
              
              <h3 className="text-[16px] font-bold mb-3 border-b border-border pb-2 flex items-center justify-between group-hover:text-accent transition-colors">
                {project.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 -translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
              </h3>
              
              <div className="relative aspect-video mb-4 rounded overflow-hidden border border-border">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mt-auto">
                <p className="text-[13px] text-[#999] leading-[1.4] font-serif">
                  <strong>Problem:</strong> {project.problem} <br/>
                  <strong>Solution:</strong> {project.solution}
                </p>
                <span className="inline-block bg-[#2E5BFF]/10 text-accent px-1.5 py-0.5 rounded-sm text-[10px] mt-3 font-bold tracking-wider">
                  {project.result}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
