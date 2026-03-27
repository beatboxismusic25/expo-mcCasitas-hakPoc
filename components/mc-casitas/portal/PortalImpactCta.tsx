import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Alert, Pressable, Text, View } from 'react-native';

const GRADIENT = ['#ff5500', '#ffc72c'] as const;

export function PortalImpactCta() {
  return (
    <View className="px-4 py-8 sm:px-6 lg:px-8">
      <View className="mx-auto w-full max-w-7xl overflow-hidden rounded-2xl shadow-md">
        <LinearGradient colors={[...GRADIENT]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
          <View className="flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <Text className="max-w-xl flex-1 font-sans text-base leading-relaxed text-white sm:text-lg">
              ¿Quieres aumentar tu impacto? Considera incrementar tu aportación mensual o crear una
              campaña especial.
            </Text>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Conectar a nuestro equipo"
              onPress={() => Alert.alert('Contacto', 'Aquí abrirías mail, Calendly o WhatsApp.')}
              className="shrink-0 flex-row items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 active:opacity-90">
              <Ionicons name="chatbubbles-outline" size={20} color="#ff5500" />
              <Text className="font-sans text-base font-semibold text-mc-orange">
                Conectar a nuestro equipo
              </Text>
            </Pressable>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}
