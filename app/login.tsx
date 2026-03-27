import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Link, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AuthTextField } from '@/components/mc-casitas/auth/AuthTextField';
import { LogoMark } from '@/components/mc-casitas/LogoMark';

const GRADIENT = ['#e0301e', '#ff8800'] as const;

export default function LoginScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = useCallback(() => {
    if (!email.trim() || !password) {
      Alert.alert('Datos incompletos', 'Introduce correo y contraseña.');
      return;
    }
    Alert.alert('Demo', 'Aquí conectarías tu flujo de autenticación.');
  }, [email, password]);

  return (
    <View className="flex-1 bg-black/55" style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        className="flex-1"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 24}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerClassName="min-h-full flex-grow justify-center px-4 py-6 sm:px-6">
          <View className="relative mx-auto w-full max-w-md">
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Cerrar"
              onPress={() => router.back()}
              className="absolute right-0 top-0 z-10 rounded-full bg-mist-5 p-2 active:opacity-80"
              hitSlop={12}>
              <Ionicons name="close" size={22} color="#8D8D8D" />
            </Pressable>

            <View className="rounded-3xl bg-white px-5 pb-8 pt-10 shadow-xl sm:px-8">
              <View className="mb-6 items-center">
                <View className="rounded-2xl bg-white p-2 shadow-md">
                  <LogoMark compact />
                </View>
                <Text className="mt-5 text-center font-heading text-2xl text-ink-1">Iniciar sesión</Text>
                <Text className="mt-2 text-center font-sans text-base text-ink-2">
                  Accede a tu portal de donante
                </Text>
              </View>

              <View className="gap-4">
                <AuthTextField
                  label="Correo electrónico"
                  icon="mail-outline"
                  placeholder="correo@ejemplo.com"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoComplete="email"
                  value={email}
                  onChangeText={setEmail}
                />

                <View className="gap-1.5">
                  <Text className="font-sans text-sm font-semibold text-ink-1">Contraseña</Text>
                  <View className="flex-row items-center gap-2 rounded-xl bg-mc-input px-3 py-0.5">
                    <Ionicons name="lock-closed-outline" size={20} color="#8D8D8D" />
                    <TextInput
                      className="min-h-[48px] flex-1 py-3 font-sans text-base text-ink-1 placeholder:text-mist-2"
                      placeholder="••••••"
                      placeholderTextColor="#8D8D8D"
                      secureTextEntry={!showPassword}
                      value={password}
                      onChangeText={setPassword}
                      autoComplete="password"
                      accessibilityLabel="Contraseña"
                    />
                    <Pressable
                      accessibilityRole="button"
                      accessibilityLabel={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                      onPress={() => setShowPassword((s) => !s)}
                      className="p-1">
                      <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={22} color="#8D8D8D" />
                    </Pressable>
                  </View>
                </View>

                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel="¿Olvidaste la contraseña?"
                  className="self-end py-1 active:opacity-80"
                  onPress={() => Alert.alert('Recuperación', 'Flujo de recuperación (demo).')}>
                  <Text className="font-sans text-sm font-medium text-mc-red">¿Olvidaste la contraseña?</Text>
                </Pressable>

                <Pressable accessibilityRole="button" onPress={onSubmit} className="mt-2 overflow-hidden rounded-2xl active:opacity-95">
                  <LinearGradient colors={[...GRADIENT]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                    <Text className="py-3.5 text-center font-sans text-base font-bold text-white">
                      Iniciar sesión
                    </Text>
                  </LinearGradient>
                </Pressable>

                <View className="mt-4 flex-row flex-wrap items-center justify-center gap-1">
                  <Text className="font-sans text-sm text-mist-2">¿No tienes cuenta?</Text>
                  <Link href="/register" asChild>
                    <Pressable accessibilityRole="link" hitSlop={8}>
                      <Text className="font-sans text-sm font-semibold text-mc-red">Regístrate</Text>
                    </Pressable>
                  </Link>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
