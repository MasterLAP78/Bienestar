import React from 'react';
function App() {
  const [currentScreen, setCurrentScreen] = React.useState('onboarding');
  const [consents, setConsents] = React.useState({
    analytics: false,
    notifications: false,
    gamification: false,
    ranking: false
  });
  const [mood, setMood] = React.useState(null);
  const [userName, setUserName] = React.useState('Ana');

  // Paleta de colores
  const colors = {
    primary: '#3B82F6',
    primaryHover: '#2563EB',
    wellness: '#22C55E',
    wellnessHover: '#16A34A',
    warning: '#F59E0B',
    critical: '#EF4444',
    textPrimary: '#111827',
    textSecondary: '#4B5563',
    bgBase: '#F8FAFC',
    cardBg: '#FFFFFF',
    border: '#E5E7EB'
  };

  const screens = {
    onboarding: 'Onboarding',
    home: 'Home',
    checkin: 'Check-in',
    recommendations: 'Recomendaciones',
    challenges: 'Retos',
    resources: 'Recursos',
    profile: 'Perfil'
  };

  // Componente: Botón Primario
  const PrimaryButton = ({ children, onClick, variant = 'primary', fullWidth = false }) => (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-semibold text-base transition-colors ${
        fullWidth ? 'w-full' : ''
      } ${
        variant === 'primary'
          ? 'bg-blue-500 text-white hover:bg-blue-600'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}
      style={{ minHeight: '44px' }}
    >
      {children}
    </button>
  );

  // Componente: Card
  const Card = ({ children, className = '' }) => (
    <div
      className={`bg-white rounded-2xl p-6 shadow-sm border ${className}`}
      style={{ borderColor: colors.border }}
    >
      {children}
    </div>
  );

  // Componente: Bottom Navigation
  const BottomNav = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3 px-2" style={{ borderColor: colors.border }}>
      {[
        { id: 'home', icon: '🏠', label: 'Inicio' },
        { id: 'checkin', icon: '💭', label: 'Check-in' },
        { id: 'recommendations', icon: '✨', label: 'Recomendaciones' },
        { id: 'challenges', icon: '🎯', label: 'Retos' },
        { id: 'resources', icon: '📚', label: 'Recursos' },
        { id: 'profile', icon: '👤', label: 'Perfil' }
      ].map(item => (
        <button
          key={item.id}
          onClick={() => setCurrentScreen(item.id)}
          className={`flex flex-col items-center justify-center px-2 py-1 rounded-lg transition-colors ${
            currentScreen === item.id ? 'text-blue-500' : 'text-gray-500'
          }`}
          style={{ minWidth: '44px', minHeight: '44px' }}
        >
          <span className="text-xl">{item.icon}</span>
          <span className="text-xs mt-1">{item.label}</span>
        </button>
      ))}
    </div>
  );

  // PANTALLA 1: Onboarding
  const OnboardingScreen = () => (
    <div className="min-h-screen flex flex-col items-center justify-center p-6" style={{ backgroundColor: colors.bgBase }}>
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🌱</div>
          <h1 className="text-3xl font-semibold mb-3" style={{ color: colors.textPrimary }}>
            Cuidarte es fácil y privado
          </h1>
          <p className="text-lg" style={{ color: colors.textSecondary }}>
            Tú decides.
          </p>
        </div>

        <Card className="mb-6">
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-green-500 mr-3 text-xl">✓</span>
              <p className="text-base">Check-ins de 10 segundos</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3 text-xl">✓</span>
              <p className="text-base">Micro-hábitos de 2 minutos</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3 text-xl">✓</span>
              <p className="text-base">Recursos confidenciales</p>
            </div>
          </div>
        </Card>

        <Card className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Tus preferencias</h2>
          <div className="space-y-3">
            {[
              { key: 'analytics', label: 'Analítica anónima de uso' },
              { key: 'notifications', label: 'Recordatorios (notificaciones/email)' },
              { key: 'gamification', label: 'Gamificación (puntos/badges)' },
              { key: 'ranking', label: 'Participar en ranking' }
            ].map(item => (
              <label key={item.key} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={consents[item.key]}
                  onChange={(e) => setConsents({ ...consents, [item.key]: e.target.checked })}
                  className="w-5 h-5 mr-3"
                />
                <span className="text-base">{item.label}</span>
              </label>
            ))}
          </div>
          <p className="text-sm mt-4" style={{ color: colors.textSecondary }}>
            Puedes cambiar estos permisos en Perfil cuando quieras.
          </p>
          <button className="text-blue-500 text-sm mt-2 underline">
            ¿Cómo usamos tus datos?
          </button>
        </Card>

        <div className="space-y-3">
          <PrimaryButton onClick={() => setCurrentScreen('home')} fullWidth>
            Comenzar
          </PrimaryButton>
          <PrimaryButton variant="secondary" fullWidth>
            No ahora
          </PrimaryButton>
        </div>
      </div>
    </div>
  );

  // PANTALLA 2: Home
  const HomeScreen = () => (
    <div className="min-h-screen pb-24" style={{ backgroundColor: colors.bgBase }}>
      <div className="bg-white p-6 shadow-sm">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Hola, {userName}</h1>
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
            A
          </div>
        </div>
        <p className="text-lg mt-2" style={{ color: colors.textSecondary }}>
          ¿Cómo te sientes hoy?
        </p>
      </div>

      <div className="p-6 space-y-4">
        <Card>
          <h2 className="text-lg font-semibold mb-4">Check-in rápido</h2>
          <div className="flex justify-between">
            {[
              { emoji: '😄', label: 'Muy bien', value: 5 },
              { emoji: '🙂', label: 'Bien', value: 4 },
              { emoji: '😐', label: 'Neutro', value: 3 },
              { emoji: '😕', label: 'Regular', value: 2 },
              { emoji: '😢', label: 'Mal', value: 1 }
            ].map(item => (
              <button
                key={item.value}
                onClick={() => {
                  setMood(item.value);
                  setCurrentScreen('checkin');
                }}
                className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-50 transition-colors"
                style={{ minWidth: '44px', minHeight: '44px' }}
              >
                <span className="text-3xl mb-1">{item.emoji}</span>
                <span className="text-xs text-center">{item.label}</span>
              </button>
            ))}
          </div>
        </Card>

        <Card style={{ borderLeft: `4px solid ${colors.wellness}` }}>
          <div className="flex items-start">
            <span className="text-3xl mr-3">🟢</span>
            <div>
              <h3 className="font-semibold mb-1">Tu semáforo personal</h3>
              <p className="text-sm" style={{ color: colors.textSecondary }}>
                Estás en zona verde. Sigue así, pequeños pasos cuentan.
              </p>
              <button className="text-blue-500 text-sm mt-2 underline">
                Ver recomendaciones →
              </button>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold mb-3">Progreso de la semana</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold" style={{ color: colors.wellness }}>5 días</p>
              <p className="text-sm" style={{ color: colors.textSecondary }}>Racha actual</p>
            </div>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5, 6, 7].map(day => (
                <div
                  key={day}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    day <= 5 ? 'bg-green-500 text-white' : 'bg-gray-200'
                  }`}
                >
                  {day <= 5 ? '✓' : ''}
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card style={{ backgroundColor: '#EFF6FF' }}>
          <div className="flex items-start">
            <span className="text-2xl mr-3">💡</span>
            <div className="flex-1">
              <h3 className="font-semibold mb-1">Sugerencia del día (2 min)</h3>
              <p className="text-sm mb-3">Respiración 4-4-4: inhala, sostén, exhala</p>
              <PrimaryButton>Iniciar ahora</PrimaryButton>
            </div>
          </div>
        </Card>

        <p className="text-center text-sm italic" style={{ color: colors.textSecondary }}>
          Un paso pequeño hoy vale mucho.
        </p>

        <button
          className="w-full py-3 rounded-lg font-semibold text-white"
          style={{ backgroundColor: colors.critical, minHeight: '44px' }}
        >
          🆘 ¿Necesitas ayuda ahora?
        </button>

        <p className="text-center text-xs" style={{ color: colors.textSecondary }}>
          Tus datos son privados. Siempre.
        </p>
      </div>

      <BottomNav />
    </div>
  );

  // PANTALLA 3: Check-in
  const CheckinScreen = () => (
    <div className="min-h-screen pb-24" style={{ backgroundColor: colors.bgBase }}>
      <div className="bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold">Check-in diario</h1>
      </div>

      <div className="p-6 space-y-6">
        <Card>
          <h2 className="text-xl font-semibold mb-4 text-center">¿Cómo te sientes?</h2>
          <div className="flex justify-around mb-6">
            {[
              { emoji: '😄', value: 5 },
              { emoji: '🙂', value: 4 },
              { emoji: '😐', value: 3 },
              { emoji: '😕', value: 2 },
              { emoji: '😢', value: 1 }
            ].map(item => (
              <button
                key={item.value}
                onClick={() => setMood(item.value)}
                className={`w-16 h-16 rounded-full flex items-center justify-center text-4xl transition-all ${
                  mood === item.value ? 'bg-blue-100 scale-110' : 'hover:bg-gray-50'
                }`}
              >
                {item.emoji}
              </button>
            ))}
          </div>
        </Card>

        {mood && (
          <Card>
            <h3 className="font-semibold mb-3">¿Qué te ayudaría hoy?</h3>
            <div className="grid grid-cols-2 gap-3">
              {['Foco', 'Estrés', 'Sueño', 'Ánimo', 'Ansiedad', 'Otro'].map(category => (
                <button
                  key={category}
                  className="py-3 px-4 rounded-lg border-2 hover:border-blue-500 hover:bg-blue-50 transition-colors text-center"
                  style={{ borderColor: colors.border, minHeight: '44px' }}
                >
                  {category}
                </button>
              ))}
            </div>
          </Card>
        )}

        {mood && (
          <Card>
            <label className="block mb-2 font-semibold">
              ¿Algo más que quieras compartir? (opcional)
            </label>
            <textarea
              className="w-full p-3 border rounded-lg resize-none"
              rows="3"
              maxLength="120"
              placeholder="Máximo 120 caracteres..."
              style={{ borderColor: colors.border }}
            />
            <p className="text-xs mt-1" style={{ color: colors.textSecondary }}>
              Esto es privado y nos ayuda a personalizar tus recomendaciones.
            </p>
          </Card>
        )}

        {mood && (
          <div className="space-y-3">
            <PrimaryButton fullWidth onClick={() => setCurrentScreen('recommendations')}>
              Completar check-in
            </PrimaryButton>
            <p className="text-center text-sm" style={{ color: colors.textSecondary }}>
              Gracias por contarnos cómo estás. Aquí tienes 2 apoyos de 2 minutos.
            </p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );

  // PANTALLA 4: Recomendaciones
  const RecommendationsScreen = () => (
    <div className="min-h-screen pb-24" style={{ backgroundColor: colors.bgBase }}>
      <div className="bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold">Recomendaciones</h1>
        <p className="text-sm mt-1" style={{ color: colors.textSecondary }}>
          Mostramos lo más corto y útil primero.
        </p>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex space-x-2 mb-4">
          {['Hoy', 'Guardados', 'Explorar'].map(tab => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-lg font-medium ${
                tab === 'Hoy' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {[
          {
            title: 'Respiración guiada 2 min',
            reason: 'Sugerido por tus 2 últimos check-ins (estrés)',
            duration: '2 min',
            icon: '🫁'
          },
          {
            title: 'Estiramiento de cuello',
            reason: 'Popular entre estudiantes con estrés',
            duration: '2 min',
            icon: '🧘'
          },
          {
            title: 'Pausa visual 5-20-5',
            reason: 'Recomendado para foco',
            duration: '1 min',
            icon: '👁️'
          },
          {
            title: 'Audio: Calma en 3 minutos',
            reason: 'Basado en tu categoría (ansiedad)',
            duration: '3 min',
            icon: '🎧'
          }
        ].map((rec, idx) => (
          <Card key={idx}>
            <div className="flex items-start">
              <span className="text-3xl mr-3">{rec.icon}</span>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{rec.title}</h3>
                <div className="inline-block px-2 py-1 rounded text-xs mb-2" style={{ backgroundColor: '#EFF6FF', color: colors.primary }}>
                  {rec.reason}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm" style={{ color: colors.textSecondary }}>
                    ⏱️ {rec.duration}
                  </span>
                  <div className="flex space-x-2">
                    <button className="text-xl">⭐</button>
                    <PrimaryButton>Iniciar</PrimaryButton>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}

        <button className="w-full py-3 text-blue-500 font-medium">
          ¿No te sirve? Ver más opciones →
        </button>
      </div>

      <BottomNav />
    </div>
  );

  // PANTALLA 5: Retos
  const ChallengesScreen = () => (
    <div className="min-h-screen pb-24" style={{ backgroundColor: colors.bgBase }}>
      <div className="bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold">Retos & Gamificación</h1>
        <p className="text-sm mt-1" style={{ color: colors.textSecondary }}>
          Participa si te suma. Puedes pausar cuando quieras.
        </p>
      </div>

      <div className="p-6 space-y-4">
        <Card style={{ borderLeft: `4px solid ${colors.wellness}` }}>
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-semibold text-lg">Reto de la semana</h3>
              <p className="text-sm" style={{ color: colors.textSecondary }}>
                2 pausas de 2 min al día
              </p>
            </div>
            <span className="text-2xl">🎯</span>
          </div>
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Progreso</span>
              <span className="font-semibold">5/7 días</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full"
                style={{ width: '71%', backgroundColor: colors.wellness }}
              />
            </div>
          </div>
          <PrimaryButton fullWidth>Continuar reto</PrimaryButton>
        </Card>

        <Card>
          <h3 className="font-semibold mb-3">Tus logros</h3>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-3xl font-bold" style={{ color: colors.primary }}>245</p>
              <p className="text-sm" style={{ color: colors.textSecondary }}>Puntos totales</p>
            </div>
            <div className="flex space-x-2">
              {['🏆', '⭐', '🌟', '💎'].map((badge, idx) => (
                <div
                  key={idx}
                  className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-2xl"
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: '🔥', label: 'Racha 5 días' },
              { icon: '✅', label: 'Primera semana' },
              { icon: '🎯', label: 'Reto completado' }
            ].map((achievement, idx) => (
              <div key={idx} className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-1">{achievement.icon}</div>
                <p className="text-xs">{achievement.label}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold mb-1">Tu racha actual</h3>
              <p className="text-3xl font-bold" style={{ color: colors.wellness }}>5 🔥</p>
              <p className="text-sm mt-1" style={{ color: colors.textSecondary }}>
                ¡Vas muy bien! Sigue así.
              </p>
            </div>
            <button className="text-sm text-blue-500 underline">
              No hoy
            </button>
          </div>
        </Card>

        <Card style={{ backgroundColor: '#FFF7ED' }}>
          <div className="flex items-start">
            <span className="text-2xl mr-3">👥</span>
            <div>
              <h3 className="font-semibold mb-1">Ranking privado (opcional)</h3>
              <p className="text-sm mb-3" style={{ color: colors.textSecondary }}>
                Compite con grupos pequeños de forma anónima
              </p>
              <PrimaryButton variant="secondary">Activar ranking</PrimaryButton>
            </div>
          </div>
        </Card>
      </div>

      <BottomNav />
    </div>
  );

  // PANTALLA 6: Recursos
  const ResourcesScreen = () => (
    <div className="min-h-screen pb-24" style={{ backgroundColor: colors.bgBase }}>
      <div className="bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold">Recursos & Ayuda</h1>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex space-x-2 mb-4">
          {['Recursos', 'Ayuda inmediata'].map(tab => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-lg font-medium ${
                tab === 'Recursos' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <Card style={{ backgroundColor: '#FEF2F2', borderLeft: `4px solid ${colors.critical}` }}>
          <h2 className="font-semibold text-lg mb-3">🆘 Ayuda inmediata (SOS)</h2>
          <p className="text-sm mb-4" style={{ color: colors.textSecondary }}>
            No estás solo/a. Buscar ayuda es un acto de valentía.
          </p>
          <div className="space-y-2">
            <button
              className="w-full py-3 rounded-lg font-semibold text-white"
              style={{ backgroundColor: colors.critical, minHeight: '44px' }}
            >
              📞 Llamar ahora
            </button>
            <button
              className="w-full py-3 rounded-lg font-semibold"
              style={{ backgroundColor: colors.wellness, color: 'white', minHeight: '44px' }}
            >
              💬 Chat/WhatsApp institucional
            </button>
            <button
              className="w-full py-3 rounded-lg font-semibold border-2"
              style={{ borderColor: colors.primary, color: colors.primary, minHeight: '44px' }}
            >
              📅 Cita con Bienestar
            </button>
            <button
              className="w-full py-3 rounded-lg font-semibold bg-gray-100"
              style={{ minHeight: '44px' }}
            >
              🧭 Autoayuda guiada
            </button>
          </div>
        </Card>

        <div className="flex space-x-2 overflow-x-auto pb-2">
          {['Todos', 'Estrés', 'Ansiedad', 'Sueño', 'Foco', 'Relaciones'].map(filter => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                filter === 'Todos' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 border'
              }`}
              style={{ borderColor: colors.border }}
            >
              {filter}
            </button>
          ))}
        </div>

        {[
          { icon: '🎧', title: 'Audio: Meditación guiada', duration: '2 min', type: 'Audio' },
          { icon: '📖', title: 'Lectura: Manejo de ansiedad', duration: '3 min', type: 'Lectura' },
          { icon: '🎥', title: 'Video: Técnicas de respiración', duration: '4 min', type: 'Video' },
          { icon: '💤', title: 'Guía: Higiene del sueño', duration: '5 min', type: 'Lectura' }
        ].map((resource, idx) => (
          <Card key={idx}>
            <div className="flex items-start">
              <span className="text-3xl mr-3">{resource.icon}</span>
              <div className="flex-1">
                <div className="inline-block px-2 py-1 rounded text-xs mb-1" style={{ backgroundColor: '#F3F4F6' }}>
                  {resource.type}
                </div>
                <h3 className="font-semibold mb-1">{resource.title}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm" style={{ color: colors.textSecondary }}>
                    ⏱️ {resource.duration}
                  </span>
                  <div className="flex space-x-2">
                    <button className="text-xl">⭐</button>
                    <PrimaryButton>Abrir</PrimaryButton>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <BottomNav />
    </div>
  );

  // PANTALLA 7: Perfil
  const ProfileScreen = () => (
    <div className="min-h-screen pb-24" style={{ backgroundColor: colors.bgBase }}>
      <div className="bg-white p-6 shadow-sm">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl mr-4">
            A
          </div>
          <div>
            <h1 className="text-2xl font-semibold">{userName}</h1>
            <p className="text-sm" style={{ color: colors.textSecondary }}>
              ana@universidad.edu
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <Card>
          <h2 className="font-semibold text-lg mb-3">Preferencias</h2>
          <div className="space-y-3">
            {[
              { label: 'Notificaciones', value: true },
              { label: 'Gamificación', value: true },
              { label: 'Ranking público', value: false },
              { label: 'Idioma: Español', value: null }
            ].map((pref, idx) => (
              <div key={idx} className="flex items-center justify-between py-2 border-b" style={{ borderColor: colors.border }}>
                <span>{pref.label}</span>
                {pref.value !== null ? (
                  <div className={`w-12 h-6 rounded-full ${pref.value ? 'bg-green-500' : 'bg-gray-300'} relative`}>
                    <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${pref.value ? 'right-0.5' : 'left-0.5'}`} />
                  </div>
                ) : (
                  <span className="text-blue-500">→</span>
                )}
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="font-semibold text-lg mb-3 flex items-center">
            🔒 Privacidad y datos
          </h2>
          <p className="text-sm mb-4" style={{ color: colors.textSecondary }}>
            Tus decisiones mandan. Cambia estas opciones cuando quieras.
          </p>
          <div className="space-y-2">
            <button className="w-full py-3 px-4 rounded-lg border-2 text-left font-medium hover:bg-gray-50" style={{ borderColor: colors.border, minHeight: '44px' }}>
              📄 Qué datos guardamos y por qué
            </button>
            <button className="w-full py-3 px-4 rounded-lg border-2 text-left font-medium hover:bg-gray-50" style={{ borderColor: colors.border, minHeight: '44px' }}>
              📥 Exportar mis datos
            </button>
            <button className="w-full py-3 px-4 rounded-lg border-2 text-left font-medium hover:bg-red-50" style={{ borderColor: colors.critical, color: colors.critical, minHeight: '44px' }}>
              🗑️ Borrar mi cuenta
            </button>
          </div>
        </Card>

        <Card>
          <h2 className="font-semibold text-lg mb-3">Historial personal</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2">
              <span>Check-ins realizados</span>
              <span className="font-semibold">47</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span>Recomendaciones completadas</span>
              <span className="font-semibold">23</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span>Retos completados</span>
              <span className="font-semibold">3</span>
            </div>
          </div>
          <button className="text-blue-500 text-sm mt-3 underline">
            Ver historial completo →
          </button>
        </Card>

        <Card>
          <h2 className="font-semibold text-lg mb-3">Contacto</h2>
          <button className="w-full py-3 px-4 rounded-lg bg-gray-100 text-left font-medium" style={{ minHeight: '44px' }}>
            💬 Enviar sugerencias o feedback
          </button>
        </Card>

        <div className="text-center text-xs pt-4" style={{ color: colors.textSecondary }}>
          <p>PWA Bienestar Universitario v1.0</p>
          <p className="mt-1">Diseñado con empatía y privacidad</p>
        </div>
      </div>

      <BottomNav />
    </div>
  );

  // Renderizado principal
  const renderScreen = () => {
    switch (currentScreen) {
      case 'onboarding':
        return <OnboardingScreen />;
      case 'home':
        return <HomeScreen />;
      case 'checkin':
        return <CheckinScreen />;
      case 'recommendations':
        return <RecommendationsScreen />;
      case 'challenges':
        return <ChallengesScreen />;
      case 'resources':
        return <ResourcesScreen />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="font-sans" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {renderScreen()}
    </div>
  );
}

export default App;