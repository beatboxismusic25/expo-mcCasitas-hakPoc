import React from 'react';
import { Text, View } from 'react-native';

import { cn } from '@/lib/utils';

export interface StatItemProps {
  value: string;
  label: string;
  accentClassName: string;
}

export const StatItem = React.memo(function StatItem({
  value,
  label,
  accentClassName,
}: StatItemProps) {
  return (
    <View className="min-w-[45%] flex-1 items-center px-2 py-3 sm:min-w-0">
      <Text
        className={cn('font-heading text-3xl sm:text-4xl', accentClassName)}
        accessibilityRole="header">
        {value}
      </Text>
      <Text className="mt-1 text-center font-sans text-sm text-ink-2">{label}</Text>
    </View>
  );
});
