import { Ionicons } from '@expo/vector-icons';
import type { ComponentProps } from 'react';
import { Text, View, type ViewProps } from 'react-native';

import { cn } from '@/lib/utils';

type IonIcon = ComponentProps<typeof Ionicons>['name'];

export interface MissionCardProps extends ViewProps {
  title: string;
  description: string;
  icon: IonIcon;
  iconBackgroundClassName: string;
}

export function MissionCard({
  title,
  description,
  icon,
  iconBackgroundClassName,
  className,
  ...rest
}: MissionCardProps) {
  return (
    <View
      className={cn(
        'flex-1 rounded-2xl border border-mist-4 bg-white p-6 shadow-sm',
        className,
      )}
      accessibilityRole="summary"
      accessibilityLabel={`${title}. ${description}`}
      {...rest}>
      <View className="mb-4 flex-row justify-end">
        <View className={cn('rounded-xl p-2.5', iconBackgroundClassName)}>
          <Ionicons
            name={icon}
            size={22}
            color={iconBackgroundClassName.includes('yellow') ? '#111010' : '#FAFAFA'}
          />
        </View>
      </View>
      <Text className="font-heading text-xl text-ink-1">{title}</Text>
      <Text className="mt-2 font-sans text-base leading-relaxed text-ink-2">{description}</Text>
    </View>
  );
}
