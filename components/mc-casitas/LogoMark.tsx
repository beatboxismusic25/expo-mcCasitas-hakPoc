import { Image } from 'expo-image';
import { View, type ViewProps } from 'react-native';

import { cn } from '@/lib/utils';

/** Mismo asset que en diseño; Metro lo trata como recurso (funciona en web, iOS y Android). */
const logoAsset = require('@/assets/images/mcCasitasLogo.svg');

/** viewBox del SVG: 732×584 */
const LOGO_ASPECT = 732 / 584;
const HEIGHT_NAV = 44;
const HEIGHT_FOOTER = 52;

export type LogoMarkProps = ViewProps & {
  variant?: 'default' | 'footer';
};

export function LogoMark({ variant = 'default', className, ...rest }: LogoMarkProps) {
  const height = variant === 'footer' ? HEIGHT_FOOTER : HEIGHT_NAV;
  const width = height * LOGO_ASPECT;

  return (
    <View
      className={cn(className)}
      accessibilityRole="image"
      accessibilityLabel="McCasitas Felices, logotipo"
      {...rest}>
      <Image
        source={logoAsset}
        style={{ width, height }}
        contentFit="contain"
        accessibilityIgnoresInvertColors
      />
    </View>
  );
}
