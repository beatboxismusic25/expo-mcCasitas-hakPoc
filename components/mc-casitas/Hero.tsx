import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';

const HERO_IMAGE = require('@/assets/images/hero.png');

export function Hero() {
  return (
    <View className="bg-mc-cream">
      <View className="mx-auto w-full max-w-7xl flex-col gap-10 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:gap-12 lg:px-8 lg:py-16">
        <View className="flex-1 gap-6">
          <Text className="font-heading text-3xl leading-tight text-ink-1 sm:text-4xl lg:text-5xl">
            Un hogar cerca del{' '}
            <Text className="text-mc-red" accessibilityRole="text">
              hospital
            </Text>
          </Text>
          <Text className="font-sans text-base leading-relaxed text-ink-2 sm:text-lg">
            Acompañamos a familias con niños y niñas en tratamiento médico con hospedaje digno, cercano
            al hospital y el calor humano que necesitan en el camino.
          </Text>
          <View className="flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Donar ahora"
              className="items-center justify-center rounded-xl bg-mc-red px-6 py-3.5 active:opacity-90">
              <Text className="font-sans text-base font-semibold text-paper">Donar ahora</Text>
            </Pressable>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Conocer a las familias"
              className="items-center justify-center rounded-xl border-2 border-mc-red bg-white px-6 py-3.5 active:bg-mist-5">
              <Text className="font-sans text-base font-semibold text-mc-red">Conoce a las familias</Text>
            </Pressable>
          </View>
        </View>

        <View className="h-64 w-full flex-1 overflow-hidden rounded-2xl bg-mist-4 shadow-sm sm:h-80 lg:h-[420px]">
          <Image
            source={HERO_IMAGE}
            contentFit="cover"
            transition={300}
            style={{ width: '100%', height: '100%' }}
            accessibilityLabel="Edificio moderno de apoyo a familias"
          />
        </View>
      </View>
    </View>
  );
}
