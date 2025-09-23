import { Clock, Sparkles, Camera, Utensils, Music } from "lucide-react";

export const DayProgram = () => {
  const events = [
    {
      time: "14:00",
      title: "Сбор гостей",
      description: "Встреча и регистрация гостей в ресторане",
      icon: Clock,
      color: "from-pink-400 to-rose-400",
    },
    {
      time: "14:30",
      title: "Церемония",
      description: "Торжественная церемония бракосочетания",
      icon: Sparkles,
      color: "from-amber-400 to-yellow-400",
    },
    {
      time: "15:30",
      title: "Фотосессия",
      description: "Групповые и индивидуальные фотографии",
      icon: Camera,
      color: "from-purple-400 to-pink-400",
    },
    {
      time: "16:30",
      title: "Банкет",
      description: "Торжественный ужин и поздравления",
      icon: Utensils,
      color: "from-green-400 to-emerald-400",
    },
    {
      time: "19:00",
      title: "Танцы",
      description: "Музыкальная программа и танцы до утра",
      icon: Music,
      color: "from-indigo-400 to-purple-400",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Clock className="w-12 h-12 text-pink-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Программа дня
          </h2>
          <p className="text-xl text-gray-600">
            Расписание торжественных событий
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-300 via-amber-300 to-purple-300 transform md:-translate-x-0.5"></div>

          <div className="space-y-8">
            {events.map((event, index) => {
              const Icon = event.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white rounded-full border-4 border-pink-400 transform -translate-x-2 md:-translate-x-2 shadow-lg z-10"></div>

                  {/* Event card */}
                  <div
                    className={`flex-1 ml-20 md:ml-0 ${
                      isLeft ? "md:pr-8 md:text-right" : "md:pl-8"
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-xl border border-pink-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                      <div
                        className={`flex items-center space-x-3 mb-3 ${
                          isLeft ? "md:justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`p-3 rounded-full bg-gradient-to-br ${event.color} shadow-lg`}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-gray-800">
                          {event.time}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
