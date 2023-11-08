import React from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { Text } from './Text';

export const buttonVariants = {
  defaults: {
    container:
      'flex-row items-center justify-center rounded-full px-12 py-3 my-2',
    label: 'text-[16px] font-medium text-white',
    indicator: 'text-white h-[30px]',
  },
  primary: {
    container: 'bg-red-500',
    label: '',
    indicator: 'text-white',
  },
  secondary: {
    container: 'bg-primary-600',
    label: 'text-secondary-600',
    indicator: 'text-white',
  },
  outline: {
    container: 'border border-neutral-400',
    label: 'text-black',
    indicator: 'text-black',
  },
};

export const Button = ({
  label,
  loading = false,
  variant = 'primary',
  disabled = false,
  ...props
}) => {
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      className={`
        ${buttonVariants.defaults.container}
        ${buttonVariants[variant].container}
        ${disabled ? 'opacity-50' : ''}
      `}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          className={`
            ${buttonVariants.defaults.indicator}
            ${buttonVariants[variant].indicator}
          `}
        />
      ) : (
        <Text
          className={`
            ${buttonVariants.defaults.label}
            ${buttonVariants[variant].label}
          `}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};
