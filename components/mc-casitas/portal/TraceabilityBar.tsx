import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import type { PortalTraceRow } from '@/constants/portal-data';

export type TraceabilityBarProps = {
  row: PortalTraceRow;
};

/**
 * Barra horizontal dinámica: el ancho viene de `row.percent` (0–100).
 * Sin librerías extra; compatible con iOS, Android y web.
 */
export function TraceabilityBar({ row }: TraceabilityBarProps) {
  const pct = Math.max(0, Math.min(100, row.percent));

  return (
    <View className="gap-2">
      <View className="flex-row items-center gap-2">
        <View className="rounded-lg bg-mist-5 p-2">
          <Ionicons name={row.icon} size={20} color="#1D1D1D" />
        </View>
        <Text className="flex-1 font-sans text-sm font-semibold text-ink-1">{row.label}</Text>
        <Text className="font-heading text-sm text-ink-2">{pct}%</Text>
      </View>
      <View className="h-3 w-full overflow-hidden rounded-full bg-mist-4">
        <View
          style={{
            width: `${pct}%`,
            height: '100%',
            borderRadius: 9999,
            backgroundColor: row.fillColor,
          }}
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
        />
      </View>
    </View>
  );
}
