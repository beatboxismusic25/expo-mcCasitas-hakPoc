import type { PortalKpi } from '@/constants/portal-data';
import { Text, View, type ViewProps } from 'react-native';

import { cn } from '@/lib/utils';

export type KpiCardProps = ViewProps & {
  kpi: PortalKpi;
};

export function KpiCard({ kpi, className, ...rest }: KpiCardProps) {
  return (
    <View
      className={cn(
        'flex-1 rounded-2xl border-2 bg-white p-5 shadow-sm',
        kpi.borderClassName,
        className,
      )}
      accessibilityRole="summary"
      accessibilityLabel={`${kpi.title}: ${kpi.value}. ${kpi.sublabel}`}
      {...rest}>
      <Text className="font-sans text-sm font-semibold text-ink-2">{kpi.title}</Text>
      <Text className={cn('mt-2 font-heading text-3xl', kpi.valueClassName)}>{kpi.value}</Text>
      <Text className="mt-2 font-sans text-xs text-mist-2">{kpi.sublabel}</Text>
    </View>
  );
}
