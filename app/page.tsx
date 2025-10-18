"use client"

import React from "react"
import { ArrowRight } from "lucide-react"

const CHECKOUT_URL = "https://go.perfectpay.com.br/PPU38CQ28NB"

export default function Home() {
  const handleCheckoutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.location.href = CHECKOUT_URL
  }

  const scrollToOffer = () => {
    const offerSection = document.getElementById("offer-section")
    if (offerSection) {
      offerSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="hero-section relative min-h-[340px] md:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="hero-bg absolute inset-0 z-0" />

        <div className="relative z-10 w-full">
          <div className="hero-content max-w-7xl mx-auto px-4 md:px-20 lg:px-20 pt-0 pb-0 md:py-12 -mt-36 md:-mt-24">
            <div className="hero-text text-center md:text-left md:max-w-2xl mt-0 md:mt-6">
              <div className="text-center md:text-left mb-1 md:mb-4">
                <img
                  src="https://gledigital.com/wp-content/uploads/2025/07/ChatGPT_Image_25_de_jul._de_2025__22_40_46-removebg-preview.png"
                  alt="GLÊ Logo"
                  className="hero-logo max-w-[120px] md:max-w-[200px] w-auto h-auto"
                />
              </div>

              <div className="hero-title max-w-[600px] mx-auto md:mx-0 space-y-1 md:space-y-2 text-center md:text-left -mt-28 md:mt-0">
                <h1 className="text-[18px] md:text-4xl lg:text-5xl font-bold leading-tight text-white text-center md:text-left">
                  🎹 200 MÚSICAS PRA TOCAR NO PIANO (MESMO SE VOCÊ NUNCA TOCOU ANTES) + Aulas em vídeo passo a passo,
                  sem enrolação
                </h1>

                <div className="space-y-0.5 mt-2">
                  <p className="hero-subtitle text-[11px] md:text-xl text-gray-300 font-bold leading-relaxed text-center md:text-left max-w-[320px] md:max-w-none mx-auto md:mx-0">
                    Receba uma seleção com{" "}
                    <span style={{ color: "#f4c25b" }}>
                      200 músicas populares e fáceis, explicadas em vídeo-aulas curtas,
                    </span>{" "}
                    <span style={{ color: "#f4c25b" }}>criadas pra quem é totalmente iniciante.</span> Você vai aprender
                    no seu ritmo, sem precisar saber ler partituras tudo no estilo "
                    <span style={{ color: "#f4c25b" }}>toque comigo</span>",{" "}
                    <span style={{ color: "#f4c25b" }}>com apoio direto no grupo de alunos</span>
                  </p>
                </div>
              </div>

              <div className="flex justify-center md:justify-start mt-3 md:mt-3">
                <button
                  onClick={scrollToOffer}
                  className="group relative overflow-hidden w-full max-w-[280px] md:min-w-[320px] px-4 py-1.5 md:px-8 md:py-3 rounded-xl border border-green-300/50 transition-all duration-300 hover:border-green-300/70"
                  style={{
                    background: "linear-gradient(145deg, rgba(6,78,59,0.92) 0%, rgba(34,197,94,0.92) 100%)",
                    boxShadow: "0 0 20px rgba(34,197,94,0.1)",
                  }}
                >
                  <div className="relative h-5 md:h-6 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center gap-2 md:gap-3 group-hover:-translate-y-8 group-hover:opacity-0 transition-all duration-300">
                      <span className="whitespace-nowrap text-white font-bold uppercase tracking-wide text-sm md:text-base">
                        QUERO ENTRAR
                      </span>
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center gap-2 md:gap-3 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="whitespace-nowrap text-white font-bold uppercase tracking-wide text-sm md:text-base">
                        QUERO TOCAR PIANO
                      </span>
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white animate-pulse" />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segunda dobra - Prova e Urgência */}
      <section className="py-3 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-3">
            <h2 className="text-3xl md:text-4xl font-black mb-2 text-white">
              O que você vai <span className="text-yellow-500">RECEBER:</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="p-3 bg-gradient-to-r from-gray-900/50 to-black/50 rounded-lg border border-gray-800 hover:border-yellow-500/30 transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="space-y-1">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✅</span>
                    <p className="text-white font-medium">Acesso a 200 músicas populares e fáceis de tocar</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎥</span>
                    <p className="text-white font-medium">Videoaulas passo a passo com câmera nas mãos</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🧠</span>
                    <p className="text-white font-medium">Método estruturado pra aprender do zero, sem partituras</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📲</span>
                    <p className="text-white font-medium">Área de membros exclusiva com visual de app</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎼</span>
                    <p className="text-white font-medium">Exercícios práticos com áudio de apoio pra você acompanhar</p>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">👨‍🏫</span>
                    <p className="text-white font-medium">
                      Aulas no estilo "toque comigo", como se fosse um professor particular
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💬</span>
                    <p className="text-white font-medium">Grupo de alunos para dúvidas, motivação e networking</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎁</span>
                    <p className="text-white font-medium">Bônus surpresa liberado após o acesso</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">♾️</span>
                    <p className="text-white font-medium">Acesso vitalício, atualizações incluídas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-3">
          <button
            onClick={scrollToOffer}
            className="group relative overflow-hidden w-full max-w-[280px] md:min-w-[320px] px-5 py-2 md:px-8 md:py-3 rounded-xl border border-gray-800 transition-all duration-300 hover:border-gray-800"
            style={{
              background: "linear-gradient(145deg, rgba(17,24,39,0.5) 0%, rgba(55,65,81,0.8) 100%)",
              boxShadow: "0 0 20px rgba(107,114,128,0.1)",
            }}
          >
            <div className="relative h-5 md:h-6 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center gap-2 md:gap-3 group-hover:-translate-y-8 group-hover:opacity-0 transition-all duration-300">
                <span className="whitespace-nowrap text-white font-bold uppercase tracking-wide text-sm md:text-base">
                  QUERO TODO CONTEÚDO
                </span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>

              <div className="absolute inset-0 flex items-center justify-center gap-2 md:gap-3 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="whitespace-nowrap text-white font-bold uppercase tracking-wide text-sm md:text-base">
                  QUERO TOCAR PIANO
                </span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white animate-pulse" />
              </div>
            </div>
          </button>
        </div>
      </section>

      {/* Seção de Benefícios */}
      <section className="py-3 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-3">
            <h2 className="text-3xl md:text-4xl font-black mb-2 text-white">
              <span className="text-yellow-500">BÔNUS</span> EXCLUSIVOS:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="relative text-center p-3 bg-gradient-to-b from-gray-900 to-black rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105 max-w-[320px] mx-auto">
              <div className="mb-2">
                <span className="text-2xl">🎁</span>
                <h3 className="text-yellow-500 font-bold text-lg mt-1.5 mb-1.5">BÔNUS 1:</h3>
                <h4 className="text-white font-bold text-base mb-1.5">
                  PACK DE AQUECIMENTO DAS MÃOS E DEDOS (PDF + VÍDEOS)
                </h4>
                <p className="text-gray-300 text-sm mb-2">
                  Evite lesões e ganhe agilidade com exercícios simples de aquecimento e coordenação.
                </p>
                <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-1.5 relative">
                  <span className="relative">
                    R$97,00
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-0.5 bg-red-800 transform rotate-[-8deg]"></div>
                    </div>
                  </span>
                </div>
              </div>
            </div>

            <div className="relative text-center p-3 bg-gradient-to-b from-gray-900 to-black rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105 max-w-[320px] mx-auto">
              <div className="mb-2">
                <span className="text-2xl">🎁</span>
                <h3 className="text-yellow-500 font-bold text-lg mt-1.5 mb-1.5">BÔNUS 2:</h3>
                <h4 className="text-white font-bold text-base mb-1.5">
                  MINI CURSO: COMO TOCAR DE OLHOS FECHADOS (TÉCNICA DE MEMORIZAÇÃO)
                </h4>
                <p className="text-gray-300 text-sm mb-2">
                  Descubra como internalizar movimentos e tocar no automático, mesmo sendo iniciante.
                </p>
                <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-1.5 relative">
                  <span className="relative">
                    R$47,00
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-0.5 bg-red-800 transform rotate-[-8deg]"></div>
                    </div>
                  </span>
                </div>
              </div>
            </div>

            <div className="relative text-center p-3 bg-gradient-to-b from-gray-900 to-black rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105 max-w-[320px] mx-auto">
              <div className="mb-2">
                <span className="text-2xl">🎁</span>
                <h3 className="text-yellow-500 font-bold text-lg mt-1.5 mb-1.5">BÔNUS 3:</h3>
                <h4 className="text-white font-bold text-base mb-1.5">20 VIDEOAULAS EXTRAS COM MÚSICAS FAMOSAS</h4>
                <p className="text-gray-300 text-sm mb-2">
                  Aulas exclusivas com músicas como River Flows in You, Harry Potter, Beethoven e mais.
                </p>
                <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-1.5 relative">
                  <span className="relative">
                    R$67,00
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-0.5 bg-red-800 transform rotate-[-8deg]"></div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-3">
          <button
            onClick={scrollToOffer}
            className="group relative overflow-hidden w-full max-w-[280px] md:min-w-[320px] px-5 py-2 md:px-8 md:py-3 rounded-xl border border-gray-800 transition-all duration-300 hover:border-gray-800"
            style={{
              background: "linear-gradient(145deg, rgba(17,24,39,0.5) 0%, rgba(55,65,81,0.8) 100%)",
              boxShadow: "0 0 20px rgba(107,114,128,0.1)",
            }}
          >
            <div className="relative h-5 md:h-6 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center gap-2 md:gap-3 group-hover:-translate-y-8 group-hover:opacity-0 transition-all duration-300">
                <span className="whitespace-nowrap text-white font-bold uppercase tracking-wide text-sm md:text-base">
                  QUERO OS BÔNUS
                </span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>

              <div className="absolute inset-0 flex items-center justify-center gap-2 md:gap-3 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="whitespace-nowrap text-white font-bold uppercase tracking-wide text-sm md:text-base">
                  QUERO TOCAR PIANO
                </span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white animate-pulse" />
              </div>
            </div>
          </button>
        </div>
      </section>

      {/* Seção de Músicas */}
      <section
        className="py-3"
        style={{
          background: "linear-gradient(to bottom, #000000 0%, #18181B 50%, #000000 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-3">
            <h2 className="text-3xl md:text-4xl font-black mb-2 text-white">
              Algumas das <span className="text-yellow-500">MÚSICAS</span> que você vai{" "}
              <span className="text-yellow-500">APRENDER</span> a <span className="text-yellow-500">TOCAR</span>:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0.5">
            <div className="space-y-0.5 text-center">
              <p className="text-white text-sm">💔│Someone Like You – Adele</p>
              <p className="text-white text-sm">🎤│All of Me – John Legend</p>
              <p className="text-white text-sm">📦│Let It Be – The Beatles</p>
              <p className="text-white text-sm">📦│Perfect – Ed Sheeran</p>
              <p className="text-white text-sm">📦│A Thousand Miles – Vanessa Carlton</p>
              <p className="text-white text-sm">🎤│When I Was Your Man – Bruno Mars</p>
              <p className="text-white text-sm">📦│Stay With Me – Sam Smith</p>
              <p className="text-white text-sm">📦│Shallow – Lady Gaga & Bradley Cooper</p>
              <p className="text-white text-sm">📦│Hallelujah – Leonard Cohen</p>
              <p className="text-white text-sm">💔│Easy On Me – Adele</p>
              <p className="text-white text-sm">❤️│Love Me Like You Do – Ellie Goulding</p>
              <p className="text-white text-sm">🎤│Just the Way You Are – Bruno Mars</p>
              <p className="text-white text-sm">📦│Say You Won't Let Go – James Arthur</p>
              <p className="text-white text-sm">📦│If I Ain't Got You – Alicia Keys</p>
              <p className="text-white text-sm">🌌│Clocks – Coldplay</p>
              <p className="text-white text-sm">🌌│Fix You – Coldplay</p>
              <p className="text-white text-sm">📦│Jealous – Labrinth</p>
              <p className="text-white text-sm">📦│Too Good at Goodbyes – Sam Smith</p>
              <p className="text-white text-sm">🌌│The Scientist – Coldplay</p>
              <p className="text-white text-sm">💔│Hello – Adele</p>
              <p className="text-white text-sm">🎼│Für Elise – Beethoven</p>
              <p className="text-white text-sm">📦│Clair de Lune – Debussy</p>
              <p className="text-white text-sm">🎼│Moonlight Sonata – Beethoven</p>
              <p className="text-white text-sm">📦│Canon in D – Pachelbel</p>
              <p className="text-white text-sm">🎼│Nocturne Op.9 No.2 – Chopin</p>
              <p className="text-white text-sm">📦│The Entertainer – Scott Joplin</p>
              <p className="text-white text-sm">📦│Gymnopédie No.1 – Erik Satie</p>
              <p className="text-white text-sm">📦│Prelude in C Major – Bach</p>
              <p className="text-white text-sm">📦│Ave Maria – Schubert</p>
              <p className="text-white text-sm">🎼│Rondo Alla Turca – Mozart</p>
              <p className="text-white text-sm">📦│Swan Lake Theme – Tchaikovsky</p>
              <p className="text-white text-sm">📦│Hungarian Rhapsody No.2 – Liszt</p>
              <p className="text-white text-sm">📦│Liebestraum No.3 – Liszt</p>
              <p className="text-white text-sm">📦│Toccata and Fugue in D minor – Bach</p>
              <p className="text-white text-sm">📦│Spring (Four Seasons) – Vivaldi</p>
              <p className="text-white text-sm">📦│La Campanella – Liszt</p>
              <p className="text-white text-sm">📦│Dance of the Sugar Plum Fairy – Tchaikovsky</p>
              <p className="text-white text-sm">📦│Air on the G String – Bach</p>
              <p className="text-white text-sm">📦│Arabesque No.1 – Debussy</p>
              <p className="text-white text-sm">📦│Meditation – Massenet</p>
            </div>

            <div className="space-y-0.5 text-center">
              <p className="text-white text-sm">💭│Dream On – Aerosmith</p>
              <p className="text-white text-sm">📦│Hey Jude – The Beatles</p>
              <p className="text-white text-sm">📦│Sweet Child O' Mine – Guns N' Roses</p>
              <p className="text-white text-sm">📦│We Are the Champions – Queen</p>
              <p className="text-white text-sm">📦│Come Together – The Beatles</p>
              <p className="text-white text-sm">📦│Tiny Dancer – Elton John</p>
              <p className="text-white text-sm">📦│Rocket Man – Elton John</p>
              <p className="text-white text-sm">📦│Highway to Hell – AC/DC</p>
              <p className="text-white text-sm">🌌│Clocks – Coldplay</p>
              <p className="text-white text-sm">📦│Under the Bridge – Red Hot Chili Peppers</p>
              <p className="text-white text-sm">🌊│River Flows in You – Yiruma</p>
              <p className="text-white text-sm">📦│Comptine d'un autre été – Amélie</p>
              <p className="text-white text-sm">🪐│Interstellar Main Theme – Hans Zimmer</p>
              <p className="text-white text-sm">🏴‍☠️│Pirates of the Caribbean – Hans Zimmer</p>
              <p className="text-white text-sm">🛡️│The Avengers Theme – Alan Silvestri</p>
              <p className="text-white text-sm">🌟│City of Stars – La La Land</p>
              <p className="text-white text-sm">🧙│Hedwig's Theme – Harry Potter</p>
              <p className="text-white text-sm">❄️│Let It Go – Frozen</p>
              <p className="text-white text-sm">🌙│Bella's Lullaby – Twilight</p>
              <p className="text-white text-sm">🕴️│The Godfather Theme</p>
              <p className="text-white text-sm">❤️│My Heart Will Go On – Titanic</p>
              <p className="text-white text-sm">📦│The Notebook Theme</p>
              <p className="text-white text-sm">🎈│Married Life – Up</p>
              <p className="text-white text-sm">💭│Requiem for a Dream – Clint Mansell</p>
              <p className="text-white text-sm">🪐│Time – Inception</p>
              <p className="text-white text-sm">📦│Now We Are Free – Gladiator</p>
              <p className="text-white text-sm">🏴‍☠️│He's a Pirate – Pirates of the Caribbean</p>
              <p className="text-white text-sm">🦖│Jurassic Park Theme – John Williams</p>
              <p className="text-white text-sm">📦│Schindler's List Theme – John Williams</p>
              <p className="text-white text-sm">📦│Spirited Away – One Summer's Day</p>
              <p className="text-white text-sm">🎨│Aquarela – Toquinho</p>
              <p className="text-white text-sm">📦│Evidências – Chitãozinho & Xororó</p>
              <p className="text-white text-sm">📦│Trem Bala – Ana Vilela</p>
              <p className="text-white text-sm">📦│O Mundo é um Moinho – Cartola</p>
              <p className="text-white text-sm">📦│Garota de Ipanema – Tom Jobim</p>
              <p className="text-white text-sm">📦│Asa Branca – Luiz Gonzaga</p>
              <p className="text-white text-sm">📦│Azul da Cor do Mar – Tim Maia</p>
              <p className="text-white text-sm">💌│Pra Você Guardei o Amor – Nando Reis</p>
              <p className="text-white text-sm">📦│O Leãozinho – Caetano Veloso</p>
              <p className="text-white text-sm">📦│Chega de Saudade – João Gilberto</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-3">
          <button
            onClick={scrollToOffer}
            className="group relative overflow-hidden w-full max-w-[280px] md:min-w-[320px] px-5 py-2 md:px-8 md:py-3 rounded-xl border border-white/30 transition-all duration-300 hover:border-white/50"
            style={{
              background: "linear-gradient(145deg, rgba(13,13,13,0.92) 0%, rgba(40,40,40,0.92) 100%)",
              boxShadow: "0 0 20px rgba(255,255,255,0.1)",
            }}
          >
            <div className="relative h-4 md:h-5 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center gap-2 md:gap-3 group-hover:-translate-y-8 group-hover:opacity-0 transition-all duration-300">
                <span className="whitespace-nowrap text-white font-bold uppercase tracking-wide text-xs md:text-sm">
                  QUERO APRENDER ESSAS MÚSICAS
                </span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>

              <div className="absolute inset-0 flex items-center justify-center gap-2 md:gap-3 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="whitespace-nowrap text-white font-bold uppercase tracking-wide text-xs md:text-sm">
                  QUERO TOCAR PIANO
                </span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white animate-pulse" />
              </div>
            </div>
          </button>
        </div>
      </section>

      {/* Seção de Oferta */}
      <section id="offer-section" className="py-3 bg-black relative" style={{ zIndex: 10 }}>
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 209, 102, 0.2) 0%, rgba(255, 209, 102, 0.1) 30%, rgba(0, 0, 0, 0) 60%)",
            filter: "blur(40px)",
            transform: "scale(1.1)",
            zIndex: -1,
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 20 }}>
          <div className="relative max-w-lg mx-auto">
            <div
              className="absolute inset-0 -m-8 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(255, 209, 102, 0.4) 0%, rgba(255, 209, 102, 0.2) 40%, rgba(0, 0, 0, 0) 70%)",
                filter: "blur(40px)",
                transform: "scale(1.3)",
                zIndex: -1,
              }}
            />

            <div
              className="rounded-lg border p-4 md:p-6 shadow-2xl"
              style={{
                background: "radial-gradient(circle at center, #1a1a1a 0%, #0a0a0a 100%)",
                borderColor: "#292929",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)",
              }}
            >
              <div className="text-center">
                <div className="mb-2">
                  <img
                    src="https://gledigital.com/wp-content/uploads/2025/07/ChatGPT_Image_25_de_jul._de_2025__22_40_46-removebg-preview.png"
                    alt="GLÊ Logo"
                    className="w-16 md:w-24 h-auto mx-auto"
                  />
                </div>

                <h2 className="text-3xl font-bold text-white mb-3 leading-tight">
                  Quanto vai custar
                  <br />
                  tudo isso?
                </h2>

                <div className="space-y-1.5 mb-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white text-sm font-normal">TODOS OS BÔNUS</span>
                    <span className="font-bold text-sm" style={{ color: "#FFD166" }}>
                      R$ 211,00
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white text-sm font-normal">ACESSO VITALÍCIO AO CURSO</span>
                    <span className="font-bold text-sm" style={{ color: "#FFD166" }}>
                      R$ 97,00
                    </span>
                  </div>
                </div>

                <div className="mb-2">
                  <span className="text-xl text-white font-bold relative inline-block">
                    De R$ 298,00
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-0.5 bg-red-600 transform rotate-[-8deg]"></div>
                    </div>
                  </span>
                </div>

                <div className="mb-1">
                  <p className="text-5xl md:text-6xl font-black leading-none mb-1" style={{ color: "#FFD166" }}>
                    TOTAL: R$29,90
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-400 font-normal">Últimas vagas a esse valor</p>
                </div>

                <a
                  href="#"
                  onClick={handleCheckoutClick}
                  className="group relative overflow-hidden w-full px-5 py-2 md:px-8 md:py-3 rounded-xl border border-green-300/50 transition-all duration-300 hover:border-green-300/70 block"
                  style={{
                    background: "linear-gradient(145deg, rgba(6,78,59,0.92) 0%, rgba(34,197,94,0.92) 100%)",
                    boxShadow: "0 0 20px rgba(34,197,94,0.1)",
                  }}
                >
                  <div className="relative h-5 md:h-6 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center gap-2 md:gap-3 group-hover:-translate-y-8 group-hover:opacity-0 transition-all duration-300">
                      <span className="whitespace-nowrap text-white font-bold uppercase tracking-wide text-sm md:text-base">
                        QUERO ENTRAR
                      </span>
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center gap-2 md:gap-3 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="whitespace-nowrap text-white font-bold uppercase tracking-wide text-sm md:text-base">
                        QUERO TOCAR PIANO
                      </span>
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white animate-pulse" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Garantia */}
      <section className="pt-2 pb-3 bg-black">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-1">
          <div className="mb-3">
            <img
              src="https://gledigital.com/wp-content/uploads/2025/07/ChatGPT_Image_25_de_jul._de_2025__22_40_46-removebg-preview.png"
              alt="GLÊ Logo"
              className="w-24 md:w-36 h-auto mx-auto"
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 -mt-10">Garantia incondicional de 15 dias</h2>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            Se em 15 dias você sentir que não é pra você, te devolvemos 100% do valor. Sem letra miúda. Sem
            questionamento.{" "}
            <span style={{ color: "#FFD166" }}>
              Você entra com confiança. E se não sentir que é pra você — sai sem prejuízo
            </span>
          </p>
        </div>
      </section>

      {/* Seção de Suporte */}
      <section
        className="relative flex items-center justify-center overflow-hidden py-20 md:py-0"
        style={{
          width: "100vw",
          height: "23.08vw",
          minHeight: "180px",
          maxHeight: "960px",
        }}
      >
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: "url(https://gledigital.com/wp-content/uploads/2025/07/Design-sem-nome-48-scaled.png)",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            opacity: 0.6,
            filter: "blur(10px)",
          }}
        />

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="hidden md:block">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3">
              Mesmo assim, ainda possui dúvidas?
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-3 sm:mb-4 px-2">
              Fale com o nosso time de suporte pelo whatsapp
            </p>

            <div className="flex relative items-center justify-center">
              <img
                src="https://gledigital.com/wp-content/uploads/2025/07/WhatsApp.svg_.webp"
                alt="WhatsApp"
                className="absolute left-0 w-20 h-20"
                style={{ transform: "translateX(-15px)" }}
              />
              <a
                href="https://wa.link/2yxnus"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden inline-block w-full max-w-[280px] md:w-80 px-5 py-2.5 md:px-6 md:py-3 rounded-xl border border-green-300/50 transition-all duration-300 hover:border-green-300/70"
                style={{
                  background: "linear-gradient(145deg, rgba(6,78,59,0.92) 0%, rgba(34,197,94,0.92) 100%)",
                  boxShadow: "0 0 20px rgba(34,197,94,0.1)",
                }}
              >
                <div className="relative h-4 md:h-5 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center gap-2 md:gap-3 group-hover:-translate-y-8 group-hover:opacity-0 transition-all duration-300">
                    <span className="whitespace-nowrap text-white font-bold uppercase tracking-wide text-xs md:text-sm">
                      TIRE SUAS DÚVIDAS
                    </span>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center gap-2 md:gap-3 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="whitespace-nowrap text-white font-bold uppercase tracking-wide text-xs md:text-sm">
                      ABRIR CONVERSA
                    </span>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white animate-pulse" />
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <div className="text-center p-3 bg-gradient-to-b from-gray-900 to-black rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 max-w-[320px] mx-auto">
              <h2 className="text-xl font-bold text-white mb-2">Mesmo assim, ainda possui dúvidas?</h2>

              <p className="text-sm text-gray-300 leading-relaxed mb-3">
                Fale com o nosso time de suporte pelo whatsapp
              </p>

              <div className="flex flex-col items-center gap-1.5">
                <a
                  href="https://wa.link/2yxnus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden inline-block w-full px-5 py-2 rounded-xl border border-green-300/50 transition-all duration-300 hover:border-green-300/70"
                  style={{
                    background: "linear-gradient(145deg, rgba(6,78,59,0.92) 0%, rgba(34,197,94,0.92) 100%)",
                    boxShadow: "0 0 20px rgba(34,197,94,0.1)",
                  }}
                >
                  <div className="relative h-4 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center gap-2 group-hover:-translate-y-8 group-hover:opacity-0 transition-all duration-300">
                      <span className="whitespace-nowrap text-white font-bold uppercase tracking-wide text-xs">
                        TIRE SUAS DÚVIDAS
                      </span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center gap-2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="whitespace-nowrap text-white font-bold uppercase tracking-wide text-xs">
                        ABRIR CONVERSA
                      </span>
                      <ArrowRight className="w-4 h-4 text-white animate-pulse" />
                    </div>
                  </div>
                </a>
                <img
                  src="https://gledigital.com/wp-content/uploads/2025/07/WhatsApp.svg_.webp"
                  alt="WhatsApp"
                  className="w-12 h-12"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Aviso */}
      <section className="py-3" style={{ background: "linear-gradient(to bottom, #000000 0%, #0a0a0a 100%)" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black rounded-xl p-3 md:p-4 shadow-2xl transition-all duration-500 hover:bg-gradient-to-r hover:from-yellow-400/20 hover:to-black">
            <div className="text-white space-y-1.5">
              <p className="text-base leading-relaxed">
                🎹 O piano é <span style={{ color: "#FFD166" }}>pouquíssimo abordado</span> no Brasil. Hoje, você não
                encontrou só um <span style={{ color: "#FFD166" }}>curso</span> — você encontrou uma{" "}
                <span style={{ color: "#FFD166" }}>comunidade inteira</span> focada em fazer você{" "}
                <span style={{ color: "#FFD166" }}>tocar de verdade</span>.
              </p>

              <p className="text-base leading-relaxed">
                Não desperdice essa <span style={{ color: "#FFD166" }}>chance</span>. É{" "}
                <span style={{ color: "#FFD166" }}>simples</span>, <span style={{ color: "#FFD166" }}>acessível</span> e{" "}
                <span style={{ color: "#FFD166" }}>funciona</span>. Basta dar o primeiro passo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-2 text-center bg-black/80 backdrop-blur-sm">
        <p className="text-gray-400">
          <span className="text-gray-500 font-bold">©</span>
          <span className="font-bold text-[#efbf04]"> @tocaa.ai</span>
          <span> - Todos os Direitos Reservados</span>
        </p>
      </footer>
    </div>
  )
}
