import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

const GRADIENT_COLORS = ['#e0301e', '#ffc72c'] as const;

export function CtaBanner() {
  return (
    <View className="px-4 py-10 sm:px-6 lg:px-8">
      <View className="mx-auto w-full max-w-7xl overflow-hidden rounded-2xl shadow-md">
        <LinearGradient
          colors={[...GRADIENT_COLORS]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          accessibilityRole="summary"
          accessibilityLabel="Llamado a la acción: tu donación cambia vidas">
          <View className="items-center px-6 py-12 sm:py-14">
            <Text className="text-center font-heading text-2xl text-white sm:text-3xl lg:text-4xl">
              Tu donación cambia vidas
            </Text>
            <Text className="mt-3 max-w-xl text-center font-sans text-base text-white/95 sm:text-lg">
              Cada aporte se convierte en noches de hospedaje, traslados y acompañamiento real para
              quien más lo necesita.
            </Text>
            <Link href="/portal" asChild>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Ir al portal corporativo"
                className="mt-8 flex-row items-center gap-2 rounded-xl bg-white px-6 py-3.5 active:opacity-90">
                <Ionicons name="folder-outline" size={20} color="#e0301e" />
                <Text className="font-sans text-base font-semibold text-mc-red">Portal corporativo</Text>
              </Pressable>
            </Link>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}
