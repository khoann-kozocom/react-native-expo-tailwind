import { COLORS } from '@/config';
import * as React from 'react';
import { TextInput as RNTextInput, View } from 'react-native';
import { Text } from './Text';

export const Input = React.forwardRef((props, ref) => {
  const { label, error, ...inputProps } = props;

  const [isFocussed, setIsFocussed] = React.useState(false);
  const onBlur = React.useCallback(() => setIsFocussed(false), []);
  const onFocus = React.useCallback(() => setIsFocussed(true), []);

  const borderColor = error
    ? 'border-danger-600'
    : isFocussed
    ? 'border-neutral-600'
    : 'border-neutral-400';

  const bgColor = error ? 'bg-danger-50' : 'bg-neutral-200';

  return (
    <View className="mb-4">
      {label && (
        <Text variant="md" className={error ? 'text-danger-600' : 'text-black'}>
          {label}
        </Text>
      )}
      <RNTextInput
        testID="RNTextInput"
        ref={ref}
        placeholderTextColor={COLORS.PRIMARY}
        className={`mt-0 border-[1px] py-4 px-2  ${borderColor} rounded-md ${bgColor} text-[16px]`}
        onBlur={onBlur}
        onFocus={onFocus}
        {...inputProps}
      />
      {error && <Text variant="error">{error}</Text>}
    </View>
  );
});
