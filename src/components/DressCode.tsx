import { Palette, Check, X } from "lucide-react";

export const DressCode = () => {
  const allowedColors = [
    { name: "Пудрово-розовый", color: "#F8BBD9", hex: "#F8BBD9" },
    { name: "Шампань", color: "#F7E7CE", hex: "#F7E7CE" },
    { name: "Золотистый", color: "#D4AF37", hex: "#D4AF37" },
    { name: "Кремовый", color: "#FFFDD0", hex: "#FFFDD0" },
    { name: "Персиковый", color: "#FFCBA4", hex: "#FFCBA4" },
    { name: "Лавандовый", color: "#E6E6FA", hex: "#E6E6FA" },
  ];

  const avoidColors = [
    { name: "Белый", color: "#FFFFFF", hex: "#FFFFFF" },
    { name: "Кремово-белый", color: "#FFFEF7", hex: "#FFFEF7" },
    { name: "Черный", color: "#000000", hex: "#000000" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Palette className="w-12 h-12 text-purple-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Дресс-код
          </h2>
          <p className="text-xl text-gray-600">
            Цвета для гармоничных фотографий
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Рекомендуемые цвета */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-green-500 rounded-full">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Рекомендуемые цвета
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {allowedColors.map((color, index) => (
                <div key={index} className="group cursor-pointer">
                  <div
                    className="w-full h-20 rounded-2xl shadow-lg border-2 border-white group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundColor: color.color }}
                  ></div>
                  <div className="mt-3 text-center">
                    <p className="font-medium text-gray-800 text-sm">
                      {color.name}
                    </p>
                    <p className="text-xs text-gray-500">{color.hex}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-white rounded-xl border border-green-200">
              <p className="text-sm text-gray-600 leading-relaxed">
                Эти нежные пастельные тона создадут гармоничную палитру на
                фотографиях и подчеркнут романтическую атмосферу торжества.
              </p>
            </div>
          </div>

          {/* Цвета, которых стоит избегать */}
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8 border border-red-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-red-500 rounded-full">
                <X className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Избегайте этих цветов
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {avoidColors.map((color, index) => (
                <div key={index} className="group">
                  <div className="flex items-center space-x-4">
                    <div
                      className="w-16 h-16 rounded-xl shadow-lg border-2 border-gray-300"
                      style={{ backgroundColor: color.color }}
                    ></div>
                    <div>
                      <p className="font-medium text-gray-800">{color.name}</p>
                      <p className="text-sm text-gray-500">{color.hex}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-white rounded-xl border border-red-200">
              <p className="text-sm text-gray-600 leading-relaxed">
                Пожалуйста, избегайте белого и кремово-белого (цвета невесты) и
                черного для создания светлой праздничной атмосферы.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-6 max-w-2xl mx-auto border border-pink-200">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              Дополнительные рекомендации
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Торжественный стиль приветствуется. Дамам рекомендуются платья или
              элегантные костюмы, мужчинам — костюмы или смарт-кэжуал. Будет
              прохладно, возьмите легкие пиджаки или накидки.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
