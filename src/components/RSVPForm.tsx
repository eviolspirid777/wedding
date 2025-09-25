import { CheckCircle, Send, User, Wine, MessageCircle } from "lucide-react";
import { useState } from "react";

export const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    attending: "",
    guests: "1",
    alcoholPreference: "",
    dietaryRestrictions: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="py-16 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-green-100">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-green-500 rounded-full">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-serif text-gray-800 mb-4">
              Спасибо за ответ!
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ваша заявка принята. Мы очень рады, что вы разделите с нами этот
              особенный день. До встречи на свадьбе!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-16 bg-gradient-to-b from-white to-pink-50">
      <div>
        {/*Right */}
        <div className="absolute bottom-215 right-30 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 form-hidden">
          🍂
        </div>
        <div className="absolute bottom-185 right-60 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 form-hidden">
          🍂
        </div>
        <div className="absolute bottom-155 right-30 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 form-hidden">
          🍂
        </div>
        <div className="absolute bottom-125 right-60 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 form-hidden">
          🍂
        </div>
        <div className="absolute bottom-95 right-30 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 form-hidden">
          🍂
        </div>
        <div className="absolute bottom-65 right-60 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 form-hidden">
          🍂
        </div>
        <div className="absolute bottom-35 right-30 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 form-hidden">
          🍂
        </div>
        {/*Left */}
        <div className="absolute bottom-215 left-30 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 form-hidden">
          🍂
        </div>
        <div className="absolute bottom-185 left-60 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 form-hidden">
          🍂
        </div>
        <div className="absolute bottom-155 left-30 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 form-hidden">
          🍂
        </div>
        <div className="absolute bottom-125 left-60 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 form-hidden">
          🍂
        </div>
        <div className="absolute bottom-95 left-30 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 form-hidden">
          🍂
        </div>
        <div className="absolute bottom-65 left-60 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 form-hidden">
          🍂
        </div>
        <div className="absolute bottom-35 left-30 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 form-hidden">
          🍂
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Send className="w-12 h-12 text-pink-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Подтверждение присутствия
          </h2>
          <p className="text-xl text-gray-600">
            Пожалуйста, заполните форму до 1 августа
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-2xl p-8 border border-pink-100"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Имя */}
            <div className="md:col-span-2">
              <label className="flex items-center space-x-2 text-gray-700 font-medium mb-3">
                <User className="w-5 h-5 text-pink-400" />
                <span>Ваше имя *</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300"
                placeholder="Введите ваше полное имя"
              />
            </div>

            {/* Присутствие */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">
                Сможете ли присутствовать? *
              </label>
              <select
                name="attending"
                required
                value={formData.attending}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300"
              >
                <option value="">Выберите ответ</option>
                <option value="yes">Да, обязательно приду!</option>
                <option value="no">К сожалению, не смогу</option>
                <option value="maybe">Пока не уверен(а)</option>
              </select>
            </div>

            {/* Количество гостей */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">
                Количество гостей
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300"
              >
                <option value="1">1 (только я)</option>
                <option value="2">2 (я + спутник/ца)</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            {/* Предпочтения по алкоголю */}
            <div className="md:col-span-2">
              <label className="flex items-center space-x-2 text-gray-700 font-medium mb-3">
                <Wine className="w-5 h-5 text-purple-400" />
                <span>Предпочтения по алкоголю</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "Вино красное",
                  "Вино белое",
                  "Шампанское",
                  "Крепкий алкоголь",
                  "Пиво",
                  "Безалкогольные напитки",
                  "Не употребляю",
                ].map((option) => (
                  <label
                    key={option}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="alcoholPreference"
                      value={option}
                      checked={formData.alcoholPreference === option}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-pink-400 focus:ring-pink-300"
                    />
                    <span className="text-sm text-gray-600">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Пищевые ограничения */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-3">
                Особенности питания или аллергии
              </label>
              <input
                type="text"
                name="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300"
                placeholder="Например: вегетарианство, аллергия на орехи..."
              />
            </div>

            {/* Сообщение */}
            <div className="md:col-span-2">
              <label className="flex items-center space-x-2 text-gray-700 font-medium mb-3">
                <MessageCircle className="w-5 h-5 text-blue-400" />
                <span>Пожелания молодоженам</span>
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Ваши теплые пожелания и слова поддержки..."
              ></textarea>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              type="submit"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Send className="w-5 h-5" />
              <span>Отправить подтверждение</span>
            </button>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            Пожалуйста, подтвердите присутствие до 20 октября 2025 года
          </div>
        </form>
      </div>
    </section>
  );
};
