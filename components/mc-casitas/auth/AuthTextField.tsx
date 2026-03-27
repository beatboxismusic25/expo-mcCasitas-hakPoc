import { Ionicons } from '@expo/vector-icons';
import type { ComponentProps } from 'react';
import { Text, TextInput, View, type TextInputProps } from 'react-native';

import { cn } from '@/lib/utils';

type Ion = ComponentProps<typeof Ionicons>['name'];

export type AuthTextFieldProps = TextInputProps & {
  label: string;
  icon: Ion;
  containerClassName?: string;
};

export function AuthTextField({
  label,
  icon,
  containerClassName,
  className,
  ...inputProps
}: AuthTextFieldProps) {
  return (
    <View className={cn('gap-1.5', containerClassName)}>
      <Text className="font-sans text-sm font-semibold text-ink-1">{label}</Text>
      <View className="flex-row items-center gap-2 rounded-xl bg-mc-input px-3 py-0.5">
        <Ionicons name={icon} size={20} color="#8D8D8D" />
        <TextInput
          className={cn(
            'min-h-[48px] flex-1 py-3 font-sans text-base text-ink-1 placeholder:text-mist-2',
            className,
          )}
          placeholderTextColor="#8D8D8D"
          accessibilityLabel={label}
          {...inputProps}
        />
      </View>
    </View>
  );
}
