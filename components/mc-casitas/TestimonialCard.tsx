import { Image } from 'expo-image';
import { Text, View, type ViewProps } from 'react-native';

import { cn } from '@/lib/utils';

export interface TestimonialCardProps extends ViewProps {
  familyName: string;
  quote: string;
  imageUri: string;
  imageAccessibilityLabel: string;
}

export function TestimonialCard({
  familyName,
  quote,
  imageUri,
  imageAccessibilityLabel,
  className,
  ...rest
}: TestimonialCardProps) {
  return (
    <View
      className={cn('flex-1 overflow-hidden rounded-2xl border border-mist-4 bg-white shadow-sm', className)}
      accessibilityRole="none"
      accessibilityLabel={`Testimonio de ${familyName}`}
      {...rest}>
      <Image
        source={{ uri: imageUri }}
        contentFit="cover"
        className="h-48 w-full sm:h-56"
        accessibilityLabel={imageAccessibilityLabel}
      />
      <View className="p-6">
        <Text className="font-heading text-lg text-ink-1">{familyName}</Text>
        <Text className="mt-3 font-sans text-base italic leading-relaxed text-ink-2">{quote}</Text>
      </View>
    </View>
  );
}
