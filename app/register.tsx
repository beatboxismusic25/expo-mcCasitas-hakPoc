import { Ionicons } from '@expo/vector-icons';
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

export default function RegisterScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = useCallback(() => {
    if (!name.trim() || !email.trim() || !password) {
      Alert.alert('Datos incompletos', 'Nombre, correo y contraseña son obligatorios.');
      return;
    }
    Alert.alert('Demo', 'Aquí registrarías al usuario.');
  }, [name, email, password]);

  const openLegal = useCallback((kind: 'terms' | 'privacy') => {
    Alert.alert(kind === 'terms' ? 'Términos' : 'Privacidad', 'Enlace legal (demo).');
  }, []);

  return (
    <View className="flex-1 bg-black/55" style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        className="flex-1"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 24}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerClassName="flex-grow px-4 py-6 sm:px-6">
          <View className="relative mx-auto w-full max-w-md pb-8">
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
                <Text className="mt-5 text-center font-heading text-2xl text-ink-1">Crear cuenta</Text>
                <Text className="mt-2 text-center font-sans text-base text-ink-2">
                  Únete a nuestra comunidad de donantes
                </Text>
              </View>

              <View className="gap-4">
                <AuthTextField
                  label="Nombre completo"
                  icon="person-outline"
                  placeholder="Juan Pérez"
                  autoCapitalize="words"
                  value={name}
                  onChangeText={setName}
                />
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
                      autoComplete="password-new"
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

                <AuthTextField
                  label="Teléfono"
                  icon="call-outline"
                  placeholder="123-456-7890"
                  keyboardType="phone-pad"
                  value={phone}
                  onChangeText={setPhone}
                />
                <AuthTextField
                  label="Dirección"
                  icon="location-outline"
                  placeholder="Calle 123, Ciudad"
                  value={address}
                  onChangeText={setAddress}
                  autoCapitalize="sentences"
                />

                <Pressable
                  accessibilityRole="button"
                  onPress={onSubmit}
                  className="mt-2 rounded-2xl bg-mc-orange py-3.5 active:opacity-95">
                  <Text className="text-center font-sans text-base font-bold text-white">Crear cuenta</Text>
                </Pressable>

                <View className="mt-4 flex-row flex-wrap items-center justify-center gap-1">
                  <Text className="font-sans text-sm text-mist-2">¿Ya tienes una cuenta?</Text>
                  <Link href="/login" asChild>
                    <Pressable accessibilityRole="link" hitSlop={8}>
                      <Text className="font-sans text-sm font-semibold text-mc-orange">Inicia sesión</Text>
                    </Pressable>
                  </Link>
                </View>

                <Text className="mt-4 text-center font-sans text-xs leading-relaxed text-mist-2">
                  Al crear una cuenta, aceptas nuestros{' '}
                  <Text
                    className="font-semibold text-mc-red underline"
                    onPress={() => openLegal('terms')}
                    accessibilityRole="link">
                    Términos y Condiciones
                  </Text>{' '}
                  y{' '}
                  <Text
                    className="font-semibold text-mc-red underline"
                    onPress={() => openLegal('privacy')}
                    accessibilityRole="link">
                    Política de Privacidad
                  </Text>
                  .
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
