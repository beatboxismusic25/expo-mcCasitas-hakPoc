import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

import { MC_CONTACT } from '@/constants/mc-casitas';

import { LogoMark } from './LogoMark';

const FOOTER_LINKS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'portal', label: 'Portal corporativo' },
  { id: 'apadrina', label: 'Apadrina un momento' },
  { id: 'familias', label: 'Familias apoyadas' },
] as const;

export function Footer() {
  return (
    <View className="bg-mc-dark pb-10 pt-12">
      <View className="mx-auto w-full max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
        <View className="max-w-sm flex-1 gap-4">
          <LogoMark variant="footer" />
          <Text className="font-sans text-sm leading-relaxed text-mist-3">
            Hogar cerca del hospital para familias que enfrentan tratamientos médicos. Unidos por la
            dignidad y la esperanza.
          </Text>
        </View>

        <View className="flex-1 gap-3 lg:max-w-xs">
          <Text className="font-heading text-base text-paper">Enlaces rápidos</Text>
          {FOOTER_LINKS.map((item) => (
            <Pressable
              key={item.id}
              accessibilityRole="button"
              accessibilityLabel={item.label}
              className="py-1 active:opacity-80">
              <Text className="font-sans text-sm text-mist-3">{item.label}</Text>
            </Pressable>
          ))}
          <Link href="/explore" asChild>
            <Pressable accessibilityRole="link" className="py-1 active:opacity-80">
              <Text className="font-sans text-sm font-semibold text-mc-yellow">Explorar app (demo)</Text>
            </Pressable>
          </Link>
        </View>

        <View className="flex-1 gap-4 lg:max-w-xs">
          <Text className="font-heading text-base text-paper">Contacto</Text>
          <View className="flex-row gap-3">
            <Ionicons name="location-outline" size={20} color="#CECECE" />
            <Text className="flex-1 font-sans text-sm text-mist-3">{MC_CONTACT.address}</Text>
          </View>
          <View className="flex-row gap-3">
            <Ionicons name="call-outline" size={20} color="#CECECE" />
            <Text className="flex-1 font-sans text-sm text-mist-3">{MC_CONTACT.phone}</Text>
          </View>
          <View className="flex-row gap-3">
            <Ionicons name="mail-outline" size={20} color="#CECECE" />
            <Text className="flex-1 font-sans text-sm text-mist-3">{MC_CONTACT.email}</Text>
          </View>
        </View>
      </View>

      <View className="mx-auto mt-10 w-full max-w-7xl border-t border-white/10 px-4 pt-6 sm:px-6 lg:px-8">
        <View className="flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Text className="font-sans text-xs text-mist-2">
            © {new Date().getFullYear()} McCasitas Felices. Todos los derechos reservados.
          </Text>
          <View className="flex-row flex-wrap gap-x-4 gap-y-2">
            <Pressable accessibilityRole="button">
              <Text className="font-sans text-xs text-mist-3">Aviso de privacidad</Text>
            </Pressable>
            <Pressable accessibilityRole="button">
              <Text className="font-sans text-xs text-mist-3">Términos</Text>
            </Pressable>
            <Pressable accessibilityRole="button">
              <Text className="font-sans text-xs text-mist-3">Política de cookies</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
