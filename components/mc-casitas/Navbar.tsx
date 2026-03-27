import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useCallback, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { cn } from '@/lib/utils';

import { LogoMark } from './LogoMark';

export function Navbar() {
  const insets = useSafeAreaInsets();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <View
      className="border-b border-mist-4 bg-white"
      style={{ paddingTop: insets.top }}
      accessibilityRole="header">
      <View className="mx-auto w-full max-w-7xl flex-row items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <LogoMark />

        <View className="hidden flex-row flex-wrap items-center justify-end gap-2 sm:flex sm:gap-3 lg:gap-4">
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Seleccionar idioma"
            className="rounded-full p-2 active:bg-mist-5">
            <Ionicons name="globe-outline" size={22} color="#1D1D1D" />
          </Pressable>

          <Link href="/" asChild>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Ir a inicio"
              className="flex-row items-center gap-1.5 rounded-full bg-mc-red px-4 py-2 active:opacity-90">
              <Ionicons name="heart" size={16} color="#FAFAFA" />
              <Text className="font-sans text-sm font-semibold text-paper">Inicio</Text>
            </Pressable>
          </Link>

          <Link href="/portal" asChild>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Portal corporativo"
              className="flex-row items-center gap-1.5 rounded-lg px-2 py-2 active:bg-mist-5">
              <Ionicons name="business-outline" size={20} color="#1D1D1D" />
              <Text className="font-sans text-sm font-medium text-ink-2">Portal corporativo</Text>
            </Pressable>
          </Link>

          <Pressable accessibilityRole="button" className="rounded-lg px-2 py-2 active:bg-mist-5">
            <Text className="font-sans text-sm font-medium text-ink-2">Familias</Text>
          </Pressable>

          <Link href="/login" asChild>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Iniciar sesión"
              className="rounded-lg px-2 py-2 active:bg-mist-5">
              <Text className="font-sans text-sm font-semibold text-mc-red">Iniciar sesión</Text>
            </Pressable>
          </Link>
        </View>

        <Pressable
          className={cn('rounded-full p-2 active:bg-mist-5 sm:hidden')}
          accessibilityLabel={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          accessibilityState={{ expanded: menuOpen }}
          onPress={() => setMenuOpen((o) => !o)}>
          <Ionicons name={menuOpen ? 'close' : 'menu-outline'} size={26} color="#111010" />
        </Pressable>
      </View>

      {menuOpen ? (
        <View className="border-b border-mist-4 bg-white px-4 py-3 sm:hidden">
          <Link href="/" asChild>
            <Pressable
              className="flex-row items-center gap-2 rounded-full bg-mc-red px-4 py-3 active:opacity-90"
              onPress={closeMenu}
              accessibilityRole="button"
              accessibilityLabel="Inicio">
              <Ionicons name="heart" size={18} color="#FAFAFA" />
              <Text className="font-sans font-semibold text-paper">Inicio</Text>
            </Pressable>
          </Link>
          <Link href="/portal" asChild>
            <Pressable className="mt-2 flex-row items-center gap-2 py-3 active:bg-mist-5" onPress={closeMenu}>
              <Ionicons name="business-outline" size={20} color="#1D1D1D" />
              <Text className="font-sans text-ink-2">Portal corporativo</Text>
            </Pressable>
          </Link>
          <Pressable className="py-3 active:bg-mist-5" onPress={closeMenu}>
            <Text className="font-sans text-ink-2">Familias</Text>
          </Pressable>
          <Link href="/login" asChild>
            <Pressable className="py-3 active:bg-mist-5" onPress={closeMenu} accessibilityRole="link">
              <Text className="font-sans font-semibold text-mc-red">Iniciar sesión</Text>
            </Pressable>
          </Link>
        </View>
      ) : null}
    </View>
  );
}
