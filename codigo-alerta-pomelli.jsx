import React, { useState } from 'react';
import { AlertTriangle, Radar, Sparkles, Scan, Lightbulb, Palette, ExternalLink } from 'lucide-react';

export default function CodigoAlertaPomelli() {
  const [activeStep, setActiveStep] = useState(null);
  const [pulseActive, setPulseActive] = useState(true);

  const steps = [
    {
      id: 'step1',
      number: '1',
      title: 'Construindo o "DNA de Negócios"',
      subtitle: 'A Análise do Branding',
      icon: Scan,
      color: 'from-blue-500 to-cyan-500',
      description: 'Em vez de você ter que dizer para a IA: "Minha cor é azul-petróleo e meu tom é divertido, mas profissional", o Pomelli faz isso automaticamente:',
      points: [
        'Você insere o link do seu site.',
        'A IA escaneia tudo (textos, imagens, cores, fontes, estilo das fotos).',
        'Ela extrai a "essência" da marca, criando um perfil completo chamado "Business DNA" (DNA de Negócios).'
      ],
      meaning: 'A IA "aprende" o seu branding. Ela sabe o que a sua marca realmente parece e como ela soa.'
    },
    {
      id: 'step2',
      number: '2',
      title: 'Geração de Ideias',
      subtitle: 'A Estratégia Automatizada',
      icon: Lightbulb,
      color: 'from-purple-500 to-pink-500',
      description: 'Com o DNA da marca definido, a IA passa para a fase criativa e estratégica:',
      points: [
        'O Pomelli sugere ideias de campanhas que fazem sentido para o seu negócio (ex: "Campanha para o lançamento do novo produto X" ou "Conteúdo temático para o verão").',
        'A IA garante que essas ideias já estejam alinhadas com o tom e o estilo que ela identificou no Passo 1.'
      ],
      meaning: 'Você não precisa mais "quebrar a cabeça" pensando em o que postar. A IA dá um pontapé inicial que já respeita o seu branding.'
    },
    {
      id: 'step3',
      number: '3',
      title: 'Criação de Materiais',
      subtitle: 'A Consistência Automatizada',
      icon: Palette,
      color: 'from-green-500 to-emerald-500',
      description: 'Por fim, o Pomelli usa o DNA para gerar os materiais finais:',
      points: [
        'Ele cria posts para redes sociais (texto e imagem) que usam a sua paleta de cores, as suas fontes e o seu estilo de escrita.',
        'O resultado é um conteúdo que está pronto para ser publicado e que é visualmente e narrativamente consistente com o seu site.'
      ],
      meaning: 'A IA assegura que tudo o que você publica está "na marca" (on-brand), garantindo que a personalidade da sua empresa seja a mesma em todos os canais, sem exigir um designer ou copywriter caríssimo para supervisionar cada postagem.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 md:p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center gap-3 mb-2">
          <AlertTriangle className="w-8 h-8 text-red-500 animate-pulse" />
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Código Alerta
          </h1>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <Radar className={`w-5 h-5 text-orange-400 ${pulseActive ? 'animate-pulse' : ''}`} />
          <h2 className="text-xl md:text-2xl text-orange-400 font-semibold">
            Novo Movimento Detectado
          </h2>
        </div>
        <div className="bg-slate-800/50 border border-red-500/30 rounded-lg p-4 backdrop-blur">
          <p className="text-red-400 font-semibold text-lg md:text-xl">
            GOOGLE lança POMELLI, uma NOVA IA para CRIAR CAMPANHAS de marca
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/50 border border-orange-500/30 rounded-xl p-6 backdrop-blur">
          <p className="text-slate-200 text-base leading-relaxed">
            O lançamento do Pomelli pelo Google é um exemplo prático e super fácil de entender de como a IA aplica o branding automatizado. 
            Basicamente, o Pomelli funciona como um <span className="text-orange-400 font-semibold">tradutor de identidade da marca</span>.
          </p>
        </div>
      </div>

      {/* Center Logo Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-col items-center justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 rounded-full blur-2xl opacity-40 animate-pulse group-hover:opacity-60 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-red-500 to-orange-500 rounded-full p-12 border-4 border-white/20 shadow-2xl">
              {/* Logo Pomelli */}
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-black text-white tracking-tight" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
                  POMELLI
                </div>
                <div className="mt-2 flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  {/* Google Logo */}
                  <div className="flex items-center gap-0.5 text-xl font-bold tracking-tight" style={{fontFamily: 'Product Sans, system-ui, sans-serif'}}>
                    <span style={{color: '#4285F4'}}>G</span>
                    <span style={{color: '#EA4335'}}>o</span>
                    <span style={{color: '#FBBC04'}}>o</span>
                    <span style={{color: '#4285F4'}}>g</span>
                    <span style={{color: '#34A853'}}>l</span>
                    <span style={{color: '#EA4335'}}>e</span>
                    <span className="text-white/90 ml-1.5 text-sm font-medium tracking-wider">LABS</span>
                  </div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center max-w-2xl">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-orange-400" />
              <h3 className="text-2xl font-bold text-white">A IA que Entende o DNA da Sua Marca</h3>
            </div>
            <p className="text-slate-300 text-base leading-relaxed">
              A ferramenta foi criada para ajudar pequenas e médias empresas (PMEs) a criar conteúdo de marketing 
              (como posts para redes sociais) de forma rápida, mas <span className="text-green-400 font-semibold">sem perder a cara da marca</span>.
            </p>
            <p className="text-orange-400 font-semibold mt-3">
              O processo se resume a três passos de automação e branding:
            </p>
          </div>
        </div>
      </div>

      {/* Three Steps */}
      <div className="max-w-6xl mx-auto mb-12 space-y-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = activeStep === step.id;
          
          return (
            <div 
              key={step.id}
              className={`transition-all duration-300 ${isActive ? 'scale-[1.02]' : 'scale-100'}`}
            >
              <div 
                className={`bg-gradient-to-br ${step.color} rounded-xl p-6 border border-white/20 shadow-xl cursor-pointer hover:shadow-2xl`}
                onClick={() => setActiveStep(isActive ? null : step.id)}
              >
                {/* Step Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="bg-white/20 backdrop-blur rounded-full w-16 h-16 flex items-center justify-center border-2 border-white/40">
                      <span className="text-white font-black text-2xl">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-6 h-6 text-white" />
                      <h3 className="text-white font-bold text-xl">{step.title}</h3>
                    </div>
                    <p className="text-white/80 text-sm font-medium">{step.subtitle}</p>
                  </div>
                </div>

                {/* Step Content */}
                {isActive && (
                  <div className="mt-6 space-y-4 animate-in fade-in duration-300">
                    <p className="text-white/90 text-base leading-relaxed">
                      {step.description}
                    </p>
                    
                    <ul className="space-y-2 ml-4">
                      {step.points.map((point, idx) => (
                        <li key={idx} className="text-white/90 text-base flex items-start gap-3">
                          <span className="text-white/60 text-lg mt-0.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20 mt-4">
                      <p className="text-white font-semibold text-sm mb-1">🎯 O que significa na prática?</p>
                      <p className="text-white/90 text-base leading-relaxed">{step.meaning}</p>
                    </div>
                  </div>
                )}

                {!isActive && (
                  <p className="text-white/70 text-sm mt-2">Clique para expandir o Passo {step.number}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer - Código Descodificado */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border-2 border-green-500/50 rounded-xl p-8 backdrop-blur shadow-2xl">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="bg-green-500/20 rounded-full p-3">
                <Sparkles className="w-8 h-8 text-green-400" />
              </div>
            </div>
            <div>
              <h3 className="text-green-400 font-black text-2xl mb-3 tracking-wide">
                Novo Código Descodificado:
              </h3>
              <p className="text-slate-200 text-lg leading-relaxed">
                Mais uma prova de como a IA está transformando o marketing — e de como quem trabalha com marcas precisa acompanhar de perto essas mudanças. <span className="text-green-400 font-black text-xl block mt-3">Não dá mais para ignorar a Inteligência Artificial. O futuro já começou.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Link to Article */}
        <div className="mt-6 text-center">
          <a 
            href="https://blog.google/technology/google-labs/pomelli/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Leia a matéria completa no Google Blog</span>
          </a>
        </div>
      </div>
    </div>
  );
}