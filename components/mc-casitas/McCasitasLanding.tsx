import { ScrollView, Text, View } from 'react-native';

import { MC_MISSION_CARDS, MC_STATS, MC_TESTIMONIALS } from '@/constants/mc-casitas';

import { CtaBanner } from './CtaBanner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { MissionCard } from './MissionCard';
import { Navbar } from './Navbar';
import { StatItem } from './StatItem';
import { TestimonialCard } from './TestimonialCard';

export function McCasitasLanding() {
  return (
    <View className="min-h-full flex-1 bg-white">
      <Navbar />
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        accessibilityLabel="Contenido principal McCasitas Felices">
        <Hero />

        <View className="border-y border-mist-4 bg-white">
          <View className="mx-auto w-full max-w-7xl flex-row flex-wrap px-4 py-8 sm:px-6 lg:px-8">
            {MC_STATS.map((s) => (
              <StatItem key={s.id} value={s.value} label={s.label} accentClassName={s.accent} />
            ))}
          </View>
        </View>

        <View nativeID="mision" className="bg-paper px-4 py-14 sm:px-6 lg:px-8">
          <View className="mx-auto w-full max-w-7xl">
            <Text className="text-center font-heading text-3xl text-ink-1 sm:text-4xl">
              Nuestra misión
            </Text>
            <Text className="mx-auto mt-4 max-w-2xl text-center font-sans text-base leading-relaxed text-ink-2">
              Acercar el hogar al hospital: descanso, contención y transparencia para cada familia que
              confía en nosotros.
            </Text>
            <View className="mt-10 flex-col gap-6 lg:flex-row">
              {MC_MISSION_CARDS.map((card) => (
                <MissionCard
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  iconBackgroundClassName={card.iconBg}
                />
              ))}
            </View>
          </View>
        </View>

        <CtaBanner />

        <View nativeID="familias" className="bg-white px-4 pb-16 pt-4 sm:px-6 lg:px-8">
          <View className="mx-auto w-full max-w-7xl">
            <Text className="text-center font-heading text-3xl text-ink-1 sm:text-4xl">
              Familias apadrinadas
            </Text>
            <Text className="mx-auto mt-4 max-w-2xl text-center font-sans text-base text-ink-2">
              Historias reales de quienes encontraron un refugio y una comunidad que camina con ellos.
            </Text>
            <View className="mt-10 flex-col gap-6 lg:flex-row">
              {MC_TESTIMONIALS.map((t) => (
                <TestimonialCard
                  key={t.id}
                  familyName={t.familyName}
                  quote={t.quote}
                  imageUri={t.imageUri}
                  imageAccessibilityLabel={t.imageHint}
                />
              ))}
            </View>
          </View>
        </View>

        <Footer />
      </ScrollView>
    </View>
  );
}
