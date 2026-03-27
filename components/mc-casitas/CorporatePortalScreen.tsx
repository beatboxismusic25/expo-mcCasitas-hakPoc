import { Ionicons } from '@expo/vector-icons';
import { Alert, Pressable, ScrollView, Text, View } from 'react-native';

import { PORTAL_KPIS, PORTAL_TRACEABILITY } from '@/constants/portal-data';

import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { KpiCard } from './portal/KpiCard';
import { PortalImpactCta } from './portal/PortalImpactCta';
import { TraceabilityBar } from './portal/TraceabilityBar';

export function CorporatePortalScreen() {
  return (
    <View className="min-h-full flex-1 bg-mc-portalBg">
      <Navbar />
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        accessibilityLabel="Portal de donante corporativo">
        <View className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <View className="flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <View className="flex-row items-center gap-3">
              <View className="rounded-xl bg-mc-red/10 p-2.5">
                <Ionicons name="business" size={28} color="#e0301e" />
              </View>
              <View>
                <Text className="font-heading text-xl text-ink-1 sm:text-2xl">
                  Portal de Donante Corporativo
                </Text>
                <Text className="mt-0.5 font-sans text-sm text-ink-2">
                  Resumen de impacto y trazabilidad
                </Text>
              </View>
            </View>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Descargar reporte anual"
              onPress={() => Alert.alert('Reporte', 'Descarga del PDF anual (demo).')}
              className="flex-row items-center justify-center gap-2 self-start rounded-xl border-2 border-mist-3 bg-white px-4 py-3 active:bg-mist-5 sm:self-auto">
              <Ionicons name="download-outline" size={20} color="#1D1D1D" />
              <Text className="font-sans text-sm font-semibold text-ink-1">Descargar reporte anual</Text>
            </Pressable>
          </View>

          <View className="mt-8 flex-col gap-4 sm:flex-row">
            {PORTAL_KPIS.map((kpi) => (
              <KpiCard key={kpi.id} kpi={kpi} />
            ))}
          </View>

          <View className="mt-10 rounded-2xl border border-mist-4 bg-white p-6 shadow-sm sm:p-8">
            <Text className="font-heading text-xl text-ink-1 sm:text-2xl">Trazabilidad de fondos</Text>
            <Text className="mt-1 font-sans text-sm text-ink-2">
              Distribución transparente de tus donaciones
            </Text>
            <View className="mt-6 gap-6">
              {PORTAL_TRACEABILITY.map((row) => (
                <TraceabilityBar key={row.id} row={row} />
              ))}
            </View>
            <View className="mt-8 flex-row items-start gap-3 rounded-xl bg-mist-5 px-4 py-3">
              <Ionicons name="checkmark-circle" size={22} color="#16a34a" />
              <Text className="flex-1 font-sans text-sm leading-relaxed text-ink-2">
                <Text className="font-semibold text-emerald-700">100% transparencia</Text>
                {' — '}
                Cada peso donado es rastreado y reportado.
              </Text>
            </View>
          </View>
        </View>

        <PortalImpactCta />
        <Footer />
      </ScrollView>
    </View>
  );
}
