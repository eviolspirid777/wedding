import { Sparkles, Heart } from "lucide-react";

export const WeddingInvitation = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-amber-50 flex items-center justify-center py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-4">
              <Sparkles className="w-8 h-8 text-amber-400 animate-pulse" />
              <Heart className="w-10 h-10 text-pink-400 animate-bounce" />
              <Sparkles className="w-8 h-8 text-amber-400 animate-pulse" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-serif text-gray-800 mb-4 tracking-wide">
            Наталья & Александр
          </h1>

          <div className="w-32 h-1 bg-gradient-to-r from-pink-300 to-amber-300 mx-auto mb-8 rounded-full"></div>

          <p className="text-xl md:text-2xl text-gray-600 font-light mb-8 leading-relaxed">
            Приглашаем вас разделить с нами
            <br />
            самый счастливый день в нашей жизни
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-pink-100">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
              Свадебное торжество
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Мы с радостью ждем вас на нашей свадьбе!
              <br />
              Ваше присутствие сделает этот день еще более особенным
              <br />и подарит нам незабываемые воспоминания.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
